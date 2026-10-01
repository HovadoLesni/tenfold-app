const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('tenfoldAPI', {
  listUsers: () => ipcRenderer.invoke('list-users'),
  createUser: (name) => ipcRenderer.invoke('create-user', name),
  getHistory: (name) => ipcRenderer.invoke('get-history', name),
  addSession: (name, record) => ipcRenderer.invoke('add-session', name, record),
  getSettings: (name) => ipcRenderer.invoke('get-settings', name),
  saveSettings: (name, settings) => ipcRenderer.invoke('save-settings', name, settings),
  getCustomText: (name) => ipcRenderer.invoke('get-custom-text', name),
  saveCustomText: (name, text) => ipcRenderer.invoke('save-custom-text', name, text),
  importTextFile: () => ipcRenderer.invoke('import-text-file')
});
