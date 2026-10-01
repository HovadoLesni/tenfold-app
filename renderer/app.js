
/* ---------------- Keyboard layout ---------------- */
const KEYBOARD_ROWS = [
  [{k:'`'},{k:'1'},{k:'2'},{k:'3'},{k:'4'},{k:'5'},{k:'6'},{k:'7'},{k:'8'},{k:'9'},{k:'0'},{k:'-'},{k:'=' },{k:'⌫',w:'wide-2'}],
  [{k:'Tab',w:'wide-1_5'},{k:'q'},{k:'w'},{k:'e'},{k:'r'},{k:'t'},{k:'y'},{k:'u'},{k:'i'},{k:'o'},{k:'p'},{k:'['},{k:']'},{k:'\\'}],
  [{k:'Caps',w:'wide-2'},{k:'a',home:true},{k:'s'},{k:'d'},{k:'f',home:true},{k:'g'},{k:'h'},{k:'j',home:true},{k:'k'},{k:'l'},{k:';'},{k:"'"},{k:'Enter',w:'wide-2'}],
  [{k:'Shift',w:'wide-2_25'},{k:'z'},{k:'x'},{k:'c'},{k:'v'},{k:'b'},{k:'n'},{k:'m'},{k:','},{k:'.'},{k:'/'},{k:'Shift',w:'wide-2_25'}],
  [{k:' ',w:'wide-space',label:'space'}]
];

/* ---------------- Content banks ---------------- */
const TOP1000 = [
  'the','of','and','to','a','in','for','is','on','that','by','this',
  'with','i','you','it','not','or','be','are','from','at','as','your',
  'all','have','new','more','an','was','we','will','home','can','us','about',
  'if','page','my','has','search','free','but','our','one','other','do','no',
  'information','time','they','site','he','up','may','what','which','their','news','out',
  'use','any','there','see','only','so','his','when','contact','here','business','who',
  'web','also','now','help','get','pm','view','online','c','e','first','am',
  'been','would','how','were','me','s','services','some','these','click','its','like',
  'service','x','than','find','price','date','back','top','people','had','list','name',
  'just','over','state','year','day','into','email','two','health','n','world','re',
  'next','used','go','b','work','last','most','products','music','buy','data','make',
  'them','should','product','system','post','her','city','t','add','policy','number','such',
  'please','available','copyright','support','message','after','best','software','then','jan','good','video',
  'well','d','where','info','rights','public','books','high','school','through','m','each',
  'links','she','review','years','order','very','privacy','book','items','company','r','read',
  'group','need','many','user','said','de','does','set','under','general','research','university',
  'january','mail','full','map','reviews','program','life','know','games','way','days','management',
  'p','part','could','great','united','hotel','real','f','item','international','center','ebay',
  'must','store','travel','comments','made','development','report','off','member','details','line','terms',
  'before','hotels','did','send','right','type','because','local','those','using','results','office',
  'education','national','car','design','take','posted','internet','address','community','within','states','area',
  'want','phone','dvd','shipping','reserved','subject','between','forum','family','l','long','based',
  'w','code','show','o','even','black','check','special','prices','website','index','being',
  'women','much','sign','file','link','open','today','technology','south','case','project','same',
  'pages','uk','version','section','own','found','sports','house','related','security','both','g',
  'county','american','photo','game','members','power','while','care','network','down','computer','systems',
  'three','total','place','end','following','download','h','him','without','per','access','think',
  'north','resources','current','posts','big','media','law','control','water','history','pictures','size',
  'art','personal','since','including','guide','shop','directory','board','location','change','white','text',
  'small','rating','rate','government','children','during','usa','return','students','v','shopping','account',
  'times','sites','level','digital','profile','previous','form','events','love','old','john','main',
  'call','hours','image','department','title','description','non','k','y','insurance','another','why',
  'shall','property','class','cd','still','money','quality','every','listing','content','country','private',
  'little','visit','save','tools','low','reply','customer','december','compare','movies','include','college',
  'value','article','york','man','card','jobs','provide','j','food','source','author','different',
  'press','u','learn','sale','around','print','course','job','canada','process','teen','room',
  'stock','training','too','credit','point','join','science','men','categories','advanced','west','sales',
  'look','english','left','team','estate','box','conditions','select','windows','photos','gay','thread',
  'week','category','note','live','large','gallery','table','register','however','june','october','november',
  'market','library','really','action','start','series','model','features','air','industry','plan','human',
  'provided','tv','yes','required','second','hot','accessories','cost','movie','forums','march','la',
  'september','better','say','questions','july','yahoo','going','medical','test','friend','come','dec',
  'server','pc','study','application','cart','staff','articles','san','feedback','again','play','looking',
  'issues','april','never','users','complete','street','topic','comment','financial','things','working','against',
  'standard','tax','person','below','mobile','less','got','blog','party','payment','equipment','login',
  'student','let','programs','offers','legal','above','recent','park','stores','side','act','problem',
  'red','give','memory','performance','social','q','august','quote','language','story','sell','options',
  'experience','rates','create','key','body','young','america','important','field','few','east','paper',
  'single','ii','age','activities','club','example','girls','additional','password','z','latest','something',
  'road','gift','question','changes','night','ca','hard','texas','oct','pay','four','poker',
  'status','browse','issue','range','building','seller','court','february','always','result','audio','light',
  'write','war','nov','offer','blue','groups','al','easy','given','files','event','release',
  'analysis','request','fax','china','making','picture','needs','possible','might','professional','yet','month',
  'major','star','areas','future','space','committee','hand','sun','cards','problems','london','washington',
  'meeting','rss','become','interest','id','child','keep','enter','california','share','similar','garden',
  'schools','million','added','reference','companies','listed','baby','learning','energy','run','delivery','net',
  'popular','term','film','stories','put','computers','journal','reports','co','try','welcome','central',
  'images','president','notice','original','head','radio','until','cell','color','self','council','away',
  'includes','track','australia','discussion','archive','once','others','entertainment','agreement','format','least','society',
  'months','log','safety','friends','sure','faq','trade','edition','cars','messages','marketing','tell',
  'further','updated','association','able','having','provides','david','fun','already','green','studies','close',
  'common','drive','specific','several','gold','feb','living','sep','collection','called','short','arts',
  'lot','ask','display','limited','powered','solutions','means','director','daily','beach','past','natural',
  'whether','due','et','electronics','five','upon','period','planning','database','says','official','weather',
  'mar','land','average','done','technical','window','france','pro','region','island','record','direct',
  'microsoft','conference','environment','records','st','district','calendar','costs','style','url','front','statement',
  'update','parts','aug','ever','downloads','early','miles','sound','resource','present','applications','either',
  'ago','document','word','works','material','bill','apr','written','talk','federal','hosting','rules',
  'final','adult','tickets','thing','centre','requirements','via','cheap','kids','finance','true','minutes',
  'else','mark','third','rock','gifts','europe','reading','topics','bad','individual','tips','plus',
  'auto','cover','usually','edit','together','videos','percent','fast','function','fact','unit','getting',
  'global','tech','meet','far','economic','en','player','projects','lyrics','often','subscribe','submit',
  'germany','amount','watch','included','feel','though','bank','risk','thanks','everything','deals','various',
  'words','linux','jul','production','commercial','james','weight','town','heart','advertising','received','choose',
  'treatment','newsletter','archives','points','knowledge','magazine','error','camera','jun','girl','currently','construction',
  'toys','registered','clear','golf','receive','domain','methods','chapter','makes','protection','policies','loan',
  'wide','beauty','manager','india','position','taken','sort','listings','models','michael','known','half',
  'cases','step','engineering','florida','simple','quick','none','wireless','license','paul','friday','lake',
  'whole','annual','published','later','basic','sony','shows','corporate','google','church','method','purchase',
  'customers','active','response','practice','hardware','figure','materials','fire','holiday','chat','enough','designed',
  'along','among','death','writing','speed','html','countries','loss','face','brand','discount','higher',
  'effects','created','remember','standards','oil','bit','yellow','political','increase','advertise','kingdom','base',
  'near','environmental','thought','stuff','french','storage','oh','japan','doing','loans','shoes','entry',
  'stay','nature','orders','availability'
];

const BANKS = {
  home: ['ask','sad','lad','dad','fall','falls','flask','flags','glass','glad','lass','salad','asks','half','hall','gash','dash','gala','flag','jag','all','has','gas','shall'],
  top:  ['quiet','water','tower','story','write','true','report','equity','poetry','require','quote','tiptoe','pretty','wire','tour','pottery','riot','quirt','trout','worry'],
  bottom: ['zebra','move','brave','next','van','can','vex','cab','vans','count','coins','maximum','exam','vixen','mnemonic','convex','omen','zenith','mango','venom'],
  words: TOP1000,
  sentences: TOP1000,
  writtenNumbers: ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
  letterVariety: ['keyboard','wonderful','beautiful','important','dangerous','generation','television','government','understand','particular','development','experience','background','instrument','restaurant','photograph','calendar','furniture','vegetable','chocolate','mountain','elephant','umbrella','dictionary','newspaper','adventure','telephone','computer','internet','hospital','aquarium','building','ambulance','workshop','published','homegrown','blackjack','cupboard','daylight','quicksand','jukebox','symphony','backyard','chairman','dumpling','eyeglass','flagpole','goldfish','handbook','junction','knapsack','lifetime','mudguard','notebook','outreach','playhouse','quotient','railroad','seahorse','textbook','upgraded','vineyard','waxwing','xylophone','yearbook','zigzagged','absolute','birthday','carpentry','discovery','eloquent','forgetful','gymnastic','highway','imaginary','journalism','kingdom','landscape','mysterious','negotiate','obviously','plaintiff','questioning','remarkably','subjective','thumbtack','unbroken','vocabulary','wildcard','expensive','yesterday','zookeeper','acknowledge','bicycle','curriculum','delicious','equipment','fantastic','geography','handwriting','incredible','sunflower','waterfall']
};

const SAYINGS = [
  'Actions speak louder than words.',
  'Better late than never.',
  'Practice makes perfect.',
  'The early bird catches the worm.',
  'Every cloud has a silver lining.',
  'Honesty is the best policy.',
  'A picture is worth a thousand words.',
  'Time heals all wounds.',
  'Where there is a will there is a way.',
  'Do not judge a book by its cover.',
  'The pen is mightier than the sword.',
  'Curiosity killed the cat.',
  'Better safe than sorry.',
  'Absence makes the heart grow fonder.',
  'All that glitters is not gold.',
  'When in Rome, do as the Romans do.',
  'Slow and steady wins the race.',
  'Actions have consequences, so think before you act.'
];

const TONGUE_TWISTERS = [
  'She sells seashells by the seashore.',
  'Peter Piper picked a peck of pickled peppers.',
  'How much wood would a woodchuck chuck if a woodchuck could chuck wood.',
  'Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair.',
  'Betty bought a bit of butter, but the butter was bitter.',
  'A big black bug bit a big black bear.',
  'Red lorry, yellow lorry, red lorry, yellow lorry.',
  'I scream, you scream, we all scream for ice cream.',
  'Six slippery snails slid slowly seaward.',
  'Which wristwatches are Swiss wristwatches.'
];
const NUMBER_CONNECTORS = ['order','call ext','row','unit','item','id','page','line','total','flight','gate','room','invoice','ticket'];

// Raw key/character pools for position-based drills (First steps, Warm-up,
// Learn, Finger practice, Hand practice groups) — ported from the
// "offline typing tutor" reference, ultimately just factual QWERTY layout
// groupings, same spirit as our own KEY_FINGER map.
const CHAR_POOLS = {
  home: "asdfjkl;",
  top: "qwertyuiop",
  bottom: "zxcvbnm",
  numRow: "1234567890",
  homeTop: "asdfghjkl;qwertyuiop",
  homeBottom: "asdfghjkl;zxcvbnm",
  homeNum: "asdfghjkl;1234567890",
  letters: "abcdefghijklmnopqrstuvwxyz",
  all: "abcdefghijklmnopqrstuvwxyz1234567890",
  gh: "asdfghjkl;gh",
  learn2: "fj",
  learn4: "fjdk",
  learn6: "fjdkls",
  learn13: "asdfgjkl;ty",
  learn15: "asdfgjkl;tyru",
  learn17: "asdfgjkl;tyrufj",
  learn19: "asdfgjkl;tyrufjcv",
  learn21: "asdfghjkl;tyruqwecv",
  learn25: "asdfghjkl;tyruqwecvbmn",
  rightTop: "jkl;qwertyui",
  leftTop: "asdfqwert",
  rightBottom: "jkl;nm",
  leftBottom: "asdfzxcv",
  rightNum: "jkl;7890",
  leftNum: "asdf1234",
  leftHome: "asdfg",
  leftLetters: "asdfgzxcvqrtwe",
  leftAll: "asdfgzxcvqrtwe12345",
  rightHome: "hjkl;",
  rightLetters: "hjkl;ynmupio",
  rightAll: "hjkl;ynmupio67890"
};

// Word pools for the progressive "Word exercises" group and the "Bonus"
// group's phonetic/lorem/countries lessons.
const WORD_POOLS = {
  wordsEN: ['one','ten','men','seen','need'],
  wordsENIR: ['one','in','nine','mine','line'],
  wordsENIRTU: ['turn','true','run','ruin','unit'],
  wordsENIRTUCM: ['come','time','minute','music'],
  wordsENIRTUCMOB: ['number','combine','more','mobile'],
  wordsENIRTUCMOBWYP: ['type','write','power','system','money','happy'],
  wordsAll: ['the','and','you','that','for','with','this','from','have','are','not','but','was','can','one','all','your','what','when','there','would','their','will','about','which'],
  phonetic: ['alpha','bravo','charlie','delta','echo','foxtrot','golf','hotel','india','juliett','kilo','lima','mike','november','oscar','papa','quebec','romeo','sierra','tango','uniform','victor','whiskey','xray','yankee','zulu'],
  lorem: ['lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','sed','do','eiusmod','tempor','incididunt','ut','labore','et','dolore','magna','aliqua'],
  europe: ['Albania','Andorra','Austria','Belgium','Bulgaria','Croatia','Cyprus','Denmark','Estonia','Finland','France','Germany','Greece','Hungary','Iceland','Ireland','Italy','Latvia','Lithuania','Luxembourg','Malta','Moldova','Monaco','Montenegro','Netherlands','Norway','Poland','Portugal','Romania','Slovakia','Slovenia','Spain','Sweden','Switzerland','Ukraine']
};

/* ---------------- Text generation ---------------- */
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function generatePlain(bank, targetLength){
  let words = [];
  let len = 0;
  while(len < targetLength){
    const w = pick(bank);
    words.push(w);
    len += w.length + 1;
  }
  return words.join(' ');
}

function generateProse(bank, targetLength){
  let words = [];
  let len = 0;
  let cap = true;
  while(len < targetLength){
    let w = pick(bank);
    if(cap){ w = w.charAt(0).toUpperCase()+w.slice(1); cap = false; }
    if(Math.random() < 0.12){
      w += Math.random() < 0.75 ? ',' : '.';
      if(w.endsWith('.')) cap = true;
    }
    words.push(w);
    len += w.length + 1;
  }
  let text = words.join(' ');
  if(!/[.!?]$/.test(text)) text = text.replace(/,$/, '') + '.';
  return text;
}

function generateNumbers(targetLength){
  let parts = [];
  let len = 0;
  while(len < targetLength){
    const c = pick(NUMBER_CONNECTORS);
    const n = Math.floor(Math.random()*9000)+10;
    const phrase = `${c} ${n}`;
    parts.push(phrase);
    len += phrase.length + 2;
  }
  let text = parts.join(', ') + '.';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function shuffleArray(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function generateAlphabetDrill(targetLength){
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let words = [];
  let len = 0;
  while(len < targetLength){
    const shuffled = shuffleArray(letters);
    let idx = 0;
    while(idx < shuffled.length){
      const size = 2 + Math.floor(Math.random()*3); // chunks of 2-4 letters
      const chunk = shuffled.slice(idx, idx+size).join('');
      if(!chunk) break;
      words.push(chunk);
      len += chunk.length + 1;
      idx += size;
    }
  }
  return words.join(' ');
}

// For raw key/character pools (not whole words): builds short, typable
// chunks of random characters drawn from the pool, e.g. "fj jdk fjd".
function generatePoolChars(poolChars, targetLength){
  let words = [];
  let len = 0;
  while(len < targetLength){
    const size = 2 + Math.floor(Math.random()*3);
    let chunk = '';
    for(let i=0;i<size;i++){
      chunk += poolChars[Math.floor(Math.random()*poolChars.length)];
    }
    words.push(chunk);
    len += chunk.length + 1;
  }
  return words.join(' ');
}

function generateFromPhrases(list, targetLength){
  let parts = [];
  let len = 0;
  while(len < targetLength){
    const phrase = pick(list);
    parts.push(phrase);
    len += phrase.length + 1;
  }
  return parts.join(' ');
}

function generateMixed(targetLength){
  const all = [...BANKS.home, ...BANKS.top, ...BANKS.bottom, ...TOP1000];
  return generateProse(all, targetLength);
}

// Normalizes "smart" typographic characters (curly quotes, en/em dashes,
// ellipsis, non-breaking spaces — the kind Word/web copy-paste loves to
// insert) to their plain-keyboard ASCII equivalents. Without this, an
// imported apostrophe like ’ can never be typed correctly, because no key
// on a physical keyboard produces it — only the straight ' does.
function sanitizeImportedText(text){
  return text
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/[\u00A0\u2000-\u200A\u202F]/g, ' ')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

// Builds practice text from the user's imported passage, in one of three
// playback modes, wrapping/repeating as needed to reach targetLength.
function getCustomPracticeText(mode, targetLength){
  const text = customImportedText || '';
  if(!text){
    return generatePlain(TOP1000, targetLength);
  }
  let source;
  if(mode === 'custom-shuffle'){
    const words = text.split(/\s+/).filter(Boolean);
    source = shuffleArray(words).join(' ');
  } else if(mode === 'custom-random'){
    const offset = text.length > 1 ? Math.floor(Math.random() * text.length) : 0;
    source = (text.slice(offset) + ' ' + text.slice(0, offset)).trim();
  } else {
    source = text;
  }
  let result = source;
  while(result.length < targetLength){
    result += ' ' + source;
  }
  return result;
}

function generateChunk(id, targetLength){
  if(CHAR_POOLS[id]) return generatePoolChars(CHAR_POOLS[id], targetLength);
  if(WORD_POOLS[id]) return generatePlain(WORD_POOLS[id], targetLength);
  switch(id){
    case 'top25': return generatePlain(TOP1000.slice(0,25), targetLength);
    case 'top50': return generatePlain(TOP1000.slice(0,50), targetLength);
    case 'top100': return generatePlain(TOP1000.slice(0,100), targetLength);
    case 'top200': return generatePlain(TOP1000.slice(0,200), targetLength);
    case 'top300': return generatePlain(TOP1000.slice(0,300), targetLength);
    case 'top500': return generatePlain(TOP1000.slice(0,500), targetLength);
    case 'top1000': return generatePlain(TOP1000, targetLength);
    case 'sentences': return generateProse(TOP1000, targetLength);
    case 'mixed': return generateMixed(targetLength);
    case 'alphabet': return generateAlphabetDrill(targetLength);
    case 'written': return generatePlain(BANKS.writtenNumbers, targetLength);
    case 'letterVariety': return generatePlain(BANKS.letterVariety, targetLength);
    case 'sayings': return generateFromPhrases(SAYINGS, targetLength);
    case 'tongue': return generateFromPhrases(TONGUE_TWISTERS, targetLength);
    case 'homeWords': return generatePlain(BANKS.home, targetLength);
    case 'topWords': return generatePlain(BANKS.top, targetLength);
    case 'bottomWords': return generatePlain(BANKS.bottom, targetLength);
    case 'numberPhrases': return generateNumbers(targetLength);
    case 'custom-start':
    case 'custom-random':
    case 'custom-shuffle':
      return getCustomPracticeText(id, targetLength);
    default: return generatePlain(TOP1000, targetLength);
  }
}

// The full lesson curriculum: groups of specific named lessons, each
// pointing at a content key handled by generateChunk() above. Combines
// our original categories with the fuller progression (First steps →
// Warm-up → Learn → Word exercises → Finger/Hand practice → Practical →
// Bonus) from the reference offline typing tutor.
const LESSON_GROUPS = [
  { id:'first-steps', name:'First steps', desc:'Very easy exercises for learning the key positions.', items:[
    {label:'Base position', key:'home'},
    {label:'Home row', key:'home'},
    {label:'Home + top row', key:'homeTop'},
    {label:'Home + bottom row', key:'homeBottom'},
    {label:'All letters', key:'letters'},
    {label:'All rows', key:'all'}
  ]},
  { id:'warmup', name:'Warm-up', desc:'Easy exercises covering the keyboard rows.', items:[
    {label:'Base position', key:'home'},
    {label:'Home row', key:'home'},
    {label:'Top row', key:'top'},
    {label:'Bottom row', key:'bottom'},
    {label:'Number row', key:'numRow'},
    {label:'Home + top row', key:'homeTop'},
    {label:'Home + bottom row', key:'homeBottom'},
    {label:'Home + numbers', key:'homeNum'},
    {label:'All letters', key:'letters'},
    {label:'All rows', key:'all'}
  ]},
  { id:'learn', name:'Learn', desc:'Step-by-step exercises that introduce more keys.', items:[
    {label:'Base position — 2 keys', key:'learn2'},
    {label:'Base position — 4 keys', key:'learn4'},
    {label:'Base position — 6 keys', key:'learn6'},
    {label:'Base position complete', key:'home'},
    {label:'Home + G/H', key:'gh'},
    {label:'Home row', key:'home'},
    {label:'Home + T/Y', key:'learn13'},
    {label:'Home + T/Y/R/U', key:'learn15'},
    {label:'Home + T/Y/R/U/F/J', key:'learn17'},
    {label:'19-key progression', key:'learn19'},
    {label:'21-key progression', key:'learn21'},
    {label:'25-key progression', key:'learn25'},
    {label:'28-key progression', key:'letters'}
  ]},
  { id:'word-exercises', name:'Word exercises', desc:'Real words that gradually introduce more letters.', items:[
    {label:'Home row', key:'homeWords'},
    {label:'Home + EN', key:'wordsEN'},
    {label:'Home + ENIR', key:'wordsENIR'},
    {label:'Home + ENIRTU', key:'wordsENIRTU'},
    {label:'Home + ENIRTUCM', key:'wordsENIRTUCM'},
    {label:'Home + ENIRTUCMOB', key:'wordsENIRTUCMOB'},
    {label:'Home + ENIRTUCMOBWYP', key:'wordsENIRTUCMOBWYP'},
    {label:'All introduced letters', key:'wordsAll'}
  ]},
  { id:'finger-practice', name:'Finger practice', desc:'Randomised letter combinations for finger control.', items:[
    {label:'Home row', key:'home'},
    {label:'Home + right top', key:'rightTop'},
    {label:'Home + left top', key:'leftTop'},
    {label:'Home + top', key:'homeTop'},
    {label:'Home + right bottom', key:'rightBottom'},
    {label:'Home + left bottom', key:'leftBottom'},
    {label:'Home + bottom', key:'homeBottom'},
    {label:'Home + right numbers', key:'rightNum'},
    {label:'Home + left numbers', key:'leftNum'},
    {label:'Home + numbers', key:'homeNum'},
    {label:'All letters', key:'letters'},
    {label:'All rows', key:'all'}
  ]},
  { id:'hand-practice', name:'Hand practice', desc:'Train each hand separately.', items:[
    {label:'Left hand — home', key:'leftHome'},
    {label:'Left — home + top', key:'leftTop'},
    {label:'Left — home + bottom', key:'leftBottom'},
    {label:'Left — home + numbers', key:'leftNum'},
    {label:'Left — all letters', key:'leftLetters'},
    {label:'Left — all rows', key:'leftAll'},
    {label:'Right hand — home', key:'rightHome'},
    {label:'Right — home + top', key:'rightTop'},
    {label:'Right — home + bottom', key:'rightBottom'},
    {label:'Right — home + numbers', key:'rightNum'},
    {label:'Right — all letters', key:'rightLetters'},
    {label:'Right — all rows', key:'rightAll'}
  ]},
  { id:'practical', name:'Practical exercises', desc:'Common English words for everyday typing, from the top 25 to the top 1000.', items:[
    {label:'Top 25 words', key:'top25'},
    {label:'Top 50 words', key:'top50'},
    {label:'Top 100 words', key:'top100'},
    {label:'Top 200 words', key:'top200'},
    {label:'Top 300 words', key:'top300'},
    {label:'Top 500 words', key:'top500'},
    {label:'Top 1000 words', key:'top1000'}
  ]},
  { id:'bonus', name:'Bonus', desc:'More demanding exercises with capitals and special characters.', items:[
    {label:'Phonetic alphabet', key:'phonetic'},
    {label:'Lorem ipsum', key:'lorem'},
    {label:'European countries', key:'europe'},
    {label:'Tongue twisters', key:'tongue'},
    {label:'Sayings', key:'sayings'},
    {label:'Written numbers', key:'written'},
    {label:'Complete alphabet', key:'alphabet'}
  ]},
  { id:'freeform', name:'Freeform', desc:'Open-ended practice: full sentences, wide letter variety, or a mix of everything.', items:[
    {label:'Sentences', key:'sentences'},
    {label:'Letter variety', key:'letterVariety'},
    {label:'Mixed practice', key:'mixed'},
    {label:'Number phrases', key:'numberPhrases'}
  ]},
  { id:'custom', name:'Your text', desc:'Import your own text (up to 10,000 characters) and practice from it.', items:[
    {label:'From the beginning', key:'custom-start'},
    {label:'Random start point', key:'custom-random'},
    {label:'Shuffled words', key:'custom-shuffle'}
  ]}
];

/* ---------------- State ---------------- */
let sessionMode = 'time';        // 'time' | 'chars'
let sessionMinutes = 3;
let sessionChars = 500;
let errorMode = 'block';         // 'continue' | 'block' | 'backspace'
let shakeEnabled = true;
let selectedGroupId = 'practical';
let selectedLessonIdx = 6;       // "Top 1000 words" — sensible general-purpose default
let category = 'top1000';        // resolved content key for the current lesson
let sessionText = '';
let startTime = null;
let totalKeystrokes = 0;
let correctKeystrokes = 0;
let timerHandle = null;
let sessionEnded = false;
let isPaused = false;
let pausedElapsedMs = 0;
let wpmSamples = [];
let lastSampleSec = -1;
let displayMode = 'accuracy';    // 'accuracy' | 'errorRate'
let errorCountMode = 'perKey';   // 'perKey' | 'perLetter'
let erroredPositions = new Set();
let errorEvents = [];            // {t} for each countable error, used for chart ticks
let goalWpm = 0;                 // 0 = no speed goal set
let goalErrorRate = 0;            // 0 = no error-rate goal set
let achievedKeys = new Set();     // lesson content keys achieved under the current goal
let customImportedText = '';      // the user's imported practice text

const promptEl = document.getElementById('prompt');
const typeboxEl = document.getElementById('typebox');
const groupTabsEl = document.getElementById('groupTabs');
const lessonTabsEl = document.getElementById('lessonTabs');
const lessonDescEl = document.getElementById('lessonDesc');
const lessonTitleEl = document.getElementById('lessonTitleLabel');
const keyboardEl = document.getElementById('keyboard');
const statFourth = document.getElementById('statFourth');
const statFourthLabel = document.getElementById('statFourthLabel');
const statAccLabel = document.getElementById('statAccLabel');
const errorHintEl = document.getElementById('errorHint');
const pauseBanner = document.getElementById('pauseBanner');
const typingPanel = document.getElementById('typingPanel');
const summaryPanel = document.getElementById('summaryPanel');
const summaryStatsEl = document.getElementById('summaryStats');
const sessionChartWrap = document.getElementById('sessionChartWrap');
const weeklyBarsEl = document.getElementById('weeklyBars');
const weeklyTotalEl = document.getElementById('weeklyTotal');
const goalBadgeEl = document.getElementById('goalBadge');
const recentGoalsEl = document.getElementById('recentGoals');
const customTextPanel = document.getElementById('customTextPanel');
const customTextArea = document.getElementById('customTextArea');
const customTextCount = document.getElementById('customTextCount');
const importFileBtn = document.getElementById('importFileBtn');
const saveCustomTextBtn = document.getElementById('saveCustomTextBtn');
const customTextHint = document.getElementById('customTextHint');
const suggestBtn = document.getElementById('suggestBtn');
const loginOverlay = document.getElementById('loginOverlay');
const loginSubEl = document.getElementById('loginSub');
const loginUserListEl = document.getElementById('loginUserList');
const loginNameInputEl = document.getElementById('loginNameInput');
const loginCreateBtn = document.getElementById('loginCreateBtn');
const loginErrorEl = document.getElementById('loginError');
const currentUserLabelEl = document.getElementById('currentUserLabel');
const switchUserBtn = document.getElementById('switchUserBtn');

/* ---------------- Multi-user session history (via Electron main process) ---------------- */
let currentUser = null;

async function loadHistory(){
  if(!currentUser) return [];
  try{
    return await window.tenfoldAPI.getHistory(currentUser);
  }catch(e){ return []; }
}

async function addSessionRecord(record){
  if(!currentUser) return;
  try{
    await window.tenfoldAPI.addSession(currentUser, record);
  }catch(e){ /* storage unavailable, skip silently */ }
}

async function renderWeeklyTracker(){
  const history = await loadHistory();
  const now = new Date();
  const dayStarts = [];
  for(let i=6;i>=0;i--){
    const d = new Date(now);
    d.setDate(d.getDate()-i);
    d.setHours(0,0,0,0);
    dayStarts.push(d);
  }
  const dayLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const totalsMs = dayStarts.map(d=>{
    const start = d.getTime();
    const end = start + 86400000;
    return history.filter(r=>r.ts >= start && r.ts < end).reduce((sum,r)=>sum + r.durationMs, 0);
  });
  const maxMs = Math.max(...totalsMs, 60000);
  weeklyBarsEl.innerHTML = '';
  totalsMs.forEach((ms,i)=>{
    const minutes = ms/60000;
    const heightPct = Math.max(4, (ms/maxMs)*100);
    const isToday = i === totalsMs.length-1;
    const col = document.createElement('div');
    col.className = 'weekly-bar-col';
    col.innerHTML = `<div class="weekly-bar${isToday?' today':''}" style="height:${heightPct}%" title="${minutes.toFixed(1)} min"></div><div class="weekly-bar-label">${dayLabels[dayStarts[i].getDay()]}</div>`;
    weeklyBarsEl.appendChild(col);
  });
  const weekTotalMin = totalsMs.reduce((a,b)=>a+b,0) / 60000;
  weeklyTotalEl.textContent = weekTotalMin < 1 ? '<1m this week' : `${Math.round(weekTotalMin)}m this week`;
}

function renderSessionChart(){
  if(wpmSamples.length < 2){
    sessionChartWrap.innerHTML = '<div class="chart-empty">Session too short to chart.</div>';
    return;
  }
  const width = 640, height = 160, padX = 8, padY = 14;
  const maxT = Math.max(wpmSamples[wpmSamples.length-1].t, 1);
  const maxWpm = Math.max(...wpmSamples.map(s=>s.wpm), 5);

  function xFor(t){ return padX + (t/maxT) * (width - padX*2); }
  function yFor(wpm){ return height - padY - (wpm/maxWpm) * (height - padY*2); }

  const wpmPts = wpmSamples.map(s=>`${xFor(s.t).toFixed(1)},${yFor(s.wpm).toFixed(1)}`).join(' ');

  const tickTop = padY;
  const tickBottom = height - padY;
  const errorTicks = errorEvents.map(ev=>{
    const x = xFor(ev.t).toFixed(1);
    return `<line x1="${x}" y1="${tickTop}" x2="${x}" y2="${tickBottom}" stroke="var(--error)" stroke-width="2" opacity="0.55"/>`;
  }).join('');

  sessionChartWrap.innerHTML = `
    <svg id="sessionChartSvg" viewBox="0 0 ${width} ${height}" class="session-chart-svg" preserveAspectRatio="none">
      ${errorTicks}
      <polyline points="${wpmPts}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
    <div class="chart-guide-line" id="chartGuideLine"></div>
    <div class="chart-tooltip" id="chartTooltip"></div>
  `;

  const svgEl = document.getElementById('sessionChartSvg');
  const guideEl = document.getElementById('chartGuideLine');
  const tooltipEl = document.getElementById('chartTooltip');
  const padXFrac = padX / width;
  const plotFrac = 1 - padXFrac * 2;

  function nearestSample(t){
    let nearest = wpmSamples[0];
    let minDiff = Infinity;
    for(const s of wpmSamples){
      const diff = Math.abs(s.t - t);
      if(diff < minDiff){ minDiff = diff; nearest = s; }
    }
    return nearest;
  }

  svgEl.addEventListener('mousemove', (e)=>{
    const rect = svgEl.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const dataFrac = Math.min(1, Math.max(0, (fraction - padXFrac) / plotFrac));
    const t = dataFrac * maxT;
    const sample = nearestSample(t);
    guideEl.style.left = (fraction*100) + '%';
    guideEl.style.display = 'block';
    tooltipEl.style.left = (fraction*100) + '%';
    tooltipEl.textContent = `${formatTime(sample.t)} — ${sample.wpm} WPM`;
    tooltipEl.style.display = 'block';
  });
  svgEl.addEventListener('mouseleave', ()=>{
    guideEl.style.display = 'none';
    tooltipEl.style.display = 'none';
  });
}

/* ---------------- Build keyboard ---------------- */
function buildKeyboard(){
  KEYBOARD_ROWS.forEach(row=>{
    const rowEl = document.createElement('div');
    rowEl.className = 'kbd-row';
    row.forEach(item=>{
      const keyEl = document.createElement('div');
      const lower = item.k.toLowerCase();
      keyEl.className = 'key' + (item.w ? ' '+item.w : '') + (item.home ? ' home' : '');
      keyEl.textContent = item.label || item.k;
      keyEl.dataset.key = lower;
      rowEl.appendChild(keyEl);
    });
    keyboardEl.appendChild(rowEl);
  });
}

/* ---------------- Category tabs ---------------- */
function getCurrentGroup(){
  return LESSON_GROUPS.find(g => g.id === selectedGroupId) || LESSON_GROUPS[0];
}

function getCurrentLessonItem(){
  const group = getCurrentGroup();
  return group.items[selectedLessonIdx] || group.items[0];
}

function refreshLessonLabel(){
  const group = getCurrentGroup();
  const item = getCurrentLessonItem();
  if(lessonTitleEl) lessonTitleEl.textContent = `${group.name} — ${item.label}`;
  updateCustomTextPanelVisibility();
}

function updateCustomTextPanelVisibility(){
  const isCustom = selectedGroupId === 'custom';
  customTextPanel.style.display = isCustom ? 'block' : 'none';
  if(isCustom){
    customTextHint.textContent = customImportedText
      ? `Using your imported text (${customImportedText.length.toLocaleString()} characters).`
      : 'No text imported yet — paste something below or import a file, then hit Save.';
  }
}

// A lesson counts as "achieved" once a session using its exact content key
// met the CURRENT goal. Changing the goal re-evaluates everything against
// the new target, so raising the goal naturally clears old green marks.
async function computeAchievedKeys(){
  if(!currentUser || (goalWpm <= 0 && goalErrorRate <= 0)) return new Set();
  const history = await loadHistory();
  const set = new Set();
  history.forEach(r=>{
    if(r.goalMet === true && r.goalWpm === goalWpm && r.goalErrorRate === goalErrorRate && r.category){
      set.add(r.category);
    }
  });
  return set;
}

async function refreshAchievement(){
  achievedKeys = await computeAchievedKeys();
  buildGroupTabs();
  buildLessonTabs();
}

function buildGroupTabs(){
  groupTabsEl.innerHTML = '';
  LESSON_GROUPS.forEach(g=>{
    const achievedCount = g.items.filter(item => achievedKeys.has(item.key)).length;
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (g.id === selectedGroupId ? ' active' : '');
    btn.innerHTML = `${g.name} <span class="group-progress">${achievedCount}/${g.items.length}</span>`;
    btn.addEventListener('click', ()=>{
      selectedGroupId = g.id;
      selectedLessonIdx = 0;
      buildGroupTabs();
      buildLessonTabs();
      category = getCurrentLessonItem().key;
      refreshLessonLabel();
      saveCurrentSettings();
    });
    groupTabsEl.appendChild(btn);
  });
}

function buildLessonTabs(){
  const group = getCurrentGroup();
  lessonDescEl.textContent = group.desc;
  lessonTabsEl.innerHTML = '';
  group.items.forEach((item, idx)=>{
    const achieved = achievedKeys.has(item.key);
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (idx === selectedLessonIdx ? ' active' : '') + (achieved ? ' achieved' : '');
    btn.textContent = (achieved ? '✓ ' : '') + item.label;
    btn.addEventListener('click', ()=>{
      selectedLessonIdx = idx;
      buildLessonTabs();
      category = item.key;
      refreshLessonLabel();
      saveCurrentSettings();
    });
    lessonTabsEl.appendChild(btn);
  });
}

/* ---------------- Settings wiring ---------------- */
const modeSeg = document.getElementById('modeSeg');
const timeCustom = document.getElementById('timeCustom');
const charsCustom = document.getElementById('charsCustom');
const presetRow = document.getElementById('presetRow');
const timeInput = document.getElementById('timeInput');
const charsInput = document.getElementById('charsInput');

modeSeg.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  sessionMode = btn.dataset.mode;
  [...modeSeg.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const isTime = sessionMode === 'time';
  timeCustom.style.display = isTime ? 'flex' : 'none';
  charsCustom.style.display = isTime ? 'none' : 'flex';
  buildPresets();
  saveCurrentSettings();
});

function buildPresets(){
  presetRow.querySelectorAll('.preset-btn').forEach(b=>b.remove());
  const presets = sessionMode === 'time' ? [1,3,5,10] : [100,250,500,1000];
  presets.forEach(v=>{
    const btn = document.createElement('button');
    btn.className = 'preset-btn';
    btn.textContent = sessionMode === 'time' ? `${v} min` : `${v} chars`;
    if((sessionMode === 'time' && v === sessionMinutes) || (sessionMode === 'chars' && v === sessionChars)){
      btn.classList.add('active');
    }
    btn.addEventListener('click', ()=>{
      presetRow.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      if(sessionMode === 'time'){ sessionMinutes = v; timeInput.value = v; }
      else { sessionChars = v; charsInput.value = v; }
      saveCurrentSettings();
    });
    presetRow.appendChild(btn);
  });
}
buildPresets();

timeInput.addEventListener('input', ()=>{
  sessionMinutes = parseFloat(timeInput.value) || 1;
  presetRow.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active'));
  saveCurrentSettings();
});
charsInput.addEventListener('input', ()=>{
  sessionChars = parseInt(charsInput.value) || 100;
  presetRow.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active'));
  saveCurrentSettings();
});

const errorSeg = document.getElementById('errorSeg');
errorSeg.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  errorMode = btn.dataset.err;
  [...errorSeg.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  updateErrorHint();
  saveCurrentSettings();
});

const displaySeg = document.getElementById('displaySeg');
displaySeg.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  displayMode = btn.dataset.display;
  [...displaySeg.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  refreshAccuracyDisplay();
  saveCurrentSettings();
});

const errorCountSeg = document.getElementById('errorCountSeg');
errorCountSeg.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  errorCountMode = btn.dataset.count;
  [...errorCountSeg.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  refreshAccuracyDisplay();
  saveCurrentSettings();
});

const goalWpmInput = document.getElementById('goalWpmInput');
const goalErrInput = document.getElementById('goalErrInput');

function buildGoalDropdowns(){
  goalWpmInput.innerHTML = '<option value="0">No goal</option>';
  for(let v=5; v<=150; v+=5){
    goalWpmInput.insertAdjacentHTML('beforeend', `<option value="${v}">${v} WPM</option>`);
  }
  goalErrInput.innerHTML = '<option value="0">No goal</option>';
  for(let v=2; v<=20; v+=2){
    goalErrInput.insertAdjacentHTML('beforeend', `<option value="${v}">${v}%</option>`);
  }
}
buildGoalDropdowns();

goalWpmInput.addEventListener('change', ()=>{
  goalWpm = parseInt(goalWpmInput.value, 10) || 0;
  saveCurrentSettings();
  refreshAchievement();
});
goalErrInput.addEventListener('change', ()=>{
  goalErrorRate = parseInt(goalErrInput.value, 10) || 0;
  saveCurrentSettings();
  refreshAchievement();
});

function refreshCustomTextCount(){
  customTextCount.textContent = `${customTextArea.value.length.toLocaleString()} / 10,000`;
}

customTextArea.addEventListener('input', ()=>{
  if(customTextArea.value.length > 10000){
    customTextArea.value = customTextArea.value.slice(0, 10000);
  }
  refreshCustomTextCount();
});

importFileBtn.addEventListener('click', async ()=>{
  try{
    const result = await window.tenfoldAPI.importTextFile();
    if(!result) return; // canceled or failed
    const clean = sanitizeImportedText(result.text);
    customTextArea.value = clean;
    refreshCustomTextCount();
    customImportedText = clean;
    if(currentUser) await window.tenfoldAPI.saveCustomText(currentUser, clean);
    updateCustomTextPanelVisibility();
  }catch(e){ /* ignore */ }
});

saveCustomTextBtn.addEventListener('click', async ()=>{
  const clean = sanitizeImportedText(customTextArea.value);
  customTextArea.value = clean;
  refreshCustomTextCount();
  customImportedText = clean;
  if(currentUser) await window.tenfoldAPI.saveCustomText(currentUser, clean);
  updateCustomTextPanelVisibility();
  saveCustomTextBtn.textContent = 'Saved ✓';
  setTimeout(()=>{ saveCustomTextBtn.textContent = 'Save text'; }, 1400);
});

// Suggests a lesson the user hasn't yet achieved (under the current goal),
// favoring whichever ones have gone longest without an attempt (or have
// never been tried), then picks randomly among a short list of those —
// so repeated clicks rotate through several weak spots instead of always
// drilling the single worst one into the ground.
async function suggestWeakLesson(){
  const history = await loadHistory();
  const allKeys = new Set();
  LESSON_GROUPS.forEach(g => g.items.forEach(item => allKeys.add(item.key)));

  const meta = {};
  allKeys.forEach(k => { meta[k] = { lastTs: 0, attempts: 0 }; });
  history.forEach(r=>{
    if(meta[r.category]){
      meta[r.category].attempts++;
      if(r.ts > meta[r.category].lastTs) meta[r.category].lastTs = r.ts;
    }
  });

  let pool = [...allKeys].filter(k => !achievedKeys.has(k));
  if(pool.length === 0) pool = [...allKeys];

  pool.sort((a,b)=>{
    if(meta[a].lastTs !== meta[b].lastTs) return meta[a].lastTs - meta[b].lastTs;
    return meta[a].attempts - meta[b].attempts;
  });

  const shortlist = pool.slice(0, Math.min(5, pool.length));
  const chosenKey = shortlist[Math.floor(Math.random()*shortlist.length)];

  for(const g of LESSON_GROUPS){
    const idx = g.items.findIndex(item => item.key === chosenKey);
    if(idx !== -1){
      selectedGroupId = g.id;
      selectedLessonIdx = idx;
      break;
    }
  }
  category = getCurrentLessonItem().key;
  buildGroupTabs();
  buildLessonTabs();
  refreshLessonLabel();
  saveCurrentSettings();
  startSession();
}

suggestBtn.addEventListener('click', suggestWeakLesson);

const kbdToggle = document.getElementById('kbdToggle');
const kbdToggleLabel = document.getElementById('kbdToggleLabel');
function setKeyboardVisible(visible, skipSave){
  keyboardEl.classList.toggle('show', visible);
  kbdToggle.classList.toggle('on', visible);
  kbdToggleLabel.textContent = visible ? 'Show help keyboard' : 'Help keyboard hidden';
  if(!skipSave) saveCurrentSettings();
}
kbdToggle.addEventListener('click', ()=>{
  setKeyboardVisible(!keyboardEl.classList.contains('show'));
});
kbdToggleLabel.addEventListener('click', ()=>{
  setKeyboardVisible(!keyboardEl.classList.contains('show'));
});

const shakeToggle = document.getElementById('shakeToggle');
const shakeToggleLabel = document.getElementById('shakeToggleLabel');
function setShakeEnabled(enabled, skipSave){
  shakeEnabled = enabled;
  shakeToggle.classList.toggle('on', enabled);
  shakeToggleLabel.textContent = enabled ? 'Shake screen on error' : 'Shake disabled';
  if(!skipSave) saveCurrentSettings();
}
shakeToggle.addEventListener('click', ()=> setShakeEnabled(!shakeEnabled));
shakeToggleLabel.addEventListener('click', ()=> setShakeEnabled(!shakeEnabled));

/* ---------------- Rendering ---------------- */
function renderPrompt(){
  const typed = typeboxEl.value;
  promptEl.innerHTML = '';
  let wordSpan = null;
  for(let i=0;i<sessionText.length;i++){
    const ch = sessionText[i];
    const span = document.createElement('span');
    span.className = 'ch';
    span.textContent = ch;
    if(i < typed.length){
      const isWrong = typed[i] !== ch;
      span.classList.add(isWrong ? 'wrong' : 'correct');
      if(isWrong && errorMode === 'backspace' && i === typed.length - 1){
        span.classList.add('wrong-pending');
      }
    } else if(i === typed.length){
      span.classList.add('current');
    } else {
      span.classList.add('pending');
    }
    if(ch === ' '){
      wordSpan = null;
      promptEl.appendChild(span);
    } else {
      if(!wordSpan){
        wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        promptEl.appendChild(wordSpan);
      }
      wordSpan.appendChild(span);
    }
  }
  highlightNextKey(typed.length);
  updateErrorHint();
  autoScrollPrompt();
}

function autoScrollPrompt(){
  const currentEl = promptEl.querySelector('.ch.current') || promptEl.querySelector('.ch:last-child');
  if(!currentEl) return;
  const containerRect = promptEl.getBoundingClientRect();
  const elRect = currentEl.getBoundingClientRect();
  const margin = 24; // keep a little breathing room above/below
  if(elRect.bottom > containerRect.bottom - margin || elRect.top < containerRect.top + margin){
    const offset = (elRect.top - containerRect.top) - (containerRect.height / 2) + (elRect.height / 2);
    promptEl.scrollTop += offset;
  }
}

function isPendingError(){
  const val = typeboxEl.value;
  if(val.length === 0) return false;
  const lastIdx = val.length - 1;
  return val[lastIdx] !== sessionText[lastIdx];
}

function updateErrorHint(){
  if(errorMode === 'backspace' && isPendingError()){
    errorHintEl.textContent = 'Press Backspace to fix that character before continuing.';
    errorHintEl.style.display = 'block';
    errorHintEl.classList.add('urgent');
  } else if(errorMode === 'block'){
    errorHintEl.textContent = "Mistakes won't be entered — type the highlighted key to continue.";
    errorHintEl.style.display = 'block';
    errorHintEl.classList.remove('urgent');
  } else {
    errorHintEl.style.display = 'none';
    errorHintEl.classList.remove('urgent');
  }
}

function highlightNextKey(idx){
  document.querySelectorAll('.key.active').forEach(k=>k.classList.remove('active'));
  if(idx >= sessionText.length) return;
  const ch = sessionText[idx].toLowerCase();
  const keyEl = document.querySelector(`.key[data-key="${ch === ' ' ? ' ' : ch}"]`);
  if(keyEl) keyEl.classList.add('active');
}

/* ---------------- Stats ---------------- */
function formatTime(totalSeconds){
  totalSeconds = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(totalSeconds/60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2,'0')}`;
}

function getElapsedMs(){
  return pausedElapsedMs + (startTime ? (Date.now() - startTime) : 0);
}

function updateStats(){
  const elapsedMs = getElapsedMs();
  const elapsedMin = elapsedMs / 60000;
  const wpm = elapsedMin > 0 ? Math.round((correctKeystrokes/5) / elapsedMin) : 0;
  document.getElementById('statWpm').textContent = wpm;
  refreshAccuracyDisplay();

  const elapsedSec = elapsedMs / 1000;
  if(startTime && Math.floor(elapsedSec/2) > lastSampleSec){
    lastSampleSec = Math.floor(elapsedSec/2);
    wpmSamples.push({t: elapsedSec, wpm});
  }

  if(sessionMode === 'time'){
    statFourthLabel.textContent = 'Time left';
    const totalSec = sessionMinutes * 60;
    const remaining = totalSec - elapsedMs/1000;
    statFourth.textContent = formatTime(remaining);
    if(startTime && remaining <= 0 && !sessionEnded){
      finishSession();
    } else if(startTime && remaining > 0 && sessionText.length - typeboxEl.value.length < 150){
      sessionText += ' ' + generateChunk(category, 400);
    }
  } else {
    statFourthLabel.textContent = 'Chars left';
    const remaining = sessionText.length - typeboxEl.value.length;
    statFourth.textContent = Math.max(0, remaining);
  }
}

function startTimerIfNeeded(){
  if(startTime) return;
  startTime = Date.now();
  timerHandle = setInterval(updateStats, 500);
}

function stopTimer(){
  if(timerHandle){ clearInterval(timerHandle); timerHandle = null; }
}

/* ---------------- Session lifecycle ---------------- */
function buildSessionText(){
  if(sessionMode === 'chars'){
    let text = generateChunk(category, sessionChars);
    return text.slice(0, sessionChars);
  } else {
    const buffer = Math.max(300, Math.ceil(sessionMinutes * 60 * 10 * 1.4));
    return generateChunk(category, buffer);
  }
}

function resetSessionState(){
  sessionEnded = false;
  isPaused = false;
  startTime = null;
  pausedElapsedMs = 0;
  totalKeystrokes = 0;
  correctKeystrokes = 0;
  wpmSamples = [];
  errorEvents = [];
  erroredPositions = new Set();
  lastSampleSec = -1;
  stopTimer();
  typingPanel.classList.remove('paused');
  pauseBanner.classList.remove('show');
  typeboxEl.value = '';
  typeboxEl.disabled = false;
  summaryPanel.classList.remove('show');
  statFourth.textContent = sessionMode === 'time' ? formatTime(sessionMinutes*60) : sessionText.length;
  statFourthLabel.textContent = sessionMode === 'time' ? 'Time left' : 'Chars left';
  document.getElementById('statWpm').textContent = 0;
  refreshAccuracyDisplay();
  renderPrompt();
  updateErrorHint();
  typeboxEl.focus();
}

// "Start session": generates fresh content based on current settings.
function startSession(){
  sessionText = buildSessionText();
  resetSessionState();
}

// "Restart session": retries the exact same passage, so you can compare
// how you do on a second attempt.
function restartSession(){
  if(!sessionText){ startSession(); return; }
  resetSessionState();
}

// Computes error count / error rate / accuracy consistently with the
// currently selected error-counting mode ('perKey' or 'perLetter').
function computeErrorStats(){
  const positionsCovered = typeboxEl.value.length;
  let errCount;
  let denom;
  if(errorCountMode === 'perLetter'){
    errCount = erroredPositions.size;
    denom = Math.max(positionsCovered, 1);
  } else {
    errCount = totalKeystrokes - correctKeystrokes;
    denom = Math.max(totalKeystrokes, 1);
  }
  const hasAttempts = errorCountMode === 'perLetter' ? positionsCovered > 0 : totalKeystrokes > 0;
  const errorRatePct = hasAttempts ? Math.round((errCount/denom)*1000)/10 : 0;
  const accuracyPct = Math.round((100 - errorRatePct)*10)/10;
  return { errCount, errorRatePct, accuracyPct };
}

function refreshAccuracyDisplay(){
  const stats = computeErrorStats();
  document.getElementById('statErr').textContent = stats.errCount;
  if(displayMode === 'errorRate'){
    statAccLabel.textContent = 'Error rate';
    document.getElementById('statAcc').textContent = stats.errorRatePct.toFixed(1) + '%';
  } else {
    statAccLabel.textContent = 'Accuracy';
    document.getElementById('statAcc').textContent = stats.accuracyPct.toFixed(1) + '%';
  }
  return stats;
}

// A wrong keystroke happened at text position `idx`. Records it for the
// error-count-mode logic and, when it counts as a countable error, adds a
// timestamped event used to draw error ticks on the post-session chart.
function recordError(idx){
  const isNewPosition = !erroredPositions.has(idx);
  erroredPositions.add(idx);
  if(errorCountMode === 'perKey' || isNewPosition){
    errorEvents.push({ t: getElapsedMs()/1000 });
  }
}

function evaluateGoal(wpmVal, errorRatePct){
  const hasSpeedGoal = goalWpm > 0;
  const hasErrGoal = goalErrorRate > 0;
  if(!hasSpeedGoal && !hasErrGoal) return null; // no goal set
  const speedOk = !hasSpeedGoal || wpmVal >= goalWpm;
  const errOk = !hasErrGoal || errorRatePct <= goalErrorRate;
  return speedOk && errOk;
}

function renderGoalBadge(wpmVal, errorRatePct, goalMet){
  if(goalMet === null){
    goalBadgeEl.classList.remove('show', 'met', 'missed');
    return;
  }
  goalBadgeEl.classList.add('show');
  goalBadgeEl.classList.toggle('met', goalMet);
  goalBadgeEl.classList.toggle('missed', !goalMet);
  const parts = [];
  if(goalWpm > 0) parts.push(`${goalWpm} WPM`);
  if(goalErrorRate > 0) parts.push(`≤${goalErrorRate}% errors`);
  const goalText = parts.join(' & ');
  goalBadgeEl.textContent = goalMet
    ? `🎯 Goal met! (target: ${goalText})`
    : `Not quite — target was ${goalText}. Keep at it.`;
}

async function renderRecentGoals(){
  const history = await loadHistory();
  const withGoals = history.filter(r => typeof r.goalMet === 'boolean');
  if(withGoals.length === 0){
    recentGoalsEl.innerHTML = '<span class="recent-goals-empty">Set a WPM or error-rate goal above to start tracking it here.</span>';
    return;
  }
  const recent = withGoals.slice(-20);
  recentGoalsEl.innerHTML = '';
  recent.forEach(r=>{
    const dot = document.createElement('div');
    dot.className = 'recent-goal-dot ' + (r.goalMet ? 'met' : 'missed');
    const d = new Date(r.ts);
    const goalParts = [];
    if(r.goalWpm) goalParts.push(`${r.goalWpm} WPM`);
    if(r.goalErrorRate) goalParts.push(`≤${r.goalErrorRate}% errors`);
    dot.title = `${d.toLocaleDateString()} — ${r.wpm} WPM, ${(r.errorRatePct||0).toFixed(1)}% errors — target ${goalParts.join(' & ')} — ${r.goalMet ? 'met' : 'missed'}`;
    recentGoalsEl.appendChild(dot);
  });
}

async function finishSession(){
  sessionEnded = true;
  stopTimer();
  typeboxEl.disabled = true;

  const elapsedMs = getElapsedMs();
  const wpmVal = parseInt(document.getElementById('statWpm').textContent, 10) || 0;
  const stats = computeErrorStats();
  const elapsedSec = elapsedMs / 1000;
  wpmSamples.push({t: elapsedSec, wpm: wpmVal});

  const goalMet = evaluateGoal(wpmVal, stats.errorRatePct);

  await addSessionRecord({
    ts: Date.now(),
    durationMs: elapsedMs,
    wpm: wpmVal,
    accuracy: stats.accuracyPct,
    errorRatePct: stats.errorRatePct,
    errors: stats.errCount,
    errorCountMode,
    category,
    mode: sessionMode,
    goalWpm,
    goalErrorRate,
    goalMet
  });
  await renderWeeklyTracker();
  await renderRecentGoals();
  await refreshAchievement();

  summaryStatsEl.innerHTML = `
    <div class="summary-stat"><div class="label">WPM</div><div class="value" style="color:var(--accent)">${wpmVal}</div></div>
    <div class="summary-stat"><div class="label">${displayMode === 'errorRate' ? 'Error rate' : 'Accuracy'}</div><div class="value" style="color:var(--correct)">${displayMode === 'errorRate' ? stats.errorRatePct.toFixed(1) + '%' : stats.accuracyPct.toFixed(1) + '%'}</div></div>
    <div class="summary-stat"><div class="label">Errors</div><div class="value" style="color:var(--error)">${stats.errCount}</div></div>
    <div class="summary-stat"><div class="label">Duration</div><div class="value">${formatTime(elapsedSec)}</div></div>
  `;
  renderGoalBadge(wpmVal, stats.errorRatePct, goalMet);
  renderSessionChart();
  summaryPanel.classList.add('show');
  typeboxEl.blur();
}

/* ---------------- Events ---------------- */
function flashKeyVisual(key, isError){
  const lower = key.toLowerCase();
  const keyEl = document.querySelector(`.key[data-key="${lower === ' ' ? ' ' : lower}"]`);
  if(!keyEl) return;
  const cls = isError ? 'key-error' : 'pressed';
  keyEl.classList.add(cls);
  setTimeout(()=>keyEl.classList.remove(cls), isError ? 160 : 90);
}

typeboxEl.addEventListener('keydown', (e)=>{
  if(sessionEnded || isPaused) return;
  if(e.key.length !== 1) return; // let Backspace and other control keys behave natively

  const idx = typeboxEl.value.length;
  if(idx >= sessionText.length){ e.preventDefault(); return; }

  // Backspace mode: block further typing until the pending wrong character is removed
  if(errorMode === 'backspace' && isPendingError()){
    e.preventDefault();
    return;
  }

  const expected = sessionText[idx];
  const correct = (e.key === expected);

  if(errorMode === 'block' && !correct){
    e.preventDefault();
    totalKeystrokes++;
    recordError(idx);
    flashKeyVisual(e.key, true);
    if(shakeEnabled){
      promptEl.classList.add('shake');
      setTimeout(()=>promptEl.classList.remove('shake'), 160);
    }
    return;
  }

  startTimerIfNeeded();
  totalKeystrokes++;
  if(correct){
    correctKeystrokes++;
  } else {
    recordError(idx);
  }
  flashKeyVisual(e.key, !correct);
});

typeboxEl.addEventListener('input', ()=>{
  if(sessionEnded) return;
  if(typeboxEl.value.length > sessionText.length){
    typeboxEl.value = typeboxEl.value.slice(0, sessionText.length);
  }
  renderPrompt();
  updateStats();
  if(sessionMode === 'chars' && typeboxEl.value.length === sessionText.length){
    finishSession();
  }
});

function pauseSession(){
  if(isPaused || sessionEnded) return;
  if(startTime === null && pausedElapsedMs === 0) return; // nothing running yet
  pausedElapsedMs += (startTime ? Date.now() - startTime : 0);
  startTime = null;
  stopTimer();
  isPaused = true;
  typingPanel.classList.add('paused');
  pauseBanner.classList.add('show');
  typeboxEl.blur();
}

function resumeSession(){
  if(!isPaused || sessionEnded) return;
  isPaused = false;
  typingPanel.classList.remove('paused');
  pauseBanner.classList.remove('show');
  startTime = Date.now();
  timerHandle = setInterval(updateStats, 500);
  typeboxEl.focus();
}

function togglePause(){
  if(sessionEnded) return;
  if(isPaused) resumeSession();
  else pauseSession();
}

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    e.preventDefault();
    togglePause();
  }
});

document.getElementById('resumeBtn').addEventListener('click', resumeSession);

document.getElementById('startBtn').addEventListener('click', startSession);
document.getElementById('restartTopBtn').addEventListener('click', restartSession);
document.getElementById('restartBtn').addEventListener('click', restartSession);
document.getElementById('newSessionBtn').addEventListener('click', startSession);

/* ---------------- Per-user settings persistence ---------------- */
function gatherSettings(){
  return {
    sessionMode,
    sessionMinutes,
    sessionChars,
    selectedGroupId,
    selectedLessonIdx,
    errorMode,
    shakeEnabled,
    keyboardVisible: keyboardEl.classList.contains('show'),
    displayMode,
    errorCountMode,
    goalWpm,
    goalErrorRate
  };
}

function saveCurrentSettings(){
  if(!currentUser) return;
  window.tenfoldAPI.saveSettings(currentUser, gatherSettings()).catch(()=>{});
}

function applySettings(settings){
  settings = settings || {};
  sessionMode = settings.sessionMode === 'chars' ? 'chars' : 'time';
  sessionMinutes = typeof settings.sessionMinutes === 'number' ? settings.sessionMinutes : 3;
  sessionChars = typeof settings.sessionChars === 'number' ? settings.sessionChars : 500;

  const groupExists = LESSON_GROUPS.some(g => g.id === settings.selectedGroupId);
  selectedGroupId = groupExists ? settings.selectedGroupId : 'practical';
  const group = getCurrentGroup();
  selectedLessonIdx = (typeof settings.selectedLessonIdx === 'number' && settings.selectedLessonIdx < group.items.length)
    ? settings.selectedLessonIdx
    : (groupExists ? 0 : 6);
  category = getCurrentLessonItem().key;

  errorMode = settings.errorMode || 'block';
  displayMode = settings.displayMode === 'errorRate' ? 'errorRate' : 'accuracy';
  errorCountMode = settings.errorCountMode === 'perLetter' ? 'perLetter' : 'perKey';
  goalWpm = typeof settings.goalWpm === 'number' ? Math.max(0, Math.round(settings.goalWpm/5)*5) : 0;
  goalErrorRate = typeof settings.goalErrorRate === 'number' ? Math.max(0, Math.round(settings.goalErrorRate/2)*2) : 0;
  const keyboardVisible = settings.keyboardVisible !== false;
  const shake = settings.shakeEnabled !== false;

  [...modeSeg.children].forEach(b=>b.classList.toggle('active', b.dataset.mode === sessionMode));
  const isTime = sessionMode === 'time';
  timeCustom.style.display = isTime ? 'flex' : 'none';
  charsCustom.style.display = isTime ? 'none' : 'flex';
  timeInput.value = sessionMinutes;
  charsInput.value = sessionChars;
  buildPresets();

  [...errorSeg.children].forEach(b=>b.classList.toggle('active', b.dataset.err === errorMode));
  updateErrorHint();

  [...displaySeg.children].forEach(b=>b.classList.toggle('active', b.dataset.display === displayMode));
  [...errorCountSeg.children].forEach(b=>b.classList.toggle('active', b.dataset.count === errorCountMode));
  goalWpmInput.value = String(goalWpm);
  goalErrInput.value = String(goalErrorRate);

  buildGroupTabs();
  buildLessonTabs();
  refreshLessonLabel();

  setKeyboardVisible(keyboardVisible, true);
  setShakeEnabled(shake, true);
}

/* ---------------- Login / multi-user ---------------- */
let uiBuilt = false;

async function initLogin(){
  loginOverlay.classList.add('show');
  loginErrorEl.textContent = '';
  loginNameInputEl.value = '';
  let users = [];
  try{ users = await window.tenfoldAPI.listUsers(); }catch(e){ users = []; }
  renderLoginUsers(users);
  loginNameInputEl.focus();
}

function renderLoginUsers(users){
  loginUserListEl.innerHTML = '';
  if(!users || users.length === 0){
    loginSubEl.textContent = "Welcome! What's your name?";
    loginNameInputEl.placeholder = 'Enter your name';
  } else {
    loginSubEl.textContent = "Who's typing today?";
    loginNameInputEl.placeholder = 'Or create a new user…';
    users.forEach(name=>{
      const btn = document.createElement('button');
      btn.className = 'login-user-btn';
      btn.textContent = name;
      btn.addEventListener('click', ()=>selectUser(name));
      loginUserListEl.appendChild(btn);
    });
  }
}

async function selectUser(name){
  currentUser = name;
  loginOverlay.classList.remove('show');
  currentUserLabelEl.textContent = name;
  if(!uiBuilt){
    buildKeyboard();
    uiBuilt = true;
  }
  let settings = {};
  try{ settings = await window.tenfoldAPI.getSettings(name); }catch(e){ settings = {}; }
  try{ customImportedText = await window.tenfoldAPI.getCustomText(name); }catch(e){ customImportedText = ''; }
  customTextArea.value = customImportedText;
  refreshCustomTextCount();
  applySettings(settings);
  await renderWeeklyTracker();
  await renderRecentGoals();
  await refreshAchievement();
  startSession();
}

loginCreateBtn.addEventListener('click', async ()=>{
  const name = loginNameInputEl.value.trim();
  if(!name){
    loginErrorEl.textContent = 'Please enter a name.';
    return;
  }
  try{
    await window.tenfoldAPI.createUser(name);
    selectUser(name);
  }catch(e){
    loginErrorEl.textContent = 'Could not create that user. Try a different name.';
  }
});
loginNameInputEl.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    e.preventDefault();
    loginCreateBtn.click();
  }
});

switchUserBtn.addEventListener('click', ()=>{
  if(!sessionEnded && startTime) pauseSession();
  currentUser = null;
  initLogin();
});

/* ---------------- Init ---------------- */
initLogin();
