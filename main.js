const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

// All user data lives in a plain, human-readable folder in the app's
// per-user data directory (e.g. %APPDATA%\Tenfold\data on Windows).
// NOTE: this must NOT be a path relative to __dirname/main.js — once the
// app is packaged, those files live inside app.asar, which is a read-only
// archive, not a real folder, so writing there fails.
let DATA_DIR, USERS_FILE, USERS_DIR;

function initPaths() {
  DATA_DIR = path.join(app.getPath('userData'), 'data');
  USERS_FILE = path.join(DATA_DIR, 'users.json');
  USERS_DIR = path.join(DATA_DIR, 'users');
}

function ensureDataDirs() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(USERS_DIR)) fs.mkdirSync(USERS_DIR, { recursive: true });
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]', 'utf-8');
}

function readUsers() {
  ensureDataDirs();
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
  } catch (e) {
    return [];
  }
}

function writeUsers(list) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(list, null, 2), 'utf-8');
}

function safeFileName(name) {
  return name.trim().replace(/[^a-zA-Z0-9_\- ]/g, '_');
}

function userFilePath(name) {
  return path.join(USERS_DIR, `${safeFileName(name)}.json`);
}

function readUserData(name) {
  const file = userFilePath(name);
  if (!fs.existsSync(file)) return { history: [], settings: {}, customText: '' };
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
    if (!Array.isArray(data.history)) data.history = [];
    if (!data.settings || typeof data.settings !== 'object') data.settings = {};
    if (typeof data.customText !== 'string') data.customText = '';
    return data;
  } catch (e) {
    return { history: [], settings: {}, customText: '' };
  }
}

function writeUserData(name, data) {
  fs.writeFileSync(userFilePath(name), JSON.stringify(data, null, 2), 'utf-8');
}

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 920,
    minWidth: 720,
    minHeight: 640,
    backgroundColor: '#14161b',
    title: 'Tenfold — Touch Typing Trainer',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));
  mainWindow.on('closed', () => { mainWindow = null; });
}

// Prevent multiple instances: if the app is already running, focus that
// window instead of silently launching another background copy.
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

app.whenReady().then(() => {
  initPaths();
  try {
    ensureDataDirs();
  } catch (e) {
    console.error('Failed to set up data folder:', e);
  }
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

/* ---------------- IPC: multi-user data access ---------------- */

ipcMain.handle('list-users', () => {
  return readUsers();
});

ipcMain.handle('create-user', (_event, rawName) => {
  const name = (rawName || '').trim();
  if (!name) throw new Error('Name is required.');
  if (name.length > 24) throw new Error('Name is too long.');

  const users = readUsers();
  const exists = users.some(u => u.toLowerCase() === name.toLowerCase());
  if (!exists) {
    users.push(name);
    writeUsers(users);
    writeUserData(name, { history: [], settings: {}, customText: '' });
  }
  return readUsers();
});

ipcMain.handle('get-history', (_event, name) => {
  if (!name) return [];
  return readUserData(name).history;
});

ipcMain.handle('add-session', (_event, name, record) => {
  if (!name) return [];
  const data = readUserData(name);
  data.history.push(record);
  if (data.history.length > 1000) data.history = data.history.slice(-1000);
  writeUserData(name, data);
  return data.history;
});

ipcMain.handle('get-settings', (_event, name) => {
  if (!name) return {};
  return readUserData(name).settings;
});

ipcMain.handle('save-settings', (_event, name, settings) => {
  if (!name) return {};
  const data = readUserData(name);
  data.settings = Object.assign({}, data.settings, settings || {});
  writeUserData(name, data);
  return data.settings;
});

const MAX_CUSTOM_TEXT_LEN = 10000;

ipcMain.handle('get-custom-text', (_event, name) => {
  if (!name) return '';
  return readUserData(name).customText || '';
});

ipcMain.handle('save-custom-text', (_event, name, text) => {
  if (!name) return '';
  const data = readUserData(name);
  data.customText = (text || '').slice(0, MAX_CUSTOM_TEXT_LEN);
  writeUserData(name, data);
  return data.customText;
});

// Lets the user pick a local .txt/.md file to import as practice text,
// instead of only being able to paste it in.
ipcMain.handle('import-text-file', async () => {
  const win = BrowserWindow.getFocusedWindow();
  const result = await dialog.showOpenDialog(win, {
    title: 'Import text',
    properties: ['openFile'],
    filters: [
      { name: 'Text files', extensions: ['txt', 'md'] },
      { name: 'All files', extensions: ['*'] }
    ]
  });
  if (result.canceled || !result.filePaths.length) return null;
  const filePath = result.filePaths[0];
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      text: content.slice(0, MAX_CUSTOM_TEXT_LEN),
      fileName: path.basename(filePath)
    };
  } catch (e) {
    return null;
  }
});
