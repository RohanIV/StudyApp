// ═══════════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════════
function switchTab(tab) {
  document.getElementById('tab-quiz').classList.toggle('active', tab==='quiz');
  document.getElementById('tab-fc').classList.toggle('active', tab==='fc');
  document.getElementById('tab-tutor').classList.toggle('active', tab==='tutor');
  document.getElementById('tab-exam').classList.toggle('active', tab==='exam');
  document.getElementById('quiz-pane').style.display = tab==='quiz' ? 'block' : 'none';
  document.getElementById('fc-pane').style.display = tab==='fc' ? 'block' : 'none';
  document.getElementById('tutor-pane').style.display = tab==='tutor' ? 'block' : 'none';
  document.getElementById('exam-pane').style.display = tab==='exam' ? 'block' : 'none';
  if (tab==='quiz') { document.getElementById('score-display').style.display = quizState.inProgress ? 'flex':'none'; }
  else { document.getElementById('score-display').style.display = 'none'; }
}

// ═══════════════════════════════════════════════════════
// MODULE / SECTION DATA
// ═══════════════════════════════════════════════════════
const MODULES = {
  mod1:{label:'Module 1',subtitle:'Mobile Devices',sections:[
    {id:'1.1',label:'Mobile Device Hardware & Components',mod:'mod1'},
    {id:'1.2',label:'Connections & Accessories',mod:'mod1'},
    {id:'1.3',label:'Mobile Device Operating Systems',mod:'mod1'},
    {id:'1.4',label:'Troubleshooting Mobile Devices (Hardware)',mod:'mod1'},
    {id:'1.5',label:'Troubleshooting Mobile Device Software',mod:'mod1'},
    {id:'1.6',label:'Mobile OS & Application Security',mod:'mod1'},
    {id:'1.7',label:'Android Connection Settings',mod:'mod1'},
    {id:'1.8',label:'iOS Connection Settings',mod:'mod1'},
  ]},
  mod2:{label:'Module 2',subtitle:'Networking',sections:[
    {id:'2.1',label:'Network Architecture',mod:'mod2'},
    {id:'2.2',label:'Ports and Protocols',mod:'mod2'},
    {id:'2.3',label:'Wireless Networking',mod:'mod2'},
    {id:'2.4',label:'Network Hosts and Services',mod:'mod2'},
    {id:'2.5',label:'DNS and DHCP',mod:'mod2'},
    {id:'2.6',label:'VPNs and VLANs',mod:'mod2'},
    {id:'2.7',label:'Network Devices',mod:'mod2'},
    {id:'2.8',label:'SOHO Network Configuration',mod:'mod2'},
    {id:'2.9',label:'Internet Connections & Network Types',mod:'mod2'},
    {id:'2.10',label:'Networking Tools',mod:'mod2'},
    {id:'2.11',label:'Networking in Windows',mod:'mod2'},
    {id:'2.12',label:'Networking Commands',mod:'mod2'},
    {id:'2.13',label:'Troubleshooting Network Issues',mod:'mod2'},
  ]},
  mod3:{label:'Module 3',subtitle:'Hardware',sections:[
    {id:'3.1',label:'Display Components & Attributes',mod:'mod3'},
    {id:'3.2',label:'Basic Cables & Connections',mod:'mod3'},
    {id:'3.3',label:'Network Cables & Connectors',mod:'mod3'},
    {id:'3.4',label:'Storage Devices & RAID',mod:'mod3'},
    {id:'3.5',label:'Motherboards, CPUs & Add-on Cards',mod:'mod3'},
    {id:'3.6',label:'Power Supply Units',mod:'mod3'},
    {id:'3.7',label:'Printers & Multifunction Devices',mod:'mod3'},
    {id:'3.8',label:'Printer Maintenance',mod:'mod3'},
    {id:'3.9',label:'Troubleshooting: Motherboards/RAM/CPU',mod:'mod3'},
    {id:'3.10',label:'Troubleshooting: Storage & RAID',mod:'mod3'},
    {id:'3.11',label:'Troubleshooting: Video & Display',mod:'mod3'},
    {id:'3.12',label:'Troubleshooting: Printers',mod:'mod3'},
  ]},
  mod4:{label:'Module 4',subtitle:'Operating Systems',sections:[
    {id:'4.1',label:'Workstation Operating Systems',mod:'mod4'},
    {id:'4.2',label:'Common File Systems',mod:'mod4'},
    {id:'4.3',label:'OS Installation Types',mod:'mod4'},
    {id:'4.4',label:'OS Boot Methods',mod:'mod4'},
    {id:'4.5',label:'Storage Partitioning (MBR vs GPT)',mod:'mod4'},
    {id:'4.6',label:'Identifying Windows Editions',mod:'mod4'},
    {id:'4.7',label:'Windows Upgrades',mod:'mod4'},
    {id:'4.8',label:'Windows System Requirements',mod:'mod4'},
    {id:'4.9',label:'Task Manager',mod:'mod4'},
    {id:'4.10',label:'MMC Snap-ins',mod:'mod4'},
    {id:'4.11',label:'Windows OS Tools',mod:'mod4'},
    {id:'4.12',label:'Command Line Tools',mod:'mod4'},
    {id:'4.13',label:'Configuring Windows Settings',mod:'mod4'},
    {id:'4.14',label:'Windows Power Options',mod:'mod4'},
    {id:'4.15',label:'Windows File Explorer',mod:'mod4'},
    {id:'4.16',label:'Domains vs Workgroups',mod:'mod4'},
    {id:'4.17',label:'macOS System Configuration',mod:'mod4'},
    {id:'4.18',label:'macOS Features and Tools',mod:'mod4'},
    {id:'4.19',label:'Linux Components',mod:'mod4'},
    {id:'4.20',label:'Linux Tools',mod:'mod4'},
    {id:'4.21',label:'Application Installation',mod:'mod4'},
  ]},
  mod5:{label:'Module 5',subtitle:'Virtualization & Cloud Computing',sections:[
    {id:'5.1',label:'Virtualization Concepts',mod:'mod5'},
    {id:'5.2',label:'Cloud Computing',mod:'mod5'},
    {id:'5.3',label:'Cloud Productivity Tools',mod:'mod5'},
  ]},
  mod6:{label:'Module 6',subtitle:'Security',sections:[
    {id:'6.1',label:'Physical Security',mod:'mod6'},
    {id:'6.2',label:'Physical Access Security',mod:'mod6'},
    {id:'6.3',label:'Logical Security',mod:'mod6'},
    {id:'6.4',label:'Windows Firewall Configuration',mod:'mod6'},
    {id:'6.5',label:'Windows Users & Groups',mod:'mod6'},
    {id:'6.6',label:'NTFS & Share Permissions',mod:'mod6'},
    {id:'6.7',label:'Active Directory',mod:'mod6'},
    {id:'6.8',label:'Data Encryption',mod:'mod6'},
    {id:'6.9',label:'Wireless Security & Authentication',mod:'mod6'},
    {id:'6.10',label:'Malware Types',mod:'mod6'},
    {id:'6.11',label:'Malware Detection & Prevention',mod:'mod6'},
    {id:'6.12',label:'Social Engineering',mod:'mod6'},
    {id:'6.13',label:'Security Threats',mod:'mod6'},
    {id:'6.14',label:'Security Vulnerabilities',mod:'mod6'},
    {id:'6.15',label:'Malware Removal Process',mod:'mod6'},
    {id:'6.16',label:'Workstation Security',mod:'mod6'},
    {id:'6.17',label:'Data Destruction & Disposal',mod:'mod6'},
    {id:'6.18',label:'SOHO Network Security',mod:'mod6'},
    {id:'6.19',label:'Browser Security',mod:'mod6'},
    {id:'6.20',label:'Troubleshooting PC Security',mod:'mod6'},
  ]},
  mod7:{label:'Module 7',subtitle:'Operational Procedures',sections:[
    {id:'7.1',label:'Ticketing Systems',mod:'mod7'},
    {id:'7.2',label:'Asset Management',mod:'mod7'},
    {id:'7.3',label:'Document Types',mod:'mod7'},
    {id:'7.4',label:'Change Management',mod:'mod7'},
    {id:'7.5',label:'Workstation Backup and Recovery',mod:'mod7'},
    {id:'7.6',label:'Common Safety Procedures',mod:'mod7'},
    {id:'7.7',label:'Environmental Impact and Controls',mod:'mod7'},
    {id:'7.8',label:'Licensing and Policy Concepts',mod:'mod7'},
    {id:'7.9',label:'Communication and Professionalism',mod:'mod7'},
    {id:'7.10',label:'Basics of Scripting',mod:'mod7'},
    {id:'7.11',label:'Remote Access Technologies',mod:'mod7'},
    {id:'7.12',label:'Basic AI Concepts',mod:'mod7'},
    {id:'7.13',label:'Troubleshooting Methodology',mod:'mod7'},
  ]},
};

const LS_AI_VARIETY = 'comptia_ai_variety';
const LS_PROXY_URL = 'comptia_ai_proxy_url';
const LS_PROXY_SECRET = 'comptia_ai_proxy_secret';

function isAIVarietyEnabled() {
  return localStorage.getItem(LS_AI_VARIETY) === '1';
}
function getProxyUrl() {
  return (localStorage.getItem(LS_PROXY_URL) || '').trim();
}
function getProxySecret() {
  return (localStorage.getItem(LS_PROXY_SECRET) || '').trim();
}
function canUseLiveAI() {
  return navigator.onLine && isAIVarietyEnabled() && !!getProxyUrl();
}
/** POST { prompt } → { text } from your Cloudflare Worker (Groq). */
async function completeViaProxy(prompt) {
  const url = getProxyUrl();
  if (!url) throw new Error('No proxy URL saved');
  const headers = { 'Content-Type': 'application/json' };
  const sec = getProxySecret();
  if (sec) headers['X-Proxy-Secret'] = sec;
  let res;
  try {
    res = await fetch(url, { method: 'POST', headers, body: JSON.stringify({ prompt }) });
  } catch (e) {
    const msg = (e && e.message) || String(e);
    if (/Failed to fetch|NetworkError|Load failed|Network request failed/i.test(msg)) {
      throw new Error(
        'Could not reach your Worker URL (browser blocked the request or the network dropped it). ' +
          'Try: open DevTools → Network, reload, start a quiz, click the failed request and read the red status (e.g. blocked:mixed-content, ERR_NAME_NOT_RESOLVED). ' +
          'Confirm the URL is exactly https://…workers.dev from the Cloudflare dashboard. ' +
          'Disable VPN/ad-block/privacy extensions for this site, or try another network.'
      );
    }
    throw e;
  }
  let data;
  try {
    data = await res.json();
  } catch (_) {
    throw new Error(`Proxy ${res.status}: bad response`);
  }
  if (!res.ok) throw new Error(data.error || `Proxy ${res.status}`);
  const raw = (data.text != null ? data.text : data.response || '').toString().trim();
  const text = raw.replace(/```json|```/g, '').trim();
  if (!text) throw new Error('Empty model output');
  return text;
}

/** Groq often adds prose or fences; extract the first JSON object. */
function parseJSONFromModel(raw) {
  let t = String(raw ?? '').trim().replace(/```json\s*/gi, '').replace(/```/g, '').trim();
  try {
    return JSON.parse(t);
  } catch (_) {
    const i = t.indexOf('{');
    const j = t.lastIndexOf('}');
    if (i >= 0 && j > i) {
      return JSON.parse(t.slice(i, j + 1));
    }
    throw new Error('Invalid JSON from model');
  }
}

// ═══════════════════════════════════════════════════════
// TUTOR PANEL (context-aware AI chat)
// ═══════════════════════════════════════════════════════
const LS_TUTOR_CHAT = 'comptia_tutor_chat_v1';
let tutorState = {messages:[],busy:false};
function saveTutorHistory() {
  try {
    const trimmed = tutorState.messages.slice(-100);
    localStorage.setItem(LS_TUTOR_CHAT, JSON.stringify(trimmed));
  } catch (_) {}
}
function loadTutorHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS_TUTOR_CHAT) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((m) => m && typeof m.text === 'string' && typeof m.role === 'string')
      .map((m) => ({ role: m.role, text: m.text }))
      .slice(-100);
  } catch (_) {
    return [];
  }
}
function clearTutorHistory() {
  tutorState.messages = [];
  try { localStorage.removeItem(LS_TUTOR_CHAT); } catch (_) {}
  renderTutorLog();
}
function getTutorContext() {
  let secId = null;
  if (quizState && quizState.inProgress) secId = getCurrentSection();
  else if (quizState && quizState.selSection && quizState.selSection !== 'all') secId = quizState.selSection;
  else if (fcState && fcState.selSection && fcState.selSection !== 'all') secId = fcState.selSection;
  if (!secId) return { secId: '', label: 'General CompTIA A+ help', focus: '' };
  const meta = getQuizSectionMeta(secId);
  return {
    secId,
    label: `${secId} - ${meta.label}`,
    focus: SECTION_FOCUS[secId] || ''
  };
}
function renderTutorContextChip() {
  const el = document.getElementById('tutor-context-chip');
  if (!el) return;
  const ctx = getTutorContext();
  el.textContent = `Context: ${ctx.label}`;
}
function renderTutorLog() {
  const log = document.getElementById('tutor-chat-log');
  if (!log) return;
  if (!tutorState.messages.length) {
    log.innerHTML = `<div class="tutor-bubble system">Ask a study question. Example: "Explain port 443 vs 80 in plain English."</div>`;
    return;
  }
  log.innerHTML = tutorState.messages.map((m) => `<div class="tutor-bubble ${m.role}">${escFocusHtml(m.text)}</div>`).join('');
  log.scrollTop = log.scrollHeight;
}
function normalizeTutorText(text) {
  return String(text || '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\r/g, '')
    .trim();
}
function isDirectTutorQuestion(text) {
  const t = String(text || '').trim().toLowerCase();
  if (!t) return false;
  if (/^(what is|what are|define|explain|difference between|compare|tell me about|how does)/.test(t)) return true;
  if (/\b(vs\.?|versus)\b/.test(t)) return true;
  if (/^(why is|which is|which one|what is the best|best answer|correct answer|why is .* right|why is .* wrong)/.test(t)) return false;
  if (/\b(a\.|b\.|c\.|d\.|option|answer choice|correct answer|wrong answer)\b/.test(t)) return false;
  return false;
}
function buildTutorPrompt(userText) {
  const ctx = getTutorContext();
  const history = tutorState.messages
    .slice(-6)
    .map((m) => `${m.role === 'user' ? 'User' : 'Tutor'}: ${m.text}`)
    .join('\n');
  const directMode = isDirectTutorQuestion(userText);
  return `You are a friendly CompTIA A+ tutor. Give accurate, concise, practical explanations.\nRules:\n- Keep answers under 220 words unless asked for more.\n- Use bullet points when helpful.\n- If unsure, say what to verify.\n- Use simple language first, then a quick technical note.\n- Do NOT use quiz-marking language unless the student is clearly asking about a quiz answer.\n- Do NOT say "why it is right", "why it is wrong", or discuss wrong answers unless the student asks for exam-question reasoning.\n- If the student asks for a definition, explanation, or comparison, answer directly and naturally first.\n${directMode ? '- This is a direct knowledge question. Give a straightforward answer in plain English, then a short technical note if useful.\n- For comparisons, briefly define each item, then give the key difference.\n- Do not mention wrong answers or exam strategy.\n' : '- If the student is asking about a quiz/exam-style question, you may explain why the correct answer fits and why a common wrong answer is wrong.\n'}\nCurrent study context:\n- Section: ${ctx.secId || 'none'}\n- Section label: ${ctx.label}\n- Focus notes: ${ctx.focus || 'none'}\n\nRecent conversation:\n${history || 'none'}\n\nStudent question:\n${userText}`;
}
async function sendTutorMessage() {
  const input = document.getElementById('tutor-input');
  if (!input || tutorState.busy) return;
  const text = String(input.value || '').trim();
  await sendTutorText(text);
}
async function sendTutorText(text) {
  if (tutorState.busy) return;
  text = String(text || '').trim();
  if (!text) return;
  tutorState.messages.push({ role: 'user', text });
  saveTutorHistory();
  const input = document.getElementById('tutor-input');
  if (input) input.value = '';
  renderTutorLog();
  if (!canUseLiveAI()) {
    tutorState.messages.push({
      role: 'system',
      text: 'Tutor needs AI proxy access. Turn on AI variety and save your worker URL in quiz settings.'
    });
    saveTutorHistory();
    renderTutorLog();
    return;
  }
  tutorState.busy = true;
  const btn = document.querySelector('.tutor-send-btn');
  if (btn) btn.disabled = true;
  tutorState.messages.push({ role: 'assistant', text: 'Thinking...' });
  renderTutorLog();
  try {
    const prompt = buildTutorPrompt(text);
    const answer = await completeViaProxy(prompt);
    tutorState.messages[tutorState.messages.length - 1] = {
      role: 'assistant',
      text: normalizeTutorText(answer).slice(0, 2200)
    };
  } catch (e) {
    tutorState.messages[tutorState.messages.length - 1] = {
      role: 'system',
      text: `Tutor failed: ${(e && e.message) || String(e)}`
    };
  } finally {
    saveTutorHistory();
    tutorState.busy = false;
    if (btn) btn.disabled = false;
    renderTutorLog();
    renderTutorContextChip();
  }
}
function wireTutorEnterKey() {
  const input = document.getElementById('tutor-input');
  if (!input) return;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendTutorMessage();
    }
  });
}
function askAboutCurrentQuestion() {
  const area = document.getElementById('q-area');
  if (!area || !area.dataset.q) return;
  let q;
  try {
    q = JSON.parse(area.dataset.q);
  } catch (_) {
    return;
  }
  const letters = ['A','B','C','D'];
  const correctIdx = typeof q.correct === 'number' ? q.correct : 0;
  const correctLetter = letters[correctIdx] || 'A';
  const correctText = String((q.options && q.options[correctIdx]) || '').replace(/^[A-D]\.\s*/,'').trim();
  const bankExp = String(q.explanation || '').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  const optionsText = (q.options || []).map((opt, i) => `${letters[i]}. ${String(opt).replace(/^[A-D]\.\s*/,'').trim()}`).join('\n');
  const prompt = `I got this quiz question and need help understanding it.

NON-NEGOTIABLE FACTS (DO NOT CONTRADICT):
- Correct answer is ${correctLetter}
- Correct option text: ${correctText}

Question:
${q.question || ''}

Options:
${optionsText}

Official explanation from app:
${bankExp || '(none)'}

Please:
1) Explain the key concept in simple terms.
2) Explain why ${correctLetter} is correct.
3) Give one common wrong-answer trap (without changing the correct answer).
4) Keep the explanation consistent with the non-negotiable facts above.`;
  switchTab('tutor');
  const input = document.getElementById('tutor-input');
  if (input) input.value = prompt;
  sendTutorText(prompt);
}

// ═══════════════════════════════════════════════════════
// FLASHCARD DATA
// ═══════════════════════════════════════════════════════
const FC_DECKS = {
'1.1':[
  {t:'What type of battery is used in most mobile devices, and why must you use a vendor-specific charger?',d:'<strong>Lithium-ion (Li-ion)</strong> and <strong>Lithium-polymer (LiPo)</strong> are the rechargeable battery types. They degrade over time. Vendor chargers are often <strong>proprietary and model-specific</strong> — using the wrong one risks damage or safety hazards.'},
  {t:'What does SO-DIMM stand for, and what are the pin counts for DDR3, DDR4, and DDR5?',d:'<strong>Small Outline Dual Inline Memory Module</strong> — the RAM form factor used in laptops. Pin counts: <strong>DDR3 = 204, DDR4 = 260, DDR5 = 262</strong>. Modules are physically keyed so they cannot be swapped.'},
  {t:'Why can\'t you upgrade RAM in most mobile devices, unlike laptops?',d:'Mobile devices use <strong>integrated (soldered) RAM</strong> permanently fixed to the motherboard. Laptops use removable SO-DIMM slots. This makes mobile RAM non-upgradeable.'},
  {t:'What are the key differences between HDDs and SSDs in terms of speed, durability, and cost?',d:'<strong>HDD</strong> = mechanical/magnetic, slower, cheaper per GB, less durable (moving parts). <strong>SSD</strong> = non-mechanical/electrical, faster, more durable, lower power consumption, more expensive per GB.'},
  {t:'What is the SATA interface, what speed does it support, and what is it used for?',d:'<strong>Serial ATA</strong> — the most common storage interface for connecting HDDs and SSDs. Supports speeds up to <strong>6 Gbps</strong>. Ideal for general-purpose storage.'},
  {t:'What is mSATA, where is it used, and how does it compare to NVMe?',d:'<strong>Mini-SATA</strong> — a compact SATA variant for ultrabooks and space-constrained devices. Same speed ceiling as SATA (6 Gbps). <strong>Much slower than NVMe</strong>, which uses PCIe lanes.'},
  {t:'What is NVMe, how does it connect, and when should you use it?',d:'<strong>Non-Volatile Memory Express</strong> — uses PCIe lanes for significantly faster speeds than SATA. Connects via a <strong>PCIe slot or M.2 slot</strong>. Best for gaming, video editing, and performance-critical tasks.'},
  {t:'What are the five M.2 form factors and their lengths?',d:'All M.2 drives are 22mm wide. Lengths: <strong>2230</strong>=30mm, <strong>2242</strong>=42mm, <strong>2260</strong>=60mm, <strong>2280</strong>=80mm (most common laptop size), <strong>22110</strong>=110mm.'},
  {t:'What is the most critical precaution when replacing a Wi-Fi antenna in a laptop?',d:'<strong>Always follow the original routing path</strong>. Wi-Fi antennas run through the device bezel via delicate connectors. A pinched, twisted, or incorrectly routed antenna will degrade wireless performance.'},
  {t:'What are the three types of biometric sensors found on mobile devices?',d:'<strong>Fingerprint scanner</strong> — reads fingerprint patterns. <strong>Facial recognition</strong> — maps facial geometry. <strong>Voice recognition</strong> — identifies the user by voice. All used for secure device authentication.'},
  {t:'What is NFC, how far does it work, and what is it used for on mobile devices?',d:'<strong>Near-Field Communication</strong> — operates within <strong>a few centimetres</strong>. Used for <strong>contactless payments</strong> (Apple Pay, Google Pay) and short-range data exchange between devices.'},
  {t:'What causes a swollen battery, what are the warning signs, and how should you handle it?',d:'Caused by internal <strong>chemical reactions</strong> producing gas. Signs: <strong>bulging back cover</strong>, expanding frame. It is a <strong>fire hazard</strong> — handle with extreme care, never charge it, replace per manufacturer guidelines.'},
  {t:'How many pins does a DDR4 SO-DIMM have, and how does that differ from DDR3 and DDR5?',d:'DDR4 SO-DIMM = <strong>260 pins</strong>. DDR3 SO-DIMM = 204 pins. DDR5 SO-DIMM = 262 pins. Each generation uses a different pin count and is <strong>physically incompatible</strong> with other slots.'},
],
'1.2':[
  {t:'What USB connector is modern, reversible, and supports both fast data transfer and power delivery?',d:'<strong>USB-C</strong> — the current standard supporting high-speed data transfer and power delivery. Its reversible design replaces older directional connectors like microUSB and miniUSB.'},
  {t:'Which connector is Apple\'s proprietary standard for charging and data on older iPhones?',d:'The <strong>Lightning connector</strong> — Apple\'s proprietary standard for iPhones, older iPads, and accessories. It enables charging and data transfer and is being phased out in favour of USB-C.'},
  {t:'What is tethering, and what are the three connection methods available?',d:'Tethering shares a mobile device\'s internet connection. The three methods are: <strong>Wi-Fi hotspot</strong> (802.11x wireless), <strong>USB tethering</strong> (wired cable), and <strong>Bluetooth tethering</strong> (2.4 GHz wireless).'},
  {t:'What frequency does Bluetooth use, what is its range, and what devices does it connect?',d:'Bluetooth operates at <strong>2.4 GHz</strong> with a range of approximately <strong>10 metres (32 feet)</strong>. Used to connect peripherals: headphones, keyboards, mice, smartwatches, and speakers.'},
  {t:'What is a stylus, and what features does it support beyond basic touch input?',d:'A pen-shaped input tool for touchscreens. Advanced features include <strong>pressure sensitivity</strong> (variable line weight based on force), <strong>palm rejection</strong> (screen ignores resting hand), and gesture support.'},
  {t:'What does TRS stand for in a 3.5mm TRS audio jack, and what is it used for?',d:'<strong>Tip-Ring-Sleeve</strong> — an analog audio connector. Used for wired headsets and speakers. Carries an analog audio signal. Still common on laptops and audio equipment despite USB-C replacing it on phones.'},
  {t:'What is the main advantage of USB tethering over a Wi-Fi hotspot?',d:'USB tethering provides a <strong>stable, wired connection</strong> that typically delivers faster speeds and drains the phone battery less than running a Wi-Fi hotspot.'},
  {t:'What advantage does an external USB webcam have over a laptop\'s built-in camera?',d:'External webcams offer <strong>higher resolution, better lens quality, adjustable positioning, and more features</strong> like autofocus and low-light correction compared to the limited built-in cameras in most laptops.'},
],
'1.3':[
  {t:'What is iOS, which devices does it run on, and what file format does it use for apps?',d:'iOS is Apple\'s mobile OS for <strong>iPhones</strong>. App package format: <strong>.ipa</strong>. Uses major.minor.patch versioning (e.g., 16.4.2). Known for security and tight Apple ecosystem integration.'},
  {t:'What is iPadOS, how does it differ from iOS, and what app file format does it use?',d:'iPadOS is Apple\'s mobile OS for <strong>iPads</strong>, optimised for productivity with larger-screen features like split-screen. App format: <strong>.ipa</strong> — same as iOS, but tailored for tablet workflows.'},
  {t:'What is Android, why is it considered open-source, and what is its app file format?',d:'Android is Google\'s mobile OS. It\'s <strong>open-source</strong>, allowing OEMs to customise it heavily. App format: <strong>.apk (Android Package Kit)</strong>. Android 15 is codenamed Vanilla Ice Cream.'},
  {t:'What is an .ipa file and which mobile platforms use it?',d:'An <strong>.ipa (iOS App Store Package)</strong> file is the application format for <strong>iOS and iPadOS</strong>. It is required to install any app on Apple mobile devices.'},
  {t:'What is an .apk file, which platform uses it, and what is sideloading?',d:'An <strong>.apk (Android Package Kit)</strong> is the app format for Android. <strong>Sideloading</strong> means installing an .apk directly from outside the Play Store — possible by default on Android, not on iOS.'},
  {t:'What is End-of-Life (EOL) for a mobile OS, and why is it a security risk?',d:'EOL is the phase when a vendor <strong>completely stops issuing updates and security patches</strong> for an OS or device. Devices at EOL become increasingly vulnerable to known exploits with no fix available.'},
  {t:'What are update limitations, and how do they differ from End-of-Life (EOL)?',d:'Update limitations occur when <strong>older hardware cannot run newer OS versions</strong> — the device still works but misses new features and security fixes. EOL is complete cessation of all support.'},
  {t:'What is the codename for Android 15, and what comes after it?',d:'<strong>Android 15 = Vanilla Ice Cream</strong>. The next version, Android 16, will be codenamed <strong>Baklava</strong>. Android uses alphabetical dessert codenames for each major release.'},
  {t:'What compatibility concerns arise when sharing files between macOS and Windows systems?',d:'Differences in <strong>file systems (APFS for macOS vs NTFS for Windows)</strong> and package formats (.ipa vs .apk) can prevent file sharing or application interoperability between platforms.'},
],
'1.4':[
  {t:'A phone is dropped in water — what should you NOT do, and what SHOULD you do first?',d:'<strong>Do NOT power on the device</strong> — applying electricity to wet circuits causes short circuits. Instead: remove it from water, look for visual moisture signs, and allow <strong>adequate time to dry with ventilation</strong>.'},
  {t:'A device shows IP address 169.254.x.x — what does this mean and what caused it?',d:'This is an <strong>APIPA (Automatic Private IP Addressing)</strong> address — assigned automatically when the device <strong>cannot reach a DHCP server</strong>. The device can only communicate locally; no internet access.'},
  {t:'What are the signs of a swollen battery, and why is it dangerous?',d:'Signs: visibly <strong>bulging back cover</strong>, expanding device frame. A swollen battery is a <strong>fire and explosion hazard</strong> due to gas build-up. Never compress or charge it — replace immediately per manufacturer guidance.'},
  {t:'A touchscreen registers taps at the wrong location — what is this called and how do you fix it?',d:'This is <strong>cursor drift / touch calibration</strong> failure. Fix: <strong>clean the screen with a lint-free cloth</strong> (contamination is common cause), then use touchscreen recalibration settings if available.'},
  {t:'All wireless connections fail at once — Wi-Fi, Bluetooth, AND cellular. What should you check first?',d:'<strong>Check airplane mode</strong> — it disables all wireless radios simultaneously. This is always the first check when all wireless connectivity fails at the same time before investigating hardware issues.'},
  {t:'What is the digitizer in a mobile device, and what are the troubleshooting steps when it fails?',d:'The digitizer is the <strong>touch-sensitive layer</strong> of the screen detecting finger/stylus input. Steps: <strong>clean with lint-free cloth</strong>, use recalibration settings, inspect for physical damage, replace screen if needed.'},
  {t:'A device overheats during gaming — what are the recommended troubleshooting steps?',d:'<strong>Close unused applications</strong> to reduce CPU/GPU load. Move the device out of direct sunlight. Check for excessive resource utilisation. Overheating during charging + gaming simultaneously is very common.'},
  {t:'A charging cable only works when held at a specific angle — what component is most likely faulty?',d:'A <strong>physically damaged charging port</strong> — bent pins, debris buildup, or worn contacts cause intermittent charging. Visually inspect the port, try cleaning it, and replace the port housing if needed.'},
],
'1.5':[
  {t:'An app keeps crashing when opened — what is the FIRST and least invasive troubleshooting step?',d:'<strong>Force quit the application</strong> — this clears any frozen or conflicting processes. It is always the first step before more invasive options like reinstalling or restarting the device.'},
  {t:'What are the steps to troubleshoot an app that refuses to launch at all?',d:'1. <strong>Clear the app cache</strong>. 2. Restart the device. 3. Reinstall the app. 4. Verify OS compatibility and update if necessary. Work from least to most invasive.'},
  {t:'An OS update fails to install — what is the MOST likely cause and how do you verify it?',d:'Most likely cause: <strong>insufficient storage space</strong>. OS updates require significant free space. Check available storage in device settings and free up space before retrying the update.'},
  {t:'A device randomly restarts multiple times per day — what are the three main causes?',d:'<strong>Rogue applications</strong> consuming resources, <strong>corrupted OS files</strong>, or <strong>hardware faults</strong>. Troubleshoot by uninstalling recently added apps, running diagnostics, or reinstalling the OS.'},
  {t:'The screen won\'t autorotate when the device is tilted — what do you check FIRST?',d:'<strong>Check if screen rotation is enabled in settings</strong> — this is the most common and easily fixed cause. Only if the setting is already on should you suspect a gyroscope/motion sensor malfunction.'},
  {t:'Bluetooth headphones won\'t pair and keep disconnecting — what are the likely causes and fixes?',d:'Causes: signal interference, outdated firmware, device incompatibility. Fix: <strong>reset the Bluetooth device, update firmware, reboot both devices, then re-pair them</strong>.'},
  {t:'A device\'s battery drains very quickly — what software causes this and how do you fix it?',d:'Causes: <strong>power-hungry apps running in background</strong>, outdated software, or battery degradation. Fix: identify and remove power-hungry apps, update OS and apps, calibrate or replace the battery.'},
  {t:'NFC payments aren\'t working — what is the FIRST thing to check?',d:'<strong>Verify NFC is enabled in device settings</strong>. This is the simplest fix. If enabled, check device alignment (devices must be very close — a few cm), and confirm correct OS NFC settings.'},
],
'1.6':[
  {t:'A phone displays constant pop-up ads even when no apps are open — what is the likely cause?',d:'<strong>Adware infection</strong> — malware that injects intrusive advertisements across apps and the device interface. Fix: identify and remove adware apps, clear browser data, install antivirus software.'},
  {t:'An app looks identical to a bank app but has a different publisher name — what type of threat is this?',d:'<strong>Application spoofing</strong> — malicious apps that visually mimic legitimate ones to steal credentials or financial data. Prevention: always <strong>verify the publisher/developer name</strong> before downloading any app.'},
  {t:'What is root access on Android, what security risk does it create, and what can manage it?',d:'Rooting gives the user <strong>full system-level control</strong>, bypassing all security restrictions. This significantly increases malware exposure and data theft risk. <strong>MDM software</strong> can detect and restrict rooted devices.'},
  {t:'What is jailbreaking on iOS and why is it a security risk?',d:'Jailbreaking is the iOS equivalent of rooting — it <strong>bypasses Apple\'s security sandbox</strong>, allowing unofficial apps and OS modifications. It removes the protections that make iOS devices resistant to malware.'},
  {t:'What security risk does developer mode create, and when should it be disabled?',d:'Developer mode enables <strong>app sideloading and bypasses security restrictions</strong>. It should be <strong>disabled when not actively in use</strong>. Leaving it on allows unauthorised app installations without app store vetting.'},
  {t:'What are fake security warnings on a mobile device, and how should a user respond?',d:'<strong>Scareware</strong> — rogue apps mimicking security software to frighten users into calling fake numbers or installing more malware. Response: <strong>never click the alerts</strong>, remove the rogue app, use trusted security software.'},
  {t:'What is sideloading, which OS allows it by default, and what is the security risk?',d:'Installing apps from <strong>outside the official app store</strong>. Android allows sideloading by default; iOS requires a jailbreak. The risk is apps from unofficial sources are not vetted for malware.'},
  {t:'What is MDM and what security policies can it enforce on corporate mobile devices?',d:'<strong>Mobile Device Management</strong> — software allowing IT to enforce policies: preventing root/jailbreak, requiring encryption, enforcing PINs, remotely wiping lost devices, and controlling app installations.'},
  {t:'What are the signs of data leakage on a mobile device and how do you respond?',d:'Signs: <strong>unexplained high data usage</strong>, unexpected app behaviour, unfamiliar outgoing connections. Response: remove suspicious apps, enable encryption, and factory reset if compromise is confirmed.'},
],
'1.7':[
  {t:'Where do you navigate in Android to enable or disable Wi-Fi and view connection properties?',d:'<strong>Settings → Connections → Wi-Fi</strong>. From here you can enable/disable Wi-Fi, scan for available networks, connect, and view connection details like IP address, gateway, and signal strength.'},
  {t:'Where do you navigate in Android to pair or unpair a Bluetooth device?',d:'<strong>Settings → Connections → Bluetooth</strong>. Enable/disable Bluetooth, scan for nearby devices, pair new devices, and unpair (forget) existing paired devices.'},
  {t:'Where do you configure NFC and contactless payments in Android?',d:'<strong>Settings → Connections → NFC and contactless payment</strong>. From here you enable/disable NFC and configure which app (e.g., Google Pay) is used for default contactless payments.'},
],
'1.8':[
  {t:'Where do you navigate in iOS to enable Wi-Fi and connect to a network?',d:'<strong>Settings → Wi-Fi</strong>. Enable/disable Wi-Fi, see available networks, connect, and view connection properties including IP address, subnet mask, DNS server, and gateway.'},
  {t:'Where do you go in iOS to pair a new Bluetooth device?',d:'<strong>Settings → Bluetooth</strong>. Enable/disable Bluetooth, pair new devices by selecting them from the discovered list, and forget/unpair existing devices.'},
  {t:'Where do you check and manage cellular data usage on an iPhone?',d:'<strong>Settings → Cellular</strong>. Enable/disable cellular data, view data usage broken down per app, manage cellular plan options, and configure roaming settings.'},
],
// ─── MODULE 2 ───
'2.1':[
  {t:'How does a network switch decide where to forward a frame — what address does it use and at which OSI layer?',d:'A switch forwards frames using <strong>MAC addresses</strong> (Layer 2). It maintains a MAC address table mapping addresses to ports. This is what differentiates a switch from a hub, which broadcasts to all ports.'},
  {t:'What is a router\'s job in a network, and what type of address does it use to make decisions?',d:'A router forwards packets <strong>between different networks</strong> using <strong>IP addresses</strong> (Layer 3). It connects LANs together and to the internet using routing tables to determine the best path.'},
  {t:'What is the Client/Server network model and where is it commonly used?',d:'A model where <strong>dedicated servers</strong> provide resources and <strong>clients</strong> request them. Centralised management through a domain controller. Standard in business environments for controlled, scalable networking.'},
  {t:'What is the Peer-to-Peer (P2P) network model and what are its limitations?',d:'Every device acts as <strong>both client and server simultaneously</strong>. No central server or authority. Simple and cheap for small setups (home networks/workgroups). Difficult to manage and secure at scale.'},
  {t:'What type of fiber is used for long-distance WAN connections, and what type is used for short LAN runs?',d:'<strong>Single-mode fiber</strong> transmits one light ray — ideal for long-distance WAN and FTTH deployments. <strong>Multi-mode fiber</strong> allows multiple light paths — used for shorter distances within buildings or campuses.'},
  {t:'Why is twisted pair cable twisted, and what is the maximum Ethernet distance for Cat5e/Cat6?',d:'Pairs are twisted to <strong>reduce electromagnetic interference (crosstalk)</strong> between wires. Cat5e/Cat6 supports Ethernet up to <strong>100 metres</strong> at 1 Gbps (Cat5e) and 10 Gbps (Cat6).'},
  {t:'Why is fiber optic cable immune to EMI, and what other advantages does it have over copper?',d:'Fiber transmits <strong>light pulses, not electrical signals</strong>, so it is completely immune to EMI. It also supports <strong>much higher bandwidth</strong> and <strong>longer distances</strong> than copper — ideal for backbone and WAN links.'},
],
'2.2':[
  {t:'What are the two port numbers used by FTP, and what does each port handle?',d:'<strong>Port 21</strong> = command/control channel. <strong>Port 20</strong> = active data transfer. FTP is unencrypted — use SFTP (port 22) or FTPS for secure file transfers.'},
  {t:'What protocol provides encrypted remote command-line access, and what port does it use?',d:'<strong>SSH (Secure Shell) — port 22</strong>. It encrypts all traffic including credentials. Replaces the insecure Telnet (port 23) for all remote server administration.'},
  {t:'Why should Telnet never be used in a production environment, and what replaced it?',d:'Telnet (port 23) transmits all data — including <strong>passwords — in plain text</strong>, making it trivially easy to intercept. It has been replaced by <strong>SSH (port 22)</strong> for secure remote access.'},
  {t:'What does SMTP do, and what is the difference between port 25 and port 587?',d:'SMTP (<strong>Simple Mail Transfer Protocol</strong>) handles email delivery. <strong>Port 25</strong> = server-to-server email transfer. <strong>Port 587</strong> = authenticated client email submission (from mail client to mail server).'},
  {t:'What is DNS, what port does it use, and which transport protocols does it rely on?',d:'<strong>Domain Name System</strong> — resolves hostnames to IP addresses. Port <strong>53</strong>. Uses <strong>UDP</strong> for standard queries (fast) and <strong>TCP</strong> for zone transfers (reliable).'},
  {t:'Which port does the DHCP server listen on, and which does the DHCP client use?',d:'DHCP <strong>server = port 67</strong>. DHCP <strong>client = port 68</strong>. Memory tip: <strong>server 67, client 68</strong>. Both use UDP since DHCP operates before an IP address is assigned.'},
  {t:'What are the port numbers for HTTP and HTTPS, and what is the key difference between them?',d:'<strong>HTTP = port 80</strong> (unencrypted web traffic). <strong>HTTPS = port 443</strong> (encrypted with TLS). HTTPS should always be preferred — HTTP transmits data including form entries in plain text.'},
  {t:'What is the difference between POP3 and IMAP, and which port does each use?',d:'<strong>POP3 (port 110)</strong>: downloads email to the client and deletes from server — single-device use. <strong>IMAP (port 143)</strong>: syncs email across multiple devices, keeps email on server — best for multi-device.'},
  {t:'What protocol handles Windows file and printer sharing, and what port does it use?',d:'<strong>SMB/CIFS (Server Message Block)</strong> — Windows file and printer sharing. Modern port: <strong>445</strong>. Older NetBIOS-based alternative: port 139.'},
  {t:'Which Microsoft protocol enables graphical remote desktop access to Windows, and what port does it use?',d:'<strong>RDP (Remote Desktop Protocol) — port 3389</strong>. Provides full graphical remote access to Windows desktops. Microsoft proprietary — requires the Remote Desktop service to be enabled.'},
  {t:'What is LDAP used for, and what ports does standard LDAP and secure LDAPS use?',d:'<strong>LDAP (Lightweight Directory Access Protocol)</strong> queries directory services like Active Directory for user accounts and group policies. Standard LDAP = <strong>port 389</strong>. Secure LDAPS = <strong>port 636</strong>.'},
  {t:'What is the fundamental difference between TCP and UDP? Give an example use case for each.',d:'<strong>TCP</strong>: connection-oriented, reliable, error-checking, retransmission — used for web browsing, email, file transfers. <strong>UDP</strong>: connectionless, no delivery guarantee, fast — used for VoIP, video streaming, gaming.'},
  {t:'What are the three port number ranges defined by IANA, and what are their boundaries?',d:'<strong>Well-Known: 0–1023</strong> (assigned services like 80, 443, 22). <strong>Registered: 1024–49151</strong> (vendor applications). <strong>Dynamic/Ephemeral: 49152–65535</strong> (temporary client connections).'},
],
'2.3':[
  {t:'What are the key specs of 802.11ax (Wi-Fi 6/6E) — speed, frequency bands, and special features?',d:'Max speed: <strong>9.6 Gbps</strong>. Operates on <strong>2.4 GHz, 5 GHz, and 6 GHz</strong>. Wi-Fi 6E specifically adds the 6 GHz band. Features MU-MIMO and OFDMA for better performance in crowded environments.'},
  {t:'How does 802.11ac (Wi-Fi 5) differ from 802.11ax, and what frequency does it use?',d:'802.11ac operates on <strong>5 GHz only</strong> at up to <strong>1.3 Gbps</strong>. It introduced MU-MIMO. Slower and less flexible than 802.11ax but still very common in current environments.'},
  {t:'What are the advantages and disadvantages of the 2.4 GHz Wi-Fi band vs. 5 GHz?',d:'<strong>2.4 GHz</strong>: longer range, better wall penetration, but only 3 non-overlapping channels (1, 6, 11) — more crowded/interference. <strong>5 GHz</strong>: faster speeds, many more channels, but shorter range.'},
  {t:'Why are only channels 1, 6, and 11 used in the 2.4 GHz band — what happens if you use others?',d:'2.4 GHz has only <strong>3 non-overlapping channels: 1, 6, and 11</strong>. Using any other channel overlaps with adjacent channels, causing <strong>co-channel interference</strong> that degrades network performance.'},
  {t:'What is co-channel interference, what causes it, and how do you fix it?',d:'Multiple access points using the <strong>same Wi-Fi channel in the same area</strong>, causing competing transmissions and performance degradation. Fix: configure nearby APs to use different non-overlapping channels.'},
  {t:'At what frequency does NFC operate, and what is its maximum useful range?',d:'NFC operates at <strong>13.56 MHz</strong>. Maximum range is <strong>a few centimetres</strong> — intentionally short for security. This short range is what makes contactless payments secure.'},
  {t:'What is RFID, how does it differ from NFC, and what is it used for?',d:'<strong>Radio Frequency Identification</strong> — uses radio waves to identify objects via embedded tags. Longer range than NFC. Used for <strong>inventory tracking, access control cards, and asset management</strong>.'},
],
'2.4':[
  {t:'What is a UTM appliance and what security functions does it combine?',d:'<strong>Unified Threat Management</strong> — combines <strong>firewall, IDS/IPS, web filtering, and antivirus</strong> into one device. Simplifies security management for small-to-medium businesses by replacing multiple separate appliances.'},
  {t:'What does a proxy server do, and what are its three main functions?',d:'A proxy sits between clients and the internet providing: <strong>caching</strong> (faster repeated requests), <strong>access control</strong> (block sites/content filtering), and <strong>anonymity</strong> (hides client IP from external servers).'},
  {t:'What does a load balancer do and why is it used?',d:'Distributes incoming network traffic across <strong>multiple servers</strong> to prevent overloading any single server. Improves <strong>availability, reliability, and performance</strong> for high-traffic services and web applications.'},
  {t:'What is a Syslog server and why is it important for network management?',d:'Collects, stores, and forwards <strong>log data from routers, switches, and firewalls</strong>. Essential for <strong>security monitoring, compliance auditing, and troubleshooting</strong> by providing a centralised log record.'},
  {t:'Why must SCADA systems be isolated from corporate networks?',d:'SCADA controls critical infrastructure (power, water, utilities). These systems often run <strong>legacy OSes with known vulnerabilities</strong>. Connecting to corporate or internet-facing networks creates catastrophic risk.'},
  {t:'What does AAA stand for, and what is RADIUS an example of?',d:'<strong>Authentication</strong> (who are you?), <strong>Authorisation</strong> (what can you access?), <strong>Accounting</strong> (what did you do?). <strong>RADIUS</strong> is a common AAA protocol used to manage network access control.'},
  {t:'What does an NTP server do, and why is time synchronisation critical on a network?',d:'<strong>Network Time Protocol</strong> server synchronises clocks across all network devices. Accurate time is critical for <strong>log correlation</strong> (timestamps matching), <strong>Kerberos authentication</strong>, and certificate validity.'},
],
'2.5':[
  {t:'What does a DNS A record do, and what type of address does it map to?',d:'A DNS <strong>A record</strong> maps a <strong>hostname to an IPv4 address</strong>. E.g., www.example.com → 93.184.216.34. It is the most fundamental DNS record and the first one looked up for most website visits.'},
  {t:'What does a DNS AAAA record do, and how does it differ from an A record?',d:'A DNS <strong>AAAA ("Quad-A") record</strong> maps a hostname to an <strong>IPv6 address</strong>. It works exactly like an A record but for the 128-bit IPv6 address format instead of 32-bit IPv4.'},
  {t:'What is a DNS CNAME record and when would you use one?',d:'A <strong>CNAME (Canonical Name)</strong> record creates an <strong>alias pointing to another hostname</strong>. E.g., mail.example.com → example.com. Used when multiple names should resolve to the same destination.'},
  {t:'What is a DNS MX record and what does it control?',d:'A <strong>Mail Exchanger (MX) record</strong> specifies the <strong>mail server responsible for accepting email</strong> for a domain. Multiple MX records can exist with priority values — lower number = higher priority.'},
  {t:'What is an SPF record and what does it prevent?',d:'<strong>Sender Policy Framework</strong> — a DNS TXT record that lists <strong>which mail servers are authorised to send email</strong> for a domain. It helps receiving servers identify and reject spoofed email.'},
  {t:'What is DKIM and how does it verify the authenticity of an email?',d:'<strong>DomainKeys Identified Mail</strong> — adds a <strong>cryptographic digital signature</strong> to outgoing emails. Receiving servers verify this signature to confirm the email genuinely came from the domain and was not altered.'},
  {t:'What is DMARC and how does it build on SPF and DKIM?',d:'<strong>Domain-based Message Authentication, Reporting & Conformance</strong> — uses both SPF and DKIM to define a <strong>policy for handling unauthenticated email</strong> (reject/quarantine/report) and provides reporting.'},
  {t:'What does the DHCP DORA process stand for, and what happens at each step?',d:'<strong>D</strong>iscover: client broadcasts looking for a DHCP server. <strong>O</strong>ffer: server offers an IP. <strong>R</strong>equest: client formally requests that IP. <strong>A</strong>cknowledgment: server confirms and assigns the IP.'},
  {t:'What is a DHCP reservation and when would you configure one?',d:'A reservation <strong>binds a specific IP address to a device\'s MAC address</strong> — that device always receives the same IP from DHCP. Used for printers, servers, IP cameras, and other devices needing consistent addresses.'},
  {t:'A device shows IP 169.254.x.x — what is this called, what caused it, and what does it mean for the user?',d:'This is an <strong>APIPA (Automatic Private IP Addressing)</strong> address — assigned automatically when <strong>no DHCP server responded</strong>. The device can only communicate locally and cannot access the internet.'},
  {t:'What is a DHCP scope and what does it define?',d:'A DHCP scope is the <strong>pool of IP addresses a DHCP server can assign</strong> to clients. E.g., 192.168.1.10–192.168.1.254. It must fall within the network\'s subnet and excludes reserved/excluded addresses.'},
],
'2.6':[
  {t:'What is a Remote Access VPN and who typically uses it?',d:'A Remote Access VPN lets a <strong>single user securely connect to a private network from any location</strong> over the internet. Used by remote workers to access company file servers, applications, and internal resources.'},
  {t:'What is a Site-to-Site VPN and how does it differ from Remote Access VPN?',d:'A Site-to-Site VPN connects <strong>two entire networks</strong> (e.g., a head office and a branch office) through VPN gateways. Both sites communicate as if on the same LAN — no per-user VPN client needed.'},
  {t:'What are the three key benefits of using a VPN?',d:'1. <strong>Encryption</strong>: all traffic is encrypted, preventing eavesdropping. 2. <strong>Security</strong>: protects data on untrusted public networks. 3. <strong>Access control</strong>: restricts private resources to authenticated users only.'},
  {t:'What is a VLAN, and how does it segment a network without using separate physical hardware?',d:'A <strong>Virtual LAN</strong> logically separates a physical network into <strong>isolated broadcast domains</strong> using a managed switch. Devices on different VLANs cannot communicate without passing through a router.'},
  {t:'What is VLAN tagging, and which IEEE standard defines it?',d:'VLAN tagging adds a VLAN ID to Ethernet frames so managed switches can route traffic to the correct VLAN. Defined by <strong>IEEE 802.1Q</strong>. Untagged (native) traffic goes to the default VLAN.'},
  {t:'What are the three main benefits of implementing VLANs on a network?',d:'1. <strong>Security</strong>: isolates sensitive segments (e.g., IoT, finance). 2. <strong>Reduced broadcast traffic</strong>: each VLAN is a separate broadcast domain. 3. <strong>Simplified management</strong>: logical grouping regardless of physical location.'},
  {t:'What is the key difference between a managed and an unmanaged switch?',d:'<strong>Managed</strong>: configurable — supports VLANs, QoS, SNMP monitoring, and port mirroring. <strong>Unmanaged</strong>: plug-and-play with no configuration options — no VLANs, no advanced features.'},
],
'2.7':[
  {t:'What is IEEE 802.3af (standard PoE) and what is its maximum power output?',d:'<strong>802.3af</strong> is standard Power over Ethernet delivering up to <strong>15.4 watts per port</strong>. Suitable for IP phones, basic IP cameras, and low-power Wi-Fi access points.'},
  {t:'What is IEEE 802.3at (PoE+) and how does it differ from standard PoE?',d:'<strong>802.3at (PoE+)</strong> is enhanced Power over Ethernet delivering up to <strong>25.5 watts per port</strong>. Used for higher-power devices like PTZ cameras, dual-radio APs, and video phones.'},
  {t:'What is a MAC address, and what do the first 3 bytes vs the last 3 bytes represent?',d:'A <strong>48-bit hexadecimal address</strong> uniquely identifying a NIC. <strong>First 3 bytes = OUI</strong> (Organizationally Unique Identifier — identifies the vendor/manufacturer). <strong>Last 3 bytes</strong> = unique identifier for that specific NIC.'},
  {t:'What does OUI stand for in a MAC address, and what does it identify?',d:'<strong>Organizationally Unique Identifier</strong> — the first 3 bytes of a MAC address, assigned by IEEE to identify the <strong>vendor/manufacturer</strong>. E.g., all network cards from the same manufacturer share the same OUI prefix.'},
  {t:'What is an ONT, and when is it required?',d:'An <strong>Optical Network Terminal</strong> converts <strong>fiber optic light signals into electrical signals</strong> that standard network equipment can use. Required in <strong>FTTH (Fiber to the Home)</strong> deployments.'},
  {t:'What is DOCSIS, and which type of internet connection uses it?',d:'<strong>Data Over Cable Service Interface Specification</strong> — the standard enabling high-speed internet over existing <strong>coaxial cable TV infrastructure</strong>. All cable modems use DOCSIS.'},
  {t:'What is the difference between a standalone AP and a lightweight AP?',d:'<strong>Standalone AP</strong>: self-managed with its own configuration. <strong>Lightweight AP</strong>: managed centrally by a <strong>Wireless LAN Controller (WLC)</strong> — all configuration is handled at the controller. Preferred in enterprise environments.'},
],
'2.8':[
  {t:'What are IPv4 address classes A, B, and C — what ranges and default subnet masks do they use?',d:'<strong>Class A</strong>: 1–126, mask /8 (255.0.0.0), large networks. <strong>Class B</strong>: 128–191, mask /16 (255.255.0.0), medium networks. <strong>Class C</strong>: 192–223, mask /24 (255.255.255.0), small networks.'},
  {t:'What are the three private IP address ranges, and why can\'t they be used on the public internet?',d:'<strong>Class A</strong>: 10.0.0.0/8. <strong>Class B</strong>: 172.16.0.0–172.31.255.255. <strong>Class C</strong>: 192.168.0.0/16. These are <strong>not routable on the public internet</strong> — ISP routers drop traffic from these ranges.'},
  {t:'What does the subnet mask /24 (255.255.255.0) mean, and how many usable hosts does it provide?',d:'A /24 subnet has 256 total addresses (2^8). Subtract the network address and broadcast address = <strong>254 usable host addresses</strong>. Most common subnet in small office and home networks.'},
  {t:'What is the default gateway, and what happens if it is configured incorrectly?',d:'The default gateway is the <strong>router\'s IP on the local subnet</strong>. All traffic for other networks is sent here first. If misconfigured, the device can reach local devices but <strong>cannot access the internet or other networks</strong>.'},
  {t:'How is an IPv6 address different from IPv4 in terms of bit length and format?',d:'IPv6 uses <strong>128 bits</strong> (vs IPv4\'s 32 bits) providing a vastly larger address space. Written as <strong>8 groups of 4 hexadecimal digits</strong> separated by colons. Leading zeros and consecutive zero groups can be abbreviated with ::.'},
  {t:'A device gets IP 169.254.22.100 — what does this tell a technician, and what should they check?',d:'This is an <strong>APIPA address</strong> — the device could not reach a DHCP server. Check: is the DHCP server running? Is the device connected to the network? Run <strong>ipconfig /release then /renew</strong> after resolving.'},
  {t:'When should you use a static IP address versus a dynamic (DHCP) address?',d:'<strong>Static</strong>: manually assigned fixed address — used for <strong>servers, printers, routers</strong>, and devices that need a consistent address. <strong>Dynamic (DHCP)</strong>: automatically assigned — used for <strong>workstations and mobile devices</strong>.'},
],
'2.9':[
  {t:'What are the two main disadvantages of satellite internet compared to other connection types?',d:'<strong>High latency</strong> (600ms+ round-trip due to orbital distance) and <strong>susceptibility to weather</strong> — rain, clouds, and obstructions degrade performance. Best used only where no other option exists.'},
  {t:'Why is fiber optic internet immune to EMI, and what device is required at the customer premises?',d:'Fiber transmits <strong>light pulses</strong>, not electrical signals — no electromagnetic interference possible. An <strong>ONT (Optical Network Terminal)</strong> is required to convert the light signal to electrical for home equipment.'},
  {t:'What is a PAN, what technology does it typically use, and what devices connect to it?',d:'<strong>Personal Area Network</strong> — covers very short distances (~10 metres). Typically uses <strong>Bluetooth</strong>. Connects personal devices: smartphone to headphones, laptop to mouse, smartwatch to phone.'},
  {t:'What is a MAN, and how does it differ from a LAN and WAN?',d:'<strong>Metropolitan Area Network</strong> — spans a <strong>city or large campus</strong> using high-speed fiber (Metro Ethernet). Larger than a LAN (building/campus) but smaller than a WAN (national/global).'},
  {t:'What is a SAN, what technology does it use, and what is it used for?',d:'<strong>Storage Area Network</strong> — a high-speed enterprise network using <strong>Fibre Channel</strong> to provide <strong>block-level storage access</strong> from servers. Used in data centres for databases and virtualisation.'},
  {t:'What is a WISP and under what circumstances is it used?',d:'<strong>Wireless Internet Service Provider</strong> — delivers internet via <strong>radio antennas</strong> in rural or suburban areas where cable or fiber infrastructure doesn\'t exist. Typically requires <strong>line-of-sight</strong> to the tower.'},
],
'2.10':[
  {t:'What is a toner probe, how does it work, and when would you use it?',d:'A two-part tool: the <strong>toner</strong> injects a signal into one end of a cable; the <strong>probe</strong> detects it at the other end. Used to <strong>identify and trace cables</strong> in walls, bundles, or patch panels without labelling.'},
  {t:'What does a cable tester verify, and when should you use one?',d:'Verifies <strong>cable continuity, correct pin-to-pin wiring order, and detects faults</strong> like split pairs, opens, or shorts. Use after creating or running a new Ethernet cable to confirm it is wired correctly.'},
  {t:'What does a crimper do, and which connector types does it work with?',d:'A crimper physically presses connector pins into cable wires when attaching <strong>RJ-45 (Ethernet) or RJ-11 (telephone) connectors</strong> to the end of a cable. Essential for making custom-length network cables.'},
  {t:'What does a punchdown tool do, and where is it used?',d:'Terminates individual wires into <strong>patch panels and keystone jacks</strong> using an IDC (Insulation Displacement Connector). The blade seats the wire and trims the excess in one motion.'},
  {t:'What does a loopback plug do, and what problem does it help diagnose?',d:'Redirects a device\'s <strong>output signal back into its own input port</strong>. Used to test whether a <strong>network port or NIC interface is functioning</strong> correctly, ruling out external cabling as the problem.'},
  {t:'What does a network tap do, and who uses it?',d:'Passively <strong>copies network traffic for monitoring without interrupting data flow</strong>. Used by <strong>security analysts</strong> to perform packet capture and analysis without the monitored devices detecting it.'},
  {t:'What does a Wi-Fi analyzer show, and when would a technician use one?',d:'Shows <strong>SSIDs, signal strength (dBm), channel usage, and interference</strong> from nearby networks. Used to optimise AP placement, identify channel congestion, and troubleshoot intermittent wireless issues.'},
],
'2.11':[
  {t:'What is the difference between a Windows Domain and a Workgroup, and which is used in business?',d:'<strong>Domain</strong>: centralised management by a domain controller — user accounts, policies, and resources managed in one place — standard in <strong>business environments</strong>. <strong>Workgroup</strong>: peer-to-peer, no central control — home/small office.'},
  {t:'What is a UNC path, and give an example of its format?',d:'<strong>Universal Naming Convention</strong> — the standard Windows format for accessing network shares: <strong>\\\\computername\\sharename</strong>. Example: \\\\server01\\marketing — gives access to the "marketing" share on server01.'},
  {t:'Which Windows command maps a network share to a drive letter, and what is its syntax?',d:'The <strong>net use</strong> command. Syntax: <strong>net use Z: \\\\server\\folder</strong>. This maps the share to drive letter Z, making it accessible like a local drive. Add /persistent:yes to survive reboots.'},
  {t:'What are the three Windows Firewall profiles and what makes the Public profile different?',d:'<strong>Public</strong>: most restrictive — blocks most sharing and discovery for untrusted networks (Wi-Fi at a café). <strong>Private</strong>: relaxed — trusted home/office networks. <strong>Domain</strong>: controlled by Group Policy.'},
  {t:'What does a proxy server setting in Windows do, and when would you configure one?',d:'Routes web traffic through a proxy server for <strong>caching, content filtering, or access control</strong>. Configured in network settings. Common in corporate environments to monitor and filter employee web access.'},
  {t:'What is a metered connection in Windows and why would you enable it?',d:'Marks a network connection as <strong>data-limited</strong>. Windows reduces background data usage — pausing large automatic updates and syncs. Used on <strong>cellular or data-capped connections</strong> to prevent unexpected overages.'},
],
'2.12':[
  {t:'What do ipconfig /release and ipconfig /renew do, and when would you use them?',d:'<strong>ipconfig /release</strong>: surrenders the current DHCP-assigned IP. <strong>ipconfig /renew</strong>: requests a fresh IP from the DHCP server. Use when a device has an APIPA address or incorrect IP configuration.'},
  {t:'What does ipconfig /flushdns do, and when is it needed?',d:'Clears the local <strong>DNS resolver cache</strong> — removing all stored hostname-to-IP mappings. Use when DNS issues persist after the correct IP has been updated on the DNS server but old entries are still cached locally.'},
  {t:'What does the tracert command do, and what is its Linux equivalent?',d:'<strong>tracert</strong> traces the route packets take to a destination, displaying each <strong>router hop with response time</strong>. The Linux equivalent is <strong>traceroute</strong>. Useful for identifying where connections slow down or fail.'},
  {t:'What does pathping do, and why is it more useful than tracert alone for VoIP issues?',d:'<strong>pathping</strong> combines ping and tracert — it shows each hop AND measures <strong>packet loss and latency at every hop</strong>. Invaluable for diagnosing <strong>jitter and VoIP quality</strong> issues that tracert alone misses.'},
  {t:'What is nslookup used for, and give an example of when you\'d use it?',d:'<strong>nslookup</strong> queries DNS servers to resolve domain names to IPs. Use it when a user can reach a site by IP but not by name — e.g., `nslookup google.com` to test if DNS resolution is working.'},
  {t:'What does netstat -a show, and how does it differ from running netstat without arguments?',d:'<strong>netstat -a</strong> shows ALL active TCP connections AND all listening ports. netstat alone shows only active established connections. Used to see what services are listening and what external hosts are connected.'},
  {t:'What does the ping command test, what protocol does it use, and how do you limit the count on Linux?',d:'<strong>ping</strong> tests basic IP connectivity by sending <strong>ICMP echo requests</strong>. On Linux, use <strong>ping -c [number]</strong> to limit the number of packets (e.g., `ping -c 4 8.8.8.8`). Windows stops automatically with 4 by default.'},
  {t:'What Linux command replaces ifconfig, and what does it display?',d:'<strong>ip addr show</strong> (shortcut: `ip a`) — the modern Linux command to display <strong>IP addresses, MAC addresses, and network interface status</strong>. ifconfig is deprecated but still found on older systems.'},
  {t:'What is the dig command in Linux used for, and what does dig +short do?',d:'<strong>dig</strong> is a Linux DNS query tool more powerful than nslookup. `dig google.com` shows the full DNS response including TTL and server. <strong>dig +short google.com</strong> returns just the IP address.'},
],
'2.13':[
  {t:'What is jitter, what tool diagnoses it, and how do you fix it?',d:'<strong>Jitter</strong> = variable packet delay causing choppy audio/video in VoIP calls. Diagnose with <strong>pathping</strong> to identify congestion points and packet loss. Fix with <strong>QoS</strong> to prioritise voice traffic.'},
  {t:'What is port flapping on a switch, what causes it, and what do you check first?',d:'Port flapping = a switch port rapidly cycling between up and down. Causes: <strong>faulty cable, failing NIC, or duplex mismatch</strong>. Check and replace the cable first — it is the most common cause.'},
  {t:'What is QoS (Quality of Service) and when would a network administrator implement it?',d:'<strong>QoS</strong> prioritises specific traffic types (VoIP, video conferencing) over others (file downloads, updates). Implemented when one application is degrading others — prevents bandwidth hogging.'},
  {t:'A workstation can ping local devices but cannot reach the internet — what do you check first?',d:'Run <strong>ipconfig</strong> to verify the <strong>default gateway and DNS server addresses</strong>. If the gateway is wrong, traffic cannot leave the local network. Then ping the gateway to confirm it is reachable.'},
  {t:'Where do you look in Windows when users report authentication failures on network resources?',d:'<strong>Event Viewer → Security log</strong>. Look for <strong>Event ID 4625</strong> (failed logon) to see timestamps, usernames, and failure reasons. This provides the evidence needed to diagnose auth problems.'},
  {t:'When would you use a Wi-Fi Analyzer tool during network troubleshooting?',d:'When experiencing <strong>intermittent Wi-Fi drops, slow speeds, or interference</strong>. A Wi-Fi analyzer reveals channel congestion, overlapping APs, and signal levels — guiding decisions on channel changes and AP placement.'},
  {t:'What does ipconfig /all show that ipconfig alone does not?',d:'<strong>ipconfig /all</strong> adds: MAC (physical) address, DHCP server IP, DNS server addresses, and DHCP lease start/expiry times. The most complete single-command network configuration snapshot on Windows.'},
]};

// ═══════════════════════════════════════════════════════
// MODULE 3 FLASHCARD DECKS
// ═══════════════════════════════════════════════════════
Object.assign(FC_DECKS,{
'3.1':[
  {t:'What are the three main types of LCD panel, and what is each best known for?',d:'<strong>IPS</strong> — best colour accuracy and wide viewing angles (professional use). <strong>TN</strong> — fastest response times, cheapest (gaming). <strong>VA</strong> — best contrast ratios and deepest blacks (TVs, high-contrast monitors).'},
  {t:'How does an OLED display differ from an LCD in terms of backlight and black levels?',d:'OLEDs use <strong>organic compounds that emit their own light</strong> — no backlight is needed. Individual pixels switch off completely to produce <strong>true black</strong>, giving a theoretically infinite contrast ratio.'},
  {t:'What is Mini-LED and how does it improve on standard LCD?',d:'Mini-LED uses <strong>thousands of tiny LEDs as a backlight</strong> with local dimming zones, allowing much better control of brightness per area. This improves <strong>HDR performance and black levels</strong> compared to a standard LCD backlight.'},
  {t:'What is a digitizer and what does it do?',d:'A digitizer is the <strong>touch-sensitive layer integrated into a touch screen</strong>. It converts finger or stylus input into digital signals the device can process. Capacitive digitizers use electrical fields; resistive ones use pressure.'},
  {t:'What does an inverter do, and when is it needed?',d:'An inverter <strong>converts DC power to AC power</strong> to drive the <strong>CCFL backlight</strong> in older LCD displays. Modern LED-backlit screens run on DC and do not need an inverter. A failing inverter causes a dim or flickering screen.'},
  {t:'What is pixel density (PPI) and why does it matter?',d:'<strong>Pixels Per Inch (PPI)</strong> measures how many pixels fit into one inch of screen. Higher PPI = sharper image with less visible pixelation. A 4K display on a 27" monitor has higher PPI than a 1080p display at the same size.'},
  {t:'What refresh rate would you recommend for a competitive gamer, and why?',d:'<strong>240Hz or higher</strong>. The refresh rate is how many times per second the screen updates (measured in Hz). Higher rates reduce motion blur. 60Hz is standard; 120–144Hz suits gaming; 240Hz+ suits eSports.'},
  {t:'What are the three main colour gamut standards and their use cases?',d:'<strong>sRGB</strong> — standard for web browsing and office work. <strong>Adobe RGB</strong> — preferred for professional photography and print. <strong>DCI-P3</strong> — used for HDR video and cinematic content. Wider gamut = more colours.'},
  {t:'A graphic designer says colours look slightly off when printing. What display attribute should they check?',d:'<strong>Colour gamut and colour calibration</strong>. A display must cover <strong>Adobe RGB</strong> for accurate print-to-screen colour matching. They should also calibrate the monitor with a colorimeter to align with print output.'},
  {t:'What are the screen resolutions for Full HD, QHD, and 4K?',d:'<strong>Full HD (FHD)</strong> = 1920×1080. <strong>QHD (Quad HD)</strong> = 2560×1440. <strong>4K (UHD)</strong> = 3840×2160. Higher resolution = more detail but demands more GPU processing power.'},
],
'3.2':[
  {t:'What is the data transfer rate, pin count, and primary use of USB 2.0?',d:'<strong>Up to 480 Mbps</strong>, <strong>4 pins</strong>. Used for keyboards, mice, printers, flash drives, and low-bandwidth peripherals. Connector types: Type-A, Type-B, Mini-USB, Micro-USB.'},
  {t:'What is the data transfer rate and pin count of USB 3.0, and how does it differ from USB 2.0?',d:'<strong>Up to 5 Gbps</strong>, <strong>9 pins</strong> (5 extra for SuperSpeed). USB 3.0 is backward-compatible with USB 2.0 ports but runs at USB 2.0 speeds when connected to older ports.'},
  {t:'What are Thunderbolt 3 and 4\'s speed, connector type, and power delivery?',d:'<strong>Up to 40 Gbps</strong>, uses a <strong>USB-C connector</strong>, delivers <strong>up to 100W</strong> power. Thunderbolt 1 and 2 used Mini DisplayPort connectors and offered up to 20 Gbps.'},
  {t:'Which video cable supports audio and video digitally, uses 19 pins, and is found on TVs and gaming consoles?',d:'<strong>HDMI (High-Definition Multimedia Interface)</strong>. Carries digital audio and video. HDMI 2.1 supports up to 48 Gbps, enabling 4K/8K and HDR. Connector types: Standard (A), Mini (C), Micro (D).'},
  {t:'Why would a gamer choose DisplayPort over HDMI for a high-refresh-rate monitor?',d:'DisplayPort supports <strong>higher bandwidth and refresh rates</strong> than older HDMI versions. DisplayPort 2.0 can reach 80 Gbps. It is the preferred choice for <strong>144Hz, 240Hz and beyond</strong> gaming monitors.'},
  {t:'What are the three DVI connector types and what signals does each carry?',d:'<strong>DVI-D</strong> — digital only. <strong>DVI-A</strong> — analogue only. <strong>DVI-I</strong> — integrated (digital + analogue). Dual-link DVI doubles bandwidth (7.92 Gbps) and supports resolutions up to 2560×1600.'},
  {t:'What signal type does VGA use, and why is it considered legacy?',d:'VGA carries an <strong>analogue signal</strong> through a <strong>DB-15 (15-pin) connector</strong>. It cannot carry audio, is limited in resolution quality, and has been replaced by digital standards (HDMI, DisplayPort). Still found on projectors and older monitors.'},
  {t:'What is the Molex connector used for, and how many pins does it have?',d:'Molex has <strong>4 pins</strong> and is used to provide <strong>DC power to older HDDs and optical drives</strong> in legacy PCs from the PSU. It has been largely replaced by SATA power connectors in modern builds.'},
  {t:'What is the Lightning connector, how many pins does it have, and who uses it?',d:'<strong>Apple proprietary</strong> connector with <strong>8 pins</strong>. Used on older iPhones, iPads, and AirPods for charging and data transfer. Newer Apple devices have transitioned to USB-C.'},
  {t:'What is a DB9 (RS-232) connector used for in modern IT environments?',d:'DB9 is a <strong>9-pin serial connector</strong> still used for <strong>legacy POS systems, industrial equipment, and console access to network devices</strong> (routers, switches, firewalls). Rarely found on modern computers without an adapter.'},
],
'3.3':[
  {t:'What speeds and distances do Cat5e, Cat6, and Cat6a support?',d:'<strong>Cat5e</strong> — 1 Gbps up to 100m. <strong>Cat6</strong> — 10 Gbps up to 55m (better crosstalk resistance). <strong>Cat6a</strong> — 10 Gbps up to 100m (improved shielding). All use RJ-45 connectors.'},
  {t:'What is the difference between T568A and T568B wiring standards?',d:'Both are TIA/EIA-568 Ethernet wiring standards. <strong>T568B</strong> is the most common in modern commercial installations. <strong>T568A</strong> is used in government and legacy systems. Using the same standard on both ends = straight-through cable; different standards = crossover cable.'},
  {t:'What is the difference between STP and UTP cable, and when would you use each?',d:'<strong>UTP (Unshielded Twisted Pair)</strong> — no extra shielding, relies on cable twist; used in standard office LANs. <strong>STP (Shielded Twisted Pair)</strong> — has additional shielding around pairs; used in high-EMI environments like factories.'},
  {t:'What is direct burial cable and when is it required?',d:'Direct burial cable is <strong>STP with waterproof insulation</strong> designed for <strong>underground installation without conduit</strong>. Used to connect buildings outdoors where conduit is not practical.'},
  {t:'Why is plenum-rated cable required in commercial building ceilings and raised floors?',d:'Plenum-rated cable has <strong>fire-retardant insulation</strong> that prevents toxic smoke emissions in air-handling spaces. Building codes require it in <strong>ceilings, raised floors, and any air circulation area</strong> to meet fire safety regulations.'},
  {t:'What are the key differences between single-mode and multimode fibre optic cable?',d:'<strong>Single-mode (SMF)</strong> — 8–10 µm core, up to 100 km, used for long-distance telecom and ISP backbone. <strong>Multimode (MMF)</strong> — 50–62.5 µm core, up to 550m, used for short-range campus and data centre links.'},
  {t:'What connectors do RJ-11 and RJ-45 use, and what is each used for?',d:'<strong>RJ-11</strong> — 4 or 6 pins — connects telephone lines and DSL modems. <strong>RJ-45</strong> — 8 pins — the standard Ethernet connector for wired network connections.'},
  {t:'What is an SC connector and where is it used?',d:'<strong>SC (Subscriber Connector)</strong> is a <strong>push-pull fibre optic connector</strong> used in data centres and fibre network connections. Its square shape and latch mechanism make it reliable and easy to connect and disconnect.'},
  {t:'What is an LC connector and how does it differ from SC?',d:'<strong>LC (Lucent Connector)</strong> is a <strong>small form-factor fibre connector</strong> with a push-pull latch. It is physically smaller than SC, making it preferred in <strong>high-density fibre environments</strong> like data centres.'},
  {t:'What is a punchdown block and where is it found?',d:'A punchdown block is a <strong>terminal strip used to terminate network cabling</strong> into structured cabling infrastructure. Found in <strong>network closets and telephone distribution frames</strong>. A punchdown tool seats the wire and cuts the excess.'},
],
'3.4':[
  {t:'What are the three spindle speeds for HDDs and their use cases?',d:'<strong>5,400 RPM</strong> — consumer laptops, balanced performance/power. <strong>7,200 RPM</strong> — desktop/workstation performance. <strong>10,000 RPM+</strong> — enterprise HDDs for high-speed data access (e.g. WD VelociRaptor).'},
  {t:'What are the two HDD form factors and where is each used?',d:'<strong>3.5-inch</strong> — desktop HDDs, up to 18 TB. <strong>2.5-inch</strong> — laptops and external drives, 500 GB to 5 TB. The smaller form factor fits both laptops and desktop bays with an adapter bracket.'},
  {t:'What is NVMe and how does it compare to SATA in terms of speed?',d:'<strong>NVMe (Non-Volatile Memory Express)</strong> uses PCIe lanes to connect directly to the CPU. PCIe 4.0 NVMe reaches up to <strong>7,000 MB/s</strong>. SATA III tops out at <strong>600 MB/s</strong> — NVMe is over 10× faster.'},
  {t:'What are the M.2 form factor sizes and what interfaces can an M.2 slot support?',d:'M.2 widths are always 22mm. Lengths: 2230, 2242, 2260, <strong>2280</strong> (most common), 22110. An M.2 slot can support <strong>SATA-based M.2</strong> (6 Gbps) or <strong>NVMe-based M.2</strong> (PCIe 3/4/5). Check motherboard specs — not all M.2 slots support NVMe.'},
  {t:'What is SAS storage and where is it used?',d:'<strong>SAS (Serial Attached SCSI)</strong> supports speeds up to <strong>12 Gbps</strong>. It is an enterprise-grade storage interface used in <strong>servers and data centres</strong> where high reliability and hot-swap capability are required.'},
  {t:'What are the RAID 0, 1, 5, 6, and 10 configurations in terms of minimum drives and fault tolerance?',d:'<strong>RAID 0</strong>: 2 drives, no fault tolerance. <strong>RAID 1</strong>: 2 drives, 1 failure. <strong>RAID 5</strong>: 3 drives, 1 failure. <strong>RAID 6</strong>: 4 drives, 2 failures. <strong>RAID 10</strong>: 4 drives, 1 per mirrored pair — combines mirroring and striping.'},
  {t:'A financial database needs both high performance and redundancy. Which RAID level is best?',d:'<strong>RAID 10</strong> — combines striping (RAID 0) and mirroring (RAID 1). Delivers the fastest read/write speeds AND can survive drive failures. Used in high-performance databases, virtualisation servers, and mission-critical applications.'},
  {t:'What is Blu-ray\'s maximum storage capacity and why is it used for archival storage?',d:'Blu-ray triple-layer discs hold up to <strong>100 GB</strong>. Blu-ray is used for <strong>long-term physical archival storage</strong> because optical discs are durable, immune to magnetic interference, and do not require power to retain data.'},
  {t:'What is eSATA and how does it differ from internal SATA?',d:'<strong>eSATA (External SATA)</strong> uses the same 6 Gbps speed as SATA III but with an external-rated connector. It is faster than USB 3.0 for external storage and used for <strong>external HDDs, SSDs, and backup drives</strong>.'},
  {t:'What memory card speed classes are UHS-I, UHS-II, and UHS-III?',d:'<strong>UHS-I</strong> — up to 104 MB/s. <strong>UHS-II</strong> — up to 312 MB/s. <strong>UHS-III</strong> — up to 624 MB/s. The speed class determines how fast the card can sustain write speeds — important for video recording and burst photography.'},
],
'3.5':[
  {t:'What are the sizes and expansion slot counts for ATX, microATX, and Mini-ITX motherboards?',d:'<strong>ATX</strong>: 12×9.6 in, 7 PCIe slots, 4–8 RAM. <strong>microATX</strong>: 9.6×9.6 in, 4 PCIe slots, 2–4 RAM. <strong>Mini-ITX</strong>: 6.7×6.7 in, 1 PCIe slot, 2 RAM. Smaller = fewer expansion options.'},
  {t:'What is the difference between PCIe x1, x4, x8, and x16 slots?',d:'PCIe slots differ in lane count. <strong>x1</strong>: 1 lane (NICs, sound cards). <strong>x4</strong>: 4 lanes (RAID cards, capture cards). <strong>x8</strong>: 8 lanes. <strong>x16</strong>: 16 lanes (GPUs — primary graphics slot). More lanes = more bandwidth.'},
  {t:'What are the speeds per lane for PCIe 3.0, 4.0, and 5.0?',d:'<strong>PCIe 3.0</strong>: 1 GB/s per lane (16 GB/s on x16). <strong>PCIe 4.0</strong>: 2 GB/s per lane (32 GB/s on x16). <strong>PCIe 5.0</strong>: 4 GB/s per lane (64 GB/s on x16). Each generation doubles the bandwidth.'},
  {t:'What is the difference between UEFI and BIOS?',d:'<strong>BIOS</strong>: legacy 16-bit firmware, MBR boot drives limited to 2TB, text-only interface. <strong>UEFI</strong>: modern 32/64-bit replacement, supports GPT (boot drives over 2TB), graphical mouse-enabled interface, faster boot times, Secure Boot support.'},
  {t:'What does TPM do and why is it required for Windows 11?',d:'<strong>TPM (Trusted Platform Module)</strong> is a hardware-based security chip that provides <strong>encrypted key storage</strong>. Windows 11 requires <strong>TPM 2.0</strong>. It enables features like <strong>BitLocker full-disk encryption</strong>. It is enabled/disabled in BIOS/UEFI.'},
  {t:'What is Secure Boot and what does it prevent?',d:'Secure Boot is a UEFI security feature that <strong>verifies digital signatures of bootloaders</strong> before allowing execution. It prevents <strong>rootkits, unauthorised OS installations, and unsigned malware</strong> from loading at startup.'},
  {t:'What AMD and Intel CPU socket types are used for current desktop processors?',d:'<strong>AMD</strong>: AM4 (Ryzen 1000–5000), AM5 (Ryzen 7000), SP5 (EPYC server). <strong>Intel</strong>: LGA 1700 (12th/13th Gen), LGA 1200 (10th Gen), LGA 4677 (Xeon server). Sockets are NOT cross-compatible between AMD and Intel.'},
  {t:'What is hyperthreading and what is AMD\'s equivalent?',d:'<strong>Hyperthreading</strong> is Intel\'s technology that allows one physical CPU core to handle <strong>two threads simultaneously</strong>, doubling logical core count. AMD\'s equivalent is <strong>SMT (Simultaneous Multi-Threading)</strong>. Both improve multi-tasking and VM performance.'},
  {t:'What are the three thermal paste application methods and when is each used?',d:'<strong>Pea method</strong>: small dot in centre — general use, spreads under pressure. <strong>Spread method</strong>: thin manual layer — used for GPUs and delidded CPUs. <strong>Line method</strong>: straight line across — used for elongated AMD Ryzen dies.'},
  {t:'What are the six main components of a liquid cooling system?',d:'<strong>Radiator</strong> — dissipates heat to air. <strong>Pump</strong> — circulates coolant. <strong>Water block</strong> — absorbs CPU/GPU heat. <strong>Coolant</strong> — glycol-based fluid. <strong>Reservoir</strong> — stores extra coolant. <strong>Tubes/fittings</strong> — connect all components.'},
  {t:'What is the function of a capture card and which PCIe slot does it use?',d:'A <strong>capture card</strong> records or streams high-resolution video from external sources (gaming consoles, cameras). Internal cards use <strong>PCIe x4</strong>; external versions use USB 3.0/3.1. Features include 4K 60fps capture and HDMI pass-through.'},
],
'3.6':[
  {t:'What input voltages do North American and European power supplies use?',d:'<strong>North America/Japan</strong>: 110–120V AC at 60 Hz. <strong>Europe/Asia/Africa</strong>: 220–240V AC at 50 Hz. Modern PSUs are auto-switching. Older ones have a manual switch — always verify before plugging in overseas.'},
  {t:'What does each voltage rail (+3.3V, +5V, +12V) power in a computer?',d:'<strong>+3.3V</strong>: RAM, PCIe cards, motherboard chipsets. <strong>+5V</strong>: legacy devices, USB ports. <strong>+12V</strong>: CPUs, GPUs, fans, HDDs — the most power-hungry components. Instability on the +12V rail causes system crashes.'},
  {t:'What is the difference between modular, semi-modular, and non-modular PSUs?',d:'<strong>Non-modular</strong>: all cables permanently attached. <strong>Semi-modular</strong>: motherboard cables fixed, peripherals removable. <strong>Fully modular</strong>: all cables detachable — best for cable management, airflow, and compact builds.'},
  {t:'What is a redundant PSU and where is it used?',d:'A redundant PSU provides a <strong>hot-swappable backup power supply</strong>. If one PSU fails, the other takes over with <strong>zero downtime</strong>. Used in <strong>servers, data centres, and mission-critical systems</strong> requiring high availability.'},
  {t:'What wattage PSU would you recommend for a high-end gaming PC with an RTX 4090?',d:'At least <strong>1000W</strong>. The RTX 4090 alone can draw 450W under load. Add CPU (125–250W), drives, and fans. PSU calculators help determine exact needs. Always add headroom — do not run a PSU at 100% load.'},
  {t:'What does 80 PLUS Gold certification mean for a power supply?',d:'80 PLUS Gold means the PSU operates at <strong>~87% efficiency</strong> at 20%, 50%, and 100% load. Higher efficiency = less wasted energy as heat, lower electricity costs, and more stable power delivery. Gold is the standard for gaming builds.'},
  {t:'What power connector provides the main power to the motherboard and how many pins does it have?',d:'The <strong>24-pin ATX connector</strong> (20+4) provides main power to the motherboard. Older boards used 20-pin. The 4/8-pin connector provides dedicated CPU power. PCIe 6/8-pin connectors power the GPU.'},
],
'3.7':[
  {t:'What is the difference between PCL and PostScript printer drivers?',d:'<strong>PCL (Printer Control Language)</strong> — HP developed, fast, widely supported, ideal for business document printing. <strong>PostScript</strong> — Adobe developed, more precise rendering, used for professional graphics and high-resolution artwork.'},
  {t:'Which printer connection method provides the most stable network access for multiple users?',d:'<strong>Ethernet (wired)</strong> provides the most stable and reliable connection for shared office printing. Wi-Fi is convenient but can suffer interference. USB is limited to one computer. Ethernet is the standard for enterprise shared printers.'},
  {t:'What is the difference between a printer share and a print server?',d:'<strong>Printer share</strong>: one PC shares its connected printer to other network users via the OS — simple but the host must be on. <strong>Print server</strong>: dedicated device or software manages multiple printers and print queues independently.'},
  {t:'What is secured printing and why is it used in enterprises?',d:'Secured printing holds print jobs in memory until the user <strong>physically authenticates at the printer</strong> (PIN, badge, RFID). Prevents sensitive documents from sitting uncollected in the output tray — required for HIPAA and other compliance.'},
  {t:'What does SMB scanning do on a multifunction device?',d:'SMB scanning sends scanned documents <strong>directly to a network shared folder</strong> via the Server Message Block protocol. This allows multiple users to access scanned files without emailing them. Used in offices for shared document workflows.'},
  {t:'What is the difference between an ADF and a flatbed scanner?',d:'<strong>ADF (Automatic Document Feeder)</strong>: feeds multiple pages automatically for batch scanning — ideal for invoices and contracts. <strong>Flatbed</strong>: requires manual page placement — used for delicate, bound, or oversized documents.'},
  {t:'What firmware update considerations apply to networked printers?',d:'Printer firmware fixes <strong>bugs, security vulnerabilities, and adds features</strong> like cloud printing support. Updates can be delivered via USB, the printer\'s web interface, or manufacturer software. Outdated firmware can expose the printer to network attacks.'},
],
'3.8':[
  {t:'What are the four main maintenance steps for a laser printer?',d:'<strong>1. Replace toner</strong> (when prints are faded/streaky). <strong>2. Apply maintenance kit</strong> (replace fuser, rollers, separation pads at threshold). <strong>3. Calibrate</strong> (align toner on page). <strong>4. Clean</strong> (wipe rollers and paper path with IPA + lint-free cloth).'},
  {t:'What is the fuser unit in a laser printer and when should it be replaced?',d:'The <strong>fuser unit</strong> uses heat and pressure to <strong>bond toner permanently to the paper</strong>. It should be replaced when the printer displays a maintenance warning (typically 100,000–200,000 pages). A failing fuser causes ghosted or smeared prints.'},
  {t:'What maintenance steps apply to inkjet printers?',d:'<strong>1. Replace ink cartridges</strong>. <strong>2. Clean printheads</strong> (run built-in cleaning cycle or clean with IPA for clogged nozzles). <strong>3. Calibrate</strong> (alignment test page). <strong>4. Clean rollers</strong> (damp cloth to remove dust/debris from feed rollers).'},
  {t:'Thermal printers use no ink or toner — what do they use and what maintenance is required?',d:'Thermal printers use <strong>heat-sensitive paper</strong> that reacts to a heating element. Maintenance: <strong>replace thermal paper roll</strong>, clean the <strong>heating element/printhead</strong> with IPA, and clear debris from the feed assembly.'},
  {t:'What type of paper does an impact (dot-matrix) printer use, and what are the main maintenance steps?',d:'Impact printers use <strong>multipart/multilayer carbon copy forms</strong>. Maintenance: <strong>replace the ribbon cartridge</strong> (wears out over time), replace the mechanical printhead when worn, and align multipart paper guides correctly.'},
  {t:'A laser printer is printing ghosted duplicate images — what component is most likely at fault?',d:'The <strong>fuser unit</strong> is the most likely cause of ghost/echo images. The fuser is not applying enough heat to fully bond toner, leaving residual toner on the drum that transfers again on the next pass. Replace the fuser unit.'},
],
'3.9':[
  {t:'A PC emits POST beep codes during boot. What does this indicate and how do you diagnose it?',d:'POST beep codes indicate a <strong>hardware failure detected before the OS loads</strong>. Common causes: unseated/faulty RAM, missing GPU, or bad motherboard component. Consult the motherboard manual — beep codes vary by BIOS manufacturer (AMI, Award, Phoenix).'},
  {t:'What should a technician do first when a system has a blank screen but powers on?',d:'<strong>Reseat the graphics card</strong> and check video cable connections. A loose or faulty GPU is the most common cause of no video output when the system otherwise powers on. Also try different display ports or a known-good cable.'},
  {t:'A user gets frequent BSODs. What are the two most likely hardware causes?',d:'<strong>Faulty RAM</strong> (memory errors cause BSOD stop codes) and <strong>corrupt/incompatible drivers</strong>. Run <strong>MemTest86</strong> to check RAM. Also check CPU temperatures — overheating can cause instability but more often causes shutdowns than BSODs.'},
  {t:'A workstation\'s system clock keeps resetting to the wrong date after a reboot. What should the technician replace?',d:'The <strong>CMOS battery (CR2032)</strong> on the motherboard. This coin cell battery maintains BIOS settings including the system clock when the PC is powered off. A dead CMOS battery = BIOS resets to defaults including the date/time.'},
  {t:'A technician smells burning from a PC. What is the immediate first step?',d:'<strong>Power off the system immediately</strong>. A burning smell indicates electrical failure, a short circuit, overheating component, or leaking/burning capacitor. Continuing to run it risks fire and permanent damage. Inspect for burned traces, swollen capacitors, or melted connectors.'},
  {t:'What causes capacitor swelling and how do you identify it?',d:'Capacitor swelling is caused by <strong>age-related failure or power surges</strong> that cause electrolyte inside to expand. Visually identifiable as <strong>bulging or leaking tops</strong> on motherboard or PSU capacitors. Replace the affected board or PSU. Use a UPS to prevent future surges.'},
  {t:'A system randomly shuts down without warning. What three components should be checked first?',d:'<strong>1. CPU/GPU temperatures</strong> (thermal shutdown if overheating). <strong>2. PSU</strong> (test output voltages with multimeter — failing PSU causes sudden shutdowns). <strong>3. RAM</strong> (run MemTest86 — bad RAM causes random instability).'},
  {t:'How do you diagnose overheating versus a BSOD-type crash?',d:'<strong>Overheating</strong> causes gradual thermal throttling followed by sudden <strong>shutdown or hard reset</strong> — confirmed with BIOS or HWMonitor temperature readings. <strong>BSOD</strong> crashes typically show a stop code and are more associated with RAM/driver issues than temperature.'},
],
'3.10':[
  {t:'A hard drive makes a clicking sound. What does this indicate and what should you do immediately?',d:'Clicking indicates a <strong>failing actuator arm</strong> repeatedly trying to read data — a sign of imminent HDD failure. <strong>Back up all critical data immediately</strong>. Run S.M.A.R.T. diagnostics. Replace the drive — do not wait for total failure.'},
  {t:'What is S.M.A.R.T. and what tools are used to check it?',d:'<strong>Self-Monitoring, Analysis and Reporting Technology</strong> — built-in HDD/SSD diagnostic system that tracks metrics like bad sectors, reallocated sectors, and temperature. Tools: <strong>CrystalDiskInfo, HDD Sentinel, or BIOS diagnostics</strong>. A S.M.A.R.T. failure warning means replace the drive soon.'},
  {t:'A system displays "Bootable device not found" at startup. What should the technician check first?',d:'<strong>BIOS/UEFI boot order</strong> — verify the correct boot drive is selected. Also check that the drive is physically connected and powered, check for RAID array health if applicable, and run Windows Recovery or boot repair tools if the OS files are corrupt.'},
  {t:'A RAID 5 array shows a degraded status. What is the correct next step?',d:'<strong>Replace the failed drive</strong> and allow the RAID controller to <strong>rebuild the array</strong> using the parity data on the remaining drives. Do NOT reinitialise the RAID — this destroys all data. RAID 5 tolerates one drive failure.'},
  {t:'An SSD is experiencing slow write speeds. What two things should you check?',d:'<strong>1. TRIM status</strong> — enable TRIM if disabled (TRIM reclaims space from deleted files, preventing performance degradation). <strong>2. Free space</strong> — SSDs slow dramatically when nearly full; maintain at least 20% free space. Also check for outdated SSD firmware.'},
  {t:'What is the difference between CHKDSK and fsck?',d:'<strong>CHKDSK</strong> is the Windows command-line tool for checking and repairing file system errors and bad sectors. <strong>fsck</strong> is the Linux equivalent. Both can attempt to recover data from corrupted files. Run as administrator/root before they can fix live volumes.'},
  {t:'A new NVMe SSD is not showing up in Windows Explorer. What is the likely cause and fix?',d:'The drive is likely <strong>uninitialised or unformatted</strong>. Open <strong>Disk Management</strong> (diskmgmt.msc), initialise the disk (GPT for drives over 2TB), create a new volume, and format as NTFS. Also check BIOS to confirm the M.2 slot is enabled.'},
],
'3.11':[
  {t:'A monitor shows "No Signal". What is the first thing to check?',d:'<strong>Verify the correct input source</strong> on the monitor (use the OSD menu) and check that the video cable is firmly connected to both the monitor and GPU. A "No Signal" message means the display is on but receiving no video data — usually a physical connection or wrong input.'},
  {t:'A projector lamp produces a very dim image after years of use. What is the most likely cause?',d:'The <strong>projector lamp has exceeded its lifespan</strong> (typically 2,000–6,000 hours). The lamp dims progressively as it ages. Check the lamp indicator in the projector settings and replace with a compatible lamp unit.'},
  {t:'A user sees a green tint on their external monitor. What is the first troubleshooting step?',d:'<strong>Replace the display cable with a known-good cable</strong>. A damaged or partially failed cable (especially older VGA/DVI) causes colour distortion or tinting. If a new cable fixes it, the original cable is faulty. Also check the port on the GPU.'},
  {t:'An OLED display has a permanent ghost image of an app icon. What is this called and how is it prevented?',d:'This is <strong>burn-in (image retention)</strong> — caused by static images displayed for extended periods. Prevention: enable screen savers, auto-dimming, and pixel refresh tools. Move UI elements periodically. OLED is more susceptible to burn-in than LCD.'},
  {t:'A projector randomly shuts down mid-presentation. What is the most likely cause?',d:'<strong>Overheating due to blocked or clogged cooling vents</strong>. Projectors generate significant heat — if vents are dusty, internal temps rise until a thermal shutdown occurs. Clean the vents and replace air filters. Also check the fan is running.'},
  {t:'A screen flickers intermittently. What two areas should the technician investigate?',d:'<strong>1. Display cable</strong> — reseat or replace the video cable (loose connections cause flickering). <strong>2. GPU driver</strong> — update or roll back the graphics driver. Also check the refresh rate in display settings — an unsupported rate can cause flickering.'},
  {t:'A projector is displaying an image that is too large and cutting off content at the edges. What should be adjusted?',d:'<strong>Display scaling settings in the OS</strong>. Scaling controls how the image is sized relative to the screen. Also check if <strong>overscan is enabled</strong> in the projector\'s OSD menu — overscan enlarges the image beyond the screen edge and should be disabled.'},
],
'3.12':[
  {t:'A laser printer is printing lines down the page. What is the most likely cause?',d:'A <strong>dirty or damaged imaging drum</strong> in a laser printer. Debris or a scratch on the drum creates a consistent vertical line. Clean or replace the drum unit. In inkjet printers, lines indicate <strong>clogged printhead nozzles</strong> — run the cleaning cycle.'},
  {t:'A print job produces garbled text and symbols. What is the most likely cause?',d:'<strong>Corrupt or incorrect printer driver</strong>. The wrong driver sends instructions the printer cannot interpret. Reinstall the correct driver from the manufacturer. Also restart the <strong>Print Spooler service</strong> (services.msc) in case of a spooler corruption.'},
  {t:'How do you clear a frozen print queue in Windows?',d:'Stop the Print Spooler: <strong>net stop spooler</strong>. Delete spool files: <strong>del %systemroot%\\System32\\spool\\PRINTERS\\* /Q</strong>. Restart: <strong>net start spooler</strong>. Or use services.msc to restart the Print Spooler service and then clear jobs manually.'},
  {t:'A laser printer is producing ghost/echo images. Which component needs replacing?',d:'The <strong>fuser unit</strong>. The fuser applies heat and pressure to bond toner to paper. If it is not heating correctly, residual toner remains on the drum or transfer roller and reprints on subsequent pages. Also check the transfer roller.'},
  {t:'A printer pulls multiple sheets at once. What components are likely worn and what is the fix?',d:'<strong>Worn pickup rollers</strong> — they no longer separate sheets correctly. Replace the pickup rollers. Also fan the paper stack before loading to prevent sheets sticking together (especially in humid environments). Use fresh, dry paper.'},
  {t:'A networked printer stops responding. What should be checked first?',d:'<strong>Physical and network connections</strong> — check Ethernet cable or Wi-Fi connection. Verify the printer has not lost its IP address (an IP conflict or DHCP reassignment can cause this). Assign a <strong>static IP address</strong> to prevent future connectivity loss.'},
  {t:'A thermal receipt printer is producing faint, unreadable output. What is the first maintenance step?',d:'<strong>Replace the thermal paper roll</strong>. Thermal printers use heat-sensitive paper — old, low-quality, or incorrectly loaded paper produces faint prints. If new paper does not fix it, clean the <strong>thermal heating element</strong> with a thermal cleaning pen or IPA.'},
]});

Object.assign(FC_DECKS,{
'4.1':[
  {t:'What are the four main workstation operating systems?',d:'<strong>Windows</strong> (Microsoft, most common), <strong>Linux</strong> (open-source, customizable), <strong>macOS</strong> (Apple-only, APFS), <strong>Chrome OS</strong> (Google, cloud/education). Each has different installer formats, file systems, and use cases.'},
  {t:'What does OS End-of-Life (EOL) mean and why does it matter?',d:'<strong>EOL (End-of-Life)</strong> = vendor stops issuing updates and security patches. Example: Windows 7 EOL = January 14, 2020. EOL devices are a <strong>security risk</strong> — unpatched vulnerabilities remain open. Must upgrade or replace.'},
  {t:'What installer format do Windows, Linux, and macOS each use?',d:'<strong>Windows:</strong> .exe, .msi, .appx/.msix<br><strong>Linux:</strong> .deb (Debian/Ubuntu), .rpm (Red Hat), Flatpak, Snap<br><strong>macOS:</strong> .dmg (disk image), .pkg (automated installer), Homebrew (.brew)'},
  {t:'What file system does each OS use by default?',d:'<strong>Windows:</strong> NTFS (default), FAT32/exFAT (removable)<br><strong>Linux:</strong> ext4<br><strong>macOS:</strong> APFS (modern), HFS+ (legacy)<br><strong>Chrome OS:</strong> ext4'},
  {t:'What are the key differences between NTFS and exFAT?',d:'<strong>NTFS:</strong> Windows default, supports permissions/encryption (BitLocker)/journaling, max 16TB file, best for internal drives.<br><strong>exFAT:</strong> Flash media standard, cross-platform (Windows/macOS/Linux), max 16EB file, no security features, best for USB/SD cards.'},
  {t:'What is the maximum file size for FAT32 and why does it matter?',d:'<strong>FAT32 max file size = 4GB.</strong> This is a critical limitation — files larger than 4GB (e.g. videos, ISOs) cannot be stored on FAT32. Use exFAT for large files on removable media instead.'},
  {t:'Which Linux file system is best for high-performance enterprise databases?',d:'<strong>XFS</strong> — optimized for high-throughput workloads, supports up to 8 exabytes, handles large-scale databases and parallel operations. ext4 is general-purpose Linux; XFS is for performance-critical environments.'},
  {t:'What is APFS and what is it optimized for?',d:'<strong>APFS (Apple File System)</strong> — Apple\'s default since 2017 for macOS, iOS, iPadOS, watchOS. Optimized for <strong>SSD/flash storage</strong>. Features: snapshots, cloning, strong encryption, per-file metadata integrity, fast atomic operations.'},
  {t:'What is ReFS and when would you use it?',d:'<strong>ReFS (Resilient File System)</strong> — Windows Server file system with <strong>self-healing capabilities</strong>, no max file size, and built-in redundancy with Storage Spaces. Used for VMs, enterprise storage, and environments needing data integrity.'},
  {t:'How do you handle Windows software that needs to run on macOS?',d:'Use a <strong>virtual machine</strong> (Parallels Desktop or VMware Fusion) to run Windows inside macOS. This is needed because Windows .exe applications are not natively compatible with macOS.'},
],
'4.2':[
  {t:'What is a clean install and when should you use it?',d:'<strong>Clean install</strong> = format drive and install fresh OS, erasing all existing data. Use for: new PC builds, resolving severe corruption, migrating to a new OS. Requires bootable media (USB/DVD/ISO). Best performance/stability but <strong>destroys all existing data</strong>.'},
  {t:'What is the difference between an upgrade and a clean install?',d:'<strong>Upgrade:</strong> installs new OS version over existing, <em>preserving</em> files, applications, and settings. Less disruptive, may leave legacy files.<br><strong>Clean install:</strong> wipes everything, installs fresh. Better performance, no legacy baggage, but all data is erased.'},
  {t:'What is image deployment and what tools are used?',d:'<strong>Image deployment</strong> = push a pre-configured OS snapshot to multiple devices simultaneously. Tools: <strong>WDS (Windows Deployment Services)</strong>, MDT (Microsoft Deployment Toolkit), Clonezilla. Used by IT to deploy identical configurations to 10s or 100s of machines.'},
  {t:'What is PXE boot and what infrastructure does it require?',d:'<strong>PXE (Preboot Execution Environment)</strong> = boot over LAN from a network server. Requires: PXE-enabled NIC, DHCP server, WDS/SCCM/FOG server. No physical media needed. Ideal for <strong>mass enterprise deployments</strong>.'},
  {t:'What is zero-touch deployment?',d:'<strong>Zero-touch deployment</strong> = fully automated OS install requiring <em>no user interaction</em>. Uses Microsoft <strong>Intune</strong>, SCCM (System Center Configuration Manager), or Autopilot. Employee unboxes device → connects to network → OS and apps deploy automatically.'},
  {t:'What is a recovery partition and when is it used?',d:'<strong>Recovery partition</strong> = hidden disk partition containing OS recovery files. Access via <strong>F8</strong> at boot (or manufacturer key). Allows restore to factory settings or previous working state <em>without external media</em>. OEM may lock it against modification.'},
  {t:'What is a repair installation and how does it differ from a clean install?',d:'<strong>Repair installation</strong> = reinstalls the OS without deleting user files or applications. Fixes corrupted system files while <em>preserving data</em>. Windows: run setup.exe from installation media and choose Upgrade. Contrast: clean install <em>erases</em> everything.'},
  {t:'What must you do BEFORE upgrading an OS?',d:'Three critical pre-upgrade steps:<br>1. <strong>Backup all files and user preferences</strong><br>2. <strong>Check app/driver compatibility</strong> — not all software works on new OS versions<br>3. <strong>Verify hardware compatibility</strong> — Windows 11 requires TPM 2.0, Secure Boot, UEFI, adequate RAM/storage'},
  {t:'What compatibility mode helps legacy apps run on newer Windows?',d:'<strong>Windows Compatibility Mode</strong> — right-click .exe > Properties > Compatibility tab. Can simulate older Windows versions (XP, 7, 8.1). For Linux apps on Windows, use <strong>Wine or Proton</strong> to run Windows applications.'},
],
'4.3':[
  {t:'What are the two main storage partitioning schemes and what are their key differences?',d:'<strong>MBR (Master Boot Record):</strong> Legacy/BIOS-based. Max 2TB per partition. Max 4 primary partitions. Bootloader in first 512 bytes.<br><strong>GPT (GUID Partition Table):</strong> Modern/UEFI-based. 128+ partitions. Drives over 2TB. Backup partition table. Required for Windows 11.'},
  {t:'What are the boot method options for installing an OS?',d:'<strong>USB</strong> (most common), <strong>PXE/Network</strong> (enterprise LAN), <strong>SSD/Flash</strong> (embedded), <strong>Internet-based</strong> (macOS Recovery), <strong>External drive</strong> (USB/eSATA), <strong>Internal partition</strong> (recovery), <strong>Multiboot</strong> (GRUB, multiple OSes)'},
  {t:'What tools are used to create a bootable USB for Windows installation?',d:'<strong>Rufus</strong> — most versatile (supports BIOS/UEFI/GPT). <strong>Windows Media Creation Tool</strong> — official Microsoft tool for Windows 10/11. <strong>Etcher (balenaEtcher)</strong> — cross-platform, also works for Linux. UEFI systems require GPT-partitioned USB formatted with FAT32.'},
  {t:'What is PXE boot and what does it require?',d:'<strong>PXE (Preboot Execution Environment)</strong> = boot from LAN server. Requirements: PXE-enabled NIC, DHCP server, WDS/SCCM/FOG. <strong>No physical media needed.</strong> Used for mass OS deployments across enterprise workstations.'},
  {t:'When would you use Internet-based OS installation?',d:'<strong>Internet-based installation</strong> downloads the OS during setup. Main use case: <strong>macOS Internet Recovery</strong> (hold Cmd+R or Option+Cmd+R at boot). Reinstalls macOS without a USB drive. Requires stable internet and Apple ID authentication.'},
  {t:'What is multiboot and how is it managed?',d:'<strong>Multiboot</strong> = multiple OSes installed on the same machine (e.g. Windows 11 + Ubuntu). The <strong>GRUB bootloader</strong> presents a menu at startup allowing OS selection. Common for developers needing cross-platform testing on one device.'},
  {t:'What is the maximum partition size for MBR vs GPT?',d:'<strong>MBR:</strong> Maximum <strong>2TB per partition</strong>. Cannot boot from drives over 2TB. Legacy limitation.<br><strong>GPT:</strong> Supports partitions up to 9.4 ZB (essentially unlimited). Required for drives larger than 2TB and for UEFI systems.'},
  {t:'What is required in UEFI when using GPT for Windows 11?',d:'Windows 11 requires: <strong>UEFI firmware</strong> (not legacy BIOS), <strong>GPT partitioning</strong>, <strong>Secure Boot enabled</strong>, and <strong>TPM 2.0</strong> chip. These are all hard requirements — Windows 11 will refuse to install without them.'},
],
'4.4':[
  {t:'What are the three main Windows editions and their key differences?',d:'<strong>Home:</strong> Consumer, no BitLocker, no Group Policy, no domain join.<br><strong>Pro:</strong> BitLocker, domain join, gpedit.msc, Remote Desktop, Hyper-V. Up to 2TB RAM.<br><strong>Enterprise/Pro Workstations:</strong> 6TB RAM, Autopilot, LTSC, advanced security, large business.'},
  {t:'What is BitLocker and which Windows editions include it?',d:'<strong>BitLocker</strong> = full-disk encryption feature built into Windows. Encrypts entire drive to protect data. Requires <strong>TPM 2.0</strong> chip. Available in <strong>Pro and Enterprise</strong> editions. Windows Home includes limited "Device Encryption" but not full BitLocker.'},
  {t:'What is the Group Policy Editor and which editions include it?',d:'<strong>Group Policy Editor (gpedit.msc)</strong> = configure security policies, restrict USB access, set password requirements, control app installs. Available in <strong>Windows Pro and Enterprise only</strong>. Windows Home requires manual registry edits instead.'},
  {t:'What does domain join enable and which Windows editions support it?',d:'<strong>Domain join</strong> allows a PC to join a Windows Active Directory domain, enabling centralized authentication, Group Policy enforcement, and resource access across an enterprise network. Requires <strong>Windows Pro or Enterprise</strong>. Home edition cannot join a domain.'},
  {t:'What is the difference between an in-place upgrade and a wipe-and-load?',d:'<strong>In-place upgrade:</strong> new OS installs over existing, preserving apps, files, settings. Least disruptive.<br><strong>Wipe-and-load:</strong> clean install + separate manual/tool-assisted user data migration. More thorough, used for major OS version changes.'},
  {t:'What are Windows 11 minimum hardware requirements?',d:'<strong>CPU:</strong> 1GHz+, dual-core, 64-bit<br><strong>RAM:</strong> 4GB<br><strong>Storage:</strong> 64GB<br><strong>GPU:</strong> DirectX 12, WDDM 2.0<br><strong>Display:</strong> 1280x720, 9-inch+<br><strong>Security:</strong> TPM 2.0 + UEFI Secure Boot<br><strong>Account:</strong> Microsoft account required'},
  {t:'What is Windows LTSC and who uses it?',d:'<strong>LTSC (Long-Term Servicing Channel)</strong> = Windows Enterprise variant with extended 10-year support cycles, no feature updates, only security patches. Used by hospitals, ATMs, industrial equipment, and environments where <strong>stability over features</strong> is critical.'},
],
'4.5':[
  {t:'What are Windows 10 minimum hardware requirements?',d:'<strong>CPU:</strong> 1GHz (32 or 64-bit)<br><strong>RAM:</strong> 1GB (32-bit) / 2GB (64-bit)<br><strong>Disk:</strong> 16GB (32-bit) / 32GB (64-bit)<br><strong>GPU:</strong> DirectX 9 + WDDM 1.0<br><strong>Display:</strong> 800x600 minimum'},
  {t:'What security chips/features does Windows 11 require that Windows 10 does not?',d:'Windows 11 requires:<br>• <strong>TPM 2.0</strong> (Trusted Platform Module) — needed for BitLocker, Windows Hello<br>• <strong>UEFI firmware with Secure Boot enabled</strong><br>These are <em>hard requirements</em> — Windows 11 checks for them during install and will block installation if absent.'},
  {t:'What is TPM 2.0 and what does it enable?',d:'<strong>TPM (Trusted Platform Module) 2.0</strong> = dedicated security chip storing encryption keys, certificates, and passwords. Enables: <strong>BitLocker</strong> full-disk encryption, <strong>Windows Hello</strong> biometric auth, <strong>Secure Boot</strong> validation, measured boot. Required for Windows 11.'},
  {t:'What is Secure Boot and why does Windows 11 require it?',d:'<strong>Secure Boot</strong> = UEFI feature that verifies OS bootloader has not been tampered with. Prevents rootkits and bootkits from loading before the OS. Windows 11 requires Secure Boot + UEFI to ensure a trusted boot chain. Configured in UEFI/BIOS settings.'},
  {t:'What does WDDM stand for and why does it matter for OS installation?',d:'<strong>WDDM (Windows Display Driver Model)</strong> = graphics driver architecture. Windows 10 requires WDDM 1.0 + DirectX 9. Windows 11 requires <strong>WDDM 2.0 + DirectX 12</strong>. Systems with only older GPUs/drivers may not qualify for Windows 11 upgrade.'},
],
'4.6':[
  {t:'What keyboard shortcut opens Task Manager?',d:'<strong>Ctrl+Shift+Esc</strong> — opens Task Manager directly.<br>Also: <strong>Ctrl+Alt+Del</strong> → select Task Manager.<br>Or: right-click taskbar → Task Manager.<br>Task Manager is essential for performance monitoring, process management, and troubleshooting.'},
  {t:'What is the Processes tab in Task Manager used for?',d:'The <strong>Processes tab</strong> shows all running applications and background processes. Displays <strong>CPU, Memory, Disk, and Network</strong> usage per process. Use it to: identify resource-hungry processes, end unresponsive applications (End Task), spot malware via unusual processes.'},
  {t:'What is the Performance tab in Task Manager used for?',d:'The <strong>Performance tab</strong> shows real-time graphs for <strong>CPU, RAM, Disk, Network, and GPU</strong> usage. Also displays system uptime. Click "Open Resource Monitor" for deeper per-process analysis. Use it to diagnose overall system slowdowns.'},
  {t:'What is the Startup tab (Startup Apps) in Task Manager used for?',d:'The <strong>Startup tab</strong> lists all applications that automatically launch at boot. Shows <strong>Startup Impact (Low/Medium/High)</strong>. Disable high-impact programs here to improve boot times. Does not uninstall — just prevents auto-launch.'},
  {t:'What is the Services tab in Task Manager used for?',d:'The <strong>Services tab</strong> shows all Windows services with their status (Running/Stopped). Can start, stop, and restart services. Example: printer not working? Find <strong>Print Spooler (spoolsv.exe)</strong> → if stopped, restart it to fix printing.'},
  {t:'What is the Users tab in Task Manager used for?',d:'The <strong>Users tab</strong> shows all <strong>currently logged-in user accounts</strong> and their resource consumption (CPU/RAM/Disk). Can log off inactive or unauthorized user sessions. Critical for shared computers and remote access servers.'},
  {t:'How do you end an unresponsive program using Task Manager?',d:'Open Task Manager (Ctrl+Shift+Esc) → click the <strong>Processes tab</strong> → find the unresponsive application → right-click → <strong>End Task</strong>. This forcefully terminates the process. If the program is a Windows service, use the <strong>Services tab</strong> to restart it.'},
],
'4.7':[
  {t:'What is the Microsoft Management Console (MMC)?',d:'<strong>MMC (Microsoft Management Console)</strong> = centralized administrative framework in Windows. Hosts "snap-in" tools for managing system settings, security, performance, users, and hardware. Access via Run (Win+R) or Administrative Tools in Control Panel.'},
  {t:'What is Event Viewer and what is its .msc command?',d:'<strong>Event Viewer (eventvwr.msc)</strong> — displays system, application, and security logs. Use to: diagnose frequent crashes (look for Critical/Error events), review security audit logs (failed login attempts), investigate application errors. Essential troubleshooting first step.'},
  {t:'What is Disk Management and what is its .msc command?',d:'<strong>Disk Management (diskmgmt.msc)</strong> — manage hard drive partitions. Tasks: create/delete/format partitions, assign drive letters, initialize new drives, extend/shrink volumes, convert MBR to GPT (with limitations). Alternative: diskpart command in CLI.'},
  {t:'What are Local Users and Groups, and what is its .msc command?',d:'<strong>Local Users and Groups (lusrmgr.msc)</strong> — create and manage local user accounts and group memberships. Tasks: add users to Administrators group, reset passwords, disable former employee accounts, create new local accounts. Only available in Pro/Enterprise.'},
  {t:'What is the Group Policy Editor and what is its .msc command?',d:'<strong>Group Policy Editor (gpedit.msc)</strong> — configure security and system policies for Windows machines. Tasks: enforce password complexity, restrict USB drives, disable Control Panel access, configure Windows Update behavior. <strong>Pro/Enterprise only</strong> — not available in Home.'},
  {t:'What is Performance Monitor and what is its .msc command?',d:'<strong>Performance Monitor (perfmon.msc)</strong> — advanced performance tracking with data counters and logging. Unlike Task Manager (real-time only), perfmon can <strong>log performance over time</strong>, create reports, and set alerts when thresholds are exceeded.'},
  {t:'What is Certificate Manager and what is its .msc command?',d:'<strong>Certificate Manager (certmgr.msc)</strong> — import, view, export, and manage digital certificates. Used for SSL/TLS certificates, email encryption, VPN authentication. Security admins use it to install and renew certificates for secure communications.'},
  {t:'What is Task Scheduler and what is its .msc command?',d:'<strong>Task Scheduler (taskschd.msc)</strong> — automate Windows tasks on a schedule or trigger. Examples: run backup scripts daily at midnight, launch applications at startup, send alerts when disk space is low. More powerful than Startup tab in Task Manager.'},
],
'4.8':[
  {t:'What is System Information (msinfo32.exe) used for?',d:'<strong>System Information (msinfo32.exe)</strong> — displays complete hardware and software configuration: processor, RAM, BIOS version, OS version, drivers, and installed components. Primary use: <strong>pre-upgrade compatibility checks</strong>. Faster than opening Device Manager for overview.'},
  {t:'What is Resource Monitor (resmon.exe) and how does it differ from Task Manager?',d:'<strong>Resource Monitor (resmon.exe)</strong> provides <em>deeper</em> real-time monitoring than Task Manager. Shows per-process CPU/disk/network/memory with file-level detail. Task Manager gives overview; Resource Monitor shows <em>exactly which files/connections each process is using</em>.'},
  {t:'What is System Configuration (msconfig.exe) used for?',d:'<strong>System Configuration (msconfig.exe)</strong> — control Windows startup behavior. Key uses: boot computer to <strong>Safe Mode</strong> (for troubleshooting), disable startup services, configure boot timeout. Troubleshooters use it to isolate whether a startup program causes system issues.'},
  {t:'What is Disk Cleanup (cleanmgr.exe) and when should you use it?',d:'<strong>Disk Cleanup (cleanmgr.exe)</strong> — scan and remove temporary files, browser cache, Recycle Bin contents, Windows Update cleanup, old system files. Use when: receiving "Low Disk Space" warnings, before OS upgrade, or as routine maintenance to free drive space.'},
  {t:'What is the Registry Editor (regedit.exe) and when is it used?',d:'<strong>Registry Editor (regedit.exe)</strong> — direct access to the Windows Registry (hierarchical database of system/app/user settings). Advanced use only. Examples: remove persistent malware entries, fix broken application installations, modify system behavior not available in UI. <strong>Always backup registry before editing.</strong>'},
  {t:'What is Disk Defragmenter (dfrgui.exe) and when should you NOT use it?',d:'<strong>Disk Defragmenter (dfrgui.exe)</strong> — reorganizes fragmented file data on HDDs to improve read speeds. <strong>Do NOT use on SSDs</strong> — SSDs use flash memory, defragmentation provides no benefit and reduces drive lifespan through unnecessary write cycles. Windows automatically optimizes SSDs differently.'},
],
'4.9':[
  {t:'What does the chkdsk command do and what are its key flags?',d:'<strong>chkdsk</strong> (Check Disk) — scans drives for file system errors and bad sectors.<br>• <code>chkdsk C:</code> — scan only, no fixes<br>• <code>chkdsk /f D:</code> — fix file system errors<br>• <code>chkdsk /r E:</code> — find bad sectors + recover readable data<br>(Requires scheduling on active drives)'},
  {t:'What does the sfc command do?',d:'<strong>sfc /scannow</strong> (System File Checker) — scans all protected Windows system files and replaces corrupted/missing ones with cached copies. Run as Administrator in Command Prompt. Key for repairing Windows installations without full reinstall.'},
  {t:'What does gpupdate do and when do you use it?',d:'<strong>gpupdate /force</strong> — forces an immediate refresh of Group Policy settings without waiting for the next automatic cycle (normally every 90 minutes). Use after making Group Policy changes to verify they apply immediately, or when troubleshooting policy-related issues.'},
  {t:'What does gpresult do and what are its key options?',d:'<strong>gpresult</strong> — displays which Group Policy settings are currently applied to a user or computer.<br>• <code>gpresult /r</code> — summary of active policies<br>• <code>gpresult /h Report.html</code> — full HTML report<br>Use to troubleshoot why a user has unexpected restrictions.'},
  {t:'What does robocopy do and how does /mir work?',d:'<strong>robocopy</strong> (Robust File Copy) — advanced file/folder copying with sync, logging, and retry options. Key flag: <code>/mir</code> = mirror mode — makes destination <em>identical</em> to source including <strong>deletions</strong>. Example: <code>robocopy C:\\Data D:\\Backup /mir</code>'},
  {t:'What does diskpart do and how is it used?',d:'<strong>diskpart</strong> — interactive CLI partition management tool. Sequence: open CMD as admin → type <code>diskpart</code> → <code>list disk</code> → <code>select disk 1</code> → <code>clean</code> (erase all). More powerful than Disk Management GUI. Use for advanced partition operations.'},
  {t:'What does net user do? Give examples.',d:'<strong>net user</strong> — manage Windows user accounts from CLI.<br>• <code>net user</code> — list all accounts<br>• <code>net user Admin /active:yes</code> — enable account<br>• <code>net user JohnDoe Pa$$ /add</code> — create new user<br>• <code>net user JohnDoe /delete</code> — remove user'},
  {t:'What command displays the current Windows version and build number?',d:'<strong>winver</strong> — opens a pop-up showing Windows edition, version number, and build. Use to confirm OS version before installing software or troubleshooting compatibility. Alternative CLI method: <code>systeminfo | findstr /B /C:"OS Name"</code>'},
],
'4.10':[
  {t:'What is Network and Sharing Center and when is it used?',d:'<strong>Network and Sharing Center</strong> (Control Panel) — central hub for managing all network connections: Wi-Fi, Ethernet, VPN, dial-up. Tasks: change adapter settings, reset network adapter, configure sharing options, troubleshoot connectivity. Key for fixing "no internet" issues.'},
  {t:'What is the difference between Sleep, Hibernate, and Fast Startup?',d:'<strong>Sleep:</strong> session in RAM, low power, quick resume<br><strong>Hibernate:</strong> session saved to disk, fully powered off, no power used, slower resume<br><strong>Fast Startup:</strong> hybrid — kernel state saved to disk on shutdown for faster next boot (default in Win10/11). Not a full shutdown — can hide updates.'},
  {t:'What are the three Windows Power Plans and when is each used?',d:'<strong>Balanced:</strong> default, auto-adjusts performance, good for laptops<br><strong>Power Saver:</strong> reduces CPU/dims display, maximizes battery life, for travel/long meetings<br><strong>High Performance:</strong> max CPU speed, no sleep, prevents throttling, for video editing/gaming/intensive tasks'},
  {t:'What does USB Selective Suspend do and when could it cause problems?',d:'<strong>USB Selective Suspend</strong> = Windows suspends individual USB ports not in active use to save power. Can cause problems when USB devices (external drives, peripherals) appear to disconnect or become unresponsive. Disable if experiencing unexplained USB disconnections.'},
  {t:'What is Windows Defender Firewall and what can it control?',d:'<strong>Windows Defender Firewall</strong> — built-in stateful firewall. Controls: inbound/outbound traffic rules per application, port blocking/allowing, network profile rules (Domain/Private/Public). "Public" profile is most restrictive. Block or allow apps through Control Panel > Firewall.'},
  {t:'What does the Programs and Features setting in Control Panel do?',d:'<strong>Programs and Features</strong> (Control Panel) — view all installed software, uninstall or change programs, and enable/disable Windows Features. Use when: removing software that doesn\'t have its own uninstaller, enabling features like IIS, Hyper-V, or .NET Framework.'},
],
'4.11':[
  {t:'Why should you DISABLE "Hide Extensions for Known File Types" in File Explorer?',d:'When extensions are hidden, a malicious file named "document.exe" can appear as "document" — users may think it is a safe document. <strong>Disabling this setting shows all extensions</strong>, allowing users to identify dangerous .exe, .bat, .vbs files disguised as innocent documents.'},
  {t:'How do you view hidden and system files in Windows?',d:'File Explorer → <strong>View tab → Options → Change folder and search options → View tab → select "Show hidden files, folders, and drives"</strong>. This reveals files with Hidden attribute set. Used by technicians to access AppData, program caches, and troubleshoot missing app data.'},
  {t:'What is the key difference between a Windows Domain and a Workgroup?',d:'<strong>Domain:</strong> centralized admin via Domain Controller, Active Directory, Group Policy, single sign-on. Scales to enterprise.<br><strong>Workgroup:</strong> peer-to-peer, decentralized, each PC manages itself, local accounts only. Best for small offices (~20 devices or fewer). No server required.'},
  {t:'What is Active Directory and what does it do?',d:'<strong>Active Directory (AD)</strong> = Microsoft directory service running on a Domain Controller. Stores all user accounts, computers, and security policies in one central location. Enables: single sign-on across domain computers, Group Policy enforcement, centralized IT management.'},
  {t:'What is Group Policy in a Windows Domain?',d:'<strong>Group Policy</strong> = rules enforced by the Domain Controller across all domain-joined computers. Examples: require complex passwords, prevent USB usage, disable control panel, push software, configure screen lock timeout. Configured via Group Policy Management Console (GPMC).'},
  {t:'What is a Workgroup best suited for, and what are its limitations?',d:'<strong>Workgroup</strong> = best for small offices (approximately 20 devices or fewer) with no dedicated IT infrastructure. Limitations: no centralized authentication (each PC has its own user database), no Group Policy enforcement, no single sign-on, manual management of each device.'},
  {t:'What are the General Options in File Explorer?',d:'<strong>File Explorer General Options</strong> control: default startup view (Quick Access vs This PC), folder open behavior (same window vs new window), Quick Access customization, and recent items display. Access via View > Options > Change folder and search options.'},
],
'4.12':[
  {t:'What is the difference between .dmg, .pkg, and .app on macOS?',d:'<strong>.dmg (Disk Image):</strong> mounts a virtual drive, user drags app to /Applications. Manual installation.<br><strong>.pkg (Package):</strong> automated installer, runs setup wizard, used for enterprise MDM deployment.<br><strong>.app:</strong> standard application bundle, self-contained folder treated as a file.'},
  {t:'What are the key macOS system folders?',d:'<strong>/Applications</strong> — installed apps<br><strong>/Users</strong> — all user home directories<br><strong>/Library</strong> — system-wide support files, caches, logs<br><strong>/System</strong> — core macOS files (do not modify)<br><strong>/Users/Library</strong> — user-specific app data and preferences'},
  {t:'What is FileVault and what encryption does it use?',d:'<strong>FileVault</strong> = macOS full-disk encryption. Uses <strong>XTS-AES-128</strong> encryption. Enabled in System Preferences > Security & Privacy. Protects data if device is lost or stolen. Recovery key is generated during setup — store it safely. Enterprise: managed via MDM.'},
  {t:'What is Time Machine and how does it work?',d:'<strong>Time Machine</strong> = built-in macOS backup solution. Automatically saves <strong>hourly snapshots</strong> of the system to an external drive or Time Capsule. Can restore: individual files, application data, or full system to any point in backup history.'},
  {t:'What is Keychain in macOS?',d:'<strong>Keychain</strong> = macOS built-in password manager. Securely stores: website passwords, Wi-Fi passwords, encryption keys, certificates, app credentials. Auto-fills in Safari and macOS apps. Access via Keychain Access app. Synced across Apple devices via iCloud Keychain.'},
  {t:'What is macOS Continuity and what features does it include?',d:'<strong>Continuity</strong> = Apple\'s cross-device seamless workflow system. Features: <strong>Universal Clipboard</strong> (copy on iPhone, paste on Mac), <strong>Handoff</strong> (continue tasks between devices), <strong>AirDrop</strong> (wireless file sharing), <strong>Sidecar</strong> (iPad as second display), iPhone as webcam.'},
  {t:'What is Rapid Security Response (RSR) on macOS?',d:'<strong>RSR (Rapid Security Response)</strong> = emergency security patches Apple delivers <em>outside</em> of regular macOS updates. Deployed within hours/days of discovering an actively exploited vulnerability. Smaller than full OS updates. macOS 13 (Ventura)+. Can be applied without full reboot.'},
  {t:'What is Mobile Device Management (MDM) on macOS?',d:'<strong>MDM (Mobile Device Management)</strong> = system for enforcing corporate policies on Apple devices. Via <strong>Apple Business Manager</strong>. Can: restrict App Store, require encryption (FileVault), push apps, enforce passcode policies, remote wipe devices. Manages corporate MacBooks without physical access.'},
],
'4.13':[
  {t:'What does /etc/passwd store and who can read it?',d:'<strong>/etc/passwd</strong> stores user account information: usernames, user IDs (UIDs), group IDs (GIDs), home directories, and default shells. It is <strong>world-readable</strong> but does NOT store passwords (those are in /etc/shadow). Format: username:x:UID:GID:comment:home:shell'},
  {t:'What does /etc/shadow store and who can access it?',d:'<strong>/etc/shadow</strong> stores <strong>encrypted (hashed) passwords</strong> and password policies (expiration, minimum age, warning days). Only accessible by <strong>root</strong>. The "x" in /etc/passwd\'s password field means the hash is in /etc/shadow for security.'},
  {t:'What does /etc/hosts do and how does it interact with DNS?',d:'<strong>/etc/hosts</strong> = local hostname-to-IP mapping file. <strong>Checked before DNS</strong>. Add entries to override DNS: e.g., block ads by pointing domains to 127.0.0.1, or redirect test domains to local servers. Example: <code>192.168.1.50  myserver.local</code>'},
  {t:'What does /etc/fstab do?',d:'<strong>/etc/fstab</strong> (filesystem table) = defines all storage devices, their mount points, file systems, and mount options. Entries here are <strong>automatically mounted at boot</strong>. Format: device  mountpoint  filesystem  options  dump  pass. Used to permanently add new drives to a system.'},
  {t:'What is systemd and how do you use it?',d:'<strong>systemd</strong> = modern Linux init system — manages the boot process, starts/stops services, and handles system logging (journald). Key command: <strong>systemctl</strong>. Examples: <code>systemctl start apache2</code>, <code>systemctl restart networking</code>, <code>systemctl enable ssh</code> (start on boot).'},
  {t:'What is the difference between su and sudo?',d:'<strong>su (switch user):</strong> switches your entire session to another user (usually root). Requires the target user\'s password. You become root until you exit.<br><strong>sudo (superuser do):</strong> runs ONE command with elevated privileges. Requires your own password. Preferred — limits root exposure.'},
  {t:'What does the chmod command do? Give examples.',d:'<strong>chmod</strong> (change mode) = modify file permissions (read/write/execute) for owner, group, others.<br>• <code>chmod +x script.sh</code> — add execute permission<br>• <code>chmod 755 file</code> — rwxr-xr-x (owner=full, group/others=read+execute)<br>• <code>chmod 644 file</code> — rw-r--r-- (owner=read+write, others=read)'},
  {t:'What is the difference between apt and dnf?',d:'<strong>apt (Advanced Package Tool):</strong> package manager for <strong>Debian/Ubuntu</strong>-based distros. Commands: <code>apt install</code>, <code>apt update</code>, <code>apt upgrade</code>, <code>apt remove</code>.<br><strong>dnf (Dandified Yum):</strong> package manager for <strong>Red Hat/Fedora/CentOS</strong>. Replaced yum. Same concept, different syntax.'},
  {t:'What does the grep command do?',d:'<strong>grep</strong> (Global Regular Expression Print) — searches for text patterns within files.<br>• <code>grep "error" /var/log/syslog</code> — find lines containing "error"<br>• <code>grep -i "failed" auth.log</code> — case-insensitive<br>• <code>grep -r "password" /etc/</code> — recursive search in directory'},
],
'4.14':[
  {t:'What is the difference between 32-bit and 64-bit applications?',d:'<strong>64-bit apps</strong> require a 64-bit OS and CPU. Can access more than 4GB RAM and are faster for large data processing.<br><strong>32-bit apps</strong> run on <em>both</em> 32-bit and 64-bit OS (via WOW64 on Windows). Cannot use more than 4GB RAM. Check app architecture before installing on a 64-bit system.'},
  {t:'What are the three main application distribution methods?',d:'<strong>Physical Media / ISO:</strong> DVD or mountable ISO file — for legacy apps without digital versions.<br><strong>Downloadable Package:</strong> direct from vendor website or app store — most common modern method.<br><strong>Image Deployment:</strong> pre-configured OS image with apps included — enterprise mass deployment.'},
  {t:'What is the impact of installing a new application on a device?',d:'<strong>Device impact:</strong> new apps consume CPU, RAM, and storage, potentially slowing the system.<br><strong>Network impact:</strong> downloads consume bandwidth — schedule updates during off-peak hours.<br><strong>Operational impact:</strong> apps may need updates, maintenance, security configuration.<br><strong>Business impact:</strong> deploy critical apps after hours to prevent downtime.'},
  {t:'Why might an enterprise app require an external hardware token?',d:'Some enterprise applications require a <strong>USB security dongle (hardware token)</strong> for authentication — particularly for MFA or software licensing. Without the token plugged in, the software refuses to run. Common in legal, financial, and creative (CAD/audio) software licensing.'},
  {t:'What should you check first before deploying enterprise 3D modeling software?',d:'Check <strong>hardware requirements</strong> first: specifically <strong>CPU</strong> (multi-core, high clock), <strong>RAM</strong> (32GB+ recommended), and <strong>GPU/VRAM</strong> (dedicated GPU with sufficient VRAM for rendering). Then verify OS compatibility (64-bit, correct version), storage (SSD preferred), and plan deployment method.'},
  {t:'What is image deployment for applications and when is it used?',d:'<strong>Image deployment</strong> = IT preconfigures an OS image with all required applications already installed, then pushes that image to multiple target machines simultaneously. Used when deploying 10s to 100s of identical workstations. Tools: WDS, MDT, Clonezilla, SCCM.'},
],
'4.15':[
  {t:'What is Quick access in File Explorer?',d:'<strong>Quick access</strong> shows pinned locations and recently/frequently used folders. Privacy settings in Folder Options control whether usage data appears. Useful for technicians jumping between project folders.'},
  {t:'What is the difference between This PC and Quick access as a default?',d:'<strong>This PC</strong> emphasises drives and classic hierarchy. <strong>Quick access</strong> emphasises frequent and pinned folders. Change the default under View → Options → Open File Explorer to.'},
  {t:'Why disable Hide extensions for known file types?',d:'Malware often uses double extensions (invoice.pdf.exe). Showing extensions helps users spot dangerous file types before opening them.'},
  {t:'What are Libraries in Windows?',d:'<strong>Libraries</strong> aggregate multiple folder locations into one logical view (Documents, Pictures, etc.) without moving files — convenient for searches across drives.'},
],
'4.16':[
  {t:'What is a Windows domain?',d:'A <strong>domain</strong> uses Active Directory on Domain Controllers for centralized accounts, passwords, and Group Policy. Computers are <strong>domain-joined</strong> for enterprise management.'},
  {t:'What is a workgroup?',d:'A <strong>workgroup</strong> is a peer network where each PC keeps its own local Security Accounts Manager (SAM) database — no central DC. Good for very small sites.'},
  {t:'What does domain join enable?',d:'Single sign-on to resources, centralized GPOs, easier user provisioning, and tools like roaming profiles or folder redirection when configured.'},
  {t:'How does DNS relate to AD?',d:'Clients locate domain services via <strong>DNS SRV records</strong> (e.g. LDAP, Kerberos). Broken DNS = authentication and logon failures even if the network is up.'},
],
'4.17':[
  {t:'Where is FileVault configured?',d:'macOS full-disk encryption is toggled under <strong>Privacy & Security</strong> (modern) or Security & Privacy (older) — requires user/admin approval and stores a recovery key.'},
  {t:'What is macOS Recovery?',d:'Boot-time environment (local or Internet Recovery) for <strong>Disk Utility</strong>, reinstall macOS, restore from Time Machine, and firmware/security tools.'},
  {t:'What does Handoff do?',d:'Part of Continuity — move tasks (Mail, Safari, Pages, etc.) between Apple devices when signed into the same Apple ID with Bluetooth/Wi-Fi enabled.'},
  {t:'What is Gatekeeper?',d:'Reduces untrusted apps by requiring signed/notarized binaries (with user override possible). Works alongside XProtect and MRT for layered protection.'},
],
'4.18':[
  {t:'What is Activity Monitor used for?',d:'Monitor per-process CPU, memory, energy, disk, and network — first stop for slow Macs or runaway processes.'},
  {t:'What is Spotlight?',d:'System-wide indexed search for files, apps, calculator results, and metadata. Rebuild index from System Settings if results are broken.'},
  {t:'What is Keychain?',d:'Stores passwords, certificates, and secure notes. iCloud Keychain syncs credentials between Apple devices when enabled.'},
  {t:'What is SIP?',d:'<strong>System Integrity Protection</strong> restricts root from modifying protected paths — reduces persistence for malware; disable only for advanced troubleshooting.'},
],
'4.19':[
  {t:'What is /home used for?',d:'Contains user home directories on Linux; contrast with system files under /etc, /usr, and /var.'},
  {t:'What does ls -l display?',d:'Long listing: permissions, links, owner, group, size, modified time — essential for permission troubleshooting.'},
  {t:'What does du do?',d:'<strong>Disk usage</strong> — report space consumed by directories; common: <code>du -sh /var/log</code>.'},
  {t:'What does pwd output?',d:'The <strong>present working directory</strong> full path — sanity check before rm or mv operations.'},
],
'4.20':[
  {t:'What is nano?',d:'Beginner-friendly terminal text editor. <strong>vi/vim</strong> is ubiquitous on servers — know how to exit vim (:q!).'},
  {t:'What is a pipe (|)?',d:'Chains stdout from one command into stdin of another — powerful for log filtering and counting.'},
  {t:'What is ss?',d:'Modern replacement for netstat on many distros — inspect listening ports and sockets for service troubleshooting.'},
  {t:'What is less?',d:'Pager for large files — scroll/search without dumping entire logs to the console like cat might.'},
],
'4.21':[
  {t:'What are the three broad application distribution methods?',d:'<strong>Physical/ISO</strong>, <strong>downloadable installers or stores</strong>, and <strong>image or MDM deployment</strong> for mass rollout.'},
  {t:'Why check hardware requirements before deployment?',d:'CPU/RAM/GPU/OS architecture must match vendor specs — prevents failed installs and help-desk churn.'},
  {t:'What is a hardware token or dongle sometimes required for apps?',d:'Used for <strong>licensing or MFA</strong> — app refuses to run if the USB token is absent.'},
  {t:'What risks come with installing unknown software?',d:'Malware, compatibility issues, licensing violations, and performance impact — use official sources and pilot testing.'},
],
});


// MODULE 5 FLASHCARDS
Object.assign(FC_DECKS,{
'5.1':[
  {t:'What is a Type 1 hypervisor and what are examples?',d:'<strong>Type 1 (Bare-Metal)</strong> runs directly on hardware — no host OS required. Examples: <strong>VMware ESXi, Microsoft Hyper-V, XenServer</strong>. Best for data centres — high performance, better security, superior resource utilisation.'},
  {t:'What is a Type 2 hypervisor and what are examples?',d:'<strong>Type 2 (Hosted)</strong> runs on top of a host OS as an application. Examples: <strong>VMware Workstation, Oracle VirtualBox, Parallels</strong>. Easier to set up — suitable for end users and dev/test environments.'},
  {t:'What is a sandbox VM and when is it used?',d:'A <strong>sandbox VM</strong> is an isolated virtual environment for safely running or analysing untrusted software. Changes inside do not affect the host. Used by security analysts for malware testing and safe code execution.'},
  {t:'What is VDI (Virtual Desktop Infrastructure)?',d:'<strong>VDI</strong> centrally hosts desktop environments on a server. Users access their desktop from any device over the network. Benefits: scalability, reduced hardware costs, centralised management, and remote access.'},
  {t:'What are containers and how do they differ from VMs?',d:'<strong>Containers</strong> (Docker, Kubernetes) isolate applications and dependencies while <strong>sharing the host OS kernel</strong>. Faster startup, lower resource usage, more portable than VMs. VMs each run their own full OS; containers share the host kernel.'},
  {t:'What are the three key VM requirements to consider?',d:'<strong>Security</strong>: proper isolation, patching, configurations. <strong>Network</strong>: virtual switches, adapters, VLANs for VM communication. <strong>Storage</strong>: adequate disk space and performance for VM images and snapshots (via SAN or NAS).'},
  {t:'What is application virtualisation?',d:'<strong>Application virtualisation</strong> runs software in a virtualised environment without fully installing it on the host OS. Useful for legacy software, cross-platform compatibility, and isolating app dependencies.'},
  {t:'What is cross-platform virtualisation?',d:'<strong>Cross-platform virtualisation</strong> runs software designed for one OS on a different OS — e.g. Linux apps on Windows via a VM. Enables compatibility without dual-booting or separate physical hardware.'},
  {t:'What is the purpose of using VMs for test/development environments?',d:'VMs provide <strong>safe isolated environments</strong> to test software, patches, or updates without risking production systems. Snapshots allow reverting to a known-good state instantly after a failed test.'},
  {t:'What are the advantages of containers over traditional VMs?',d:'Containers have <strong>faster startup times</strong>, use fewer resources (no full OS per instance), are <strong>highly portable</strong> across environments, and easier to scale. Trade-off: less isolation than VMs since they share the host kernel.'},
],
'5.2':[
  {t:'What are the four cloud deployment models?',d:'<strong>Private</strong>: dedicated to one org, high control (single-tenant). <strong>Public</strong>: shared by many via internet, scalable (multi-tenant). <strong>Hybrid</strong>: combines private + public. <strong>Community</strong>: shared by orgs with common requirements (e.g. healthcare compliance).'},
  {t:'What are IaaS, PaaS, and SaaS?',d:'<strong>IaaS</strong>: rented virtual servers/storage/networking (AWS EC2, Azure VMs). <strong>PaaS</strong>: dev platform to build apps without managing infrastructure (AWS Elastic Beanstalk). <strong>SaaS</strong>: software delivered over internet (Microsoft 365, Google Workspace).'},
  {t:'What is cloud elasticity?',d:'<strong>Elasticity</strong> is the ability to dynamically scale resources <strong>up or down</strong> based on demand. Ensures performance during peaks and cost savings during low usage. A key advantage over fixed on-premise infrastructure.'},
  {t:'What is multitenancy in cloud computing?',d:'<strong>Multitenancy</strong> means one cloud instance serves <strong>multiple customers</strong>, each with isolated, secure access to their data. Public clouds are multitenant. Customers share physical infrastructure but data is logically separated.'},
  {t:'What is metered utilisation?',d:'<strong>Metered utilisation</strong> is the pay-as-you-go model — usage is tracked and billed based on actual consumption (compute hours, storage GB, data transfer). Also called <strong>chargeback</strong>. Only pay for what you use.'},
  {t:'What is the difference between ingress and egress?',d:'<strong>Ingress</strong> = data transferred <strong>INTO</strong> the cloud (usually free/cheap). <strong>Egress</strong> = data transferred <strong>OUT OF</strong> the cloud (typically charged, often more expensive). Critical cost consideration when moving large datasets out of a cloud provider.'},
  {t:'What is a private cloud?',d:'A <strong>private cloud</strong> is dedicated exclusively to a single organisation. Benefits: greatest <strong>security, control, and customisation</strong>. Single-tenant. Ideal for organisations with strict compliance or data sovereignty requirements.'},
  {t:'What is a hybrid cloud?',d:'A <strong>hybrid cloud</strong> combines private and public cloud with seamless data/app integration between them. Sensitive data stays on-premise/private cloud; public cloud handles scalability for less-sensitive workloads.'},
  {t:'What is a community cloud?',d:'A <strong>community cloud</strong> is shared by organisations with similar requirements — e.g. compliance standards, security needs, or industry regulations. Example: multiple healthcare providers sharing a HIPAA-compliant cloud environment.'},
  {t:'What is file synchronisation in cloud computing?',d:'<strong>File synchronisation</strong> automatically keeps files updated across all devices in real-time. Changes on one device instantly appear on all others. Examples: OneDrive, Google Drive. Improves collaboration and ensures data consistency.'},
],
'5.3':[
  {t:'What email and calendar tools are in Microsoft 365 vs Google Workspace?',d:'<strong>Microsoft 365</strong>: Outlook (email, calendar, contacts). <strong>Google Workspace</strong>: Gmail + Google Calendar. Both provide cloud-based email without on-premise servers, accessible from any device.'},
  {t:'What is selective sync in cloud storage?',d:'<strong>Selective sync</strong> lets users choose <strong>which specific folders/files</strong> sync locally. Saves local storage by only downloading chosen content. Available in OneDrive, Google Drive, Dropbox.'},
  {t:'What cloud storage solutions exist across platforms?',d:'<strong>Microsoft 365</strong>: OneDrive. <strong>Google Workspace</strong>: Google Drive. <strong>Apple</strong>: iCloud. All provide cloud file storage with automatic sync across devices and selective sync options.'},
  {t:'What are the collaboration tool categories and their platform equivalents?',d:'<strong>Spreadsheets</strong>: Excel / Sheets / Numbers. <strong>Word Processing</strong>: Word / Docs / Pages. <strong>Presentations</strong>: PowerPoint / Slides / Keynote. <strong>Video</strong>: Teams / Meet / Zoom / FaceTime. <strong>IM</strong>: Teams / Slack / iMessage.'},
  {t:'What is identity synchronisation?',d:'<strong>Identity synchronisation</strong> keeps user profiles, credentials, and access permissions consistent across multiple cloud services. <strong>Microsoft</strong>: Entra ID (Azure AD). <strong>Google</strong>: Google Identity Management. Prevents access inconsistencies when users change roles.'},
  {t:'What is licensing assignment in cloud identity management?',d:'<strong>Licensing assignment</strong> controls which features/tools users can access based on role and subscription tier (Basic, Standard, Premium, Enterprise). Managed via Entra ID or Google Identity Management. Ensures cost control and correct access.'},
  {t:'What is Microsoft Entra ID?',d:'<strong>Microsoft Entra ID</strong> (formerly Azure Active Directory) is Microsoft\'s cloud-based identity and access management service. Handles <strong>identity sync, single sign-on (SSO), licensing assignment</strong>, and authentication across Microsoft 365 and connected apps.'},
  {t:'What videoconferencing tools are available?',d:'<strong>Microsoft</strong>: Teams. <strong>Google Workspace</strong>: Google Meet. <strong>Apple</strong>: FaceTime. <strong>Third-party</strong>: Zoom (screen sharing, breakout rooms, virtual whiteboards). Teams and Zoom are most common in enterprise environments.'},
  {t:'What instant messaging tools are used in enterprise cloud environments?',d:'<strong>Microsoft 365</strong>: Microsoft Teams. <strong>Google Workspace</strong>: Google Chat / Spaces. <strong>Third-party</strong>: Slack (popular in tech). All support real-time messaging, file sharing, and integration with other productivity tools.'},
  {t:'What is the difference between shared and dedicated cloud resources?',d:'<strong>Shared resources</strong>: storage/processing shared among multiple tenants — more cost-efficient, used in public cloud. <strong>Dedicated resources</strong>: reserved for a single tenant — higher cost, better performance/security. Private clouds typically use dedicated resources.'},
]
});


// MODULE 6 FLASHCARDS
Object.assign(FC_DECKS,{
'6.1':[
  {t:'What is an access control vestibule and what is another name for it?',d:'An <strong>access control vestibule</strong> (also called a <strong>mantrap</strong>) is a secure entryway that allows only one person at a time to enter a restricted area, often requiring badge scan or biometric authentication. Prevents tailgating.'},
  {t:'What are bollards used for in physical security?',d:'<strong>Bollards</strong> are vertical posts or barriers installed outside buildings to <strong>prevent vehicle access</strong> to critical infrastructure. Common at financial institutions and government buildings to stop vehicle-ramming attacks.'},
  {t:'What is the difference between a badge reader and a key fob?',d:'A <strong>badge reader</strong> scans employee ID cards/badges to verify credentials and unlock doors. A <strong>key fob</strong> uses RFID or NFC — a small token the user carries that wirelessly authenticates when near a reader. Both grant physical access.'},
  {t:'What physical security measures deter after-hours intrusion?',d:'<strong>Lighting</strong> (eliminates dark spots, supports CCTV), <strong>motion sensors</strong> (trigger alarms/lights), <strong>video surveillance</strong> (records evidence), <strong>alarms</strong> (alert authorities), and <strong>fences</strong> (define perimeter). Layered physical controls.'},
  {t:'How do equipment locks protect against theft?',d:'<strong>Equipment locks</strong> (e.g. cable locks/Kensington locks) physically secure laptops, servers, or desktops to desks or fixtures. They prevent opportunistic theft while allowing authorised users to still use the equipment.'},
],
'6.2':[
  {t:'What are the four biometric authentication methods and their key characteristics?',d:'<strong>Retina scanner</strong>: infrared scans blood vessel patterns — highest security. <strong>Fingerprint scanner</strong>: captures fingerprint patterns — common in phones/laptops. <strong>Palm print</strong>: maps vein structures — financial environments. <strong>FRT</strong>: AI facial feature analysis — access control systems.'},
  {t:'What is a magnetometer and where is it used?',d:'A <strong>magnetometer</strong> detects metallic objects using electromagnetic fields. Used at <strong>security checkpoints</strong> (airports, courthouses, corporate offices) to detect concealed weapons before allowing entry into secured areas.'},
  {t:'What is a mobile digital key and how does it work?',d:'A <strong>mobile digital key</strong> uses a smartphone or smartwatch as a replacement for physical key cards. It communicates via <strong>Bluetooth or NFC</strong> to control access — e.g. hotel room locks, office doors. More convenient but requires device battery.'},
  {t:'What is the difference between smart cards and key fobs?',d:'<strong>Smart cards</strong> have an embedded chip storing authentication credentials — inserted into a reader or tapped (contact/contactless). <strong>Key fobs</strong> are small RFID/NFC tokens carried on a keychain. Smart cards can store more data and are used for logical access too.'},
  {t:'What is tailgating and how does an access control vestibule prevent it?',d:'<strong>Tailgating (piggybacking)</strong> is when an unauthorised person follows an authorised person through a secure door. An <strong>access control vestibule</strong> physically prevents this by only allowing one person through at a time — the second door only opens after the first has closed.'},
],
'6.3':[
  {t:'What is the Zero Trust security model?',d:'<strong>Zero Trust</strong> assumes no user or device should be automatically trusted — even inside the network perimeter. Every access request requires <strong>continuous verification</strong>. "Never trust, always verify." Contrasts with old perimeter-based security.'},
  {t:'What is the Principle of Least Privilege?',d:'Users, processes, and devices should only have the <strong>minimum access required</strong> to perform their job. Limits blast radius if an account is compromised. Example: a receptionist has no access to HR files.'},
  {t:'What is the difference between SSO and MFA?',d:'<strong>SSO (Single Sign-On)</strong>: one authentication grants access to multiple applications — improves convenience. <strong>MFA (Multi-Factor Authentication)</strong>: requires 2+ factors (know/have/are) — improves security. They are complementary — enterprise often uses both together.'},
  {t:'What is JIT (Just-in-Time) access?',d:'<strong>JIT access</strong> grants <strong>temporary elevated privileges</strong> for a specific task, then <strong>automatically revokes them</strong> when complete. Example: a DBA gets admin access to a database for a 2-hour maintenance window, then access is removed.'},
  {t:'What is Data Loss Prevention (DLP)?',d:'<strong>DLP</strong> monitors and blocks unauthorised data transfers — prevents employees from uploading confidential files to personal cloud storage, sending sensitive data by email, or copying to USB. Works by scanning content and enforcing policies.'},
],
'6.4':[
  {t:'What is the difference between implicit deny and explicit deny in firewall rules?',d:'<strong>Implicit deny</strong>: traffic is blocked by default unless a specific allow rule exists — standard best practice. <strong>Explicit deny</strong>: a specific rule is created to block particular traffic. Implicit deny is the baseline; explicit deny adds specificity for known threats.'},
  {t:'What does IPSec do and when is it used?',d:'<strong>IPSec (Internet Protocol Security)</strong> encrypts and authenticates IP network traffic. Used for <strong>VPN tunnels between offices</strong>, secure remote access, and protecting data in transit on untrusted networks. Operates at the network layer.'},
  {t:'What are the three Windows Firewall profiles?',d:'<strong>Domain</strong>: connected to corporate domain network — moderate rules. <strong>Private</strong>: home/trusted network — moderate rules. <strong>Public</strong>: unknown/public Wi-Fi — strictest rules, maximum blocking. Windows auto-applies the correct profile based on network type.'},
  {t:'What is the Windows Defender Firewall with Advanced Security used for?',d:'Provides <strong>fine-grained firewall rules</strong> beyond basic settings: specific port/app/IP rules, connection security rules (authentication before connection), IPSec configuration, and real-time monitoring/logging of traffic and failed connections.'},
  {t:'What is the difference between inbound and outbound firewall rules?',d:'<strong>Inbound rules</strong>: control traffic coming INTO the computer (e.g. RDP connections, web server requests). <strong>Outbound rules</strong>: control traffic going OUT (e.g. app calling home, browser requests). Both can be allow or deny rules.'},
],
'6.5':[
  {t:'What is UAC (User Account Control) and why is it important?',d:'<strong>UAC</strong> prompts users for confirmation or admin credentials before allowing system-level changes. Prevents <strong>silent privilege escalation</strong> by malware or accidental modifications. Even admins run as standard users until elevation is approved.'},
  {t:'What are the differences between Standard, Administrator, and Guest accounts?',d:'<strong>Standard</strong>: run apps, change personal settings — cannot install software or modify system. <strong>Administrator</strong>: full control — install software, drivers, configure system. <strong>Guest</strong>: temporary, minimal access — no saved settings. Least privilege = assign Standard by default.'},
  {t:'What is the difference between a Local account and a Microsoft account in Windows?',d:'<strong>Local account</strong>: credentials stored only on the device, offline access, no cloud sync. <strong>Microsoft account</strong>: cloud-based, syncs settings/files/apps across devices, enables SSO with Microsoft services. Corporate devices often use Microsoft accounts linked to Azure AD.'},
  {t:'What does "Run as Administrator" do and when should it be used?',d:'<strong>Run as Administrator</strong> executes a program with <strong>elevated privileges</strong>, bypassing standard user restrictions. Used when installing software, running CMD for system-level commands, or modifying protected settings. Should not be the default — use only when needed.'},
],
'6.6':[
  {t:'What are the five NTFS permission levels?',d:'<strong>Full Control</strong>: read/write/delete/change permissions. <strong>Modify</strong>: read/write/delete. <strong>Read & Execute</strong>: view and run. <strong>Read</strong>: view only. <strong>Write</strong>: create and write data. NTFS permissions apply both locally and over the network.'},
  {t:'When both NTFS and Share permissions apply, which takes precedence?',d:'The <strong>most restrictive</strong> permission wins. Example: Share = Full Control, NTFS = Read → effective permission = Read. Share permissions only apply over the network; NTFS applies locally and over network. Best practice: set Share to Full Control and control access via NTFS.'},
  {t:'What is NTFS permission inheritance?',d:'Child objects (files/subfolders) automatically <strong>inherit permissions from their parent folder</strong> by default. This can be disabled for specific objects. Inheritance simplifies permission management — set once at the top level.'},
  {t:'What are the three Share permission levels?',d:'<strong>Full Control</strong>: read, change, and manage permissions. <strong>Change</strong>: read and modify (create/delete/edit files). <strong>Read</strong>: view and open files only. Share permissions only apply when accessing over the network — not locally.'},
],
'6.7':[
  {t:'What is Active Directory and what does it manage?',d:'<strong>Active Directory (AD)</strong> is Microsoft\'s directory service for centralised management of users, computers, groups, and policies across a Windows domain. Enables single sign-on, Group Policy enforcement, and centralised authentication.'},
  {t:'What is a Group Policy Object (GPO) and what can it enforce?',d:'A <strong>GPO</strong> enforces security settings, software restrictions, and configurations across all domain computers. Examples: disable USB ports, enforce password complexity, map network drives, restrict Control Panel access. Applied at Domain, OU, or Site level.'},
  {t:'What is the difference between Home Folders and Folder Redirection?',d:'<strong>Home Folders</strong>: dedicated private network storage per user accessible from any domain computer. <strong>Folder Redirection</strong>: redirects specific Windows folders (Desktop, Documents) to a network share — transparent to the user but backed up centrally.'},
  {t:'What are Organisational Units (OUs) used for in Active Directory?',d:'<strong>OUs</strong> are containers that group users, computers, or devices for <strong>administrative control and GPO targeting</strong>. Example: Sales OU, HR OU, IT OU — each receives different Group Policy settings appropriate to their role.'},
  {t:'What commands manage Group Policy from the command line?',d:'<strong>gpupdate /force</strong>: immediately refresh Group Policy on the current machine. <strong>gpresult /r</strong>: display which GPOs are applied to the current user and computer (Resultant Set of Policy).'},
],
'6.8':[
  {t:'What is the difference between BitLocker and EFS?',d:'<strong>BitLocker</strong>: full-disk encryption — encrypts the entire drive. Requires TPM 2.0. Protects if device is stolen. <strong>EFS (Encrypting File System)</strong>: file/folder-level encryption on NTFS — only specific items encrypted. Tied to user\'s Windows account. BitLocker = whole drive; EFS = individual files.'},
  {t:'What is BitLocker-To-Go and when is it used?',d:'<strong>BitLocker-To-Go</strong> encrypts USB flash drives and external storage devices. Uses password or smart card authentication. Used when transporting sensitive data — encrypts the drive so data is unreadable if the USB is lost or stolen.'},
  {t:'What does TPM do and why does BitLocker require it?',d:'<strong>TPM (Trusted Platform Module)</strong> is a hardware security chip on the motherboard that <strong>securely stores encryption keys</strong>. BitLocker uses TPM to bind the encryption key to the specific hardware — if the drive is removed to another machine, it cannot be decrypted without the key.'},
  {t:'What is the difference between plain-text and cipher-text?',d:'<strong>Plain-text</strong>: data in readable, unencrypted format. <strong>Cipher-text</strong>: data that has been encrypted and is unreadable without the correct decryption key. Encryption converts plain-text → cipher-text; decryption reverses it for authorised users.'},
],
'6.9':[
  {t:'What are the key differences between WPA2 and WPA3?',d:'<strong>WPA2</strong>: uses AES encryption, widely deployed, vulnerable to KRACK attack and brute-force. <strong>WPA3</strong>: stronger encryption, protected against brute-force with SAE (Simultaneous Authentication of Equals), provides forward secrecy — past traffic cannot be decrypted even if key is later compromised.'},
  {t:'Why should WEP and WPS be disabled?',d:'<strong>WEP</strong>: uses static encryption keys that can be cracked in minutes with modern tools — completely insecure. <strong>WPS</strong>: PIN-based pairing is vulnerable to brute-force — attackers can crack the 8-digit PIN and gain network access. Both should be disabled on all routers.'},
  {t:'What is RADIUS used for in enterprise networking?',d:'<strong>RADIUS (Remote Authentication Dial-In User Service)</strong> is a centralised authentication protocol. In enterprise Wi-Fi (WPA2/WPA3-Enterprise), each employee authenticates with their own unique credentials rather than a shared password. RADIUS verifies the credentials against a central server.'},
  {t:'What is Kerberos and where is it used?',d:'<strong>Kerberos</strong> is a <strong>ticket-based authentication protocol</strong> used in Windows domain environments. When a user logs in, they receive a Ticket Granting Ticket (TGT) from the domain controller. They present service tickets to access network resources without re-entering credentials.'},
  {t:'What is TACACS+ and how does it differ from RADIUS?',d:'<strong>TACACS+</strong> (Cisco) provides AAA (Authentication, Authorisation, Accounting) and encrypts the <strong>entire authentication packet</strong>. RADIUS only encrypts the password. TACACS+ offers more granular access control and is preferred for network device administration (routers/switches).'},
],
'6.10':[
  {t:'What is a rootkit and why is it particularly dangerous?',d:'A <strong>rootkit</strong> hides deep in the OS — often at kernel or boot level — and <strong>conceals itself and other malware</strong> from antivirus software. It modifies the OS to hide its presence. Requires specialised tools or OS reinstall to remove. Often installed after initial compromise.'},
  {t:'What is ransomware and what is the recommended response?',d:'<strong>Ransomware</strong> encrypts the victim\'s files and demands payment (usually cryptocurrency) for the decryption key. <strong>Response</strong>: isolate the machine, do NOT pay (no guarantee of key), restore from clean backup, reimage if necessary. Prevention: backups, patching, email filtering.'},
  {t:'What is the difference between a virus and a worm?',d:'A <strong>virus</strong> requires a host file and spreads when the infected file is executed or shared. A <strong>worm</strong> is self-replicating and spreads autonomously across networks without user action. Worms cause more rapid spread; viruses require user interaction to propagate.'},
  {t:'What is a keylogger and what data does it target?',d:'A <strong>keylogger</strong> records every keystroke made on a device to capture <strong>passwords, credit card numbers, messages, and sensitive data</strong>. Can be software (malware) or hardware (USB device between keyboard and computer). Data is sent to the attacker silently.'},
  {t:'What is fileless malware and why is it hard to detect?',d:'<strong>Fileless malware</strong> runs entirely in <strong>RAM/memory</strong> — no files are written to disk. It uses legitimate tools (PowerShell, WMI) to execute. Traditional signature-based AV looks for files — nothing to find. Requires behavioural/heuristic detection or memory scanning.'},
  {t:'What is a cryptominer/cryptojacking attack?',d:'<strong>Cryptomining malware</strong> hijacks the victim\'s CPU and/or GPU to mine cryptocurrency for the attacker without consent. Symptoms: high CPU usage, system slowdown, high electricity consumption, overheating. Can run via browser scripts or installed malware.'},
],
'6.11':[
  {t:'What is the difference between signature-based and heuristic AV detection?',d:'<strong>Signature-based</strong>: compares files against a database of known malware signatures — fast but only catches known threats. <strong>Heuristic</strong>: analyses behaviour patterns to detect unknown/new threats. Modern AV uses both. Signatures require regular updates to remain effective.'},
  {t:'What is sandboxing in malware analysis?',d:'<strong>Sandboxing</strong> runs suspicious files in an <strong>isolated virtual environment</strong> to observe behaviour safely. Any malicious activity is contained — cannot affect the real system. Used by security analysts and enterprise AV to analyse unknown files before execution.'},
  {t:'What are the key prevention steps to avoid malware infection?',d:'<strong>Keep OS and software patched</strong>. Enable <strong>real-time AV protection</strong>. Use <strong>email filtering</strong> (blocks phishing/attachments). Apply <strong>least privilege</strong> (standard accounts). Enable <strong>firewall</strong>. <strong>User education</strong> on phishing recognition. Disable AutoRun for USB drives.'},
],
'6.12':[
  {t:'What is the difference between phishing, spear phishing, and whaling?',d:'<strong>Phishing</strong>: mass emails impersonating trusted entities to steal credentials. <strong>Spear phishing</strong>: targeted at a specific individual — personalised and more convincing. <strong>Whaling</strong>: targets high-level executives (CEO, CFO) — high-value targets with greater system access.'},
  {t:'What is tailgating vs shoulder surfing?',d:'<strong>Tailgating</strong>: physically following an authorised person through a secure door without authentication. Prevented by access control vestibules and security awareness. <strong>Shoulder surfing</strong>: observing someone\'s screen or keyboard to steal PINs/passwords. Prevented by privacy screens and awareness.'},
  {t:'What is a baiting attack?',d:'<strong>Baiting</strong> involves leaving infected USB drives (or other media) in a car park or public area. Curious employees plug them in, executing malware automatically. Defence: never plug in unknown devices; disable AutoRun; enforce USB port restrictions via Group Policy.'},
  {t:'What is vishing and smishing?',d:'<strong>Vishing (voice phishing)</strong>: attackers call victims impersonating IT support, banks, or government to extract credentials or personal information. <strong>Smishing (SMS phishing)</strong>: phishing via text message — fake delivery notifications, bank alerts, prize messages with malicious links.'},
],
'6.13':[
  {t:'What is a Man-in-the-Middle (MITM) attack?',d:'In a <strong>MITM attack</strong>, the attacker positions themselves between two communicating parties and intercepts/modifies traffic without either party knowing. Can steal credentials, session tokens, or sensitive data. Prevented by HTTPS/TLS, certificate validation, and VPNs.'},
  {t:'What is the difference between DoS and DDoS?',d:'<strong>DoS (Denial of Service)</strong>: single source floods a target to make it unavailable. <strong>DDoS (Distributed DoS)</strong>: coordinated attack from thousands of sources (botnet) — much harder to block as traffic comes from many IPs. Mitigated by rate limiting, WAF, CDN scrubbing.'},
  {t:'What is a zero-day exploit?',d:'A <strong>zero-day exploit</strong> attacks a vulnerability that is <strong>unknown to the vendor</strong> — no patch exists yet. Extremely valuable to attackers. Defence: defence-in-depth (AV, firewall, least privilege) since you cannot patch an unknown vulnerability.'},
  {t:'What is SQL injection and how does it work?',d:'<strong>SQL injection</strong> inserts malicious SQL code into web form inputs (login fields, search boxes). If the app doesn\'t sanitise input, the SQL code executes against the database — enabling data extraction, modification, or deletion. Prevented by parameterised queries and input validation.'},
],
'6.14':[
  {t:'What security risks do EOL (End-of-Life) systems present?',d:'<strong>EOL systems</strong> no longer receive security patches from the vendor. Known vulnerabilities are permanently unpatched, making them easy targets. Options: upgrade to supported version, isolate from network, or compensate with other controls (firewall, AV). Running EOL = high risk.'},
  {t:'What are the risks of BYOD (Bring Your Own Device)?',d:'Personal devices often <strong>lack enterprise security controls</strong>: no MDM, no full disk encryption, personal apps, possible malware. Can expose corporate data if device is lost, infected, or user leaves company. Mitigated by <strong>MDM policies, containerisation, and network segmentation</strong>.'},
  {t:'What is the risk of unpatched and misconfigured systems?',d:'<strong>Unpatched</strong>: missing updates leave known CVEs exploitable — attackers scan specifically for unpatched systems. <strong>Misconfigured</strong>: default credentials, unnecessary open ports, excessive permissions — create entry points. Both are preventable with patch management and security baselines.'},
],
'6.15':[
  {t:'What are the steps of the CompTIA malware removal process in order?',d:'1. <strong>Investigate/verify symptoms</strong> 2. <strong>Quarantine</strong> (disconnect from network) 3. <strong>Disable System Restore</strong> 4. <strong>Remediate</strong>: update AV, scan in Safe Mode/WinPE 5. <strong>Schedule scans & run updates</strong> 6. <strong>Enable System Restore</strong> 7. <strong>Educate user</strong>'},
  {t:'Why must System Restore be disabled before malware removal?',d:'System Restore stores snapshots of system state. Malware can <strong>embed itself in restore points</strong>. If you remove malware but leave System Restore enabled, a system restore will reinfect the machine. Disable → remove malware → confirm clean → re-enable System Restore.'},
  {t:'When should you reimage a system instead of removing malware?',d:'Reimaging is necessary when: <strong>ransomware has encrypted files</strong>, the malware is deeply embedded (rootkit in MBR), removal attempts repeatedly fail, or the infection is severe enough that system integrity cannot be trusted. Restore from clean image or reinstall OS.'},
  {t:'Why is Safe Mode useful for malware removal?',d:'<strong>Safe Mode</strong> loads only essential Windows components and drivers — malware that runs at startup or injects into system processes <strong>will not load</strong>. This allows AV scans to detect and remove malware that would otherwise be active and interfering during a normal boot.'},
],
'6.16':[
  {t:'What are the key workstation account hardening steps?',d:'<strong>Disable Guest account</strong>, <strong>change default admin credentials</strong>, <strong>restrict user permissions</strong> (least privilege), <strong>account lockout policy</strong> (lock after X failed attempts), <strong>password expiration</strong>, <strong>disable AutoRun</strong>, <strong>disable unused services</strong>, <strong>screensaver lock</strong>.'},
  {t:'What is data-at-rest vs data-in-transit encryption?',d:'<strong>Data-at-rest</strong>: stored data encrypted on disk (BitLocker, EFS) — protects if device stolen. <strong>Data-in-transit</strong>: data encrypted while moving across network (HTTPS/TLS, IPSec, VPN) — protects from interception. Both are needed for complete data protection.'},
  {t:'What makes a strong password policy?',d:'<strong>Length</strong>: 12+ characters minimum. <strong>Complexity</strong>: uppercase, lowercase, numbers, special characters. <strong>Uniqueness</strong>: different for every account. <strong>Expiration</strong>: periodic forced changes. <strong>No reuse</strong>: prevent cycling back. <strong>MFA</strong>: adds second factor beyond just password.'},
  {t:'What is BIOS/UEFI password and what does it protect?',d:'A <strong>BIOS/UEFI password</strong> prevents unauthorised changes to boot settings and prevents booting from external media (USB, DVD). Two types: <strong>Supervisor password</strong> (locks BIOS settings) and <strong>User/Boot password</strong> (required before OS loads). Protects against physical attacks.'},
],
'6.17':[
  {t:'What is the difference between degaussing and wiping for data destruction?',d:'<strong>Degaussing</strong>: powerful magnetic field destroys magnetic media (HDDs, tapes) by randomising magnetic domains — <strong>ineffective on SSDs</strong> (no magnetic storage). <strong>Wiping/overwriting</strong>: writes random data over storage multiple times — works on HDDs and SSDs. Both prevent data recovery.'},
  {t:'What is a Certificate of Destruction and when is it required?',d:'A <strong>Certificate of Destruction</strong> is a document from a certified vendor confirming that storage media was securely destroyed. Required for <strong>HIPAA, PCI-DSS, GDPR, and other compliance frameworks</strong>. Protects the organisation from liability if decommissioned equipment is later found with data.'},
  {t:'Why is formatting alone insufficient for secure data disposal?',d:'Formatting only removes the file system index — the <strong>actual data remains on the drive</strong> and is recoverable with forensic tools. Secure disposal requires: physical destruction (shredding/drilling), certified wiping (multiple-pass overwrite), or degaussing (HDDs only).'},
  {t:'What is the most secure method of data destruction?',d:'<strong>Physical destruction</strong> (shredding, incineration, disintegration) is the most thorough. Shredding reduces media to small particles unrecoverable by any means. Often combined with <strong>documented Certificate of Destruction</strong> for compliance purposes.'},
],
'6.18':[
  {t:'What SOHO router changes should be made immediately on setup?',d:'<strong>Change default admin credentials</strong> (admin/admin is publicly known). <strong>Update firmware</strong>. <strong>Change SSID</strong>. <strong>Enable WPA3/WPA2-AES</strong>. <strong>Disable WPS</strong>. <strong>Disable UPnP</strong>. <strong>Disable remote management</strong>. These eliminate the most common attack vectors against SOHO routers.'},
  {t:'What is a screened subnet (DMZ) and why is it used?',d:'A <strong>screened subnet (DMZ)</strong> is a buffer network between the internet and the internal network. Public-facing servers (web, email) are placed in the DMZ — if compromised, the attacker cannot directly reach internal systems. Internal network remains protected.'},
  {t:'What is the purpose of disabling SSID broadcast?',d:'<strong>Disabling SSID broadcast</strong> hides the network name from appearing in Wi-Fi scans. This provides <strong>security through obscurity</strong> — casual attackers won\'t see the network. However, it is not a strong security measure alone — determined attackers can still detect hidden SSIDs with scanning tools.'},
  {t:'What is the difference between IP filtering and MAC filtering?',d:'<strong>IP filtering</strong>: restricts network access to specific IP addresses — e.g. allow only 192.168.1.x range. <strong>MAC filtering</strong>: restricts to specific hardware addresses. Both can be bypassed (IP spoofing, MAC spoofing) but add a layer of difficulty. Neither is a substitute for strong encryption.'},
],
'6.19':[
  {t:'What is Secure DNS (DoH/DoT) and why does it matter?',d:'<strong>DNS over HTTPS (DoH)</strong> and <strong>DNS over TLS (DoT)</strong> encrypt DNS queries, preventing ISPs and attackers from seeing which domains you look up. Without it, DNS is plaintext and can be intercepted or spoofed (DNS poisoning). Use Cloudflare (1.1.1.1) or Google (8.8.8.8) as encrypted DNS providers.'},
  {t:'What is hashing used for in browser security?',d:'<strong>Hashing</strong> verifies the integrity of downloaded files. The developer publishes a <strong>SHA-256 hash</strong> of the installer. After download, the user computes the hash and compares — if they match, the file is authentic and unmodified. Detects tampered or corrupted downloads.'},
  {t:'What browser settings improve security on a shared/public computer?',d:'<strong>Private browsing mode</strong> (no saved history/cookies/credentials). <strong>Clear browsing data</strong> after use. <strong>Do not save passwords</strong>. <strong>Log out</strong> of all accounts. <strong>Pop-up blocker enabled</strong>. These prevent the next user from accessing your credentials or browsing history.'},
  {t:'What risks do browser extensions pose and how are they mitigated?',d:'Malicious extensions can <strong>steal credentials, inject ads, spy on browsing, or redirect searches</strong>. Mitigation: only install from official stores (Chrome Web Store, Firefox Add-ons), review permissions before installing, regularly audit and remove unused extensions.'},
],
'6.20':[
  {t:'What is scareware and how does it differ from ransomware?',d:'<strong>Scareware</strong>: fake security alerts claiming the system is infected, prompting purchase of fraudulent removal software. No actual encryption occurs — it\'s a scare tactic. <strong>Ransomware</strong>: actually encrypts files and demands payment. Scareware = social engineering; ransomware = real damage.'},
  {t:'What does browser redirection to an unknown search engine indicate?',d:'<strong>Browser hijacker</strong> — malware or malicious extension that modifies browser settings (homepage, default search, DNS) to redirect traffic to fake or ad-loaded sites. Remove suspicious extensions, reset browser settings, check hosts file (C:\Windows\System32\drivers\etc\hosts), run AV scan.'},
  {t:'What causes high CPU usage in a browser without obvious activity?',d:'<strong>Cryptojacking</strong> — malicious JavaScript running in the browser mines cryptocurrency using the victim\'s CPU/GPU without consent. Signs: browser sluggish, CPU spikes when browser open, fan runs constantly. Fix: block malicious sites, use ad/script blockers, remove malicious extensions.'},
  {t:'What do certificate warnings in a browser indicate?',d:'SSL/TLS certificate warnings may indicate: <strong>expired certificate</strong>, <strong>certificate mismatch</strong> (wrong domain), <strong>self-signed certificate</strong>, or a <strong>Man-in-the-Middle attack</strong> intercepting HTTPS traffic. Never ignore certificate warnings on banking or sensitive sites — could mean active interception.'},
  {t:'What does OS update failure often indicate from a security perspective?',d:'Persistent <strong>Windows Update failures</strong> can indicate a <strong>rootkit blocking the update service</strong>, corrupted OS files, or malware disabling Windows Update to prevent security patches being applied. Use DISM to repair Windows components, then investigate for rootkits using specialised tools.'},
],
'7.1':[
  {t:'What should a complete support ticket include?',d:'Include user identity, device details, issue description, category, severity, and troubleshooting notes to support efficient handoff and escalation.'},
  {t:'What should you do if Tier 1 cannot solve an issue?',d:'Escalate to Tier 2/3 and keep the ticket updated. Never close or delete unresolved incidents.'},
],
'7.2':[
  {t:'What is the main difference between inventory and CMDB?',d:'Inventory tracks assets you own; CMDB tracks assets plus configuration relationships and change history.'},
],
'7.3':[
  {t:'How is an SOP different from an incident report?',d:'SOP documents repeatable procedures; incident report documents what happened in a specific outage/security event.'},
],
'7.4':[
  {t:'What are standard, normal, and emergency changes?',d:'Standard = preapproved low risk; normal = reviewed/approved; emergency = urgent with retrospective documentation.'},
],
'7.5':[
  {t:'What does the 3-2-1 backup rule mean?',d:'Keep 3 copies, on 2 media types, with 1 offsite copy.'},
],
'7.6':[
  {t:'How do you reduce ESD risk during hardware service?',d:'Use an ESD strap clipped to unpainted chassis metal, ESD mat, and proper antistatic storage.'},
],
'7.7':[
  {t:'What humidity range is ideal for IT environments?',d:'Maintain about 40-60% humidity to reduce both static discharge risk and condensation risk.'},
],
'7.8':[
  {t:'What is order of volatility in incident response?',d:'Collect volatile data first (RAM/cache), then persistent disk artifacts, to preserve evidence.'},
],
'7.9':[
  {t:'What communication approach should technicians use with non-technical users?',d:'Use clear plain language, active listening, respectful tone, and set realistic expectations.'},
],
'7.10':[
  {t:'Which script extensions are common for Windows, Linux, and cross-platform automation?',d:'Windows: .ps1/.bat, Linux: .sh, cross-platform automation/data workflows: .py.'},
],
'7.11':[
  {t:'Why should VNC be paired with VPN or SSH?',d:'VNC has weak/no default transport security in many deployments, so encrypted tunneling is recommended.'},
],
'7.12':[
  {t:'What are two major AI limitations for IT operations?',d:'Bias from training data and hallucinations that produce plausible but incorrect answers.'},
],
'7.13':[
  {t:'What are the six troubleshooting steps?',d:'Identify problem, form theory, test theory, implement plan, verify/prevent, then document outcomes.'},
]
});
// ═══════════════════════════════════════════════════════
// QUESTION BANK (QUIZ)
// ═══════════════════════════════════════════════════════
const BANK = {
'1.1':[
  {q:"A technician is upgrading a laptop\'s RAM and needs DDR4 SO-DIMM modules. How many pins do DDR4 SO-DIMM modules have?",o:["A. 204 pins","B. 240 pins","C. 260 pins","D. 262 pins"],c:2,e:"DDR4 SO-DIMM uses <strong>260 pins</strong>. DDR3 SO-DIMM uses 204 pins. DDR5 SO-DIMM uses 262 pins.",sc:""},
  {q:"A user wants to upgrade their laptop for better boot times. Which storage interface provides the highest performance?",o:["A. SATA (6 Gbps)","B. mSATA","C. NVMe via PCIe","D. USB 3.0 external"],c:2,e:"<strong>NVMe</strong> uses PCIe lanes and is significantly faster than SATA. mSATA is limited to SATA speeds.",sc:""},
  {q:"A technician is replacing a Wi-Fi antenna in a laptop. What is the MOST critical precaution?",o:["A. Use conductive gloves","B. Follow the original antenna routing path","C. Always replace the wireless card too","D. Update Wi-Fi drivers immediately"],c:1,e:"<strong>Following the original routing path</strong> is critical — a pinched or twisted antenna will degrade performance.",sc:""},
  {q:"Which M.2 form factor has dimensions of 22mm wide and 80mm long?",o:["A. M.2 2230","B. M.2 2242","C. M.2 2260","D. M.2 2280"],c:3,e:"<strong>M.2 2280</strong> = 22mm wide, 80mm long. This is the most common laptop SSD size.",sc:""},
  {q:"A user reports a visibly bulging back cover on their smartphone. What should the technician do FIRST?",o:["A. Charge the battery to full","B. Run battery diagnostic software","C. Handle with caution and replace per manufacturer guidelines","D. Update the OS"],c:2,e:"A <strong>swollen battery</strong> is a safety risk. Handle with caution and follow manufacturer replacement guidelines. Never charge it.",sc:""},
  {q:"Which storage interface is designed for compact devices and limited to SATA speeds?",o:["A. NVMe via M.2","B. mSATA","C. PCIe Gen 4","D. SATA Express"],c:1,e:"<strong>mSATA (Mini-SATA)</strong> is a smaller SATA variant for space-constrained devices, limited to SATA speeds.",sc:""},
  {q:"Mobile devices commonly use what type of RAM configuration?",o:["A. Removable SO-DIMM DDR4","B. Desktop DIMM modules","C. Integrated/soldered RAM","D. ECC registered DIMM"],c:2,e:"Mobile devices use <strong>integrated (soldered) RAM</strong> fixed to the motherboard — it cannot be removed or upgraded.",sc:""},
  {q:"Which of the following is NOT an advantage of SSDs over HDDs?",o:["A. Faster performance","B. Greater durability","C. Lower cost per gigabyte","D. Lower power consumption"],c:2,e:"<strong>Cost per GB is NOT an SSD advantage</strong> — HDDs are cheaper per GB. SSDs excel in speed, durability, and power efficiency.",sc:""},
],
'1.2':[
  {q:"A user wants to share their mobile internet with a laptop using a cable. Which method should they use?",o:["A. Bluetooth tethering","B. Wi-Fi hotspot","C. USB tethering","D. NFC sharing"],c:2,e:"<strong>USB tethering</strong> shares internet via a physical cable — stable and generally faster than wireless options.",sc:""},
  {q:"A customer with an older iPhone has charging issues. Which connector type is involved?",o:["A. USB-C","B. microUSB","C. miniUSB","D. Lightning"],c:3,e:"Older iPhones use Apple\'s proprietary <strong>Lightning</strong> connector for charging and data transfer.",sc:""},
  {q:"Which technology enables contactless payments on a smartphone?",o:["A. Bluetooth 5.0","B. Wi-Fi Direct","C. NFC","D. RFID scanning"],c:2,e:"<strong>NFC</strong> enables contactless payments by operating within a few centimetres.",sc:""},
  {q:"Bluetooth operates in which frequency band?",o:["A. 5 GHz","B. 2.4 GHz","C. 900 MHz","D. 13.56 MHz"],c:1,e:"<strong>Bluetooth operates at 2.4 GHz</strong> with a range of ~10 metres. NFC operates at 13.56 MHz.",sc:""},
  {q:"Which tethering connection types are supported? (Best answer)",o:["A. Wi-Fi only","B. Wi-Fi, USB, or Bluetooth","C. USB and NFC only","D. Bluetooth and RFID"],c:1,e:"Tethering supports: <strong>Wi-Fi hotspot, USB, and Bluetooth</strong> — each with different speed and power trade-offs.",sc:""},
],
'1.3':[
  {q:"A technician needs to sideload a custom app on an Android test device. Which file format is required?",o:["A. .ipa","B. .exe","C. .apk","D. .dmg"],c:2,e:"<strong>Android uses .apk (Android Package Kit)</strong> files. .ipa is for iOS/iPadOS.",sc:""},
  {q:"An IT technician is setting up a new iPad. Which file format installs apps on iPadOS?",o:["A. .apk","B. .ipa","C. .exe","D. .pkg"],c:1,e:"<strong>iPadOS uses .ipa (iOS App Store Package)</strong> files for app installation.",sc:""},
  {q:"A client\'s iPhone no longer receives any security updates as Apple discontinued support entirely. What is this?",o:["A. Update limitations","B. Compatibility concern","C. End-of-Life (EOL)","D. Jailbreak restriction"],c:2,e:"<strong>End-of-Life (EOL)</strong> = the vendor has completely ceased all updates and support.",sc:""},
  {q:"An older iPhone can\'t update to the latest iOS because its hardware doesn\'t meet requirements. What does this describe?",o:["A. End-of-Life (EOL)","B. Update limitations","C. App spoofing","D. Compatibility concern"],c:1,e:"<strong>Update limitations</strong> occur when older hardware cannot support new OS versions.",sc:""},
  {q:"Android 15 is known by what codename?",o:["A. Tiramisu","B. Upside Down Cake","C. Vanilla Ice Cream","D. Baklava"],c:2,e:"<strong>Android 15 = Vanilla Ice Cream</strong>. Android 16 = Baklava.",sc:""},
],
'1.4':[
  {q:"A user drops their phone and the screen shows a spider-web crack. What is the FIRST step?",o:["A. Factory reset","B. Inspect for visual signs of damage","C. Replace battery first","D. Update the OS"],c:1,e:"<strong>Visual inspection is always the first step</strong> when assessing physical damage.",sc:""},
  {q:"A user drops their phone in a sink. What should they NOT do immediately?",o:["A. Remove it from water","B. Give it ventilation","C. Power it on to check damage","D. Remove the case"],c:2,e:"<strong>Do NOT power on a liquid-damaged device</strong> — applying power to wet circuits causes short circuits.",sc:""},
  {q:"A device cannot connect to Wi-Fi, Bluetooth, AND cellular simultaneously. What should the technician check FIRST?",o:["A. Reinstall the OS","B. Replace the wireless card","C. Check if airplane mode is enabled","D. Factory reset"],c:2,e:"<strong>Airplane mode disables ALL wireless radios simultaneously</strong> — always check this first.",sc:""},
  {q:"A device gets extremely hot during gaming. What is the recommended first step?",o:["A. Replace the screen","B. Close unused apps and move out of direct sunlight","C. Enable airplane mode permanently","D. Reinstall all apps"],c:1,e:"<strong>Close unused apps</strong> to reduce CPU load and remove the device from heat sources like direct sunlight.",sc:""},
],
'1.5':[
  {q:"An app on a user\'s phone crashes when opened. What is the BEST first step?",o:["A. Reinstall the OS","B. Factory reset","C. Force quit the app","D. Delete user data"],c:2,e:"<strong>Force quitting</strong> is the least invasive first step — clears frozen processes.",sc:""},
  {q:"An OS update fails. Device shows a low storage warning. What is the MOST likely cause?",o:["A. Slow network","B. Incompatible hardware","C. Insufficient storage","D. Incorrect account"],c:2,e:"<strong>Insufficient storage</strong> is the most likely cause — OS updates require significant free space.",sc:""},
  {q:"A smartphone can\'t connect to Wi-Fi. The device is in airplane mode. What should the technician advise first?",o:["A. Reset network settings","B. Re-enter Wi-Fi password","C. Toggle airplane mode off","D. Restart the router"],c:2,e:"<strong>Airplane mode disables all wireless communication</strong> including Wi-Fi. Turn it off first.",sc:""},
  {q:"A user\'s screen won\'t autorotate. What should be checked FIRST?",o:["A. Replace the screen","B. Factory reset","C. Check if screen rotation is enabled in settings","D. Reinstall display driver"],c:2,e:"<strong>Check rotation is enabled in settings first</strong> — the most common and easily fixed cause.",sc:""},
],
'1.6':[
  {q:"A smartphone shows constant pop-up ads even when no browser is open. Most likely cause?",o:["A. Developer mode","B. Adware infection","C. NFC misconfiguration","D. Airplane mode"],c:1,e:"<strong>Adware</strong> injects intrusive ads across apps and the device interface.",sc:""},
  {q:"A user downloads an app that looks like their bank\'s app but has a different publisher. What threat is this?",o:["A. Adware","B. Root exploit","C. Application spoofing","D. Developer mode attack"],c:2,e:"<strong>Application spoofing</strong> = malicious apps visually mimicking legitimate ones to steal credentials.",sc:""},
  {q:"What is the BEST practice to reduce malware risk on a mobile device?",o:["A. Enable developer mode","B. Root the device","C. Only download from official app stores","D. Disable all updates"],c:2,e:"<strong>Official app stores</strong> vet apps for malware. Unofficial sources carry much higher risk.",sc:""},
  {q:"A technician finds a user has rooted their Android device. What is the PRIMARY security concern?",o:["A. Reduced brightness","B. Voided warranty only","C. Security restrictions bypassed — increased malware exposure","D. Slower Wi-Fi"],c:2,e:"<strong>Rooting bypasses OS security restrictions</strong>, significantly increasing malware and unauthorised access risk.",sc:""},
],
'1.7':[
  {q:"In Android, where is the setting to enable or disable Wi-Fi?",o:["A. Settings > Display > Wi-Fi","B. Settings > Connections > Wi-Fi","C. Settings > Security > Network","D. Settings > Apps > Wi-Fi"],c:1,e:"<strong>Settings → Connections → Wi-Fi</strong> is the Android path for Wi-Fi settings.",sc:""},
  {q:"A user wants to pair a Bluetooth device on their Android phone. Where do they navigate?",o:["A. Settings > Security > Bluetooth","B. Settings > Apps > Bluetooth","C. Settings > Connections > Bluetooth","D. Settings > Network > Bluetooth"],c:2,e:"<strong>Settings → Connections → Bluetooth</strong> is the Android Bluetooth settings path.",sc:""},
  {q:"Where are NFC settings and contactless payment configured on Android?",o:["A. Settings > Security > NFC","B. Settings > Connections > NFC and contactless payment","C. Settings > Apps > Payments","D. Settings > Privacy > NFC"],c:1,e:"<strong>Settings → Connections → NFC and contactless payment</strong>.",sc:""},
],
'1.8':[
  {q:"Where does a technician navigate to enable Wi-Fi on an iPhone?",o:["A. Settings > Network > Wi-Fi","B. Settings > Connections > Wi-Fi","C. Settings > Wi-Fi","D. Control Panel > Wi-Fi"],c:2,e:"<strong>Settings → Wi-Fi</strong> is the iOS Wi-Fi settings path.",sc:""},
  {q:"Where is the Bluetooth setting in iOS?",o:["A. Settings > Connections > Bluetooth","B. Settings > Bluetooth","C. Settings > Wireless > Bluetooth","D. Settings > Privacy > Bluetooth"],c:1,e:"<strong>Settings → Bluetooth</strong> is the iOS Bluetooth path.",sc:""},
  {q:"Where does a technician check cellular data usage and plan options on an iPhone?",o:["A. Settings > Network > Cellular","B. Settings > Connections > Cellular","C. Settings > Cellular","D. Settings > Privacy > Cellular"],c:2,e:"<strong>Settings → Cellular</strong> for iOS cellular data settings.",sc:""},
],
'2.1':[
  {q:"A switch receives a frame. How does it determine where to forward it?",o:["A. IP address","B. MAC address","C. Port number","D. Serial number"],c:1,e:"<strong>Switches use MAC addresses</strong> (Layer 2) to make forwarding decisions.",sc:""},
  {q:"In a P2P network, each device can act as:",o:["A. A client only","B. A server only","C. Both client and server","D. A redistribution point only"],c:2,e:"In a <strong>P2P network</strong>, each device acts as both client and server simultaneously.",sc:""},
  {q:"Which cable provides the highest resistance to EMI?",o:["A. Cat5e twisted pair","B. Coaxial cable","C. Fiber optic cable","D. Cat6a shielded"],c:2,e:"<strong>Fiber optic</strong> transmits light, making it completely immune to EMI.",sc:""},
],
'2.2':[
  {q:"Which port number is used by HTTPS?",o:["A. 80","B. 8080","C. 443","D. 8443"],c:2,e:"<strong>HTTPS uses port 443</strong>. HTTP uses port 80.",sc:""},
  {q:"Encrypted remote command-line access to a Linux server uses which protocol and port?",o:["A. Telnet port 23","B. SSH port 22","C. RDP port 3389","D. HTTP port 80"],c:1,e:"<strong>SSH (Secure Shell) port 22</strong> provides encrypted remote access.",sc:""},
  {q:"Which protocol uses ports 20 and 21?",o:["A. SSH","B. SMTP","C. FTP","D. SFTP"],c:2,e:"<strong>FTP</strong>: port 21 (commands), port 20 (data).",sc:""},
  {q:"Which port does a mail server use to receive email from other mail servers?",o:["A. 110 POP3","B. 143 IMAP","C. 25 SMTP","D. 587 Submission"],c:2,e:"<strong>SMTP port 25</strong> handles server-to-server email transfer.",sc:""},
  {q:"Windows remote desktop access uses which protocol and port?",o:["A. VNC port 5900","B. SSH port 22","C. RDP port 3389","D. Telnet port 23"],c:2,e:"<strong>RDP port 3389</strong> for Windows remote desktop.",sc:""},
  {q:"SMB/CIFS file sharing uses which port?",o:["A. 139","B. 389","C. 445","D. 3389"],c:2,e:"<strong>SMB/CIFS uses port 445</strong> for modern Windows file and printer sharing.",sc:""},
],
'2.3':[
  {q:"Which 802.11 standard supports up to 9.6 Gbps across 2.4, 5, AND 6 GHz?",o:["A. 802.11ac","B. 802.11n","C. 802.11ax","D. 802.11g"],c:2,e:"<strong>802.11ax (Wi-Fi 6/6E)</strong> supports 9.6 Gbps across all three bands.",sc:""},
  {q:"How many non-overlapping channels does the 2.4 GHz band have in the US?",o:["A. 11","B. 6","C. 3","D. 23"],c:2,e:"<strong>2.4 GHz has only 3 non-overlapping channels: 1, 6, and 11.</strong>",sc:""},
  {q:"Which 802.11 standard operates ONLY on 5 GHz and introduced MU-MIMO?",o:["A. 802.11n","B. 802.11ac","C. 802.11ax","D. 802.11g"],c:1,e:"<strong>802.11ac (Wi-Fi 5)</strong> operates only on 5 GHz and introduced MU-MIMO.",sc:""},
],
'2.4':[
  {q:"Which device combines firewall, IDS, web filtering, and antivirus into one appliance?",o:["A. Proxy Server","B. Load Balancer","C. Syslog Server","D. UTM"],c:3,e:"<strong>UTM (Unified Threat Management)</strong> combines multiple security functions in one device.",sc:""},
  {q:"Which server collects log data from network devices for monitoring?",o:["A. NTP Server","B. Syslog Server","C. AAA Server","D. Print Server"],c:1,e:"<strong>Syslog Server</strong> collects and stores log data from network devices.",sc:""},
  {q:"What is the security best practice for SCADA systems?",o:["A. Connect to the public internet","B. Integrate with corporate domain","C. Isolate from the corporate network","D. Use as primary DNS server"],c:2,e:"<strong>SCADA systems should be isolated</strong> — they control critical infrastructure and often run legacy OSes.",sc:""},
],
'2.5':[
  {q:"Which DNS record type maps a hostname to an IPv4 address?",o:["A. AAAA","B. MX","C. CNAME","D. A"],c:3,e:"<strong>A record</strong> maps a hostname to an IPv4 address.",sc:""},
  {q:"In DHCP DORA, what does the 'O' represent?",o:["A. Optional parameters","B. Offer — server responds with IP","C. Open port","D. Output configuration"],c:1,e:"DORA: Discovery, <strong>Offer</strong>, Request, Acknowledgment.",sc:""},
  {q:"A device has IP address 169.254.14.5. What does this indicate?",o:["A. Correctly configured static IP","B. IPv6 fallback","C. DHCP unreachable — APIPA assigned","D. DNS failure"],c:2,e:"<strong>169.254.x.x = APIPA</strong> — DHCP server unreachable. Local-only communication.",sc:""},
  {q:"Which DNS record specifies authorised mail servers for a domain?",o:["A. DKIM","B. DMARC","C. SPF","D. MX"],c:2,e:"<strong>SPF (Sender Policy Framework)</strong> specifies authorised mail servers.",sc:""},
],
'2.6':[
  {q:"A remote employee needs secure access to company resources from home. Which VPN type is best?",o:["A. Site-to-Site VPN","B. Remote Access VPN","C. VLAN segmentation","D. Split tunneling"],c:1,e:"<strong>Remote Access VPN</strong> allows a single user to connect from any location.",sc:""},
  {q:"A company wants to separate IoT devices from workstations on the same physical switch. Which technology?",o:["A. Remote Access VPN","B. VLAN","C. Site-to-Site VPN","D. Wi-Fi channel isolation"],c:1,e:"<strong>VLANs</strong> logically segment a physical network — IoT and corporate traffic stay isolated.",sc:""},
  {q:"Which is a key benefit of implementing VLANs?",o:["A. More IP addresses","B. Eliminates routers","C. Reduces broadcast traffic","D. Automatically encrypts traffic"],c:2,e:"<strong>VLANs reduce broadcast traffic</strong> by creating separate broadcast domains.",sc:""},
],
'2.7':[
  {q:"IEEE 802.3at (PoE+) provides a maximum of how many watts per port?",o:["A. 15.4W","B. 25.5W","C. 30W","D. 48W"],c:1,e:"<strong>802.3at (PoE+) = up to 25.5W</strong>. Standard 802.3af = 15.4W.",sc:""},
  {q:"The first three bytes of a MAC address identify what?",o:["A. Device serial number","B. Network segment","C. OUI — vendor/manufacturer","D. IP address mapping"],c:2,e:"The first 3 bytes are the <strong>OUI (Organizationally Unique Identifier)</strong> — identifies the manufacturer.",sc:""},
  {q:"Which device converts fiber optic signals to electrical signals in FTTH deployments?",o:["A. Cable modem","B. DSL modem","C. PoE injector","D. ONT"],c:3,e:"<strong>ONT (Optical Network Terminal)</strong> converts fiber light signals to electrical signals.",sc:""},
],
'2.8':[
  {q:"Which IPv4 address class uses the default subnet mask 255.255.255.0 (/24)?",o:["A. Class A","B. Class B","C. Class C","D. Class D"],c:2,e:"<strong>Class C</strong> uses /24 (255.255.255.0), supporting up to 254 hosts.",sc:""},
  {q:"What is the Class B private IP address range?",o:["A. 10.0.0.0–10.255.255.255","B. 172.16.0.0–172.31.255.255","C. 192.168.0.0–192.168.255.255","D. 169.254.0.0–169.254.255.255"],c:1,e:"<strong>Class B private range: 172.16.0.0–172.31.255.255</strong>.",sc:""},
  {q:"How many bits does an IPv6 address contain?",o:["A. 32","B. 64","C. 96","D. 128"],c:3,e:"<strong>IPv6 = 128-bit</strong> addresses in colon-separated hexadecimal.",sc:""},
],
'2.9':[
  {q:"Which internet connection type has the highest latency and is susceptible to weather?",o:["A. Fiber","B. Cable","C. Satellite","D. DSL"],c:2,e:"<strong>Satellite</strong> has the highest latency due to the distance to orbit and back.",sc:""},
  {q:"Which network type connects personal devices within ~10 metres via Bluetooth?",o:["A. LAN","B. WAN","C. MAN","D. PAN"],c:3,e:"<strong>PAN (Personal Area Network)</strong> — short range, typically Bluetooth.",sc:""},
  {q:"Which enterprise network uses Fibre Channel for block-level storage?",o:["A. WAN","B. MAN","C. SAN","D. WLAN"],c:2,e:"<strong>SAN (Storage Area Network)</strong> uses Fibre Channel for block-level storage in enterprises.",sc:""},
],
'2.10':[
  {q:"Which tool is used to identify which cable in a bundle connects to a specific patch panel port?",o:["A. Cable tester","B. Loopback plug","C. Toner probe","D. Punchdown tool"],c:2,e:"<strong>Toner probe</strong> traces and identifies cables in bundles and walls.",sc:""},
  {q:"After making a custom Ethernet cable, which tool verifies the wiring is correct?",o:["A. Loopback plug","B. Toner probe","C. Cable tester","D. Wi-Fi analyzer"],c:2,e:"A <strong>cable tester</strong> verifies continuity, correct pin wiring, and detects faults.",sc:""},
  {q:"Which tool passively monitors network traffic without interrupting data flow?",o:["A. Cable tester","B. Wi-Fi analyzer","C. Network tap","D. Loopback plug"],c:2,e:"A <strong>Network tap</strong> passively copies traffic for monitoring without disruption.",sc:""},
  {q:"Which tool attaches RJ-45 connectors to Ethernet cables?",o:["A. Punchdown tool","B. Crimper","C. Cable stripper","D. Cable tester"],c:1,e:"A <strong>crimper</strong> presses RJ-45/RJ-11 connector pins into cable wires.",sc:""},
],
'2.11':[
  {q:"A company uses a domain controller for centralised authentication. What network model is this?",o:["A. Peer-to-Peer Workgroup","B. Client/Server Domain","C. Mesh network","D. Ad-hoc network"],c:1,e:"A <strong>domain uses the Client/Server model</strong> with a domain controller managing authentication.",sc:""},
  {q:"Which command maps a network share to drive letter Z: on Windows?",o:["A. net share Z: \\\\server\\folder","B. net use Z: \\\\server\\folder","C. ipconfig /map Z:","D. netstat Z:"],c:1,e:"<strong>net use Z: \\\\server\\folder</strong> maps a network share to drive Z.",sc:""},
  {q:"What Windows firewall profile is most restrictive, designed for public Wi-Fi?",o:["A. Domain","B. Private","C. Public","D. Trusted"],c:2,e:"<strong>Public profile</strong> is most restrictive — limits sharing and discoverability for untrusted networks.",sc:""},
],
'2.12':[
  {q:"Which commands release the current IP and request a new one from DHCP?",o:["A. netstat /release then /renew","B. ipconfig /release then ipconfig /renew","C. ping /release /renew","D. nslookup /refresh"],c:1,e:"<strong>ipconfig /release</strong> then <strong>ipconfig /renew</strong> for DHCP renewal.",sc:""},
  {q:"Which Windows command shows each hop to a destination with response times?",o:["A. netstat","B. ipconfig","C. tracert","D. pathping"],c:2,e:"<strong>tracert</strong> shows each router hop between source and destination with latency.",sc:""},
  {q:"Which command combines ping AND tracert to show packet loss at each hop?",o:["A. netstat -a","B. tracert -extended","C. pathping","D. nslookup -verbose"],c:2,e:"<strong>pathping</strong> combines ping and tracert — shows latency AND packet loss per hop.",sc:""},
  {q:"A user can access sites by IP but not by name. Which tool diagnoses this?",o:["A. ipconfig","B. netstat","C. tracert","D. nslookup"],c:3,e:"<strong>nslookup</strong> queries DNS servers — useful for diagnosing DNS resolution failures.",sc:""},
],
'2.13':[
  {q:"Which tool BEST diagnoses jitter and choppy audio during VoIP calls?",o:["A. Cable tester","B. Wi-Fi analyzer","C. pathping","D. nslookup"],c:2,e:"<strong>pathping</strong> identifies congestion and measures packet loss per hop — directly relevant to jitter.",sc:""},
  {q:"Users experience authentication failures on network resources. Which tool reviews failed logins?",o:["A. Task Manager","B. Device Manager","C. Event Viewer","D. ipconfig /all"],c:2,e:"<strong>Event Viewer</strong> Security log contains Event ID 4625 — failed authentication events.",sc:""},
  {q:"A workstation reaches local devices but can\'t access the internet. What should be checked FIRST?",o:["A. Run a cable tester","B. Check default gateway and DNS settings in ipconfig","C. Replace the NIC","D. Reinstall Windows"],c:1,e:"Limited connectivity (LAN yes, internet no) = check <strong>gateway and DNS settings</strong> with ipconfig.",sc:""},
],
'3.1':[
  {q:"A graphic designer needs the best colour accuracy for professional photo editing. Which display type should they choose?",o:["A. TN panel","B. VA panel","C. IPS panel","D. OLED"],c:2,e:"<strong>IPS panels</strong> offer superior colour accuracy and wide viewing angles, making them ideal for professional design work.",sc:"A technician is helping a design studio purchase new monitors."},
  {q:"A competitive gamer wants the fastest response time to reduce motion blur. Which panel type is best?",o:["A. IPS with 60Hz","B. TN with 240Hz","C. VA with 4K","D. OLED with HDR"],c:1,e:"<strong>TN panels</strong> offer the fastest response times. Combined with a 240Hz refresh rate, this is optimal for competitive gaming.",sc:""},
  {q:"An older LCD laptop shows a dim, flickering screen. Which component is most likely failing?",o:["A. Digitizer","B. Inverter","C. Backlight LED","D. GPU"],c:1,e:"The <strong>inverter</strong> converts DC to AC for CCFL backlights in older LCDs. A failing inverter causes dim or flickering screens.",sc:""},
  {q:"A video editor needs a display for HDR cinematic content. Which colour gamut should they prioritise?",o:["A. sRGB","B. Adobe RGB","C. DCI-P3","D. CMYK"],c:2,e:"<strong>DCI-P3</strong> is the standard for high-dynamic-range cinematic content and is the preferred gamut for video production.",sc:""},
  {q:"Which display technology requires NO backlight, allowing individual pixels to turn off completely?",o:["A. IPS LCD","B. VA LCD","C. TN LCD","D. OLED"],c:3,e:"<strong>OLED</strong> pixels emit their own light. Turning off a pixel produces true black, giving infinite contrast ratio with no backlight needed.",sc:""},
  {q:"A gaming monitor claims 360Hz refresh rate. What benefit does this provide?",o:["A. Higher resolution output","B. Wider colour gamut","C. Reduced motion blur and smoother gameplay","D. Better colour accuracy"],c:2,e:"<strong>Higher refresh rates</strong> update the screen more times per second, reducing motion blur and input lag — critical for competitive gaming.",sc:""},
  {q:"Which display attribute measures how many pixels fit into one inch of screen?",o:["A. Refresh rate (Hz)","B. Pixel density (PPI)","C. Colour gamut","D. Screen resolution"],c:1,e:"<strong>PPI (Pixels Per Inch)</strong> determines image sharpness. Higher PPI = sharper, crisper image with less visible pixelation.",sc:""},
  {q:"A touchscreen laptop fails to register touch inputs accurately. Which component is most likely faulty?",o:["A. Inverter","B. IPS panel","C. Digitizer","D. Backlight LED"],c:2,e:"The <strong>digitizer</strong> converts touch input into digital signals. A faulty digitizer causes inaccurate or unresponsive touch registration.",sc:""},
],
'3.2':[
  {q:"A user needs to connect a 144Hz gaming monitor for best performance. Which cable should they use?",o:["A. VGA","B. DVI-A","C. DisplayPort","D. USB 2.0"],c:2,e:"<strong>DisplayPort</strong> supports the highest bandwidth, making it ideal for high-refresh-rate gaming monitors at 144Hz and beyond.",sc:""},
  {q:"A technician needs to configure a legacy POS system connected to a receipt printer. Which cable type is used?",o:["A. USB 3.0","B. Lightning","C. DB9 Serial","D. USB-C"],c:2,e:"<strong>DB9 (RS-232) serial</strong> cable is the standard for legacy POS systems and industrial serial communication.",sc:""},
  {q:"A laptop with only USB-C ports needs to connect to a projector with HDMI input. What is the solution?",o:["A. USB-C to DisplayPort adapter","B. USB-C to HDMI adapter","C. DisplayPort to HDMI adapter","D. VGA to DVI adapter"],c:1,e:"A <strong>USB-C to HDMI adapter</strong> allows modern USB-C laptops to connect to projectors and monitors with HDMI inputs.",sc:""},
  {q:"Which connector powers older hard drives and optical drives in a legacy desktop PC?",o:["A. SATA power","B. USB-C","C. Molex","D. Lightning"],c:2,e:"<strong>Molex</strong> connectors are 4-pin power connectors from older PSUs used to power legacy HDDs and optical drives.",sc:""},
  {q:"What is the maximum data transfer rate of Thunderbolt 3 and 4?",o:["A. 5 Gbps","B. 20 Gbps","C. 40 Gbps","D. 80 Gbps"],c:2,e:"<strong>Thunderbolt 3 and 4</strong> both support up to <strong>40 Gbps</strong> over a USB-C connector. They also deliver up to 100W of power.",sc:""},
  {q:"Which video cable carries analogue signal only and is considered legacy?",o:["A. HDMI","B. DisplayPort","C. DVI-I","D. VGA"],c:3,e:"<strong>VGA</strong> (DE-15) carries only an analogue signal. It cannot carry audio and is limited in resolution — considered legacy technology.",sc:""},
  {q:"How many pins does USB 3.0 have, and what is its maximum speed?",o:["A. 4 pins, 480 Mbps","B. 9 pins, 5 Gbps","C. 24 pins, 10 Gbps","D. 4 pins, 5 Gbps"],c:1,e:"<strong>USB 3.0</strong> has <strong>9 pins</strong> (4 from USB 2.0 + 5 new) and supports speeds up to <strong>5 Gbps</strong>.",sc:""},
  {q:"Which Apple proprietary connector has 8 pins and is used on older iPhones?",o:["A. USB-C","B. MicroUSB","C. Lightning","D. MiniUSB"],c:2,e:"Apple\'s <strong>Lightning</strong> connector has 8 pins and is used on older iPhones, iPads, and accessories for charging and data transfer.",sc:""},
],
'3.3':[
  {q:"A technician needs 10 Gbps Ethernet at distances up to 55 metres. Which cable category should they use?",o:["A. Cat5e","B. Cat6","C. Cat6a","D. Cat7"],c:1,e:"<strong>Cat6</strong> supports 10 Gbps at up to 55m with good crosstalk resistance — the correct spec for this requirement.",sc:""},
  {q:"A company needs to run cables between two buildings underground without conduit. Which cable is required?",o:["A. STP","B. UTP","C. Direct burial","D. Coaxial"],c:2,e:"<strong>Direct burial cable</strong> has waterproof insulation designed for underground installation without the need for conduit protection.",sc:""},
  {q:"A fibre optic backbone needs to connect two data centres 50 km apart. Which fibre type is appropriate?",o:["A. Single-mode (SMF)","B. Multimode (MMF)","C. Cat6a","D. Coaxial"],c:0,e:"<strong>Single-mode fibre</strong> supports distances up to 100 km with minimal signal loss — essential for long-distance backbone connections.",sc:""},
  {q:"Cables in a commercial building must be installed above the ceiling in air-handling spaces. What cable type is required?",o:["A. Coaxial","B. Plenum-rated","C. Direct burial","D. STP"],c:1,e:"<strong>Plenum-rated cable</strong> uses fire-retardant insulation that prevents toxic smoke in air-handling spaces — required by fire codes.",sc:""},
  {q:"What standard Ethernet connector is used to terminate Cat6 cables for wired networking?",o:["A. RJ-11","B. F-type","C. RJ-45","D. LC"],c:2,e:"<strong>RJ-45</strong> is the 8-pin standard connector for all Ethernet cables (Cat5e, Cat6, Cat6a, Cat7) in wired network connections.",sc:""},
  {q:"A data centre needs high-density fibre connections with small connectors. Which fibre connector is best suited?",o:["A. SC","B. LC","C. RJ-45","D. F-type"],c:1,e:"<strong>LC (Lucent Connector)</strong> is a small form-factor fibre connector preferred in high-density environments due to its compact size.",sc:""},
  {q:"Which cable type is used for cable television, broadband internet, and older Ethernet installations?",o:["A. STP","B. Plenum-rated UTP","C. Coaxial","D. Direct burial SMF"],c:2,e:"<strong>Coaxial cable</strong> (RG-6, RG-59) is used for cable TV, broadband cable internet (DOCSIS), and older 10BASE2 Ethernet.",sc:""},
  {q:"What is the maximum distance for multimode fibre (MMF) at 100 Gbps?",o:["A. 10 km","B. 100 km","C. 550 metres","D. 100 metres"],c:2,e:"<strong>Multimode fibre</strong> supports up to <strong>550 metres</strong> — suitable for short-range campus and data centre connections. Single-mode goes up to 100 km.",sc:""},
],
'3.4':[
  {q:"A technician is replacing a failing 3.5-inch HDD in a workstation with a faster option. What is the best upgrade?",o:["A. 5400 RPM HDD","B. M.2 NVMe SSD","C. External USB HDD","D. Dual-layer DVD"],c:1,e:"<strong>M.2 NVMe SSD</strong> provides the highest performance improvement — speeds up to 7,000 MB/s versus HDD\'s 100–150 MB/s.",sc:""},
  {q:"A video editor needs faster external storage than USB 3.0 offers. Which external connection should they use?",o:["A. eSATA","B. Internal SATA","C. microSD","D. CD-ROM"],c:0,e:"<strong>eSATA</strong> provides up to 6 Gbps — faster than USB 3.0 — and is designed for external storage devices.",sc:""},
  {q:"A company needs to archive legal documents on physical media for long-term storage. What is the best choice?",o:["A. SD cards","B. Blu-ray discs","C. USB flash drives","D. NVMe SSD"],c:1,e:"<strong>Blu-ray discs</strong> hold up to 100 GB and are suitable for long-term physical archival — durable and immune to magnetic interference.",sc:""},
  {q:"A RAID configuration needs to survive up to TWO simultaneous drive failures. Which RAID level should be used?",o:["A. RAID 0","B. RAID 1","C. RAID 5","D. RAID 6"],c:3,e:"<strong>RAID 6</strong> uses double parity, allowing recovery from up to <strong>two simultaneous drive failures</strong>. Requires minimum 4 drives.",sc:""},
  {q:"A video editing studio needs maximum speed and does not require fault tolerance. Which RAID level is best?",o:["A. RAID 1","B. RAID 5","C. RAID 0","D. RAID 10"],c:2,e:"<strong>RAID 0 (striping)</strong> distributes data across all drives simultaneously for maximum performance. However, one drive failure means total data loss.",sc:""},
  {q:"Which SSD form factor is most commonly found in modern laptops and offers both SATA and NVMe variants?",o:["A. mSATA","B. 3.5-inch SATA","C. M.2","D. eSATA"],c:2,e:"<strong>M.2</strong> is the dominant modern laptop SSD form factor. It supports both SATA (6 Gbps) and NVMe (PCIe) variants in a compact slot.",sc:""},
  {q:"What is the maximum speed of SATA III?",o:["A. 150 MB/s","B. 300 MB/s","C. 600 MB/s","D. 1200 MB/s"],c:2,e:"<strong>SATA III (6 Gbps)</strong> has a maximum transfer rate of <strong>600 MB/s</strong>. This is significantly slower than NVMe which can reach 7,000 MB/s.",sc:""},
  {q:"A financial database requires both high performance AND fault tolerance. Which RAID configuration is recommended?",o:["A. RAID 0","B. RAID 5","C. RAID 6","D. RAID 10"],c:3,e:"<strong>RAID 10</strong> combines striping (speed) and mirroring (redundancy), delivering the best balance of performance and fault tolerance for databases.",sc:""},
],
'3.5':[
  {q:"A user wants a gaming PC supporting multiple GPUs and expansion cards. Which motherboard form factor is required?",o:["A. Mini-ITX","B. microATX","C. ATX","D. Pico-ITX"],c:2,e:"<strong>ATX</strong> motherboards offer up to 7 PCIe slots — essential for multi-GPU builds and maximum expansion capabilities.",sc:""},
  {q:"A technician is installing a high-performance NVMe SSD. Which motherboard connector provides the fastest speeds?",o:["A. PCI","B. SATA","C. M.2","D. eSATA"],c:2,e:"The <strong>M.2 slot</strong> supports NVMe SSDs via PCIe lanes, delivering the fastest available storage interface — up to 7,000 MB/s on PCIe 4.0.",sc:""},
  {q:"A company requires full-disk encryption on employee laptops. Which BIOS/UEFI feature must be enabled?",o:["A. Secure Boot","B. TPM (Trusted Platform Module)","C. Boot Order","D. Fan Speed Control"],c:1,e:"<strong>TPM 2.0</strong> provides the hardware-based encryption support required for BitLocker full-disk encryption and is required for Windows 11.",sc:""},
  {q:"An IT admin needs to prevent unauthorized USB OS installations on company desktops. What BIOS setting should they change?",o:["A. Enable TPM","B. Set boot password","C. Disable USB boot","D. Enable Secure Boot"],c:2,e:"<strong>Disabling USB boot</strong> in BIOS/UEFI prevents booting from external USB drives, stopping unauthorized OS installations.",sc:""},
  {q:"A technician is building with an AMD Ryzen 9 7950X. Which socket type must the motherboard support?",o:["A. LGA 1700","B. AM4","C. AM5","D. LGA 4677"],c:2,e:"The Ryzen 9 7950X (7000 series) requires an <strong>AM5 socket</strong> motherboard. AM4 is for Ryzen 1000–5000 series. LGA sockets are Intel only.",sc:""},
  {q:"A gaming PC is thermally throttling. The technician wants to apply liquid cooling. What connects to the CPU to absorb heat?",o:["A. Radiator","B. Pump","C. Water block","D. Reservoir"],c:2,e:"The <strong>water block</strong> attaches directly to the CPU to absorb heat. The pump then circulates coolant to the radiator where heat is dissipated to air.",sc:""},
  {q:"A PCIe 4.0 x16 slot is used for a GPU. What is the maximum bandwidth available?",o:["A. 16 GB/s","B. 32 GB/s","C. 64 GB/s","D. 8 GB/s"],c:1,e:"<strong>PCIe 4.0</strong> provides 2 GB/s per lane × 16 lanes = <strong>32 GB/s</strong>. PCIe 3.0 x16 = 16 GB/s. PCIe 5.0 x16 = 64 GB/s.",sc:""},
  {q:"A high-performance gaming PC experiences overheating. Old thermal paste needs replacing. What is best practice before applying new paste?",o:["A. Apply new paste directly on top","B. Use water to clean the surface","C. Remove old paste with 90%+ isopropyl alcohol and a lint-free cloth","D. Sand the CPU surface smooth"],c:2,e:"Old thermal paste must be completely removed using <strong>isopropyl alcohol (90%+) and a lint-free cloth</strong> before applying fresh paste for best heat transfer.",sc:""},
],
'3.6':[
  {q:"A technician sets up a computer in Europe. What PSU voltage setting must be verified first?",o:["A. Ensure 80 PLUS Gold rating","B. Verify 220V input voltage","C. Replace with a modular PSU","D. Add a surge protector"],c:1,e:"European mains voltage is <strong>220–240V</strong>. The PSU must be set (or confirmed auto-switching) to this voltage before connecting to avoid damage.",sc:""},
  {q:"A PC builder wants the best cable management for a compact gaming build. Which PSU type should they choose?",o:["A. Non-modular","B. Semi-modular","C. Fully modular","D. 20-pin standard"],c:2,e:"A <strong>fully modular PSU</strong> allows all unused cables to be removed, maximising airflow and cable management in compact builds.",sc:""},
  {q:"A server must stay online if a PSU fails. What feature is required?",o:["A. 80 PLUS Titanium rating","B. Dual-voltage switching","C. Redundant PSU (RPS)","D. 24-pin connector"],c:2,e:"A <strong>redundant PSU (RPS)</strong> provides a hot-swappable backup — if one PSU fails, the other takes over with zero downtime.",sc:""},
  {q:"A system crashes randomly. A technician suspects power instability. Which voltage rail should be checked first?",o:["A. +3.3V rail","B. +5V rail","C. +12V rail","D. -12V rail"],c:2,e:"The <strong>+12V rail</strong> powers CPUs, GPUs, and HDDs. Instability on this rail is the most common cause of system crashes related to PSU issues.",sc:""},
  {q:"What does 80 PLUS Gold certification indicate about a power supply?",o:["A. It can deliver 80W peak power","B. It operates at 87% efficiency under load","C. It has gold-plated connectors","D. It includes a 5-year warranty"],c:1,e:"80 PLUS Gold means the PSU achieves <strong>~87% efficiency</strong> at 20%, 50%, and 100% loads — less wasted energy as heat and lower electricity costs.",sc:""},
  {q:"What is the +12V rail in a PSU primarily responsible for powering?",o:["A. USB ports and legacy devices","B. RAM and PCIe chipsets","C. CPUs, GPUs, fans, and mechanical HDDs","D. The CMOS battery"],c:2,e:"The <strong>+12V rail</strong> is the most power-hungry and supplies CPUs, GPUs, case fans, and mechanical hard drives — the most demanding components.",sc:""},
],
'3.7':[
  {q:"A graphics design firm needs accurate colour prints from their professional artwork. Which printer driver should be installed?",o:["A. Universal Print Driver (UPD)","B. PCL (Printer Control Language)","C. PostScript","D. Basic Windows Printer Driver"],c:2,e:"<strong>PostScript</strong> (Adobe) provides the most precise rendering for professional graphics, ensuring accurate colour and high-resolution output.",sc:""},
  {q:"An office needs stable shared printing for 50 employees. Which printer connection is most appropriate?",o:["A. USB","B. Bluetooth","C. Ethernet","D. Wi-Fi Direct"],c:2,e:"<strong>Ethernet</strong> provides the most stable, reliable, and fastest connection for shared printing in a multi-user office environment.",sc:""},
  {q:"A healthcare provider needs to prevent sensitive patient documents from being left uncollected at the printer. Which feature should be enabled?",o:["A. Duplex printing","B. Badging authentication with secured print","C. Print spooling","D. ADF scanning"],c:1,e:"<strong>Badging authentication with secured print</strong> holds jobs in memory until the user authenticates at the printer — required for HIPAA compliance.",sc:""},
  {q:"A law firm wants to scan multi-page contracts and save them directly to a shared network folder. Which scan method should be configured?",o:["A. Flatbed scanning","B. Cloud scanning","C. SMB scanning","D. Email scanning"],c:2,e:"<strong>SMB scanning</strong> saves scanned documents directly to a <strong>network shared folder</strong>, making them immediately accessible to authorised users.",sc:""},
  {q:"A company wants to scan large batches of invoices automatically. Which scanner feature is required?",o:["A. Flatbed scanner","B. Automatic Document Feeder (ADF)","C. USB scanning","D. Cloud print service"],c:1,e:"The <strong>ADF (Automatic Document Feeder)</strong> feeds multiple pages automatically, enabling efficient batch scanning without manual intervention.",sc:""},
  {q:"Why should firmware updates be applied to networked printers?",o:["A. To improve paper feeding speed","B. To patch security vulnerabilities and fix bugs","C. To change the IP address","D. To reset print quality settings"],c:1,e:"Printer firmware updates <strong>patch security vulnerabilities</strong>, fix bugs, and can add features like cloud printing. Unpatched printers can be exploited on the network.",sc:""},
],
'3.8':[
  {q:"A high-volume laser printer is printing faded pages despite having sufficient toner. What maintenance is needed?",o:["A. Replace the toner cartridge","B. Clean the printhead","C. Replace the fuser unit and rollers","D. Reload the paper tray"],c:2,e:"Laser printers need <strong>maintenance kits</strong> (fuser unit, rollers) that wear out independently of toner. Worn fuser components cause poor print quality.",sc:""},
  {q:"A thermal receipt printer is producing faint, unreadable output. What is the first maintenance step?",o:["A. Replace the ink cartridge","B. Replace the thermal paper roll","C. Clean the impact printhead","D. Factory reset the printer"],c:1,e:"<strong>Thermal printers use heat-sensitive paper</strong>, not ink. Old or low-quality thermal paper produces faint prints — replace the paper roll first.",sc:""},
  {q:"An inkjet printer is leaving streaky lines on documents. What maintenance procedure resolves this?",o:["A. Replace the toner cartridge","B. Run the printhead cleaning utility","C. Replace the impact ribbon","D. Clean the fuser assembly"],c:1,e:"Inkjet streaking is caused by <strong>clogged printhead nozzles</strong>. Running the built-in cleaning utility flushes the blockage and restores print quality.",sc:""},
  {q:"A dot-matrix printer is producing faint, barely legible prints on multipart forms. What is the most likely cause?",o:["A. Clogged printhead","B. Low toner","C. Worn-out ribbon cartridge","D. Incorrect paper settings"],c:2,e:"Impact/dot-matrix printers use <strong>inked ribbon cartridges</strong> that wear out over time. Faded prints = depleted ribbon. Replace the ribbon cartridge.",sc:""},
  {q:"When cleaning a laser printer\'s internal components, which cleaning agent should be used?",o:["A. Water and soap","B. Compressed air only","C. Isopropyl alcohol (IPA) 90%+ with lint-free cloth","D. Household glass cleaner"],c:2,e:"<strong>Isopropyl alcohol (IPA) 90%+</strong> with a lint-free cloth is the correct agent for cleaning rollers, paper paths, and fuser components — safe for electronics.",sc:""},
],
'3.9':[
  {q:"A desktop fails to display anything on monitor even though the system powers on. What should be checked first?",o:["A. Reseat the graphics card and check video connections","B. Replace the CMOS battery","C. Replace the PSU","D. Run a RAM diagnostic tool"],c:0,e:"A blank screen with power = likely <strong>loose/faulty GPU</strong>. Reseat it and check video cables before any other diagnosis.",sc:""},
  {q:"A PC emits a series of beep codes during POST. What is the most likely cause?",o:["A. Corrupt OS installation","B. Faulty RAM or improperly seated hardware","C. Overheating CPU","D. Dead CMOS battery"],c:1,e:"<strong>POST beep codes</strong> signal a hardware fault detected before OS load. Faulty or unseated RAM is the most common cause.",sc:""},
  {q:"A workstation frequently crashes with a BSOD. What is the best diagnostic tool to test RAM?",o:["A. CHKDSK","B. Device Manager","C. MemTest86","D. Disk Defragmenter"],c:2,e:"<strong>MemTest86</strong> is the industry-standard tool for testing RAM integrity. It runs from a bootable USB and tests for memory errors.",sc:""},
  {q:"A PC\'s system clock resets to the wrong date every time it is powered off and back on. What should be replaced?",o:["A. Power supply unit","B. CMOS battery (CR2032)","C. RAM modules","D. Motherboard chipset"],c:1,e:"The <strong>CMOS battery (CR2032)</strong> maintains BIOS settings when the PC is off. A dead battery causes date/time to reset on every boot.",sc:""},
  {q:"A technician detects a burning smell coming from a workstation. What is the immediate first action?",o:["A. Add more case fans","B. Run a diagnostic tool","C. Power off the system immediately and inspect for burnt components","D. Replace the hard drive"],c:2,e:"A burning smell indicates electrical failure or a burning component. <strong>Power off immediately</strong> to prevent fire or permanent damage — then inspect.",sc:""},
  {q:"A user\'s PC shows bulging capacitors on the motherboard. What is the recommended action?",o:["A. Apply thermal paste to the capacitors","B. Replace the motherboard and consider a UPS for surge protection","C. Update the BIOS firmware","D. Increase the PSU wattage"],c:1,e:"Swollen/bulging capacitors indicate age-related or surge-induced failure. <strong>Replace the motherboard</strong>. Add a UPS to protect against future power surges.",sc:""},
  {q:"How should a technician confirm that a system is overheating rather than crashing due to software issues?",o:["A. Open the case and feel for heat","B. Use BIOS/system monitoring software to check real-time temperatures","C. Replace the thermal paste and observe","D. Reinstall the OS"],c:1,e:"<strong>BIOS temperature monitoring</strong> or tools like HWMonitor provide accurate real-time readings confirming whether overheating is occurring.",sc:""},
],
'3.10':[
  {q:"A system shows 'Bootable Device Not Found' at startup. What should the technician check first?",o:["A. Replace the motherboard","B. Run defragmentation","C. Verify boot order in BIOS/UEFI","D. Disable RAID configuration"],c:2,e:"<strong>Boot order in BIOS/UEFI</strong> determines which device is checked first. An incorrect order means the OS drive is not found at startup.",sc:""},
  {q:"A RAID 5 array has a degraded status after a drive failure. What is the correct next step?",o:["A. Replace the failed drive and rebuild the RAID","B. Reinitialise the RAID array immediately","C. Delete the RAID volume","D. Format remaining drives"],c:0,e:"<strong>Replace the failed drive</strong> and allow the RAID controller to rebuild. RAID 5 tolerates 1 failure. Never reinitialise — that destroys all data.",sc:""},
  {q:"An HDD is making a repetitive clicking sound. What is the best immediate action?",o:["A. Defragment the drive","B. Immediately back up critical data and replace the drive","C. Restart and reset BIOS","D. Increase virtual memory"],c:1,e:"Clicking indicates <strong>imminent HDD failure</strong>. Back up critical data immediately — do not delay. Replace the drive before total failure.",sc:""},
  {q:"A slow-performing SSD is nearly full. What should be enabled to improve performance?",o:["A. Run CHKDSK to scan for bad sectors","B. Enable TRIM","C. Defragment using Windows tool","D. Convert to RAID 0"],c:1,e:"<strong>TRIM</strong> helps SSDs manage space by reclaiming deleted blocks, preventing write slowdowns. It should always be enabled on SSDs.",sc:""},
  {q:"A new SSD is physically installed but does not appear in Windows Explorer. What should the technician do?",o:["A. Replace the M.2 slot","B. Open Disk Management, initialise the drive, and format it","C. Run CHKDSK","D. Reinstall Windows"],c:1,e:"A new, unformatted drive won\'t appear in Explorer. <strong>Disk Management</strong> lets you initialise, partition, and format the drive so Windows can use it.",sc:""},
  {q:"A S.M.A.R.T. diagnostic tool reports a failure warning on a hard drive. What should the technician do?",o:["A. Ignore it unless the drive is clicking","B. Replace the drive proactively and restore from backup","C. Defragment the drive","D. Increase cooling around the drive"],c:1,e:"A <strong>S.M.A.R.T. failure warning</strong> means the drive is detecting internal errors. Replace proactively before total failure and restore from backup.",sc:""},
],
'3.11':[
  {q:"A monitor displays 'No Signal' even though it is powered on. What should the technician check first?",o:["A. Replace the monitor power cable","B. Update the GPU driver","C. Verify the input source and cable connection","D. Adjust display resolution"],c:2,e:"<strong>Verify the input source</strong> (via OSD menu) and check that the video cable is securely connected. A 'No Signal' message = no video data reaching the monitor.",sc:""},
  {q:"A projector powers on but produces a very dim image. What is the most likely cause?",o:["A. OS brightness is too low","B. Incorrect input source","C. The projector lamp has exceeded its lifespan","D. Faulty HDMI cable"],c:2,e:"Projector lamps last 2,000–6,000 hours. A <strong>dim image</strong> after extended use typically means the lamp has reached end-of-life and needs replacement.",sc:""},
  {q:"A user reports a green tint on their external monitor connected via HDMI. What is the best first step?",o:["A. Adjust brightness settings","B. Replace the display cable with a known-good cable","C. Increase screen resolution","D. Update the OS"],c:1,e:"Colour tinting is typically caused by a <strong>damaged or faulty cable</strong>. Replace with a known-good cable to determine if the cable is responsible.",sc:""},
  {q:"A classroom projector shows an image that is too large with edges cut off. What should the technician adjust?",o:["A. Reduce projector brightness","B. Change resolution only","C. Adjust display scaling in the OS","D. Enable overscan"],c:2,e:"<strong>Display scaling settings in the OS</strong> control how the image fits the output. Overscan (which enlarges further) should be DISABLED, not enabled.",sc:""},
  {q:"A screen flickers intermittently. What two areas should the technician investigate first?",o:["A. Replace the monitor completely","B. Check the display cable and update/rollback GPU driver","C. Increase refresh rate to maximum","D. Update the OS"],c:1,e:"Flickering is most commonly caused by a <strong>loose/damaged cable</strong> or a <strong>GPU driver issue</strong>. Reseat the cable and update or rollback the driver.",sc:""},
  {q:"An OLED display has a permanent ghost image burned into the screen. What should be done?",o:["A. Increase brightness to maximum","B. Disable the screensaver","C. Use a pixel-refresh utility and enable auto-dimming","D. Replace the backlight"],c:2,e:"OLED burn-in is addressed with <strong>pixel-refresh tools</strong> and prevented by enabling <strong>auto-dimming and screen savers</strong>. OLEDs have no backlight to replace.",sc:""},
],
'3.12':[
  {q:"A user\'s print jobs show garbled characters. What should the technician do first?",o:["A. Replace the toner cartridge","B. Reinstall or update the correct printer driver","C. Increase printer memory","D. Switch from USB to Wi-Fi"],c:1,e:"<strong>Corrupt or incorrect drivers</strong> are the most common cause of garbled output. Reinstall the manufacturer driver and restart the <strong>Print Spooler</strong> if needed.",sc:""},
  {q:"A networked printer intermittently drops offline for all users. What is the best long-term fix?",o:["A. Disable SNMP","B. Assign a static IP or DHCP reservation","C. Use WSD only","D. Lower print quality"],c:1,e:"Printers that lose DHCP leases or hit <strong>IP conflicts</strong> drop offline. A <strong>static IP or DHCP reservation</strong> keeps addressing stable.",sc:""},
  {q:"A laser printer produces vertical lines on every page. What is the most likely cause?",o:["A. Low toner only","B. Dirty or damaged imaging drum","C. Wrong paper tray","D. Outdated OS"],c:1,e:"Consistent <strong>vertical lines</strong> on laser output usually indicate a <strong>dirty or scratched drum</strong> (or transfer roller issues). Clean or replace the drum unit.",sc:""},
  {q:"How should a technician clear a stuck Windows print queue after jobs refuse to delete?",o:["A. format C:","B. Stop Print Spooler, delete spool files, restart Print Spooler","C. Run sfc /scannow","D. Reinstall Windows"],c:1,e:"Stop <strong>Print Spooler</strong>, delete files in <code>System32\\spool\\PRINTERS</code>, then restart the service — the standard fix for a corrupted queue.",sc:""},
  {q:"A thermal receipt printer outputs faint text. What is the best first step?",o:["A. Replace the ribbon","B. Replace the thermal paper with a fresh known-good roll","C. Run laser calibration","D. Clean the fuser"],c:1,e:"Thermal printers need <strong>heat-sensitive paper</strong>. Old or poor-quality rolls produce faint output; replace the roll before servicing the print head.",sc:""},
],
'4.21':[
  {q:"A corporate IT team needs to deploy new 3D modeling software to 50 workstations. Which distribution method is most efficient?",o:["A. Install from DVDs one by one","B. Deploy a pre-configured OS image containing the software","C. Email a download link to each user","D. Use remote desktop to install on each machine individually"],c:1,e:"<strong>Image deployment</strong> pushes a pre-configured OS image (with the app included) to all machines simultaneously — the fastest and most consistent method for mass deployment.",sc:"A company needs to deploy specialized software to many workstations."},
  {q:"A finance department\'s payroll software only supports Windows 11. What is the FIRST step the IT team should take before upgrading?",o:["A. Upgrade all workstations immediately","B. Verify all systems meet Windows 11 hardware requirements","C. Install in Windows 10 compatibility mode","D. Check if a 32-bit version exists"],c:1,e:"Before any OS upgrade, <strong>verify hardware compatibility first</strong> — Windows 11 requires TPM 2.0, UEFI, Secure Boot, and specific CPU/RAM/storage minimums.",sc:"A department is upgrading critical software requiring a newer OS."},
],
'4.1':[
  {q:"A school wants laptops optimized for Google Workspace with easy IT management and minimal cost. Which OS is best?",o:["A. Linux","B. Windows Home","C. Chrome OS","D. macOS"],c:2,e:"<strong>Chrome OS</strong> is designed for cloud-based education environments, with seamless Google Workspace integration, automatic updates, and centralized management via Google Admin Console.",sc:"A school needs to select an OS for student devices."},
  {q:"A user needs to format a USB drive for transferring files between Windows, macOS, and Linux without the 4GB file size limit. Which file system should they choose?",o:["A. NTFS","B. exFAT","C. APFS","D. ext4"],c:1,e:"<strong>exFAT</strong> offers cross-platform compatibility (Windows/macOS/Linux) and supports files larger than 4GB, making it ideal for USB drives. FAT32 has a 4GB limit; NTFS is read-only on macOS without drivers; APFS is Apple-only.",sc:""},
  {q:"A company running Windows 7 is concerned about security vulnerabilities. What is the most appropriate action?",o:["A. Install third-party antivirus and continue","B. Disable Windows Update","C. Upgrade to Windows 10 or Windows 11","D. Switch to Chrome OS"],c:2,e:"Windows 7 reached <strong>EOL (End-of-Life) January 14, 2020</strong>. No more security updates are provided. The correct action is to upgrade to a supported OS version.",sc:""},
  {q:"A developer needs to run Windows-only software on a Mac. What is the best solution?",o:["A. Use Boot Camp (deprecated) or a virtual machine","B. Install NTFS on the Mac","C. Switch to Linux","D. Use Homebrew to run .exe files"],c:0,e:"A <strong>virtual machine</strong> (Parallels Desktop or VMware Fusion) allows Windows to run inside macOS, enabling Windows-only applications to work without dual-booting.",sc:""},
  {q:"An enterprise storage server needs a Windows file system with self-healing capabilities and no maximum file size for storing large VMs. Which is best?",o:["A. NTFS","B. FAT32","C. ReFS","D. exFAT"],c:2,e:"<strong>ReFS (Resilient File System)</strong> is designed for Windows Server with self-healing, no max file size, and built-in redundancy — ideal for VM storage.",sc:""},
  {q:"A technician needs to format new macOS SSDs. Which file system should they use?",o:["A. NTFS","B. ext4","C. APFS","D. exFAT"],c:2,e:"<strong>APFS (Apple File System)</strong> is Apple\'s default, optimized for SSD/flash storage with encryption, snapshots, and high performance.",sc:""},
],
'4.2':[
  {q:"A technician performs an OS installation that erases all existing data and installs a fresh copy of Windows 11. What type of installation is this?",o:["A. Upgrade","B. Clean Install","C. Repair Installation","D. Image Deployment"],c:1,e:"A <strong>clean install</strong> formats the drive and installs the OS fresh, erasing all existing data.",sc:""},
  {q:"A company needs to deploy Windows 10 to 100 identical workstations in one day. What is the most efficient method?",o:["A. Clean install each machine individually","B. PXE boot from a network server","C. Email an ISO to each user","D. Use Windows Update"],c:1,e:"<strong>PXE boot</strong> allows network-based OS deployment with no physical media, enabling 100 machines to be imaged in parallel from a central server.",sc:"An IT department needs to deploy OS to many machines quickly."},
  {q:"A user\'s laptop has corrupted system files but the hardware is functional and they don\'t want to lose their data. What is the best solution?",o:["A. Clean install","B. Image deployment","C. Repair installation","D. Recovery partition wipe"],c:2,e:"A <strong>repair installation</strong> reinstalls the OS while preserving user files and applications — ideal when system files are corrupted but data should be retained.",sc:""},
  {q:"What must a technician do BEFORE performing an OS upgrade to protect against data loss?",o:["A. Disable antivirus","B. Backup files and verify hardware compatibility","C. Uninstall all applications first","D. Enable Fast Startup"],c:1,e:"<strong>Backup files</strong> and verify hardware compatibility are the critical first steps before any OS upgrade to prevent data loss and failed installations.",sc:""},
  {q:"A company deploys Windows 11 to new employees automatically without any manual setup. Which technology enables this?",o:["A. PXE Boot","B. Recovery Partition","C. Zero-Touch Deployment with Autopilot","D. Clean Install via USB"],c:2,e:"<strong>Zero-touch deployment</strong> using <strong>Microsoft Autopilot</strong> (or Intune/SCCM) automates the entire setup — devices configure themselves when connected to the network.",sc:""},
],
'4.3':[
  {q:"A system administrator configures a drive larger than 4TB for Windows 11. Which partitioning scheme must they use?",o:["A. MBR","B. FAT32","C. GPT","D. exFAT"],c:2,e:"<strong>GPT (GUID Partition Table)</strong> supports drives over 2TB and is required by UEFI firmware (which Windows 11 mandates). MBR is limited to 2TB per partition.",sc:""},
  {q:"A technician needs to install Windows 11 on a new laptop without a DVD drive. Which boot method is most common?",o:["A. PXE Boot","B. USB Boot","C. Internal Recovery Partition","D. Internet-Based Installation"],c:1,e:"<strong>USB boot</strong> is the most common method for installing Windows 11 on devices without optical drives. Create bootable USB with Windows Media Creation Tool or Rufus.",sc:""},
  {q:"A company IT team needs to install Linux across 100 workstations without physical media. Which method is best?",o:["A. USB Boot","B. PXE Boot","C. Multiboot Configuration","D. Recovery Partition"],c:1,e:"<strong>PXE boot</strong> allows network-based installations without USB drives, enabling mass deployment across 100 workstations from a central server.",sc:""},
  {q:"A developer dual-boots Windows 11 and Ubuntu on a single laptop. Which component manages the OS selection at startup?",o:["A. TPM","B. BIOS Boot Manager","C. GRUB Bootloader","D. Windows Boot Manager"],c:2,e:"<strong>GRUB (Grand Unified Bootloader)</strong> is the standard Linux bootloader that presents a menu at startup when multiple OSes are installed, allowing selection between them.",sc:""},
  {q:"An older BIOS-based system uses MBR. What is the maximum number of primary partitions MBR supports?",o:["A. 2","B. 4","C. 8","D. 128"],c:1,e:"<strong>MBR supports maximum 4 primary partitions</strong> (or 3 primary + 1 extended with logical partitions inside). GPT supports 128+ partitions.",sc:""},
],
'4.4':[
  {q:"An IT administrator needs to enable BitLocker on company laptops and enforce password policies. Which Windows edition is required?",o:["A. Windows Home","B. Windows Pro","C. Windows Starter","D. Windows RT"],c:1,e:"<strong>Windows Pro</strong> (and Enterprise) includes BitLocker full-disk encryption and the Group Policy Editor needed to enforce security policies. Windows Home lacks both.",sc:""},
  {q:"A small business wants to join all computers to Active Directory for centralized management. Which Windows edition is required?",o:["A. Windows Home","B. Windows Pro","C. Either Home or Pro","D. Windows RT"],c:1,e:"<strong>Domain join</strong> requires <strong>Windows Pro or Enterprise</strong>. Windows Home cannot join a domain — computers must run Pro or higher for Active Directory membership.",sc:""},
  {q:"Windows 11 fails to install on a company laptop. The error message references a missing security chip. What is most likely required?",o:["A. Secure Boot needs to be disabled","B. TPM 2.0 must be enabled in UEFI","C. The laptop needs a dedicated GPU","D. Legacy BIOS mode is required"],c:1,e:"Windows 11 requires <strong>TPM 2.0</strong> to be enabled. This security chip stores encryption keys for BitLocker and Windows Hello. Enable it in UEFI/BIOS settings.",sc:"A technician is upgrading office laptops to Windows 11."},
  {q:"A hospital needs a Windows edition that won\'t change its interface or features for 10 years. Which edition should they use?",o:["A. Windows Home","B. Windows Pro","C. Windows Enterprise LTSC","D. Windows Education"],c:2,e:"<strong>Windows Enterprise LTSC (Long-Term Servicing Channel)</strong> receives only security updates for up to 10 years with no feature changes — ideal for medical devices, ATMs, and critical infrastructure.",sc:""},
],
'4.5':[
  {q:"Windows 11 installation fails on a laptop. The setup reports missing a required firmware feature. Which feature is most likely required?",o:["A. Fast Boot","B. UEFI with Secure Boot","C. Legacy BIOS mode","D. AHCI storage mode"],c:1,e:"Windows 11 requires <strong>UEFI firmware with Secure Boot enabled</strong>. Legacy BIOS systems cannot run Windows 11 without first upgrading firmware or enabling UEFI mode.",sc:""},
  {q:"What are the minimum storage and RAM requirements for Windows 11?",o:["A. 32GB storage, 2GB RAM","B. 64GB storage, 4GB RAM","C. 128GB storage, 8GB RAM","D. 20GB storage, 1GB RAM"],c:1,e:"Windows 11 minimum requirements: <strong>64GB storage and 4GB RAM</strong>. Also requires 64-bit CPU, TPM 2.0, UEFI + Secure Boot, DirectX 12 GPU.",sc:""},
  {q:"A user\'s PC meets all Windows 11 hardware specs except one: the security chip. What is missing?",o:["A. DirectX 12 GPU","B. TPM 2.0","C. WDDM 2.0 driver","D. Secure Boot certificate"],c:1,e:"<strong>TPM 2.0 (Trusted Platform Module)</strong> is a mandatory Windows 11 requirement. It stores cryptographic keys for BitLocker, Windows Hello, and measured boot.",sc:""},
],
'4.6':[
  {q:"A user reports a laptop running very slowly after installing new software. The technician opens Task Manager. Which tab identifies which specific process is consuming the most CPU?",o:["A. Services Tab","B. Performance Tab","C. Processes Tab","D. Users Tab"],c:2,e:"The <strong>Processes tab</strong> lists all active processes with individual CPU, memory, disk, and network usage — making it the right place to identify CPU-hungry processes.",sc:""},
  {q:"A printer stopped working. The technician suspects a Windows service has stopped. Which Task Manager tab should they check?",o:["A. Processes Tab","B. Performance Tab","C. Users Tab","D. Services Tab"],c:3,e:"The <strong>Services tab</strong> in Task Manager shows all Windows services. Find Print Spooler (spoolsv.exe) — if stopped, right-click and restart it to restore printing.",sc:""},
  {q:"A shared computer is slow. The technician suspects one user is consuming excessive resources. Which tab reveals per-user resource usage?",o:["A. Services Tab","B. Performance Tab","C. Users Tab","D. Startup Tab"],c:2,e:"The <strong>Users tab</strong> in Task Manager shows each logged-in user and their CPU/RAM/Disk/Network consumption. Log off high-usage users or identify resource-heavy sessions.",sc:""},
  {q:"An office computer takes 3 minutes to become usable after login. Which Task Manager tab helps fix this?",o:["A. Services Tab","B. Startup Tab","C. Performance Tab","D. Processes Tab"],c:1,e:"The <strong>Startup tab (Startup Apps)</strong> lists programs that launch at boot with their impact rating. Disable high-impact entries to significantly reduce boot and login time.",sc:""},
  {q:"An IT administrator notices a graph showing 100% CPU usage on a server. Which tool gives a real-time CPU usage graph per process?",o:["A. Task Manager Performance Tab","B. Device Manager","C. System Information","D. Disk Cleanup"],c:0,e:"Task Manager\'s <strong>Performance tab</strong> shows real-time CPU/RAM/Disk/Network/GPU graphs. Click 'Open Resource Monitor' from there for even deeper per-process drill-down.",sc:""},
],
'4.7':[
  {q:"A technician needs to review system logs after multiple unexpected crashes. Which MMC snap-in should they use?",o:["A. Device Manager","B. Event Viewer","C. Performance Monitor","D. Task Scheduler"],c:1,e:"<strong>Event Viewer (eventvwr.msc)</strong> stores system, application, and security logs. Technicians review Critical/Error events to diagnose crashes, driver failures, and security incidents.",sc:""},
  {q:"An IT administrator needs to initialize a new SSD and assign it a drive letter. Which tool should they use?",o:["A. Task Scheduler","B. Certificate Manager","C. Disk Management","D. Local Users and Groups"],c:2,e:"<strong>Disk Management (diskmgmt.msc)</strong> initializes new drives, creates/formats partitions, and assigns drive letters. It\'s the GUI tool for storage management.",sc:""},
  {q:"A security administrator needs to install an SSL certificate for email encryption. Where should they import it?",o:["A. Event Viewer","B. Certificate Manager","C. Local Users and Groups","D. Task Scheduler"],c:1,e:"<strong>Certificate Manager (certmgr.msc)</strong> manages digital certificates in Windows. Import SSL/TLS certificates here for secure email, web, or VPN authentication.",sc:""},
  {q:"An IT administrator needs to restrict USB storage access on all workstations. Which tool enforces this policy?",o:["A. Device Manager","B. Certificate Manager","C. Group Policy Editor","D. Disk Management"],c:2,e:"<strong>Group Policy Editor (gpedit.msc)</strong> allows administrators to enforce policies such as disabling USB storage. Available in <strong>Pro/Enterprise</strong> only.",sc:""},
  {q:"A company wants to schedule automated backups every night at midnight. Which MMC snap-in enables this?",o:["A. Event Viewer","B. Performance Monitor","C. Task Scheduler","D. Local Users and Groups"],c:2,e:"<strong>Task Scheduler (taskschd.msc)</strong> creates automated tasks triggered by time, event, or condition — perfect for scheduling nightly backups, scripts, or maintenance.",sc:""},
],
'4.8':[
  {q:"A technician needs to check a laptop\'s processor and RAM specs before upgrading to Windows 11. Which tool is fastest?",o:["A. Resource Monitor","B. System Information","C. Disk Cleanup","D. System Configuration"],c:1,e:"<strong>System Information (msinfo32.exe)</strong> displays all hardware specs including CPU, RAM, BIOS version, and OS in one place — the quickest way to check system requirements.",sc:""},
  {q:"A user reports slow file access. The IT technician suspects high disk I/O is the cause. Which tool shows real-time disk activity per process?",o:["A. Disk Cleanup","B. Disk Defragmenter","C. Resource Monitor","D. System Configuration"],c:2,e:"<strong>Resource Monitor (resmon.exe)</strong> shows real-time disk I/O per process, including which files are being read/written — deeper than Task Manager\'s disk tab.",sc:""},
  {q:"Computers in an office take too long to boot. The IT admin wants to boot Windows into Safe Mode to troubleshoot a driver conflict. Which tool enables this?",o:["A. Registry Editor","B. Disk Cleanup","C. System Information","D. System Configuration"],c:3,e:"<strong>System Configuration (msconfig.exe)</strong> controls boot settings including <strong>Safe Mode</strong>. Use it to enter Safe Mode without pressing F8 during boot, or to disable startup items.",sc:""},
  {q:"A user receives a Low Disk Space warning on their C: drive. Which tool removes temporary files to free space?",o:["A. Registry Editor","B. Disk Defragmenter","C. Disk Cleanup","D. System Information"],c:2,e:"<strong>Disk Cleanup (cleanmgr.exe)</strong> removes temporary files, browser cache, Recycle Bin contents, and old Windows update files — the correct tool to free disk space.",sc:""},
],
'4.9':[
  {q:"A technician needs to scan and repair file system errors on the C: drive after a power failure. Which command should they use?",o:["A. format C:","B. diskpart","C. chkdsk /f C:","D. gpupdate /force"],c:2,e:"<strong>chkdsk /f C:</strong> scans the C: drive for file system errors and fixes them. /f = fix errors. /r = additionally find bad sectors. Run on next reboot for active drives.",sc:""},
  {q:"A security administrator enforces a new USB restriction policy using Group Policy. Users still have USB access. What command forces the policy to apply immediately?",o:["A. sfc /scannow","B. gpresult /r","C. gpupdate /force","D. net user /add"],c:2,e:"<strong>gpupdate /force</strong> immediately refreshes all Group Policy settings without waiting for the automatic 90-minute cycle.",sc:""},
  {q:"A user reports a desktop background policy restriction they shouldn\'t have. The technician needs to see all applied policies. Which command should they run?",o:["A. sfc /scannow","B. gpresult /r","C. net user","D. chkdsk /r"],c:1,e:"<strong>gpresult /r</strong> displays all Group Policy settings currently applied to the user and computer — ideal for diagnosing unexpected policy restrictions.",sc:""},
  {q:"A Windows system has corrupted OS files causing instability. Which command scans and repairs those files?",o:["A. chkdsk /f","B. gpupdate /force","C. diskpart","D. sfc /scannow"],c:3,e:"<strong>sfc /scannow</strong> (System File Checker) scans all protected Windows system files and replaces corrupted ones with cached copies. Run as Administrator.",sc:""},
  {q:"An administrator needs to copy all files from C:\\Data to D:\\Backup, ensuring that any files deleted from the source are also removed from the backup. Which command achieves this?",o:["A. robocopy C:\\Data D:\\Backup","B. robocopy C:\\Data D:\\Backup /mir","C. xcopy C:\\Data D:\\Backup","D. md D:\\Backup"],c:1,e:"<strong>robocopy C:\\Data D:\\Backup /mir</strong> mirrors the source exactly including deletions, ensuring D:\\Backup is an identical copy of C:\\Data.",sc:""},
],
'4.10':[
  {q:"A laptop user wants the device to save its state to disk and fully power off for a long flight. Which power option should they choose?",o:["A. Sleep","B. Hibernate","C. Fast Startup","D. USB Selective Suspend"],c:1,e:"<strong>Hibernate</strong> saves the entire session to disk and completely powers off the device — no power is consumed. Perfect for long periods without charging. Slower resume than Sleep.",sc:""},
  {q:"A remote worker on a long flight wants to maximize battery life on their laptop. Which power plan should they use?",o:["A. High Performance","B. Balanced","C. Power Saver","D. Hibernate"],c:2,e:"<strong>Power Saver</strong> reduces CPU speed, dims the display, and limits background processes to extend battery life as long as possible.",sc:""},
  {q:"A user reports USB devices randomly disconnecting while the laptop is on battery. What is the likely cause?",o:["A. Corrupted USB drivers","B. USB Selective Suspend","C. Fast Startup","D. Power Saver Plan"],c:1,e:"<strong>USB Selective Suspend</strong> suspends USB ports not in active use to save power. This can make USB devices appear to disconnect. Disable it in Power Options > USB Settings.",sc:""},
  {q:"An IT administrator can\'t access Internet Options on a locked-down corporate machine. Where can they find this setting to clear browser cache?",o:["A. Windows Update","B. System Configuration","C. Control Panel > Internet Options","D. Device Manager"],c:2,e:"<strong>Internet Options</strong> in Control Panel manages browser settings, security zones, and cache. Accessible even if Edge/IE is restricted, as it\'s a system setting.",sc:""},
],
'4.11':[
  {q:"A user accidentally opened a malicious .exe file disguised as a document. Which File Explorer setting would have helped prevent this?",o:["A. Enable Hide Extensions for Known File Types","B. Disable Hide Extensions for Known File Types","C. Enable View Hidden Files","D. Change to Details view"],c:1,e:"<strong>Disabling 'Hide Extensions'</strong> reveals all file extensions including .exe, .bat, .vbs — preventing malicious files from masquerading as safe document types.",sc:""},
  {q:"A large corporation needs centralized user management, Group Policy enforcement, and single sign-on across all computers. Which network model should they implement?",o:["A. Workgroup","B. Peer-to-peer","C. Windows Domain","D. HomeGroup"],c:2,e:"A <strong>Windows Domain</strong> provides centralized administration via Active Directory, Group Policy enforcement, and single sign-on — the foundation of enterprise network management.",sc:""},
  {q:"A small 5-person office wants to share files without a dedicated server. Which network model is appropriate?",o:["A. Windows Domain","B. Active Directory Federation","C. Workgroup","D. LDAP Domain"],c:2,e:"A <strong>Workgroup</strong> allows peer-to-peer resource sharing without a server — ideal for small offices (up to ~20 users). No domain controller or Active Directory required.",sc:""},
  {q:"A technician troubleshooting a missing AppData folder can\'t find it in File Explorer. What setting enables viewing it?",o:["A. Show file extensions","B. Show hidden files, folders, and drives","C. Enable indexing","D. Change folder view to Details"],c:1,e:"AppData is a <strong>hidden folder</strong>. Enable <strong>'Show hidden files, folders, and drives'</strong> in Folder Options to reveal it and other system-hidden folders like ProgramData.",sc:""},
  {q:"An IT admin needs to enforce password complexity across all domain computers from one location. Which technology makes this possible?",o:["A. Local Group Policy on each PC","B. Active Directory Group Policy","C. Windows Defender","D. Task Scheduler"],c:1,e:"<strong>Active Directory Group Policy</strong> lets administrators enforce settings (passwords, software restrictions, security policies) across all domain-joined computers from a single Domain Controller.",sc:""},
],
'4.12':[
  {q:"A corporate IT team needs to silently install a VPN client on all company MacBooks using MDM. Which file format automates the installation process?",o:["A. .app","B. .dmg","C. .pkg","D. .zip"],c:2,e:"<strong>.pkg</strong> is a macOS package installer that runs automated setup scripts — ideal for enterprise MDM deployment. .dmg requires manual drag-and-drop; .app is the app bundle itself.",sc:""},
  {q:"A user needs to restore files accidentally deleted 3 days ago on their Mac. Which built-in feature allows this?",o:["A. Disk Utility","B. Time Machine","C. Finder","D. System Preferences"],c:1,e:"<strong>Time Machine</strong> saves hourly snapshots, allowing restoration of files deleted hours, days, or months ago — as long as backups were running.",sc:""},
  {q:"A business needs to encrypt all company MacBook drives to protect sensitive data. Which macOS feature provides full-disk encryption?",o:["A. Keychain","B. FileVault","C. Disk Utility","D. Terminal"],c:1,e:"<strong>FileVault</strong> provides full-disk encryption using XTS-AES-128. Enabled in System Preferences > Security & Privacy. Protects data if the laptop is stolen.",sc:""},
  {q:"A Mac user\'s browser becomes unresponsive. What should they do to forcefully close it?",o:["A. Restart the Dock","B. Run Disk Utility First Aid","C. Use Force Quit (Cmd+Option+Esc)","D. Open Keychain Access"],c:2,e:"<strong>Force Quit (Cmd+Option+Esc)</strong> opens the Force Quit Applications window, allowing users to forcefully terminate any unresponsive application immediately.",sc:""},
  {q:"A Mac user copies text on their iPhone and wants to paste it directly on their MacBook without any extra steps. Which feature enables this?",o:["A. iCloud Drive","B. Spotlight","C. Universal Clipboard (Continuity)","D. AirPlay"],c:2,e:"<strong>Universal Clipboard</strong> (part of Continuity) lets users copy content on one Apple device and paste it immediately on another — no apps or steps needed, just signed into same Apple ID.",sc:""},
],
'4.13':[
  {q:"A Linux administrator needs to verify user accounts and their home directory assignments. Which file should they check?",o:["A. /etc/shadow","B. /etc/fstab","C. /etc/passwd","D. /etc/hosts"],c:2,e:"<strong>/etc/passwd</strong> contains user account details including usernames, UIDs, GIDs, home directories, and default shells. It is world-readable but doesn\'t store encrypted passwords.",sc:""},
  {q:"A security auditor needs to review password expiration policies and verify that strong password hashing is used. Which Linux file should they analyze?",o:["A. /etc/passwd","B. /etc/shadow","C. /etc/resolv.conf","D. /etc/fstab"],c:1,e:"<strong>/etc/shadow</strong> stores encrypted (hashed) passwords and password policies including expiration, minimum age, and warning days. Only accessible by root.",sc:""},
  {q:"A technician needs to restart the Apache web server on a Linux system using systemd. Which command is correct?",o:["A. reboot apache2","B. killall apache2","C. systemctl restart apache2","D. service apache2 reboot"],c:2,e:"<strong>systemctl restart apache2</strong> is the correct systemd command. systemctl manages all services: start/stop/restart/enable/disable. killall terminates without proper shutdown.",sc:""},
  {q:"A developer installs Ubuntu and wants to install Firefox from the command line. Which command should they use?",o:["A. dnf install firefox","B. sudo apt install firefox","C. rpm -i firefox","D. yum install firefox"],c:1,e:"<strong>sudo apt install firefox</strong> — apt is the package manager for Debian/Ubuntu. dnf and yum are for Red Hat/Fedora. rpm is for manual .rpm package installation.",sc:""},
  {q:"A Linux technician needs to find all .log files in the /var directory. Which command should they use?",o:["A. grep .log /var","B. ls /var/*.log","C. find /var -name '*.log'","D. cat /var/*.log"],c:2,e:"<strong>find /var -name '*.log'</strong> recursively searches /var for all files matching *.log. The find command searches by name, size, modification date, and other criteria.",sc:""},
  {q:"A user needs to grant execute permission to a shell script. Which command should they use?",o:["A. chown +x script.sh","B. chmod +x script.sh","C. sudo script.sh","D. mount script.sh"],c:1,e:"<strong>chmod +x script.sh</strong> adds execute permission to the script. chmod modifies file permissions (read/write/execute) for owner, group, and others.",sc:""},
],
'4.15':[
  {q:"A user wants the Quick access list in File Explorer to stop showing frequent folders. Where should they configure this?",o:["A. Settings > System > Clipboard","B. File Explorer > View > Options > Privacy section","C. Control Panel > Indexing Options only","D. Task Manager > Startup"],c:1,e:"In <strong>Folder Options</strong> (File Explorer View → Options), the <strong>Privacy</strong> section controls whether recently used files and frequent folders appear in Quick access.",sc:""},
  {q:"What is the purpose of Libraries in Windows File Explorer?",o:["A. They replace NTFS permissions","B. They aggregate multiple folder locations under one virtual view","C. They encrypt files automatically","D. They are only available on Windows Server"],c:1,e:"<strong>Libraries</strong> (where enabled) group content from several paths into one logical view — useful for photos or documents spread across drives.",sc:""},
  {q:"A technician needs to show file name extensions for all files. Which setting must be changed?",o:["A. Enable thumbnails for all folders","B. Uncheck Hide extensions for known file types","C. Enable sharing wizard","D. Use compact view"],c:1,e:"Unchecking <strong>Hide extensions for known file types</strong> prevents malware disguised as double extensions and helps users see real file types.",sc:""},
  {q:"Which tool is the fastest way to open a second File Explorer window from the keyboard?",o:["A. Ctrl+Shift+N","B. Win+E","C. Alt+Tab","D. Win+R"],c:1,e:"<strong>Win+E</strong> opens a new File Explorer window (default view). Technicians use it constantly for quick navigation.",sc:""},
],
'4.16':[
  {q:"A laptop is joined to a Windows domain. Where are domain policies primarily applied from?",o:["A. Local Security Policy only","B. Group Policy Objects linked to the domain or OUs","C. BIOS settings","D. Microsoft Store"],c:1,e:"Domain-wide and OU-level settings come from <strong>Group Policy Objects (GPOs)</strong> in Active Directory — not from local policy alone.",sc:""},
  {q:"What is the main difference between a domain and a workgroup?",o:["A. Domains cannot use Wi-Fi","B. A domain uses centralized directory services; a workgroup is decentralized peer management","C. Workgroups require CALs","D. Domains block file sharing"],c:1,e:"A <strong>domain</strong> centralizes accounts and policy via AD; a <strong>workgroup</strong> keeps local accounts on each PC.",sc:""},
  {q:"Which account type is required to join a computer to a domain?",o:["A. Any standard user","B. A domain user with rights to join computers to the domain (often delegated to IT)","C. Guest","D. Microsoft account only"],c:1,e:"Joining a PC to AD requires appropriate <strong>domain credentials/permissions</strong> — typically delegated administrators, not every standard user.",sc:""},
  {q:"Users on domain PCs receive mapped drives via logon. Which feature commonly delivers those mappings?",o:["A. BitLocker","B. Group Policy Preferences / logon scripts","C. Storage Spaces","D. Fast Startup"],c:1,e:"Mapped drives are often pushed with <strong>GPP drive maps</strong> or traditional <strong>logon scripts</strong> assigned through GPO.",sc:""},
],
'4.17':[
  {q:"Where does a technician enable FileVault full-disk encryption on a supported Mac?",o:["A. Disk Utility only","B. System Settings (or System Preferences) > Privacy & Security","C. Safari settings","D. Terminal without privileges"],c:1,e:"<strong>FileVault</strong> is enabled under macOS security settings (System Settings / System Preferences path varies slightly by version).",sc:""},
  {q:"Which macOS feature allows continuing an email draft started on an iPhone on a Mac signed into the same Apple ID?",o:["A. AirDrop only","B. Handoff (Continuity)","C. Gatekeeper","D. SIP"],c:1,e:"<strong>Handoff</strong> is part of Continuity — move active tasks between Apple devices on the same account.",sc:""},
  {q:"What does Gatekeeper do on macOS?",o:["A. Encrypts Time Machine backups only","B. Controls which apps can run based on notarization/developer ID","C. Manages RAID volumes","D. Replaces DNS"],c:1,e:"<strong>Gatekeeper</strong> reduces untrusted software by verifying developer signatures and Apple notarization before execution.",sc:""},
  {q:"A Mac will not boot to the desktop. Which built-in recovery environment should the technician try first?",o:["A. Safe Mode with Command Prompt","B. macOS Recovery (Command+R or built-in recovery)","C. UEFI shell","D. PXE only"],c:1,e:"<strong>macOS Recovery</strong> provides Disk Utility, reinstall macOS, and startup security utilities from a hidden recovery partition or network.",sc:""},
],
'4.18':[
  {q:"Which utility shows real-time CPU, memory, energy, and disk activity per process on macOS?",o:["A. Console only","B. Activity Monitor","C. Keychain Access","D. Script Editor"],c:1,e:"<strong>Activity Monitor</strong> is the macOS counterpart to Task Manager for resource monitoring.",sc:""},
  {q:"What is the purpose of Spotlight on macOS?",o:["A. Disk defragmentation","B. System-wide search for files, apps, and metadata","C. Firewall logging","D. Printer driver updates"],c:1,e:"<strong>Spotlight</strong> indexes content for fast searching across the system.",sc:""},
  {q:"Which macOS feature stores passwords and certificates for apps and Wi-Fi?",o:["A. FileVault","B. Keychain","C. SIP","D. Rosetta"],c:1,e:"The <strong>Keychain</strong> securely stores credentials and certificates; managed via Keychain Access.",sc:""},
  {q:"What does System Integrity Protection (SIP) primarily protect?",o:["A. User downloads folder","B. Critical system files and directories from unauthorized modification even by root","C. Browser cache","D. iCloud photos"],c:1,e:"<strong>SIP</strong> locks down system locations so malware and tools cannot easily tamper with core OS files.",sc:""},
],
'4.19':[
  {q:"Which directory holds per-user home directories on a typical Linux workstation?",o:["A. /bin","B. /home","C. /boot","D. /tmp"],c:1,e:"User profiles live under <strong>/home/username</strong> on most distributions.",sc:""},
  {q:"What does the ls -l command show that ls alone does not emphasize?",o:["A. Hidden files only","B. Detailed permissions, ownership, size, and timestamp","C. Kernel modules","D. Open network ports"],c:1,e:"<strong>ls -l</strong> lists the long format with permissions (rwx), owner, group, size, and date.",sc:""},
  {q:"Which command shows how much disk space directories consume?",o:["A. top","B. du","C. ping","D. whoami"],c:1,e:"<strong>du (disk usage)</strong> summarizes space used by folders — often with <code>du -sh *</code>.",sc:""},
  {q:"A technician needs the full path of the working directory in Linux. Which command prints it?",o:["A. who","B. pwd","C. cd","D. ls .."],c:1,e:"<strong>pwd</strong> prints the present working directory path.",sc:""},
],
'4.20':[
  {q:"Which command opens a text-only full-screen editor commonly used for quick config edits on Linux?",o:["A. notepad","B. nano or vi/vim","C. regedit","D. diskmgmt.msc"],c:1,e:"Technicians use <strong>nano</strong> (beginner-friendly) or <strong>vi/vim</strong> for CLI file edits.",sc:""},
  {q:"What does piping (|) do in a Linux shell?",o:["A. Deletes the source file","B. Sends the output of one command as input to another","C. Copies files recursively","D. Mounts a network share"],c:1,e:"A <strong>pipe</strong> chains commands — example: <code>grep error file.log | wc -l</code>.",sc:""},
  {q:"Which command shows listening TCP/UDP sockets and processes on many Linux systems?",o:["A. df -h","B. ss or netstat","C. fdisk -l","D. uname -a"],c:1,e:"<strong>ss</strong> (modern) or <strong>netstat</strong> shows sockets, ports, and states for troubleshooting services.",sc:""},
  {q:"How does a technician safely read a large log file one screen at a time?",o:["A. cat only","B. less or more","C. rm","D. chmod +x"],c:1,e:"<strong>less</strong> (or more) pages through text without loading the entire file into an editor buffer at once.",sc:""},
],
'5.1':[
  {q:"A security analyst needs to test a suspicious executable without risking the host system. Which virtualisation approach should they use?",o:["A. Type 1 Hypervisor","B. VDI","C. Sandbox VM","D. Container"],c:2,e:"A <strong>Sandbox VM</strong> provides an isolated environment to safely run untrusted software. Any damage stays contained within the VM and does not affect the host.",sc:""},
  {q:"A data centre needs to run hundreds of VMs with maximum performance directly on server hardware. Which hypervisor type is required?",o:["A. Type 2 Hypervisor","B. Type 1 Hypervisor","C. VirtualBox","D. Container Engine"],c:1,e:"<strong>Type 1 (bare-metal)</strong> hypervisors run directly on hardware without a host OS, providing the best performance and resource utilisation for data centre environments.",sc:""},
  {q:"A developer wants to run a Linux application on their Windows laptop without dual-booting. Which virtualisation solution is most appropriate?",o:["A. Type 1 Hypervisor","B. VDI","C. Type 2 Hypervisor","D. SAN"],c:2,e:"A <strong>Type 2 (hosted)</strong> hypervisor runs as an application on Windows, allowing the developer to run a Linux VM alongside their host OS — ideal for end-user and dev environments.",sc:""},
  {q:"A company wants employees to access their desktop environments from any device, including thin clients and tablets. Which technology should they deploy?",o:["A. Type 2 Hypervisor","B. Containers","C. Sandbox VMs","D. VDI"],c:3,e:"<strong>VDI (Virtual Desktop Infrastructure)</strong> centrally hosts desktop environments on a server, allowing users to access their desktop from any device over the network.",sc:""},
  {q:"A DevOps team needs to deploy applications consistently across development, testing, and production environments with minimal resource overhead. Which technology is best?",o:["A. Virtual Machines","B. Containers","C. VDI","D. Type 1 Hypervisor"],c:1,e:"<strong>Containers</strong> package applications with their dependencies and share the host OS kernel, enabling consistent deployment across environments with faster startup and lower resource usage than VMs.",sc:""},
  {q:"Which of the following is an example of a Type 1 hypervisor?",o:["A. VMware Workstation","B. Oracle VirtualBox","C. VMware ESXi","D. Parallels Desktop"],c:2,e:"<strong>VMware ESXi</strong> is a Type 1 bare-metal hypervisor. VMware Workstation, VirtualBox, and Parallels are all Type 2 hosted hypervisors that run on top of a host OS.",sc:""},
  {q:"A technician is setting up a VM and needs to ensure it can communicate with other VMs and the external network. What must be configured?",o:["A. SAN storage","B. Snapshot policies","C. Virtual switches and network adapters","D. RAID array"],c:2,e:"VM networking requires <strong>virtual switches and network adapters</strong> to enable communication between VMs and with the external network. VLANs can also be configured for segmentation.",sc:""},
  {q:"A company runs a legacy application that only works on Windows XP. Their hardware has been upgraded to modern servers. What is the best solution?",o:["A. Replace the application","B. Run Windows XP in a VM","C. Use containers","D. Deploy VDI"],c:1,e:"Running <strong>Windows XP in a VM</strong> allows the legacy application to continue working on modern hardware without replacing it. VMs are ideal for running legacy OS environments.",sc:""},
  {q:"Which virtualisation technology allows applications to run in isolated environments that share the host OS kernel?",o:["A. Type 1 Hypervisor","B. VDI","C. Containers","D. Type 2 Hypervisor"],c:2,e:"<strong>Containers</strong> (e.g. Docker) share the host OS kernel while isolating application processes and dependencies. This differs from VMs which each run a full OS.",sc:""},
  {q:"A technician needs to create a safe environment to test a new software patch before deploying it to production. Which VM feature is most useful?",o:["A. VDI","B. Snapshots","C. Virtual switches","D. SAN storage"],c:1,e:"<strong>Snapshots</strong> capture the VM state at a point in time. If the patch causes issues, the technician can revert to the snapshot instantly — making them ideal for safe testing.",sc:""},
],'5.2':[
  {q:"A business requires full control over its infrastructure and needs to meet strict data sovereignty regulations. Which cloud model is most appropriate?",o:["A. Public Cloud","B. Community Cloud","C. Hybrid Cloud","D. Private Cloud"],c:3,e:"A <strong>Private Cloud</strong> is dedicated to a single organisation, providing the greatest control, security, and customisation. Ideal for strict compliance and data sovereignty requirements.",sc:""},
  {q:"A startup wants to rent virtual servers and storage to host its web application, scaling resources as customer demand grows. Which cloud model fits?",o:["A. SaaS","B. PaaS","C. IaaS","D. Private Cloud"],c:2,e:"<strong>IaaS (Infrastructure as a Service)</strong> provides rented virtual servers, storage, and networking. Examples include AWS EC2 and Azure VMs — allowing startups to scale without purchasing hardware.",sc:""},
  {q:"A retail company needs to automatically increase server capacity during Black Friday sales and reduce it afterwards. Which cloud characteristic enables this?",o:["A. Multitenancy","B. Metered Utilisation","C. Elasticity","D. File Synchronisation"],c:2,e:"<strong>Elasticity</strong> allows cloud resources to dynamically scale up during peak demand and scale down when demand drops, ensuring cost efficiency and optimal performance.",sc:""},
  {q:"A cloud provider charges customers only for the compute hours and storage GB they actually use each month. Which cloud characteristic describes this?",o:["A. Elasticity","B. Metered Utilisation","C. Multitenancy","D. Egress Pricing"],c:1,e:"<strong>Metered utilisation</strong> is the pay-as-you-go billing model where usage is tracked and customers are charged based on actual consumption. Also called chargeback.",sc:""},
  {q:"A company pays significantly more when exporting large datasets from their cloud provider than when uploading data. What explains this cost difference?",o:["A. Elasticity pricing","B. Multitenancy fees","C. Ingress vs Egress pricing","D. SaaS licensing"],c:2,e:"<strong>Egress</strong> (data leaving the cloud) is typically charged at a higher rate than <strong>ingress</strong> (data entering the cloud). This is a common cost consideration when choosing cloud providers.",sc:""},
  {q:"Multiple unrelated businesses share the same cloud infrastructure but each has isolated, secure access to their own data. What is this called?",o:["A. Community Cloud","B. Hybrid Cloud","C. Multitenancy","D. Private Cloud"],c:2,e:"<strong>Multitenancy</strong> means a single cloud instance serves multiple customers, each with logically isolated and secure access to their data, despite sharing physical infrastructure.",sc:""},
  {q:"A hospital network wants to share cloud infrastructure with affiliated clinics to meet the same HIPAA compliance requirements. Which cloud model fits?",o:["A. Public Cloud","B. Private Cloud","C. Hybrid Cloud","D. Community Cloud"],c:3,e:"A <strong>Community Cloud</strong> is shared by organisations with common requirements such as compliance standards. A healthcare community cloud allows multiple providers to share HIPAA-compliant infrastructure.",sc:""},
  {q:"A company keeps sensitive financial data on its private cloud but uses a public cloud for its customer-facing web application. Which model is this?",o:["A. Community Cloud","B. Hybrid Cloud","C. Private Cloud","D. Multitenancy"],c:1,e:"A <strong>Hybrid Cloud</strong> combines private and public cloud environments with integration between them, allowing sensitive data to stay on-premise while using public cloud for scalable workloads.",sc:""},
  {q:"A development team wants to deploy web applications without managing servers, OS updates, or runtime environments. Which cloud service model is best?",o:["A. IaaS","B. SaaS","C. PaaS","D. Private Cloud"],c:2,e:"<strong>PaaS (Platform as a Service)</strong> provides a managed development platform — developers build and deploy apps without managing the underlying infrastructure, OS, or runtime.",sc:""},
  {q:"A sales team uses Microsoft 365 and Google Workspace directly in their browsers without installing any software locally. Which cloud model are they using?",o:["A. IaaS","B. PaaS","C. Hybrid Cloud","D. SaaS"],c:3,e:"<strong>SaaS (Software as a Service)</strong> delivers software over the internet without local installation. Microsoft 365 and Google Workspace are leading SaaS examples.",sc:""},
],'5.3':[
  {q:"A company wants real-time cloud-based collaboration on financial spreadsheets from multiple locations simultaneously. Which tool is best suited?",o:["A. Microsoft OneDrive","B. Google Sheets","C. Microsoft Outlook","D. Apple Keynote"],c:1,e:"<strong>Google Sheets</strong> is a cloud-based spreadsheet tool enabling real-time multi-user collaboration from any location. Microsoft Excel Online offers similar functionality within M365.",sc:""},
  {q:"An employee wants to sync their work files to their laptop but only has 50GB of local storage available. Which feature should they use to avoid filling their drive?",o:["A. Identity Synchronisation","B. Licensing Assignment","C. Selective Sync","D. File Versioning"],c:2,e:"<strong>Selective sync</strong> lets users choose which specific folders sync locally, avoiding downloading the entire cloud storage. Available in OneDrive, Google Drive, and Dropbox.",sc:""},
  {q:"A new employee needs access to Microsoft 365 apps. The IT admin must ensure they have the right tools based on their role without over-provisioning. Which process manages this?",o:["A. Identity Synchronisation","B. Selective Sync","C. Licensing Assignment","D. File Synchronisation"],c:2,e:"<strong>Licensing assignment</strong> controls which cloud features and tools users can access based on their role and subscription tier. Managed via Microsoft Entra ID.",sc:""},
  {q:"After an employee changes departments, their access permissions across Microsoft 365, Teams, and SharePoint need updating consistently. Which feature handles this automatically?",o:["A. Selective Sync","B. Metered Utilisation","C. Licensing Assignment","D. Identity Synchronisation"],c:3,e:"<strong>Identity synchronisation</strong> keeps user credentials and access permissions consistent across all connected cloud services. Microsoft Entra ID (Azure AD) handles this for Microsoft 365 environments.",sc:""},
  {q:"A remote team needs to hold weekly meetings with screen sharing, breakout rooms, and virtual whiteboards. Which tool is purpose-built for this?",o:["A. Microsoft OneDrive","B. Google Drive","C. Zoom","D. Microsoft Word Online"],c:2,e:"<strong>Zoom</strong> is a dedicated videoconferencing platform supporting screen sharing, breakout rooms, and virtual whiteboards. Microsoft Teams and Google Meet offer similar enterprise capabilities.",sc:""},
  {q:"A marketing manager needs to create and present slides collaboratively with a colleague in another country. Which tools would allow both to edit simultaneously?",o:["A. Microsoft OneDrive and Outlook","B. PowerPoint Online or Google Slides","C. Apple iCloud and Keynote","D. Zoom and Slack"],c:1,e:"<strong>PowerPoint Online</strong> (Microsoft 365) and <strong>Google Slides</strong> (Google Workspace) are cloud-based presentation tools that allow multiple users to edit simultaneously from different locations.",sc:""},
  {q:"A company uses Microsoft 365. Which service provides cloud-based file storage and synchronisation for their employees?",o:["A. SharePoint only","B. Microsoft Teams","C. OneDrive","D. Entra ID"],c:2,e:"<strong>OneDrive</strong> is Microsoft\'s cloud storage and sync service included in Microsoft 365. It allows employees to store, access, and sync files across devices with selective sync support.",sc:""},
  {q:"An IT admin needs to ensure that when a user is created in Azure AD, their account and permissions automatically appear in Teams, SharePoint, and Outlook. Which feature enables this?",o:["A. Licensing Assignment","B. Identity Synchronisation","C. Selective Sync","D. Metered Utilisation"],c:1,e:"<strong>Identity synchronisation</strong> ensures user profiles and permissions are consistent across all Microsoft 365 services. Microsoft Entra ID (Azure AD) manages this synchronisation automatically.",sc:""},
  {q:"Which Microsoft cloud service was formerly known as Azure Active Directory and manages user identities and access?",o:["A. Microsoft Intune","B. Microsoft Defender","C. Microsoft Entra ID","D. Microsoft Endpoint Manager"],c:2,e:"<strong>Microsoft Entra ID</strong> (formerly Azure Active Directory / Azure AD) is Microsoft\'s cloud-based identity and access management service, handling SSO, identity sync, and licensing.",sc:""},
  {q:"A company needs real-time instant messaging integrated with file sharing and video calls for their remote teams. Which Microsoft 365 tool provides all three?",o:["A. Outlook","B. OneDrive","C. SharePoint","D. Microsoft Teams"],c:3,e:"<strong>Microsoft Teams</strong> integrates instant messaging, file sharing, and video conferencing in one platform. It is the central collaboration hub in Microsoft 365 environments.",sc:""},
],
'6.1':[
  {q:"A high-security research facility needs to allow only one authorised person into a restricted area at a time. Which physical security measure should they implement?",o:["A. Bollards","B. Security Guards","C. Access Control Vestibule","D. Equipment Locks"],c:2,e:"An <strong>access control vestibule (mantrap)</strong> physically restricts entry to one person at a time, preventing tailgating. Guards monitor but don\'t physically prevent multiple entries.",sc:""},
  {q:"A company installs vertical steel posts outside its headquarters to prevent vehicles from ramming the building. What physical security control is this?",o:["A. Fences","B. Bollards","C. Access Control Vestibule","D. Equipment Locks"],c:1,e:"<strong>Bollards</strong> are vertical barriers specifically designed to stop vehicle access to buildings and critical infrastructure.",sc:""},
  {q:"An IT manager wants to secure laptops in an open office so employees can still use them but cannot remove them. What is the best solution?",o:["A. Badge Readers","B. Alarm Systems","C. Equipment Locks (cable locks)","D. Bollards"],c:2,e:"<strong>Equipment locks (cable locks)</strong> physically secure devices to desks preventing removal while allowing authorised use.",sc:""},
  {q:"A data centre deploys cameras covering all entry points and server aisles. What security benefit does this primarily provide?",o:["A. Prevents all unauthorised access","B. Deters threats and provides evidence of incidents","C. Automatically locks down servers","D. Replaces the need for access control"],c:1,e:"<strong>Video surveillance</strong> deters would-be attackers and provides recorded evidence if a security incident occurs. It does not prevent access on its own.",sc:""},
  {q:"Which physical security measure detects movement and automatically triggers lights or alarms in secured areas?",o:["A. Badge readers","B. Lighting","C. Motion sensors","D. Alarm systems"],c:2,e:"<strong>Motion sensors</strong> detect movement and trigger automated responses — lights, alarms, or notifications to security personnel.",sc:""},
],'6.2':[
  {q:"A financial firm needs the most secure biometric method that analyses blood vessel patterns in the eye. Which should they use?",o:["A. Fingerprint scanner","B. Retina scanner","C. Facial recognition","D. Palm print scanner"],c:1,e:"<strong>Retina scanners</strong> use infrared to analyse unique blood vessel patterns in the retina — considered highest-security biometric as retinas are very difficult to forge.",sc:""},
  {q:"A corporate office installs devices at every entry point that detect concealed metallic objects before allowing entry. What are these devices?",o:["A. Badge readers","B. Biometric scanners","C. Magnetometers","D. Access control vestibules"],c:2,e:"<strong>Magnetometers</strong> use electromagnetic fields to detect metallic objects (weapons) at security checkpoints.",sc:""},
  {q:"An employee uses their smartphone to unlock their office door via Bluetooth. Which physical access technology is this?",o:["A. Smart card","B. Key fob","C. Mobile digital key","D. RFID badge"],c:2,e:"A <strong>mobile digital key</strong> uses a smartphone or smartwatch with Bluetooth or NFC to replace traditional key cards or fobs.",sc:""},
  {q:"A security analyst notes that an unauthorised person entered a secure area by walking in immediately behind a badge-holding employee. What attack is this?",o:["A. Shoulder surfing","B. Tailgating","C. Piggybacking","D. B and C"],c:3,e:"<strong>Tailgating and piggybacking</strong> both describe following an authorised person through a secure door without authenticating. Both terms are used interchangeably on the CompTIA exam.",sc:""},
  {q:"Which biometric method maps vein structures in the hand for secure access control?",o:["A. Retina scanner","B. Voice recognition","C. Palm print scanner","D. Fingerprint scanner"],c:2,e:"<strong>Palm print scanners</strong> map vein structures or surface patterns in the palm. Used in high-security financial and government environments.",sc:""},
],'6.3':[
  {q:"A company enforces a policy where no user or device is trusted by default and all access requires continuous verification. Which security model is this?",o:["A. Principle of Least Privilege","B. Zero Trust","C. Defence in Depth","D. PAM"],c:1,e:"The <strong>Zero Trust model</strong> assumes no implicit trust — every access request is verified regardless of network location. 'Never trust, always verify.'",sc:""},
  {q:"An employee changes roles and temporarily needs elevated database access for a critical project. Once complete, access is automatically revoked. Which security approach is this?",o:["A. PAM","B. SSO","C. Just-in-Time (JIT) access","D. Least Privilege"],c:2,e:"<strong>JIT (Just-in-Time) access</strong> grants temporary elevated privileges for a specific task and auto-revokes them upon completion — minimising exposure window.",sc:""},
  {q:"An IT team wants to prevent employees from uploading sensitive company files to personal Google Drive. Which solution addresses this?",o:["A. MDM","B. DLP","C. ACLs","D. Directory Services"],c:1,e:"<strong>DLP (Data Loss Prevention)</strong> monitors and blocks unauthorised data transfers, including uploads to personal cloud storage services.",sc:""},
  {q:"A company wants employees to access Office 365, Salesforce, and HR systems with a single login. Which technology achieves this?",o:["A. MFA","B. SSO","C. PAM","D. SAML only"],c:1,e:"<strong>SSO (Single Sign-On)</strong> allows one authentication event to grant access to multiple applications. SAML is often the underlying protocol that enables SSO.",sc:""},
],'6.4':[
  {q:"An administrator wants to block all inbound traffic to a server except specific authorised IP addresses. Which approach should they use?",o:["A. Implicit deny with allow rules for authorised IPs","B. Explicit deny for each unauthorised IP","C. Outbound rules","D. Connection security rules"],c:0,e:"<strong>Implicit deny</strong> blocks everything by default. Adding explicit allow rules for authorised IPs is the correct and scalable approach — far better than trying to deny every individual IP.",sc:""},
  {q:"A company wants to encrypt all traffic between its London and New York offices transmitted over the internet. Which Windows firewall feature handles this?",o:["A. Inbound rules","B. Firewall Rules","C. IPSec","D. Monitoring"],c:2,e:"<strong>IPSec</strong> encrypts and authenticates IP traffic, and is used to build secure VPN tunnels between offices — exactly this scenario.",sc:""},
  {q:"A security analyst needs to review logs of all failed connection attempts to a server to detect brute force activity. Which firewall feature provides this?",o:["A. Connection security rules","B. Monitoring","C. Port rules","D. Outbound rules"],c:1,e:"<strong>Monitoring</strong> in Windows Defender Firewall with Advanced Security provides real-time logging and event tracking including failed connection attempts.",sc:""},
  {q:"A laptop connects to a coffee shop Wi-Fi. Windows automatically applies stricter firewall rules. Which firewall profile is applied?",o:["A. Domain","B. Private","C. Public","D. Guest"],c:2,e:"The <strong>Public profile</strong> is applied on unrecognised networks (public Wi-Fi). It applies the strictest rules, blocking most inbound connections.",sc:""},
],'6.5':[
  {q:"A technician needs to run a command that requires administrative privileges but their account is a standard user. What is the correct procedure?",o:["A. Log off and log in as admin","B. Right-click and choose Run as Administrator","C. Disable UAC temporarily","D. Use Remote Desktop as admin"],c:1,e:"<strong>Run as Administrator</strong> allows execution of a specific application with elevated privileges without switching accounts, maintaining security of the normal user session.",sc:""},
  {q:"UAC prompts a user before any system change even though they are logged in as Administrator. What is the purpose of this behaviour?",o:["A. It is a bug — administrators should not see UAC","B. Prevents silent privilege escalation by malware or accidental changes","C. Ensures passwords are re-entered regularly","D. It applies only to guest accounts"],c:1,e:"<strong>UAC</strong> prompts even admins to confirm elevation — this prevents malware from silently making system changes by running as the logged-in admin without consent.",sc:""},
  {q:"A company assigns all standard employees a Windows account type that prevents software installation but allows daily work. Which account type is this?",o:["A. Administrator","B. Guest","C. Standard","D. Power User"],c:2,e:"<strong>Standard accounts</strong> can run applications and change personal settings but cannot install software or make system-wide changes — the least privilege principle in practice.",sc:""},
],'6.6':[
  {q:"A user has NTFS Read permission on a folder but the Share permission is Full Control. The user accesses the folder over the network. What is their effective permission?",o:["A. Full Control","B. Read","C. Modify","D. No Access"],c:1,e:"When both NTFS and Share permissions apply, the <strong>most restrictive permission wins</strong>. NTFS = Read, Share = Full Control → effective = Read.",sc:""},
  {q:"An administrator needs to give a team the ability to create and edit files in a shared folder but not change permissions. Which NTFS permission level is correct?",o:["A. Full Control","B. Write","C. Modify","D. Read & Execute"],c:2,e:"<strong>Modify</strong> allows reading, writing, and deleting files — but not changing permissions or taking ownership, which requires Full Control.",sc:""},
  {q:"A new subfolder is created inside a folder where Sales group has Read permissions. By default, what permissions does the subfolder have?",o:["A. No permissions","B. Sales group Read — inherited from parent","C. Administrator Full Control only","D. Everyone Read"],c:1,e:"<strong>NTFS inheritance</strong> means child objects automatically inherit permissions from their parent folder by default. The Sales group will have Read on the subfolder.",sc:""},
],'6.7':[
  {q:"An administrator runs gpupdate /force on a workstation. What does this command do?",o:["A. Displays applied Group Policy settings","B. Immediately refreshes all Group Policy Objects","C. Resets all Group Policy to default","D. Opens the Group Policy editor"],c:1,e:"<strong>gpupdate /force</strong> immediately applies all GPOs to the computer and user — bypassing the normal periodic refresh interval.",sc:""},
  {q:"A manager is promoted and needs access to executive-level resources. The IT admin moves their AD account to a new OU. Why?",o:["A. To change their email address","B. To apply different Group Policy settings appropriate to their new role","C. To reset their password","D. To enable their Microsoft account"],c:1,e:"Moving an account to a different <strong>OU</strong> changes which <strong>GPOs</strong> apply to that account — executives might have different software restrictions, security settings, and resource access.",sc:""},
  {q:"A company wants every employee to automatically have a private network storage location accessible from any domain computer. Which AD feature provides this?",o:["A. Folder Redirection","B. Security Groups","C. Home Folders","D. Login Scripts"],c:2,e:"<strong>Home Folders</strong> provide dedicated personal storage per user on a network server, accessible from any domain-joined workstation.",sc:""},
],'6.8':[
  {q:"A company wants to ensure all laptops have their entire drives encrypted. If a laptop is lost, data must be unreadable. Which tool should be deployed?",o:["A. EFS","B. BitLocker-To-Go","C. BitLocker","D. TPM only"],c:2,e:"<strong>BitLocker</strong> provides full-disk encryption using AES. If the laptop is stolen and the drive removed, the data remains unreadable without the BitLocker key.",sc:""},
  {q:"An employee encrypts only their project files using a Windows NTFS encryption feature. Only their account can access the files. Which tool did they use?",o:["A. BitLocker","B. BitLocker-To-Go","C. EFS","D. AES-256"],c:2,e:"<strong>EFS (Encrypting File System)</strong> encrypts individual files/folders on NTFS drives. The encryption is tied to the user\'s Windows account.",sc:""},
  {q:"BitLocker is enabled on a workstation. If the hard drive is removed and placed in another computer, what happens?",o:["A. The data is immediately accessible","B. The data is unreadable — requires BitLocker key or TPM from original hardware","C. Windows automatically decrypts","D. EFS takes over"],c:1,e:"BitLocker binds the encryption key to the <strong>TPM chip</strong> on the original hardware. Without that specific TPM (or the recovery key), data cannot be decrypted on another machine.",sc:""},
],'6.9':[
  {q:"A company wants to upgrade their wireless security from WPA2 to provide better protection against brute-force attacks. Which should they choose?",o:["A. WPA2 with TKIP","B. WEP","C. WPA3","D. WPS"],c:2,e:"<strong>WPA3</strong> uses SAE (Simultaneous Authentication of Equals) which provides resistance to offline dictionary and brute-force attacks — a significant improvement over WPA2.",sc:""},
  {q:"A network admin finds a router still using WEP encryption. What is the most important reason to upgrade immediately?",o:["A. WEP is slower than WPA2","B. WEP static keys can be cracked in minutes with available tools","C. WEP doesn\'t support modern hardware","D. WEP requires monthly licence fees"],c:1,e:"<strong>WEP uses static keys</strong> that are trivially cracked using freely available tools in minutes. It provides no real security and must be replaced with WPA2 or WPA3.",sc:""},
  {q:"An enterprise Wi-Fi requires each employee to authenticate with their own unique username and password rather than a shared passphrase. Which authentication server is used?",o:["A. Kerberos","B. TACACS+","C. RADIUS","D. LDAP"],c:2,e:"<strong>RADIUS</strong> provides centralised authentication for enterprise Wi-Fi (WPA2/WPA3-Enterprise), validating individual credentials against a central server.",sc:""},
],'6.10':[
  {q:"A user downloads what appears to be a free game. After installation, attackers gain remote access to the system. What type of malware is this?",o:["A. Ransomware","B. Virus","C. Trojan","D. Worm"],c:2,e:"A <strong>Trojan</strong> disguises itself as legitimate software. When executed, it provides attackers with backdoor access. Named after the Trojan horse — appears safe, carries a hidden threat.",sc:""},
  {q:"All files on a workstation are renamed with an unknown extension and the user receives a message demanding Bitcoin for decryption. What type of malware is this?",o:["A. Spyware","B. Adware","C. Ransomware","D. Rootkit"],c:2,e:"<strong>Ransomware</strong> encrypts files and demands payment for the decryption key. The characteristic signs are renamed/encrypted files and a ransom note.",sc:""},
  {q:"A malware sample runs entirely in RAM with no files written to disk, making traditional AV scans unable to detect it. What type of malware is this?",o:["A. Rootkit","B. Fileless malware","C. Boot sector virus","D. Cryptominer"],c:1,e:"<strong>Fileless malware</strong> operates entirely in memory using legitimate system tools (PowerShell, WMI). No disk writes means signature-based AV cannot find files to scan.",sc:""},
  {q:"A user\'s computer runs slowly and their electricity bill spikes. Investigation reveals their CPU runs at 100% even when idle. What is the most likely cause?",o:["A. Spyware","B. Ransomware","C. Cryptominer","D. Keylogger"],c:2,e:"<strong>Cryptomining malware</strong> hijacks CPU/GPU resources to mine cryptocurrency for the attacker. Symptoms: sustained high CPU usage, system slowdown, high energy consumption.",sc:""},
],'6.11':[
  {q:"An AV tool detects a new piece of malware it has never seen before based on its behaviour rather than matching a known signature. Which detection method is this?",o:["A. Signature-based detection","B. Heuristic analysis","C. Sandboxing","D. Blacklisting"],c:1,e:"<strong>Heuristic analysis</strong> identifies unknown/new malware by analysing behaviour patterns rather than comparing against known signatures — essential for zero-day threats.",sc:""},
  {q:"A security team runs a suspicious file inside an isolated environment to observe what it does without risking the real system. What is this technique?",o:["A. Penetration testing","B. Sandboxing","C. Quarantine","D. Heuristic scanning"],c:1,e:"<strong>Sandboxing</strong> executes suspicious files in an isolated virtual environment to safely observe behaviour. Any malicious activity is contained and cannot affect real systems.",sc:""},
],'6.12':[
  {q:"An attacker emails a company\'s CFO with a personalised message claiming to be the CEO, requesting an urgent wire transfer. What type of attack is this?",o:["A. Phishing","B. Whaling","C. Vishing","D. Smishing"],c:1,e:"<strong>Whaling</strong> targets high-value executives (CEO, CFO) with personalised spear phishing. The term reflects targeting the 'big fish' in an organisation.",sc:""},
  {q:"An employee receives a text message claiming their bank account has been locked and must click a link to verify their details. What type of attack is this?",o:["A. Vishing","B. Phishing","C. Smishing","D. Spear phishing"],c:2,e:"<strong>Smishing (SMS phishing)</strong> uses text messages to trick victims into clicking malicious links or providing credentials. 'Smishing' = SMS + phishing.",sc:""},
  {q:"An attacker leaves USB drives labelled 'Salary Data 2025' in the company car park. Curious employees plug them in, infecting their workstations. What attack is this?",o:["A. Tailgating","B. Shoulder surfing","C. Baiting","D. Dumpster diving"],c:2,e:"<strong>Baiting</strong> exploits human curiosity by leaving infected media in accessible locations. The label entices victims to plug in the drive, executing malware automatically.",sc:""},
],'6.13':[
  {q:"A user types their bank\'s URL correctly but is redirected to a fake site. Investigation reveals the DNS settings were maliciously altered. What attack occurred?",o:["A. Phishing","B. MITM","C. DNS poisoning/hijacking","D. SQL injection"],c:2,e:"<strong>DNS poisoning/hijacking</strong> redirects legitimate domain lookups to malicious IP addresses. The user types the correct URL but is sent to a fake site controlled by the attacker.",sc:""},
  {q:"A researcher discovers a critical vulnerability in Windows that Microsoft has not yet patched. Attackers begin exploiting it immediately. What type of exploit is this?",o:["A. Brute force","B. Zero-day exploit","C. Dictionary attack","D. Rootkit"],c:1,e:"A <strong>zero-day exploit</strong> attacks a vulnerability unknown to the vendor — no patch exists. Attackers race to exploit it before a fix is released.",sc:""},
  {q:"An attacker intercepts HTTPS traffic between a user and their bank by presenting a fake certificate. What type of attack is this?",o:["A. SQL injection","B. DDoS","C. Man-in-the-Middle (MITM)","D. Cross-site scripting"],c:2,e:"A <strong>MITM attack</strong> positions the attacker between client and server to intercept/modify communications. Fake certificates are used to decrypt HTTPS traffic.",sc:""},
],'6.14':[
  {q:"A company continues running Windows Server 2008 because upgrading is expensive. What is the primary security risk?",o:["A. The server will run slowly","B. The server cannot connect to modern network equipment","C. The system no longer receives security patches — EOL","D. The server cannot run modern applications"],c:2,e:"<strong>EOL (End-of-Life) systems</strong> receive no more security updates. Known vulnerabilities are permanently unpatched — making them easy targets for attackers scanning for known CVEs.",sc:""},
  {q:"A remote employee connects to corporate servers from a personal laptop that has no MDM, no AV, and runs outdated software. What vulnerability category does this represent?",o:["A. EOL systems","B. BYOD","C. Unpatched systems","D. Non-compliant systems"],c:1,e:"<strong>BYOD (Bring Your Own Device)</strong> risks arise when personal devices lacking enterprise security controls access corporate resources — potential data leakage, malware, no enforced policies.",sc:""},
],'6.15':[
  {q:"A technician is about to remove malware from a Windows PC. Before running any scans, what should they do first regarding System Restore?",o:["A. Create a new restore point","B. Enable System Restore for backup","C. Disable System Restore to prevent malware restoring from infected restore points","D. Run System Restore to revert the infection"],c:2,e:"<strong>Disable System Restore first</strong> — restore points may contain malware. If not disabled, the malware can restore itself from an infected snapshot after removal.",sc:""},
  {q:"A standard malware scan in Windows Normal Mode keeps failing to remove a persistent infection. What should the technician try next?",o:["A. Reimage immediately","B. Run the scan in Safe Mode","C. Disable Windows Defender","D. Update the BIOS"],c:1,e:"<strong>Safe Mode</strong> loads only essential Windows components — malware that loads at startup won\'t be active, making it possible to detect and remove it with AV tools.",sc:""},
  {q:"According to the CompTIA malware removal process, what is the correct action AFTER successfully removing malware?",o:["A. Immediately create a new restore point","B. Schedule scans, run updates, then re-enable System Restore, then educate user","C. Reimage the system as a precaution","D. Disable network access permanently"],c:1,e:"After removal: <strong>schedule scans, run OS updates</strong>, then <strong>re-enable System Restore</strong> for clean restore points, then <strong>educate the user</strong> on how the infection occurred.",sc:""},
],'6.16':[
  {q:"A workstation is found running unused services and has AutoRun enabled for all USB drives. What is the security concern?",o:["A. The workstation will run slowly","B. Unnecessary attack surface — unused services and AutoRun increase vulnerability","C. USB drives will not work","D. The workstation cannot join a domain"],c:1,e:"<strong>Unused services and AutoRun</strong> increase the attack surface. AutoRun can automatically execute malware from USB drives; unused services may have unpatched vulnerabilities.",sc:""},
  {q:"A company enforces a policy that locks accounts after 5 failed login attempts. Which security hardening measure is this?",o:["A. Account expiration","B. Password complexity","C. Account lockout policy","D. Screensaver lock"],c:2,e:"<strong>Account lockout</strong> after a set number of failed attempts prevents brute-force attacks against local accounts. Standard best practice is 3-5 attempts before lockout.",sc:""},
],'6.17':[
  {q:"A hospital is decommissioning old hard drives containing patient records. Which disposal method provides the best audit trail for HIPAA compliance?",o:["A. Format the drives and donate them","B. Use a certified shredding service and obtain a Certificate of Destruction","C. Degauss and reuse internally","D. Overwrite once with zeros"],c:1,e:"A <strong>Certificate of Destruction</strong> from a certified vendor provides documented proof of secure disposal — required for HIPAA, PCI-DSS, and similar compliance frameworks.",sc:""},
  {q:"A technician uses a degausser to destroy data on storage devices. Which type of device is immune to degaussing?",o:["A. HDD","B. Magnetic tape","C. SSD","D. Floppy disk"],c:2,e:"<strong>SSDs</strong> use NAND flash memory, not magnetic storage — degaussing has no effect. SSDs must be physically destroyed (shredded) or cryptographically erased (ATA Secure Erase).",sc:""},
],'6.18':[
  {q:"A network administrator wants to prevent a router from automatically opening ports for network devices. Which feature should they disable?",o:["A. SSID broadcast","B. WPS","C. UPnP","D. Content filtering"],c:2,e:"<strong>UPnP (Universal Plug and Play)</strong> automatically opens router ports for devices that request it — this can be exploited by malware to create backdoors. Disable it on all SOHO routers.",sc:""},
  {q:"A small business places its public web server in a separate network segment between the internet and internal network. What is this architecture called?",o:["A. VLAN","B. Screened subnet (DMZ)","C. Guest network","D. IP filtering"],c:1,e:"A <strong>screened subnet (DMZ)</strong> is a buffer zone separating public-facing servers from the internal network. If the web server is compromised, the internal network remains protected.",sc:""},
  {q:"A home user wants to offer Wi-Fi to guests without giving them access to their home computers and NAS. What should they configure?",o:["A. Disable SSID broadcast","B. Guest network (isolated VLAN)","C. WPA3 encryption","D. Port forwarding"],c:1,e:"A <strong>guest network</strong> creates an isolated Wi-Fi VLAN — guests can access the internet but cannot reach internal devices on the main network.",sc:""},
],'6.19':[
  {q:"A user configures their browser to use DNS over HTTPS (DoH). What specific security benefit does this provide?",o:["A. Encrypts all HTTPS traffic","B. Prevents websites from tracking cookies","C. Encrypts DNS queries, preventing ISP tracking and DNS spoofing","D. Blocks all pop-up advertisements"],c:2,e:"<strong>Secure DNS (DoH/DoT)</strong> encrypts DNS queries so ISPs cannot see which domains you visit and prevents DNS spoofing/poisoning attacks.",sc:""},
  {q:"A user downloads a browser installer from a third-party site and compares the SHA-256 hash against the developer\'s official website. What is this verifying?",o:["A. The download speed was sufficient","B. The file is authentic and has not been tampered with","C. The installer is compatible with their OS","D. The file is free of malware"],c:1,e:"<strong>Hash verification</strong> confirms the downloaded file matches the original — if the hash matches the developer\'s published value, the file has not been modified or corrupted.",sc:""},
],'6.20':[
  {q:"A user reports a fake security warning on their screen claiming they have 47 viruses and must call a phone number immediately to fix it. What type of threat is this?",o:["A. Ransomware","B. Phishing","C. Scareware","D. Adware"],c:2,e:"<strong>Scareware</strong> displays fake security alerts using urgency and fear to trick users into purchasing fraudulent software or calling fake tech support numbers.",sc:""},
  {q:"A user\'s browser constantly redirects them from their intended websites to unknown search engines. The IT team confirms no extensions are installed. What should be checked next?",o:["A. Windows Firewall settings","B. DNS settings and the hosts file","C. NTFS permissions on browser files","D. BitLocker status"],c:1,e:"Browser redirection with no extensions points to <strong>DNS settings being altered by malware</strong> or manipulation of the <strong>hosts file</strong> (C:\Windows\System32\drivers\etc\hosts).",sc:""},
  {q:"A user cannot access Windows Update — every attempt fails with an error. The IT team suspects malware. Which type is most likely blocking updates?",o:["A. Adware","B. Ransomware","C. Rootkit","D. Cryptominer"],c:2,e:"<strong>Rootkits</strong> embed deeply in the OS and commonly disable Windows Update services to prevent security patches from closing the vulnerabilities they exploit.",sc:""},
],'7.1':[
  {q:"Tier 1 support cannot resolve a network incident after basic troubleshooting. What is the best next step?",o:["A. Delete ticket","B. Escalate to Tier 2","C. Close unresolved","D. Tell user to reboot later"],c:1,e:"Unresolved issues should be <strong>escalated</strong> with complete notes, not closed or deleted.",sc:""},
  {q:"Which information is most useful to include in an initial ticket?",o:["A. Only user name","B. Error details and recent changes","C. Office seating map","D. Department budget"],c:1,e:"Ticket quality depends on clear issue details, scope, errors, and recent changes.",sc:""},
],'7.2':[
  {q:"Which system tracks assets plus configuration changes and dependencies?",o:["A. Inventory list","B. CMDB","C. Ticket queue","D. Helpdesk KB"],c:1,e:"A <strong>CMDB</strong> captures configuration relationships and change history.",sc:""},
],'7.3':[
  {q:"A formal record of an outage or breach belongs in which document?",o:["A. SOP","B. Incident report","C. Onboarding checklist","D. SLA"],c:1,e:"Use an incident report to capture timeline, impact, and remediation details.",sc:""},
],'7.4':[
  {q:"A pre-approved low-risk recurring patch is what change type?",o:["A. Standard","B. Normal","C. Emergency","D. Unauthorized"],c:0,e:"Routine, pre-approved low-risk work is a <strong>standard change</strong>.",sc:""},
],'7.5':[
  {q:"Which backup method usually requires the most restore steps?",o:["A. Full","B. Differential","C. Incremental","D. Snapshot"],c:2,e:"Incremental backups minimize storage but require a longer restore chain.",sc:""},
],'7.6':[
  {q:"Before opening a workstation case, what should be done first?",o:["A. Run antivirus","B. Disconnect power and discharge residual power","C. Update drivers","D. Remove RAM"],c:1,e:"Disconnecting power and discharging protects technician and components.",sc:""},
],'7.7':[
  {q:"Recommended server room humidity range is:",o:["A. 10-20%","B. 25-35%","C. 40-60%","D. 70-80%"],c:2,e:"40-60% helps reduce both ESD events and condensation risk.",sc:""},
],'7.8':[
  {q:"During incident response, what is collected first under order of volatility?",o:["A. Archived backups","B. Disk image","C. RAM/cache data","D. Printed logs"],c:2,e:"Volatile memory is collected first because it is quickly lost.",sc:""},
],'7.9':[
  {q:"A user is frustrated and non-technical. Best support behavior is:",o:["A. Use jargon","B. Dismiss complaint","C. Active listening with plain language","D. End call quickly"],c:2,e:"Professional support emphasizes calm, respectful communication and clarity.",sc:""},
],'7.10':[
  {q:"Which file type is most associated with modern Windows automation and remote admin?",o:["A. .sh","B. .ps1","C. .vbs","D. .css"],c:1,e:"PowerShell <strong>.ps1</strong> is the primary modern Windows admin scripting format.",sc:""},
],'7.11':[
  {q:"Which protocol is commonly used for encrypted Linux CLI administration?",o:["A. RDP","B. VNC","C. SSH","D. FTP"],c:2,e:"SSH provides encrypted command-line remote access for Linux/Unix systems.",sc:""},
],'7.12':[
  {q:"AI generating plausible but incorrect answers is called:",o:["A. Overfitting","B. Hallucination","C. Caching","D. Normalization"],c:1,e:"Hallucination is confident but inaccurate generation that requires verification.",sc:""},
],'7.13':[
  {q:"Which is the final CompTIA troubleshooting step?",o:["A. Replace hardware","B. Verify functionality","C. Document findings and outcomes","D. Reboot system"],c:2,e:"Documentation is required to close the loop and support future troubleshooting.",sc:""},
]
};

function fcQuestionDedupeKey(t) {
  return String(t || '')
    .toLowerCase()
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200);
}
/** Section deck = FC_DECKS plus BANK questions not already represented (same text skipped). */
function getMergedFlashDeck(secId) {
  const fc = FC_DECKS[secId] || [];
  const out = fc.map((c) => ({ ...c }));
  const seen = new Set(out.map((c) => fcQuestionDedupeKey(c.t)));
  const bank = BANK[secId];
  if (bank && bank.length) {
    for (const row of bank) {
      const t = row.q;
      const k = fcQuestionDedupeKey(t);
      if (!k || seen.has(k)) continue;
      seen.add(k);
      let d = row.e || '';
      if (row.sc && String(row.sc).trim()) d += `<div class="fc-bank-sc">${row.sc}</div>`;
      out.push({ t, d, fromBank: true });
    }
  }
  return out;
}

const NOTES_M1=`MODULE 1 - MOBILE DEVICES: Battery=Li-ion/LiPo/use vendor chargers. RAM=integrated/soldered mobiles/SO-DIMM laptops(DDR3=204/DDR4=260/DDR5=262). HDD=mechanical/slower. SSD=faster/durable/lower power. SATA=6Gbps. mSATA=compact/SATA speeds. NVMe=PCIe/fastest. M.2: 2230/2242/2260/2280/22110. Wireless cards=mini PCIe/M.2. Wi-Fi antenna=follow original path. Biometrics=fingerprint/facial/voice. NFC=few cm/payments. iOS=.ipa/iPhones. iPadOS=.ipa/iPads. Android=.apk/open-source/Android15=Vanilla Ice Cream. EOL=support ends. Update limits=hardware incompatible. Airplane mode=disables ALL radios. Liquid damage=DO NOT power on. Swollen battery=safety risk. Adware=excessive ads. App spoofing=verify publisher. Root/jailbreak=bypasses security. MDM=enforce policies. Android WiFi=Settings>Connections>WiFi. Android BT=Settings>Connections>Bluetooth. Android NFC=Settings>Connections>NFC and contactless payment. iOS WiFi=Settings>WiFi. iOS BT=Settings>Bluetooth. iOS Cellular=Settings>Cellular.`;
const NOTES_M2=`MODULE 2 - NETWORKING: Ports: FTP=20/21, SSH=22, Telnet=23, SMTP=25, DNS=53, DHCP=67(server)/68(client), HTTP=80, POP3=110, IMAP=143, LDAP=389, HTTPS=443, SMB=445, RDP=3389. TCP=reliable/connection-oriented. UDP=fast/no guarantee. 802.11ax=WiFi6/9.6Gbps/all3bands. 802.11ac=WiFi5/5GHz/1.3Gbps. 802.11n=WiFi4/dual-band. 2.4GHz=3 non-overlapping channels(1/6/11). NFC=13.56MHz. Switch=MAC/L2. Router=IP/L3. PoE=802.3af=15.4W/802.3at=25.5W. MAC=48bit/OUI=first3bytes. ONT=fiber to electrical. DOCSIS=cable internet. VLAN=logical segments/managed switch. VPN: remote access=single user, site-to-site=networks. DNS: A=IPv4, AAAA=IPv6, CNAME=alias, MX=mail, SPF=authorised senders. DHCP DORA=Discover/Offer/Request/Ack. APIPA=169.254.x.x=DHCP failed. IPv4 classes: A=1-126/8, B=128-191/16, C=192-223/24. Private: 10.x, 172.16-31.x, 192.168.x. IPv6=128bit. SAN=Fibre Channel/block storage. PAN=Bluetooth/10m. ipconfig/release/renew/flushdns. tracert=route hops. pathping=hops+packet loss. nslookup=DNS. netstat -a=connections+ports. QoS=traffic prioritisation. Event Viewer=auth failures. Toner probe=trace cables. Cable tester=verify wiring. Crimper=RJ45 connectors. Loopback plug=test ports. Network tap=passive monitoring.`;
const NOTES_M3=`MODULE 3 - HARDWARE: Displays: IPS=best colour/wide angles. TN=fastest response/gaming. VA=best contrast/deep blacks. OLED=no backlight/true black/burn-in risk. Mini-LED=local dimming/HDR. Inverter=DC to AC for CCFL backlights/failing=dim screen. PPI=pixel density. Hz=refresh rate(60/120/144/240). sRGB=web. Adobe RGB=photo. DCI-P3=HDR/cinema. Cables: USB2=480Mbps/4pin. USB3=5Gbps/9pin. Thunderbolt3/4=40Gbps/USB-C/100W. HDMI=19pin/digital audio+video/4K8K. DisplayPort=20pin/best for high refresh. DVI-D=digital. DVI-A=analogue. DVI-I=both. VGA=15pin/analogue/legacy. Molex=4pin/legacy HDD power. Lightning=8pin/Apple. DB9=9pin/legacy serial/POS. Network cables: Cat5e=1Gbps/100m. Cat6=10Gbps/55m. Cat6a=10Gbps/100m. T568B=most common. STP=shielded/EMI. UTP=standard/LAN. Direct burial=waterproof/underground. Plenum=fire-retardant/ceilings. SMF=8-10µm/100km/long distance. MMF=50-62.5µm/550m/campus. RJ11=4-6pin/phone. RJ45=8pin/Ethernet. SC=push-pull fibre. LC=small form factor fibre. Storage: HDD=5400/7200/10000RPM. 3.5in=desktop. 2.5in=laptop. NVMe=PCIe/7000MB/s. SATA3=600MB/s. SAS=12Gbps/enterprise. M.2=2230/2242/2260/2280/22110. eSATA=6Gbps/external. Blu-ray=100GB/archival. RAID0=speed/no redundancy. RAID1=mirror/1 failure. RAID5=parity/1 failure. RAID6=double parity/2 failures. RAID10=stripe+mirror/best both. Motherboards: ATX=7slots. microATX=4slots. Mini-ITX=1slot. PCIe3=1GB/lane. PCIe4=2GB/lane. PCIe5=4GB/lane. UEFI=GPT/over2TB/Secure Boot. TPM=BitLocker/Windows11. AM4=Ryzen1-5000. AM5=Ryzen7000. LGA1700=Intel12/13gen. LGA1200=Intel10gen. Thermal paste=IPA to clean. Liquid cooling=radiator/pump/water block/coolant. PSU: 110-120V=North America. 220-240V=Europe. +3.3V=RAM/chipset. +5V=USB/legacy. +12V=CPU/GPU/HDD. Modular=removable cables. Redundant PSU=hot-swap/servers. 80 PLUS: Standard=80%. Bronze=82%. Silver=85%. Gold=87%. Platinum=90%. Titanium=94%. Printers: PCL=fast/HP. PostScript=precise/Adobe/graphics. SMB scan=network folder. Secured print=hold until auth. ADF=batch scan. Fuser=bonds toner to paper. Laser maint=toner+fuser+rollers+calibrate. Inkjet maint=cartridge+printhead clean. Thermal=heat-sensitive paper/no ink. Impact=ribbon+multipart forms. Troubleshooting: POST beeps=bad RAM/GPU/board. BSOD=bad RAM/drivers. Blank screen=reseat GPU. No power=check 24-pin+8-pin. Swollen cap=replace board+UPS. CMOS reset=CR2032 battery. Click HDD=backup NOW. S.M.A.R.T. fail=replace drive. TRIM=SSD performance. No boot=check BIOS boot order. Ghosted print=fuser. Lines on page=drum/clogged nozzle. Garbled=wrong driver. Stuck queue=restart Print Spooler. Projector dim=replace lamp. Screen flicker=cable+GPU driver. Burn-in=OLED/pixel refresh.`;
const NOTES_M4=`MODULE 4 - OPERATING SYSTEMS: OSes: Windows=most-used/NTFS/BitLocker/GPT. Linux=open-source/Ext4/.deb(Ubuntu)/.rpm(RHEL)/Kali=pentesting. macOS=Apple-only/APFS/HFS+/.dmg/.pkg/Homebrew. ChromeOS=Google/Chromebooks/PWA/.apk/cloud. EOL=Windows7=Jan2020. exFAT=cross-platform USB. File Systems: NTFS=Windows/permissions/encryption/journals. FAT32=max4GB file/32GB volume. exFAT=modern FAT/no4GB limit. APFS=macOS-modern/SSD/encryption. Ext4=Linux-default/journaled. XFS/Btrfs/ZFS=Linux-server. MBR=max2TB/4partitions/BIOS. GPT=128partitions/no-size-limit/UEFI. Boot Methods: USB=most-common. PXE=network-boot/WDS/no-media. ISO=virtual-mount. DVD=legacy. Win11 needs UEFI+Secure-Boot+TPM2.0. Install Types: In-place-upgrade=keeps-files/apps. Clean-install=erase-everything/best-performance. Side-by-side=transfer-data-to-new-PC/USMT. Wipe-and-load=wipe+reinstall+restore. Image-deploy=Sysprep+WDS/enterprise. Win11 reqs: 64-bit/1GHz/4GB/64GB/TPM2.0/UEFI/DX12. Win10 min: 1GHz/1GB(32)/2GB(64)/16GB(32)/20GB(64)/DX9. Editions: Home=no-BitLocker/no-domain/no-gpedit. Pro=BitLocker+domain+RDP+Hyper-V+Sandbox. Enterprise=LTSC+Autopilot+max6TB-RAM. Home-cant-join-domain. N=no-Media-Player. Upgrade: Home→Pro→Enterprise(ascending only). 32bit→64bit=clean-install. Task Manager: Processes=CPU/RAM/disk/network per app. Performance=real-time graphs. Startup-Apps=enable/disable/impact-rating. Services=start/stop/PID. Users=per-user resource. Details=advanced. MMC Snap-ins: eventvwr.msc=Event-Viewer/logs/crashes. diskmgmt.msc=Disk-Management/partitions/drive-letters. taskschd.msc=Task-Scheduler/automate. devmgmt.msc=Device-Manager/drivers. certmgr.msc=Certificate-Manager/SSL. lusrmgr.msc=Local-Users-Groups. perfmon.msc=Performance-Monitor/metrics. gpedit.msc=Group-Policy/Pro+Enterprise-only. OS Tools: msinfo32=system-info/CPU/RAM/BIOS. resmon=Resource-Monitor/real-time-per-process. msconfig=System-Config/startup/Safe-Mode. cleanmgr=Disk-Cleanup/temp-files. dfrgui=Defrag/HDDs-only(not-SSDs). regedit=Registry-Editor/advanced. CMD Commands: cd=navigate. dir=list. chkdsk/f=fix-errors. chkdsk/r=bad-sectors. format/fs:NTFS=format. diskpart=partitions. md=mkdir. rmdir/s=delete-with-contents. robocopy/mir=mirror. net-user=accounts. winver=version. gpupdate/force=policy-refresh. gpresult/r=show-policies. sfc/scannow=repair-system-files. Windows Settings: Control-Panel(legacy): Devices&Printers/Programs&Features/Network-Sharing-Center/Defender-Firewall/Device-Manager/Admin-Tools. Settings-App: System/Devices/Network/Personalization/Apps/Accounts/Time/Privacy/Update-Security/Gaming/Ease-of-Access. Power: Sleep=RAM-on/quick-resume. Hibernate=RAM-to-disk/fully-off. Hybrid=both. Fast-Startup=hibernate-kernel. Balanced/High-Performance/Power-Saver plans. File Explorer: Quick-Access/This-PC/Network. Paths: C:\\Users=profiles. C:\\Windows\\System32=core. %AppData%=roaming. %Temp%=temp-files. Show-extensions=critical-for-IT. Domains vs Workgroups: Workgroup=small/local-accounts/no-server. Domain=enterprise/Active-Directory/central-auth/GPO. Domain-join=Pro/Enterprise-only. macOS: FileVault=XTS-AES-128/full-disk. Keychain=password-manager. Spotlight=Cmd+Space/search. Mission-Control=all-windows-overview. Multiple-Desktops=separate-workspaces. Continuity=cross-device/Universal-Clipboard/Handoff/AirDrop. Finder=file-manager. Disk-Utility=First-Aid/repair. Force-Quit=Cmd+Option+Esc. Terminal=CLI. Time-Machine=backup. MDM=corporate-policy. Linux Config: /etc/passwd=users/UIDs/home-dirs. /etc/shadow=encrypted-passwords/policy. /etc/hosts=local-DNS/hostname-IP. /etc/fstab=auto-mount-on-boot. /etc/resolv.conf=DNS-servers. Components: Kernel=hardware-management. Shell=CLI/Bash/Zsh. systemd=boot+services(systemctl-restart). GRUB=bootloader. Root=superuser/su/sudo. Linux Commands: ls=list. pwd=current-dir. mv=move/rename. cp=copy. rm-rf=delete-all(careful!). chmod+x=add-execute. chown=change-owner. grep=search-text-in-files. find/name=locate-files. fsck=filesystem-check/run-unmounted. mount=attach-drives. su=switch-user. sudo=temporary-root. apt=Debian/Ubuntu-packages. dnf=RHEL/Fedora-packages. top=real-time-processes. ps-aux=list-all-processes. du-sh=directory-size. df-h=disk-free-space. nano=text-editor/Ctrl+O=save/Ctrl+X=exit. man=manual-pages. App Install: 32bit-runs-on-64bit(not-vice-versa). Dedicated-GPU=own-VRAM. Integrated=shares-RAM. VRAM=3D/CAD/gaming. Hardware-token=USB-dongle/MFA. Image-deployment=most-efficient-at-scale. Device-impact/Network-impact/Business-impact=plan-after-hours.`;

const NOTES_M5=`MODULE 5 - VIRTUALIZATION & CLOUD COMPUTING
5.1 VIRTUALIZATION CONCEPTS: Hypervisors create/manage VMs. Type 1 (bare-metal): runs directly on hardware, no host OS, examples VMware ESXi/Hyper-V/XenServer, best for data centres. Type 2 (hosted): runs on host OS as app, examples VMware Workstation/VirtualBox/Parallels, best for end users/dev. VM purposes: sandbox (test malicious software safely), test/dev (safe patching), application virtualisation, legacy software/OS support, cross-platform virtualisation. VM requirements: security (isolation/patching), network (virtual switches/adapters/VLANs), storage (disk space for images/snapshots via SAN/NAS). VDI: centralised server-hosted desktops accessed from any device, scalable, reduced hardware costs. Containers (Docker/Kubernetes): lightweight, share host OS kernel, faster startup, lower resource usage, portable - vs VMs which each run full OS.
5.2 CLOUD COMPUTING: Deployment models: Private (single org, single-tenant, high security/control), Public (multi-tenant, internet, scalable/cost-efficient), Hybrid (private+public combined), Community (shared by orgs with similar requirements e.g. healthcare compliance). Service models: IaaS (virtual servers/storage/networking e.g. AWS EC2/Azure VMs), PaaS (dev platform, build/deploy without managing infra e.g. AWS Elastic Beanstalk), SaaS (software over internet e.g. M365/Google Workspace). Characteristics: Elasticity (scale up/down dynamically), Multitenancy (multiple customers share infrastructure, isolated data), Metered utilisation (pay-as-you-go/chargeback), Ingress (data IN - usually free), Egress (data OUT - usually charged/more expensive), File synchronisation (real-time updates across devices), High availability (redundant infra, 99.99% uptime SLAs). Shared vs dedicated resources.
5.3 CLOUD PRODUCTIVITY TOOLS: Email: M365=Outlook, Google Workspace=Gmail. Storage/sync: M365=OneDrive, Google=Google Drive, Apple=iCloud. Selective sync: choose which folders sync locally. Spreadsheets: Excel Online/Google Sheets/Numbers. Word processing: Word Online/Google Docs/Pages. Presentations: PowerPoint Online/Google Slides/Keynote. Videoconferencing: Teams/Google Meet/Zoom/FaceTime. Instant messaging: Teams/Slack/iMessage. Identity management: M365=Entra ID (Azure AD), Google=Google Identity Management. Identity synchronisation: keeps credentials/permissions consistent across services. Licensing assignment: controls feature access by role/tier (Basic/Standard/Premium/Enterprise).`;
const NOTES_M6=`MODULE 6 - SECURITY (220-1202)
6.1 PHYSICAL SECURITY: Bollards=vehicle barriers. Access-control-vestibule=mantrap/one-person-at-a-time. Badge-reader=credential scan. Video-surveillance=deter+evidence. Alarm-systems=alert-authorities. Motion-sensors=trigger-alarms/lights. Door-locks=keys/codes/biometrics. Equipment-locks=cable-locks-for-laptops. Security-guards=patrol+respond. Fences=perimeter-barriers. Lighting=visibility+deter.
6.2 PHYSICAL ACCESS: Key-fob=RFID/NFC-token. Smart-card=embedded-chip/insert-or-tap. Mobile-digital-key=smartphone/Bluetooth/NFC. Keys=traditional-physical. Biometrics: Retina=infrared/blood-vessels/highest-security. Fingerprint=common/phones-laptops. Palm-print=vein-mapping/financial. FRT=AI-facial-analysis. Voice=vocal-characteristics. Magnetometers=detect-metal-weapons. Tailgating=following-through-door=prevented-by-vestibule.
6.3 LOGICAL SECURITY: Least-privilege=minimum-access-required. Zero-trust=never-trust-always-verify/continuous-verification. MFA=2+-factors/know-have-are. SSO=one-login-multiple-apps. PAM=privileged-account-management. JIT=temporary-elevated-access/auto-revoked. DLP=blocks-unauthorised-data-transfers. MDM=enforces-policy-on-mobile. ACLs=access-control-lists. SAML=federated-SSO-protocol. Directory-services=AD/LDAP.
6.4 WINDOWS FIREWALL: Inbound=incoming-traffic-control. Outbound=outgoing-traffic-control. Rules=allow/block-by-IP/app/port. Implicit-deny=blocked-unless-allowed. Explicit-deny=specific-block-rule. Allow-apps=exceptions-for-trusted-programs. Advanced-Security: fine-grained-rules/port-app-IP. Connection-security-rules=auth+encryption. IPSec=encrypts-authenticates-IP-traffic/VPN-tunnels. Monitoring=real-time-logging. Profiles: Domain=corporate. Private=home. Public=strictest.
6.5 USERS & GROUPS: Local-account=device-only/offline. Microsoft-account=cloud/sync. Standard=limited/no-install. Administrator=full-control. Guest=temporary/no-save. Power-user=legacy/XP-era. Run-as-Admin=elevate-specific-app. UAC=prompt-before-system-changes/prevents-silent-escalation.
6.6 NTFS & SHARE PERMISSIONS: NTFS: Full-Control>Modify>Read+Execute>Read>Write. Share: Full-Control/Change/Read. Most-restrictive-wins-when-both-apply. NTFS=local+network. Share=network-only. Inheritance=child-inherits-parent.
6.7 ACTIVE DIRECTORY: Domain=centralised-management. OUs=containers-for-GPO-targeting. GPOs=enforce-settings/software/restrictions. gpupdate/force=refresh-now. gpresult/r=show-applied-policies. Home-folders=personal-network-storage. Folder-redirection=Desktop/Docs-to-network. Login-scripts=auto-map-drives-on-login. Security-groups=control-resource-access.
6.8 DATA ENCRYPTION: BitLocker=full-disk-AES/requires-TPM2.0/internal-drives. BitLocker-To-Go=USB-external-drives/password-or-smartcard. EFS=file/folder-level/NTFS/tied-to-user-account. TPM=hardware-chip/stores-keys-securely. Plain-text=readable. Cipher-text=encrypted/unreadable-without-key.
6.9 WIRELESS SECURITY: WEP=broken/static-keys/don\'t-use. WPS=vulnerable-PIN-brute-force/disable. WPA2=AES/KRACK-vulnerable. WPA3=strongest/SAE/forward-secrecy. TKIP=weak/upgrade. AES=modern-strong. RADIUS=centralised-auth/enterprise-WiFi/unique-creds. TACACS+=Cisco/AAA/encrypts-all/network-devices. Kerberos=ticket-based/Windows-domain. MFA=multiple-factors.
6.10 MALWARE TYPES: Trojan=disguised-legit-software/backdoor. Rootkit=hides-in-kernel/conceals-malware. Virus=self-replicating/needs-host-file. Spyware=covert-monitoring/credentials. Ransomware=encrypts-files/demands-payment. Keylogger=records-keystrokes. Boot-sector-virus=infects-MBR/pre-OS. Cryptominer=hijacks-CPU-GPU. Stalkerware=device-surveillance. Fileless=RAM-only/no-disk-write/evades-AV. Adware=unwanted-ads/redirects. PUP=potentially-unwanted-programs.
6.11 MALWARE DETECTION: Signature-based=known-threats/needs-updates. Heuristic=behaviour-analysis/unknown-threats. Windows-Defender=built-in/real-time. Sandboxing=isolated-environment-test. Prevention: patch/update, AV, email-filter, least-privilege, firewall, disable-AutoRun, user-education.
6.12 SOCIAL ENGINEERING: Phishing=mass-email/impersonation. Spear-phishing=targeted-individual. Whaling=targets-executives/CEO/CFO. Vishing=phone-based. Smishing=SMS-based. Tailgating=follow-through-door. Shoulder-surfing=observe-screen/keyboard. Dumpster-diving=retrieve-documents. Baiting=infected-USB-in-carpark. Impersonation=fake-IT/vendor.
6.13 SECURITY THREATS: DoS=flood-single-source. DDoS=flood-multiple-botnet-sources. MITM=intercept-between-parties. SQL-injection=malicious-SQL-in-web-forms. XSS=inject-scripts-in-webpages. Brute-force=try-all-combinations. Dictionary=common-passwords-list. Rainbow-table=precomputed-hashes. Zero-day=unknown-unpatched-vulnerability. Insider-threat=malicious-employee.
6.14 VULNERABILITIES: Non-compliant=fails-security-policy. Unpatched=missing-updates/known-CVEs. Misconfigured=default-creds/open-ports. Unprotected=no-AV/no-firewall. EOL=no-more-patches-from-vendor. BYOD=personal-devices/no-MDM/data-risk.
6.15 MALWARE REMOVAL: 1-Investigate-verify-symptoms. 2-Quarantine-disconnect-network. 3-Disable-System-Restore. 4-Remediate=update-AV/scan-Safe-Mode-or-WinPE. 5-Schedule-scans-run-updates. 6-Enable-System-Restore. 7-Educate-user. Safe-Mode=prevents-malware-loading. Reimage=last-resort/ransomware.
6.16 WORKSTATION SECURITY: Password: length=12+/complexity=upper+lower+number+special/unique/expiry. BIOS-password=prevents-boot-from-external/BIOS-changes. Screensaver-lock. Log-off-when-unused. Restrict-permissions. Account-lockout=failed-attempts. Change-default-admin. Disable-AutoRun. Disable-unused-services. Data-at-rest=BitLocker/EFS. Data-in-transit=HTTPS/VPN/IPSec.
6.17 DATA DESTRUCTION: Shredding=physical-destruction/most-secure. Degaussing=magnetic-field/HDD-tape-only/NOT-SSDs. Drilling=damage-platters. Incineration=complete-destruction. Overwriting/wiping=random-data-multiple-passes. Format-alone=INSUFFICIENT/data-recoverable. Certificate-of-Destruction=compliance/HIPAA/PCI-DSS. NIST-800-88=media-sanitisation-guidelines.
6.18 SOHO SECURITY: Change-default-creds. IP/MAC-filtering. Firmware-updates. Content-filtering. Disable-UPnP. Screened-subnet=DMZ/isolates-public-servers. Secure-management=local-only/HTTPS/SSH. Wireless: change-SSID/disable-SSID-broadcast/WPA3-AES/guest-network-isolated. Firewall: disable-unused-ports/port-forwarding-for-VPN-RDP.
6.19 BROWSER SECURITY: Trusted-sources-only. Hash-verify-downloads. Auto-update-browsers. Extensions-from-official-stores-only. Pop-up-blocker. Clear-browsing-data. Private-mode=no-saved-history/cookies. Ad-blocker. Proxy=content-filter. Secure-DNS=DoH/DoT/encrypts-queries. HTTPS-certificate=padlock/TLS. Password-manager=encrypted-storage.
6.20 TROUBLESHOOTING: Network-issues=malware-altered-DNS/firewall. Scareware=fake-AV-alerts/buy-software. Missing/renamed-files=ransomware. OS-update-failure=rootkit. Browser: pop-ups=adware/hijacker. Certificate-warnings=expired-SSL/MITM. Redirection=browser-hijacker/DNS-change/hosts-file. Slow-browser=cryptojacking/CPU-mining.`;
const NOTES_M7=`MODULE 7 - OPERATIONAL PROCEDURES (220-1202): Ticketing systems use complete user/device/issue documentation, severity, escalation, and resolution notes. Asset management includes inventory lists, CMDB, tags, lifecycle, warranty/licensing, and assigned users. Document types include incident reports, SOPs, onboarding/off-boarding checklists, SLAs, and KB articles. Change management uses standard/normal/emergency change types, approvals, peer review, UAT, maintenance windows, change freeze, rollback plans, backup plans, and sandbox testing. Backup and recovery covers full/incremental/differential/synthetic backup, in-place vs alternate-location restore, GFS rotation, and 3-2-1 strategy with regular testing. Safety includes ESD controls, grounding, power-disconnect workflow, safe lifting, Class C extinguisher use, PPE, and OSHA-aligned handling. Environmental controls include SDS/MSDS review, safe battery/toner/e-waste disposal, humidity 40-60%, heat/dust/airflow management, surge protection, and UPS. Licensing/policy concepts include chain of custody, order of volatility (RAM first), forensic imaging, incident documentation, legal escalation, and compliance (PII/HIPAA/PCI DSS). Communication and professionalism emphasize plain language, active listening, discretion, timelines, documentation, and follow-up. Scripting basics include .bat .ps1 .sh .py use cases and script risk mitigation. Remote access includes RDP, SSH, VPN, VNC, RMM, WinRM with encryption/MFA controls. AI concepts include policy, plagiarism, bias, hallucinations, privacy, and private-vs-public model tradeoffs. Troubleshooting methodology follows six steps from identification through documentation.`;

const SECTION_FOCUS={'1.1':'Focus on 1.1: batteries (Li-ion/LiPo), RAM (SO-DIMM DDR3=204/DDR4=260/DDR5=262 pins), HDD vs SSD, storage interfaces (SATA/mSATA/NVMe), M.2 form factors, wireless cards, Wi-Fi antenna routing, biometrics, NFC, cameras, microphones.','1.2':'Focus on 1.2: USB/USB-C/Lightning (Apple), NFC, Bluetooth (2.4GHz/10m), tethering (WiFi/USB/Bluetooth), stylus, headsets, speakers, webcams.','1.3':'Focus on 1.3: iOS (.ipa), iPadOS (.ipa), Android (.apk/Vanilla Ice Cream), EOL, update limitations, compatibility (APFS vs NTFS).','1.4':'Focus on 1.4: poor battery, swollen battery (safety), broken screen, improper charging, poor connectivity (check airplane mode), liquid damage (no power), overheating, digitizer, damaged ports, malware, cursor drift, degraded performance.','1.5':'Focus on 1.5: app crashes (force quit first), app won\'t update (storage/WiFi/permissions), OS update failure (storage), random reboots, Bluetooth/WiFi/NFC connectivity, screen autorotate.','1.6':'Focus on 1.6: unofficial stores, developer mode, root/jailbreak, malicious apps, app spoofing. Symptoms: high traffic, adware, scareware, leaked data.','1.7':'Focus on 1.7: Android settings paths — WiFi: Settings>Connections>WiFi, BT: Settings>Connections>Bluetooth, NFC: Settings>Connections>NFC and contactless payment.','1.8':'Focus on 1.8: iOS settings paths — WiFi: Settings>WiFi, Bluetooth: Settings>Bluetooth, Cellular: Settings>Cellular.','2.1':'Focus on 2.1: endpoints, switches (MAC/L2), routers (IP/L3), fiber types (single/multi-mode), network models (centralized/client-server/P2P).','2.2':'Focus on 2.2: ALL port numbers (FTP=20/21, SSH=22, Telnet=23, SMTP=25, DNS=53, DHCP=67/68, HTTP=80, POP3=110, IMAP=143, LDAP=389, HTTPS=443, SMB=445, RDP=3389), TCP vs UDP.','2.3':'Focus on 2.3: 802.11 standards (a/b/g/n/ac/ax), 2.4/5/6 GHz, 3 non-overlapping 2.4GHz channels (1/6/11), Bluetooth (2.4GHz/10m), NFC (13.56MHz).','2.4':'Focus on 2.4: UTM, Proxy, Load Balancer, Syslog, SCADA (isolate), AAA/RADIUS, NTP.','2.5':'Focus on 2.5: DNS records (A/AAAA/CNAME/MX/TXT), SPF/DKIM/DMARC, DHCP DORA, APIPA (169.254.x.x).','2.6':'Focus on 2.6: Remote Access VPN vs Site-to-Site VPN, VLAN benefits, managed switch for VLANs.','2.7':'Focus on 2.7: PoE (802.3af=15.4W, 802.3at=25.5W), MAC address OUI, ONT (FTTH), DOCSIS, managed vs unmanaged switch.','2.8':'Focus on 2.8: IPv4 classes, private ranges, subnet masks, default gateway, IPv6 (128-bit), APIPA.','2.9':'Focus on 2.9: satellite (high latency), fiber (FTTH/no EMI), cable (DOCSIS), PAN/MAN/SAN/WAN differences.','2.10':'Focus on 2.10: Crimper, Cable Tester, Toner Probe, Punchdown, Loopback Plug, Network Tap, Wi-Fi Analyzer.','2.11':'Focus on 2.11: Domain vs Workgroup, UNC paths (\\\\server\\share), net use, firewall profiles (Public=restrictive).','2.12':'Focus on 2.12: ipconfig (/release /renew /flushdns), ping, tracert, pathping, nslookup, netstat -a.','2.13':'Focus on 2.13: jitter→pathping, auth failures→Event Viewer, limited connectivity→ipconfig+gateway, QoS for bandwidth.','3.1':'Focus on 3.1: IPS=colour accuracy, TN=fastest response, VA=best contrast, OLED=no backlight/true black/burn-in, Mini-LED=local dimming/HDR. Inverter=CCFL backlights. PPI=pixel density. Hz=refresh rate. sRGB/Adobe RGB/DCI-P3 colour gamuts. Touch screen digitizer.','3.2':'Focus on 3.2: USB2=480Mbps/4pin, USB3=5Gbps/9pin. Thunderbolt3/4=40Gbps/USB-C/100W. HDMI=19pin/audio+video. DisplayPort=20pin/high refresh. DVI-D/A/I. VGA=analogue/legacy. Adapters. Molex=4pin/legacy HDDs. Lightning=8pin/Apple. DB9=serial/POS.','3.3':'Focus on 3.3: Cat5e=1Gbps/100m, Cat6=10Gbps/55m, Cat6a=10Gbps/100m. T568A vs T568B. STP=shielded/EMI. UTP=standard. Direct burial=underground. Plenum=fire-retardant/ceilings. SMF=long distance (100km). MMF=short range (550m). RJ11/RJ45/F-type/SC/LC connectors.','3.4':'Focus on 3.4: HDD spindle speeds (5400/7200/10000 RPM). Form factors (3.5in/2.5in). NVMe=fastest/PCIe. SATA3=600MB/s. M.2=SATA or NVMe. SAS=enterprise/12Gbps. eSATA=external/6Gbps. Blu-ray=100GB/archival. RAID0/1/5/6/10 differences.','3.5':'Focus on 3.5: ATX=7slots, microATX=4slots, Mini-ITX=1slot. PCIe lanes (x1/x4/x8/x16). PCIe gen speeds. UEFI vs BIOS. TPM=BitLocker/Win11. Secure Boot. CPU sockets (AM4/AM5/LGA1700/LGA1200). Hyperthreading/SMT. Overclocking=unlocked CPU+liquid cooling. Thermal paste application. Liquid cooling components.','3.6':'Focus on 3.6: 110-120V=North America. 220-240V=Europe. +12V rail=CPUs/GPUs. +5V=USB/legacy. +3.3V=RAM/chipsets. Modular vs semi-modular vs non-modular. Redundant PSU=servers/hot-swap. Wattage guide. 80 PLUS: Standard/Bronze/Silver/Gold/Platinum/Titanium.','3.7':'Focus on 3.7: PCL=fast/HP. PostScript=precise/graphics. Ethernet=best for shared. USB=single PC. SMB scan=network folder. Email scan. Secured print=hold until auth. Badging authentication. ADF=batch. Flatbed=delicate docs. Firmware updates=security patches.','3.8':'Focus on 3.8: Laser=toner+fuser+rollers+calibrate. Inkjet=cartridge+printhead clean. Thermal=heat-sensitive paper (no ink). Impact=ribbon+multipart forms. Ghost image=fuser. Lines=drum/clogged nozzle. Faded laser=toner or worn fuser.','5.1':'Focus on 5.1: POST beeps=bad RAM/GPU/board. BSOD=bad RAM/drivers (MemTest86). Blank screen=reseat GPU. No power=check 24-pin+8-pin ATX connectors. Overheating=thermal paste+fans. Burning smell=POWER OFF immediately. Random shutdowns=CPU temp/PSU voltages/RAM. Swollen capacitors=replace board. CMOS battery=date/time resets.','5.2':'Focus on 5.2: Clicking HDD=backup IMMEDIATELY. Grinding=mechanical failure/replace. S.M.A.R.T. failure=replace drive soon. Bootable device not found=check BIOS boot order. RAID degraded=replace failed drive+rebuild (never reinitialise). TRIM=SSD performance. Disk Management=initialise new drives. CHKDSK=Windows. fsck=Linux.','5.3':'Focus on 5.3: No signal=check input source+cable. Dim projector=burnt-out lamp (2000-6000hrs). Colour tint=replace cable. OLED burn-in=pixel refresh+auto-dim. Projector shutdown=dust in vents/clean. Flickering=cable+GPU driver. Oversized image=disable overscan/adjust scaling. Distorted/artifacts=GPU driver+cooling.','5.6':'Focus on 5.6: Faded print=low toner/ink. Lines=dirty drum (laser)/clogged nozzle (inkjet). Garbled=wrong driver+restart spooler. Ghost image=replace fuser. Multiple misfeed=worn pickup rollers. Stuck queue=net stop spooler+del files+net start. Network printer down=static IP. Thermal=replace paper. Impact=replace ribbon.','4.1':'Focus on 4.1: Windows/Linux/macOS/Chrome OS differences, EOL (Win7=Jan2020), installer formats (.exe/.msi/.deb/.rpm/.dmg/.pkg), file systems (NTFS/FAT32/exFAT/APFS/ext4/XFS/ReFS).','4.2':'Focus on 4.2: clean install vs upgrade vs repair, image deployment (WDS/MDT), PXE boot, zero-touch (Autopilot), recovery partition, backup before upgrade, hardware/app compatibility checks.','4.3':'Focus on 4.3: MBR=BIOS/max 2TB/4 primary partitions vs GPT=UEFI/128+ partitions/required for Win11. Boot methods: USB (Rufus/Media Creation Tool), PXE, multiboot (GRUB), recovery partition, Internet-based (macOS Recovery).','4.4':'Focus on 4.4: Home (no BitLocker/domain/gpedit), Pro (BitLocker/domain join/gpedit/RDP), Enterprise (LTSC/Autopilot/6TB RAM). Win11 requires TPM 2.0+UEFI+Secure Boot+64-bit CPU+4GB RAM+64GB disk.','4.5':'Focus on 4.5: Win10 minimum (1GHz/1-2GB RAM/16-32GB disk/DX9). Win11 minimum (1GHz dual-core 64-bit/4GB RAM/64GB/TPM 2.0/UEFI Secure Boot/DirectX 12/WDDM 2.0).','4.6':'Focus on 4.6: Task Manager tabs — Processes (CPU/RAM/disk/network per process), Performance (real-time graphs/uptime), Startup/Startup Apps (impact rating/disable to speed boot), Services (start/stop services including Print Spooler), Users (per-user resource/log off).','4.7':'Focus on 4.7: MMC snap-ins — eventvwr.msc (Event Viewer/logs/crashes), diskmgmt.msc (Disk Management/partitions), taskschd.msc (Task Scheduler), devmgmt.msc (Device Manager/drivers), certmgr.msc (SSL certificates), lusrmgr.msc (local users/groups), perfmon.msc (performance logging), gpedit.msc (Group Policy/Pro+Enterprise only).','4.8':'Focus on 4.8: msinfo32 (hardware specs/pre-upgrade checks), resmon.exe (Resource Monitor/real-time per-process), msconfig (startup/Safe Mode), cleanmgr (Disk Cleanup/free space), dfrgui (Defrag/HDD only NOT SSDs), regedit (Registry Editor/advanced).','4.9':'Focus on 4.9: cd/dir (navigation), chkdsk /f /r (disk errors/bad sectors), format /fs:NTFS (format drive), diskpart (partition management), md/rmdir (directory management), robocopy /mir (mirror copy), net user (manage accounts), winver (Windows version), gpupdate /force (policy refresh), gpresult /r (show policies), sfc /scannow (repair system files).','4.10':'Focus on 4.10: Balanced/Power Saver/High Performance power plans, Sleep (RAM/quick resume) vs Hibernate (disk/no power), Fast Startup (hybrid kernel), USB Selective Suspend (can disconnect devices), Control Panel settings (Internet Options/Devices+Printers/Programs+Features/Network+Sharing/Defender Firewall).','4.11':'Focus on 4.11: Disable Hide Extensions (prevent malware disguise), Show Hidden Files (AppData/system folders), Domain (centralized/Active Directory/Group Policy/Pro+Enterprise required) vs Workgroup (peer-to-peer/no server/small office).','4.12':'Focus on 4.12: .dmg (drag-and-drop install) vs .pkg (automated MDM), system folders (/Applications//Users//Library//System), FileVault (XTS-AES-128/full disk), Time Machine (hourly snapshots/restore), Keychain (password manager), Continuity/Universal Clipboard, Force Quit (Cmd+Option+Esc), Spotlight (Cmd+Space), MDM (Apple Business Manager), RSR (emergency patches).','4.13':'Focus on 4.13: /etc/passwd (users/UIDs/home dirs/world-readable), /etc/shadow (encrypted passwords/root-only), /etc/hosts (local DNS/checked before DNS server), /etc/fstab (auto-mount on boot), /etc/resolv.conf (DNS servers). systemd/systemctl, GRUB bootloader, su vs sudo. chmod/chown/grep/find/apt/dnf/fsck/top/df.','4.14':'Focus on 4.14: 32-bit apps run on 64-bit OS (not vice versa), dedicated vs integrated GPU, VRAM requirements, hardware security tokens (USB dongles), OS compatibility check, distribution methods (physical/ISO/download/image deployment), device/network/operational/business impact.','4.15':'Focus on 4.15: File Explorer options — Hide Extensions (DISABLE for security), Show Hidden Files, General Options (startup view), View Options (icon size/sort).','4.16':'Focus on 4.16: Domain (centralized/Active Directory/Group Policy/single sign-on/enterprise) vs Workgroup (peer-to-peer/decentralized/small office). Domain join requires Pro/Enterprise.','4.17':'Focus on 4.17: .dmg/.pkg/.app install formats, /Applications//Users//Library//System folders, Apple ID vs MDM corporate restrictions, System Preferences (Displays/Networks/Printers/Privacy/Accessibility/Time Machine), best practices (backups/antivirus/RSR patches).','4.18':'Focus on 4.18: Spotlight (Cmd+Space), Mission Control, Multiple Desktops, Finder, Dock, Keychain, iCloud, Continuity/Handoff/Universal Clipboard, FileVault (XTS-AES-128), Disk Utility (First Aid), Terminal (CLI/Homebrew), Force Quit (Cmd+Option+Esc), Time Machine.','4.19':'Focus on 4.19: /etc/passwd//shadow//hosts//fstab//resolv.conf. systemd (systemctl restart), kernel, shell (Bash), GRUB bootloader, root account. su vs sudo.','4.20':'Focus on 4.20: ls/pwd/mv/cp/rm (file management), chmod/chown (permissions/ownership), grep (search text), find (locate files), su/sudo (elevation), apt (Debian/Ubuntu), dnf (Red Hat/Fedora), fsck (filesystem repair), mount (attach drives), top/ps/du/df (system monitoring), nano (text editor), man (manual).','4.21':'Focus on 4.21: 32-bit vs 64-bit requirements, dedicated vs integrated GPU/VRAM, external hardware tokens, storage requirements, OS compatibility, distribution methods (physical/ISO/download/image deployment), impact on device/network/operations/business.',
'3.9':'Focus on 3.9: POST/beep codes, CMOS battery/BIOS resets, reseating RAM/GPU, MemTest86, bulging caps, burning smell (power off first), thermal vs BSOD diagnosis.','3.10':'Focus on 3.10: boot order, RAID 5 degraded rebuild, clicking HDD/S.M.A.R.T., TRIM and free space on SSDs, Disk Management initialise/format.','3.11':'Focus on 3.11: monitor No Signal/input source, cable faults, projector lamp life and thermal shutdown, OLED burn-in prevention, flicker (driver+cable), overscan/scaling.','3.12':'Focus on 3.12: laser drum lines, bad drivers/garbled output, Print Spooler and queue reset, ghosting fuser, pickup rollers, thermal paper/head, static IP for networked printers.','5.1':'Focus on 5.1: Type 1 vs Type 2 hypervisors (examples, use cases), sandbox VMs (malware testing), VDI (centralised desktops), containers vs VMs (kernel sharing, Docker/Kubernetes), VM requirements (security/network/storage), cross-platform and application virtualisation.',
'5.2':'Focus on 5.2: cloud deployment models (private/public/hybrid/community), service models (IaaS/PaaS/SaaS with examples), elasticity, multitenancy, metered utilisation, ingress vs egress costs, file synchronisation, high availability.',
'5.3':'Focus on 5.3: cloud productivity tools by platform (M365 vs Google Workspace vs Apple), email/storage/spreadsheet/word processing/presentation/video/IM tools, selective sync, identity synchronisation (Entra ID), licensing assignment.',
'6.1':'Focus on 6.1: bollards, access control vestibule (mantrap), badge reader, video surveillance, alarm systems, motion sensors, door/equipment locks, security guards, fences, lighting.',
'6.2':'Focus on 6.2: key fobs, smart cards, mobile digital keys, biometrics (retina/fingerprint/palm/FRT/voice), magnetometers, tailgating prevention.',
'6.3':'Focus on 6.3: least privilege, Zero Trust model, MFA, SSO, PAM, JIT access, DLP, MDM, ACLs, directory services.',
'6.4':'Focus on 6.4: inbound vs outbound rules, implicit vs explicit deny, IPSec, firewall profiles (domain/private/public), connection security rules, monitoring/logging.',
'6.5':'Focus on 6.5: local vs Microsoft account, standard vs administrator vs guest, Run as Administrator, UAC purpose and function.',
'6.6':'Focus on 6.6: NTFS permission levels (Full Control/Modify/Read+Execute/Read/Write), share permissions, most restrictive wins, inheritance.',
'6.7':'Focus on 6.7: Active Directory, OUs, GPOs, gpupdate/gpresult, home folders, folder redirection, login scripts, security groups.',
'6.8':'Focus on 6.8: BitLocker (full disk/TPM2.0), BitLocker-To-Go (USB), EFS (file/folder level), TPM chip function, plain-text vs cipher-text.',
'6.9':'Focus on 6.9: WEP/WPS/WPA2/WPA3 differences, TKIP vs AES, RADIUS/TACACS+/Kerberos/MFA authentication methods.',
'6.10':'Focus on 6.10: Trojan/rootkit/virus/spyware/ransomware/keylogger/boot-sector/cryptominer/stalkerware/fileless/adware/PUP definitions and examples.',
'6.11':'Focus on 6.11: signature vs heuristic detection, sandboxing, Windows Defender, malware prevention best practices.',
'6.12':'Focus on 6.12: phishing/spear phishing/whaling/vishing/smishing, tailgating, shoulder surfing, dumpster diving, baiting, impersonation.',
'6.13':'Focus on 6.13: DoS/DDoS, MITM, SQL injection, XSS, brute force, dictionary, rainbow table, zero-day, insider threat.',
'6.14':'Focus on 6.14: non-compliant/unpatched/misconfigured/unprotected systems, EOL risks, BYOD vulnerabilities and MDM mitigation.',
'6.15':'Focus on 6.15: 7-step malware removal order, why disable System Restore first, Safe Mode scanning, reimage decision.',
'6.16':'Focus on 6.16: password policy (length/complexity/uniqueness/expiry), BIOS passwords, account lockout, disable AutoRun/unused services.',
'6.17':'Focus on 6.17: shredding/degaussing/drilling/wiping methods, degaussing ineffective on SSDs, Certificate of Destruction, NIST 800-88.',
'6.18':'Focus on 6.18: change default creds, disable UPnP, screened subnet/DMZ, guest network isolation, WPA3, port management.',
'6.19':'Focus on 6.19: trusted downloads, hash verification, pop-up blocker, private mode, ad blockers, secure DNS (DoH/DoT), HTTPS certificates.',
'6.20':'Focus on 6.20: scareware vs ransomware, browser hijacker, cryptojacking symptoms, certificate warnings as MITM indicator, rootkit blocking OS updates.',
'7.1':'Focus on 7.1: ticket data quality, issue severity, escalation flow, and complete progress notes.',
'7.2':'Focus on 7.2: inventory vs CMDB, asset tags, lifecycle, warranties/licenses, and assigned ownership.',
'7.3':'Focus on 7.3: incident report vs SOP, onboarding/off-boarding documentation, SLAs, and KB usage.',
'7.4':'Focus on 7.4: change categories, approvals, risk analysis, maintenance windows, rollback/backup strategy.',
'7.5':'Focus on 7.5: backup types, restore tradeoffs, GFS rotation, and 3-2-1 offsite requirements.',
'7.6':'Focus on 7.6: ESD controls, safe power handling, lifting/fire safety, and PPE/OSHA considerations.',
'7.7':'Focus on 7.7: environmental controls (40-60% humidity), safe disposal, and power event protection.',
'7.8':'Focus on 7.8: chain of custody, order of volatility (RAM first), forensic copy handling, licensing/compliance.',
'7.9':'Focus on 7.9: active listening, plain communication, professionalism, discretion, expectation setting, follow-up.',
'7.10':'Focus on 7.10: script file types by platform and automation use cases with script security risks.',
'7.11':'Focus on 7.11: secure remote-access method selection (RDP/SSH/VPN/VNC/WinRM/RMM) and MFA/encryption.',
'7.12':'Focus on 7.12: AI policy, bias vs hallucination, privacy and reliability safeguards.',
'7.13':'Focus on 7.13: six-step troubleshooting process and importance of final documentation.'};

// ═══════════════════════════════════════════════════════
// QUIZ STATE & LOGIC (unchanged from v1)
// ═══════════════════════════════════════════════════════
let quizState = {selModule:null,selSection:null,currentQ:0,totalQ:20,correct:0,wrong:0,answered:false,sessionSections:[],bankUsed:{},usedTopics:[],inProgress:false};

function selectModule(mod){document.querySelectorAll('.module-card').forEach(c=>c.classList.remove('selected'));document.querySelector(`[data-mod="${mod}"]`).classList.add('selected');quizState.selModule=mod;document.getElementById('mod-next-btn').disabled=false;}
function goToSections(){if(!quizState.selModule)return;buildSectionGrid();const t={mod1:'Module 1 — Mobile Devices',mod2:'Module 2 — Networking',mod3:'Module 3 — Hardware',mod4:'Module 4 — Operating Systems',mod5:'Module 5 — Virtualization & Cloud',mod6:'Module 6 — Security',mod7:'Module 7 — Operational Procedures',all:'All Modules'};document.getElementById('sec-screen-title').textContent=t[quizState.selModule]||'Choose a Section';const qSel=document.getElementById('quiz-question-count');if(qSel)qSel.value=String(quizState.totalQ||20);showQScreen('s-section');}
function buildSectionGrid(){const grid=document.getElementById('sections-grid');grid.innerHTML='';let secs=[];if(quizState.selModule==='all'){secs=[...MODULES.mod1.sections,...MODULES.mod2.sections,...MODULES.mod3.sections,...MODULES.mod4.sections,...MODULES.mod5.sections,...MODULES.mod6.sections,...MODULES.mod7.sections];}else if(MODULES[quizState.selModule]){secs=MODULES[quizState.selModule].sections;}
const allCard=document.createElement('div');allCard.className='sec-card all-sec';allCard.dataset.secid='all';const selMod=quizState.selModule;const allTagClass=selMod==='mod1'?'m1-t':selMod==='mod3'?'m3-t':selMod==='mod4'?'m4-t':'';allCard.innerHTML=`<span class="sec-tag ${allTagClass}">ALL</span><span class="sec-name">All Sections</span>`;allCard.onclick=()=>selectSection('all');grid.appendChild(allCard);
secs.forEach(s=>{const card=document.createElement('div');const isM1=s.mod==='mod1';const isM3=s.mod==='mod3';const isM4=s.mod==='mod4';const isM5=s.mod==='mod5';const isM6=s.mod==='mod6';const isM7=s.mod==='mod7';card.className=`sec-card${isM1?' m1-sec':isM3?' m3-sec':isM4?' m4-sec':isM5?' m5-sec':isM6?' m6-sec':isM7?' m7-sec':''}`;card.dataset.secid=s.id;card.innerHTML=`<span class="sec-tag ${isM1?'m1-t':isM3?'m3-t':isM4?'m4-t':isM5?'m5-t':isM6?'m6-t':isM7?'m7-t':''}">${s.id}</span><span class="sec-name">${s.label}</span>`;card.onclick=()=>selectSection(s.id);grid.appendChild(card);});}
function getQuizQuestionCount(){const el=document.getElementById('quiz-question-count');const n=el?parseInt(el.value,10):quizState.totalQ;return Number.isFinite(n)&&n>=5?n:20;}
function setQuizQuestionCount(val){const n=parseInt(val,10);if(Number.isFinite(n)&&n>=5)quizState.totalQ=n;}
function selectSection(id){document.querySelectorAll('.sec-card').forEach(c=>c.classList.remove('selected'));document.querySelector(`[data-secid="${id}"]`).classList.add('selected');quizState.selSection=id;document.getElementById('start-btn').disabled=false;}
function goBack(screenId){if(screenId==='s-module'){quizState.selModule=null;quizState.selSection=null;document.querySelectorAll('.module-card').forEach(c=>c.classList.remove('selected'));document.getElementById('mod-next-btn').disabled=true;updateModeIndicator();}showQScreen(screenId);}
/** Leave active quiz; return to module home. Progress is saved so you can resume from the banner (use Discard there to clear). */
function exitQuizToMenu(){if(quizState.inProgress)saveQuizProgress();quizState.inProgress=false;document.getElementById('score-display').style.display='none';goBack('s-module');renderQuizResumeBanner();renderQuizStats();}
function showQScreen(id){document.querySelectorAll('#quiz-pane .screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function getAllSections(){if(quizState.selModule==='all')return[...MODULES.mod1.sections.map(s=>s.id),...MODULES.mod2.sections.map(s=>s.id),...MODULES.mod3.sections.map(s=>s.id),...MODULES.mod4.sections.map(s=>s.id),...MODULES.mod5.sections.map(s=>s.id),...MODULES.mod6.sections.map(s=>s.id),...MODULES.mod7.sections.map(s=>s.id)];return MODULES[quizState.selModule].sections.map(s=>s.id);}
function getCurrentSection(){if(quizState.selSection==='all')return quizState.sessionSections[quizState.currentQ]||'2.1';return quizState.selSection;}
function startQuiz(){if(!quizState.selSection)return;setQuizQuestionCount(getQuizQuestionCount());quizState.currentQ=0;quizState.correct=0;quizState.wrong=0;quizState.answered=false;quizState.bankUsed={};quizState.usedTopics=[];quizState.inProgress=true;quizState._aiFallbackBannerShown=false;if(quizState.selSection==='all'){const all=getAllSections();quizState.sessionSections=[];for(let i=0;i<quizState.totalQ;i++)quizState.sessionSections.push(all[i%all.length]);for(let i=quizState.sessionSections.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[quizState.sessionSections[i],quizState.sessionSections[j]]=[quizState.sessionSections[j],quizState.sessionSections[i]];}}
document.getElementById('score-display').style.display='flex';updateScore();showQScreen('s-quiz');loadQuestion();}
function updateScore(){document.getElementById('sc-correct').textContent=quizState.correct;document.getElementById('sc-wrong').textContent=quizState.wrong;const t=quizState.correct+quizState.wrong;document.getElementById('sc-pct').textContent=t>0?Math.round((quizState.correct/t)*100)+'%':'—';}
function updateProgress(){const pct=(quizState.currentQ/quizState.totalQ)*100;document.getElementById('prog-fill').style.width=pct+'%';document.getElementById('prog-txt').textContent=`${quizState.currentQ} / ${quizState.totalQ}`;document.getElementById('q-counter').textContent=`Question ${quizState.currentQ+1} of ${quizState.totalQ}`;}
async function loadQuestion(){if(quizState.currentQ>=quizState.totalQ){showFinal();return;}quizState.answered=false;updateProgress();const sec=getCurrentSection();const allS=[...MODULES.mod1.sections,...MODULES.mod2.sections,...MODULES.mod3.sections,...MODULES.mod4.sections,...MODULES.mod5.sections,...MODULES.mod6.sections,...MODULES.mod7.sections];const secInfo=allS.find(s=>s.id===sec);const mod=secInfo&&secInfo.mod;const tag=document.getElementById('cur-sec-tag');tag.textContent=`${sec} — ${secInfo?secInfo.label:''}`;tag.className=`cur-sec-tag${mod==='mod1'?' m1':mod==='mod3'?' m3':mod==='mod4'?' m4':mod==='mod5'?' m5':mod==='mod6'?' m6':mod==='mod7'?' m7':''}`;const area=document.getElementById('q-area');const useAI=canUseLiveAI();const aiOnNoProxy=navigator.onLine&&isAIVarietyEnabled()&&!getProxyUrl();area.innerHTML=`<div class="load-card"><div class="spinner"></div><div class="load-txt">${useAI?'Generating question…':'Loading from question bank…'}</div><div class="load-sub">${useAI?'Using your AI proxy':aiOnNoProxy?'AI variety on — add proxy URL below':!navigator.onLine?'Offline — question bank':'Bank only (turn on AI + set proxy for live questions)'}</div></div>`;
let question=null,fromAI=false,aiErr='';if(useAI){try{question=await generateAIQuestion(sec);fromAI=!!question;}catch(e){aiErr=(e&&e.message)||String(e);console.warn('AI failed, using bank:',aiErr);}}
if(!question)question=getBankQuestion(sec);if(!question){area.innerHTML=`<div class="err-card"><div class="err-msg">Could not load question for section ${sec}.</div><button class="retry-btn" onclick="loadQuestion()">Retry</button></div>`;return;}renderQuestion(question,{aiBankFallback:useAI&&!fromAI,aiError:aiErr});}
function getBankQuestion(secId){const bank=BANK[secId];if(!bank||bank.length===0){const fb=Object.keys(BANK)[0];return getBankQuestion(fb);}if(!quizState.bankUsed[secId])quizState.bankUsed[secId]=[];const used=quizState.bankUsed[secId];const avail=bank.map((_,i)=>i).filter(i=>!used.includes(i));let idx;if(avail.length>0){idx=avail[Math.floor(Math.random()*avail.length)];}else{quizState.bankUsed[secId]=[];idx=Math.floor(Math.random()*bank.length);}quizState.bankUsed[secId].push(idx);const q=bank[idx];return{question:q.q,options:q.o,correct:q.c,explanation:q.e,scenario:q.sc||'',fromBank:true};}
async function generateAIQuestion(secId){const allS=[...MODULES.mod1.sections,...MODULES.mod2.sections,...MODULES.mod3.sections,...MODULES.mod4.sections,...MODULES.mod5.sections,...MODULES.mod6.sections,...MODULES.mod7.sections];const secInfo=allS.find(s=>s.id===secId);const mod=secInfo&&secInfo.mod;const notes=mod==='mod1'?NOTES_M1:mod==='mod3'?NOTES_M3:mod==='mod4'?NOTES_M4:mod==='mod5'?NOTES_M5:mod==='mod6'?NOTES_M6:mod==='mod7'?NOTES_M7:NOTES_M2;const focus=SECTION_FOCUS[secId]||'';const avoid=quizState.usedTopics.slice(-5).join(', ');const prompt=`You are a CompTIA A+ exam question writer for 220-1201/220-1202. Generate ONE authentic exam-style question.\n\nSTUDY NOTES:\n${notes}\n\nSECTION: ${focus}\n${avoid?`AVOID repeating these recent topics: ${avoid}`:''}\n\nREQUIREMENTS:\n- Scenario-based ("A technician...", "A user reports...")\n- 4 answer options (A/B/C/D), one correct, distractors plausible\n- CompTIA exam style\n\nReturn ONLY valid JSON, no markdown:\n{"scenario":"optional setup","question":"the question","options":["A. option","B. option","C. option","D. option"],"correct":0,"explanation":"full explanation","topic":"2-4 word topic"}`;const text=await completeViaProxy(prompt);const q=parseJSONFromModel(text);if(!q.question||!q.options||q.options.length!==4||q.correct===undefined)throw new Error('Invalid format');if(q.topic)quizState.usedTopics.push(q.topic);return q;}
function renderQuestion(q,opts){opts=opts||{};const area=document.getElementById('q-area');let html='';if(opts.aiBankFallback&&!quizState._aiFallbackBannerShown){quizState._aiFallbackBannerShown=true;const hint=(opts.aiError&&String(opts.aiError).slice(0,280))||'';const esc=h=>h.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');const errLine=hint?`<div class="ai-fallback-detail"><strong>Details:</strong> ${esc(hint)}</div>`:'';html+=`<div class="ai-fallback-banner" role="status"><div>Live AI did not return a usable question. Using built-in questions for this quiz.</div>${errLine}<div class="ai-fallback-hint">Check: Worker URL saved (click <strong>Save proxy settings</strong>), shared secret matches <code>PROXY_SECRET</code> if you use one, <code>wrangler secret put GROQ_API_KEY</code> on the worker, and browser DevTools → Console for errors.</div></div>`;}html+=`<div class="q-card"><div class="q-num-badge">Question ${quizState.currentQ+1} of ${quizState.totalQ}</div>`;if(q.scenario&&q.scenario.trim())html+=`<div class="q-scenario">${q.scenario}</div>`;html+=`<div class="q-text">${q.question}</div><div class="options">`;const letters=['A','B','C','D'];q.options.forEach((opt,i)=>{const txt=opt.replace(/^[A-D]\.\s*/,'');html+=`<button class="opt" onclick="answer(${i},${q.correct})" data-idx="${i}"><span class="opt-let">${letters[i]}</span><span>${txt}</span></button>`;});html+=`</div><button type="button" class="ask-tutor-btn" onclick="askAboutCurrentQuestion()">Ask about this question</button></div>`;area.innerHTML=html;area.dataset.q=JSON.stringify(q);}
function normalizeOptionText(opt){return String(opt||'').replace(/^[A-D]\.\s*/,'').trim();}
function normalizeTextForMatch(t){return String(t||'').toLowerCase().replace(/<[^>]+>/g,' ').replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim();}
function buildSafeExplanation(q,chosen,correct){
  const letters=['A','B','C','D'];
  const raw=String(q&&q.explanation||'').trim();
  const correctText=normalizeOptionText((q&&q.options&&q.options[correct])||'');
  const chosenText=normalizeOptionText((q&&q.options&&q.options[chosen])||'');
  if(!raw){
    return `<strong>Best answer: ${letters[correct]}.</strong> ${correctText}`;
  }
  const rawNorm=normalizeTextForMatch(raw);
  const correctNorm=normalizeTextForMatch(correctText);
  const chosenNorm=normalizeTextForMatch(chosenText);
  const mentionsWrongChosen=chosen!==correct&&chosenNorm&&rawNorm.includes(chosenNorm)&&(!correctNorm||!rawNorm.includes(correctNorm));
  const declared=raw.match(/\b(correct(?:\s+answer)?|answer)\s*[:\-]?\s*([A-D])\b/i);
  const declaresDifferent=declared&&declared[2]&&letters.indexOf(declared[2].toUpperCase())!==correct;
  if(mentionsWrongChosen||declaresDifferent){
    return `<strong>Best answer: ${letters[correct]}.</strong> ${correctText}<br><br>This option best matches the scenario and expected troubleshooting flow.`;
  }
  return raw;
}
function answer(chosen,correct){if(quizState.answered)return;quizState.answered=true;document.querySelectorAll('.opt').forEach((btn,i)=>{btn.disabled=true;if(i===correct)btn.classList.add('correct');else if(i===chosen)btn.classList.add('incorrect');else btn.classList.add('revealed');});const isCorrect=chosen===correct;if(isCorrect)quizState.correct++;else quizState.wrong++;updateScore();const area=document.getElementById('q-area');const q=JSON.parse(area.dataset.q);const letters=['A','B','C','D'];const safeExp=buildSafeExplanation(q,chosen,correct);const expDiv=document.createElement('div');expDiv.className='exp-card';expDiv.innerHTML=`<div class="exp-hdr"><span class="res-badge ${isCorrect?'c':'i'}">${isCorrect?'✓ Correct':'✗ Incorrect'}</span><span style="color:var(--muted);font-size:12px">${isCorrect?'Great work!':'Correct: '+letters[correct]}</span></div><div class="exp-txt">${safeExp}</div>`;area.appendChild(expDiv);const nextBtn=document.createElement('button');nextBtn.className='next-btn';nextBtn.textContent=quizState.currentQ+1>=quizState.totalQ?'VIEW RESULTS →':'NEXT QUESTION →';nextBtn.onclick=()=>{quizState.currentQ++;loadQuestion();};area.appendChild(nextBtn);}
function showFinal(){document.getElementById('score-display').style.display='none';quizState.inProgress=false;showQScreen('s-final');const pct=Math.round((quizState.correct/quizState.totalQ)*100);let grade,gradeClass,fb;if(pct>=90){grade='A';gradeClass='gA';fb='Exceptional! You have a thorough command of this material. You\'re exam-ready.';}else if(pct>=80){grade='B';gradeClass='gB';fb='Strong performance! Review sections you hesitated on and push toward 90%+ before exam day.';}else if(pct>=70){grade='C';gradeClass='gC';fb='Good foundation, but gaps remain. Target the sections you struggled with using focused section mode.';}else if(pct>=60){grade='D';gradeClass='gDF';fb='More revision needed. Go back through notes section by section using flashcard mode too.';}else{grade='F';gradeClass='gDF';fb='Don\'t give up — use the flashcard mode to drill key terms, then retry the quiz section by section.';}
document.getElementById('final-grade').textContent=grade;document.getElementById('final-grade').className='final-grade '+gradeClass;document.getElementById('final-pct').textContent=pct+'%';document.getElementById('f-correct').textContent=quizState.correct;document.getElementById('f-wrong').textContent=quizState.wrong;document.getElementById('f-total').textContent=quizState.totalQ;document.getElementById('final-fb').textContent=fb;}
function resetToMenu(){document.querySelectorAll('.sec-card').forEach(c=>c.classList.remove('selected'));quizState.selSection=null;document.getElementById('start-btn').disabled=true;document.getElementById('score-display').style.display='none';updateModeIndicator();showQScreen('s-module');}

// ═══════════════════════════════════════════════════════
// FLASHCARD STATE & LOGIC
// ═══════════════════════════════════════════════════════
let fcState = {
  selModule:null,
  selSection:null,
  deck:[],
  currentIdx:0,
  known:new Set(),
  learning:new Set(),
  flipped:false,
  reviewMode:false,
  checkpointsDone:new Set(),
  _checkpointReturn:null,
  _fullReviewReturn:null,
  autoNext:true,
  lastAction:null,
  streak:0,
  bestStreak:0,
  fontScale:1,
  _touchStartX:0,
  _suppressFlipOnce:false
};

function selectFCModule(mod){document.querySelectorAll('[data-fcmod]').forEach(c=>c.classList.remove('selected'));document.querySelector(`[data-fcmod="${mod}"]`).classList.add('selected');fcState.selModule=mod;document.getElementById('fc-mod-next-btn').disabled=false;}
function goToFCSections(){if(!fcState.selModule)return;buildFCSectionGrid();const t={mod1:'Module 1 — Mobile Devices',mod2:'Module 2 — Networking',mod3:'Module 3 — Hardware',mod4:'Module 4 — Operating Systems',mod5:'Module 5 — Virtualization & Cloud',mod6:'Module 6 — Security',mod7:'Module 7 — Operational Procedures',all:'All Modules'};document.getElementById('fc-sec-title').textContent=t[fcState.selModule]||'Choose a Deck';showFCScreen('fc-s-section');}
function buildFCSectionGrid(){const grid=document.getElementById('fc-sections-grid');grid.innerHTML='';let secs=[];if(fcState.selModule==='all'){secs=[...MODULES.mod1.sections,...MODULES.mod2.sections,...MODULES.mod3.sections,...MODULES.mod4.sections,...MODULES.mod5.sections,...MODULES.mod6.sections,...MODULES.mod7.sections];}else if(MODULES[fcState.selModule]){secs=MODULES[fcState.selModule].sections;}
const allCard=document.createElement('div');allCard.className='sec-card all-sec';allCard.dataset.fcsecid='all';const selMod=fcState.selModule;const allTagClass=selMod==='mod1'?'m1-t':selMod==='mod3'?'m3-t':selMod==='mod4'?'m4-t':'';let moduleAllCount=0;for(const sx of secs){moduleAllCount+=getMergedFlashDeck(sx.id).length;}allCard.innerHTML=`<span class="sec-tag ${allTagClass}">ALL</span><span class="sec-name">Full Deck — All Sections</span><span class="sec-count">${moduleAllCount} cards</span>`;allCard.onclick=()=>selectFCSection('all');grid.appendChild(allCard);
secs.forEach(s=>{const count=getMergedFlashDeck(s.id).length;const card=document.createElement('div');const isM1=s.mod==='mod1';const isM3=s.mod==='mod3';const isM4=s.mod==='mod4';const isM5=s.mod==='mod5';const isM6=s.mod==='mod6';const isM7=s.mod==='mod7';card.className=`sec-card${isM1?' m1-sec':isM3?' m3-sec':isM4?' m4-sec':isM5?' m5-sec':isM6?' m6-sec':isM7?' m7-sec':''}`;card.dataset.fcsecid=s.id;card.innerHTML=`<span class="sec-tag ${isM1?'m1-t':isM3?'m3-t':isM4?'m4-t':isM5?'m5-t':isM6?'m6-t':isM7?'m7-t':''}">${s.id}</span><span class="sec-name">${s.label}</span><span class="sec-count">${count} cards</span>`;card.onclick=()=>selectFCSection(s.id);grid.appendChild(card);});}
function selectFCSection(id){document.querySelectorAll('[data-fcsecid]').forEach(c=>c.classList.remove('selected'));document.querySelector(`[data-fcsecid="${id}"]`).classList.add('selected');fcState.selSection=id;document.getElementById('fc-start-btn').disabled=false;}
function goBackFC(screenId){if(screenId==='fc-s-module'){fcState.selModule=null;fcState.selSection=null;document.querySelectorAll('[data-fcmod]').forEach(c=>c.classList.remove('selected'));document.getElementById('fc-mod-next-btn').disabled=true;}showFCScreen(screenId);}
function showFCScreen(id){document.querySelectorAll('#fc-pane .screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function startFlashcards(){if(!fcState.selSection)return;let cards=[];if(fcState.selSection==='all'){let secs=[];if(fcState.selModule==='all')secs=[...MODULES.mod1.sections,...MODULES.mod2.sections,...MODULES.mod3.sections,...MODULES.mod4.sections,...MODULES.mod5.sections,...MODULES.mod6.sections,...MODULES.mod7.sections];else if(MODULES[fcState.selModule])secs=MODULES[fcState.selModule].sections;secs.forEach(s=>{getMergedFlashDeck(s.id).forEach(c=>cards.push({...c,sec:s.id,secLabel:s.label,mod:s.mod}));});}else{const secId=fcState.selSection;const allS=[...MODULES.mod1.sections,...MODULES.mod2.sections,...MODULES.mod3.sections,...MODULES.mod4.sections,...MODULES.mod5.sections,...MODULES.mod6.sections,...MODULES.mod7.sections];const secInfo=allS.find(s=>s.id===secId);getMergedFlashDeck(secId).forEach(c=>cards.push({...c,sec:secId,secLabel:secInfo?secInfo.label:'',mod:secInfo?secInfo.mod:'mod2'}));}
// Shuffle
for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]];}
fcState.deck=cards;fcState.currentIdx=0;fcState.known=new Set();fcState.learning=new Set();fcState.flipped=false;fcState.reviewMode=false;fcState.checkpointsDone=new Set();fcState._checkpointReturn=null;fcState._fullReviewReturn=null;fcState.streak=0;fcState.bestStreak=0;fcState.fontScale=1;document.documentElement.style.setProperty('--fc-scale','1');showFCScreen('fc-s-study');renderCard();}

function renderCard(){const card=fcState.deck[fcState.currentIdx];if(!card)return;const total=fcState.deck.length;const done=fcState.known.size+fcState.learning.size;const pct=Math.round((done/total)*100);document.getElementById('fc-prog-fill').style.width=pct+'%';document.getElementById('fc-prog-txt').textContent=pct+'%';document.getElementById('fc-card-num').textContent=`${fcState.currentIdx+1} / ${total}`;document.getElementById('fc-card-num2').textContent=`Card ${fcState.currentIdx+1} of ${total}`;document.getElementById('fc-known-count').textContent=fcState.known.size;document.getElementById('fc-learning-count').textContent=fcState.learning.size;const isM1=card.mod==='mod1';const isM3=card.mod==='mod3';const isM4=card.mod==='mod4';const isM5=card.mod==='mod5';const isM6=card.mod==='mod6';const isM7=card.mod==='mod7';const secLabel=`${card.sec} — ${card.secLabel}`;document.getElementById('fc-front-section').textContent=secLabel;document.getElementById('fc-back-section').textContent=secLabel;document.getElementById('fc-term').textContent=card.t;document.getElementById('fc-def').innerHTML=card.d;const frontFace=document.getElementById('fc-front');const backFace=document.getElementById('fc-back');const secTag=document.getElementById('fc-sec-tag');frontFace.className=`fc-face fc-front${isM1?' m1-card':isM3?' m3-card':isM4?' m4-card':isM5?' m5-card':isM6?' m6-card':isM7?' m7-card':''}`;backFace.className=`fc-face fc-back${isM1?' m1-card':isM3?' m3-card':isM4?' m4-card':isM5?' m5-card':isM6?' m6-card':isM7?' m7-card':''}`;if(isM1){secTag.style.borderColor='rgba(168,85,247,.3)';secTag.style.color='var(--purple)';secTag.style.background='rgba(168,85,247,.07)';}else if(isM3){secTag.style.borderColor='rgba(0,255,136,.3)';secTag.style.color='var(--green)';secTag.style.background='rgba(0,255,136,.07)';}else if(isM4){secTag.style.borderColor='rgba(255,140,0,.3)';secTag.style.color='#ff8c00';secTag.style.background='rgba(255,140,0,.07)';}else if(isM5){secTag.style.borderColor='rgba(0,200,150,.3)';secTag.style.color='#00c896';secTag.style.background='rgba(0,200,150,.07)';}else if(isM6){secTag.style.borderColor='rgba(239,68,68,.3)';secTag.style.color='#ef4444';secTag.style.background='rgba(239,68,68,.07)';}else if(isM7){secTag.style.borderColor='rgba(59,130,246,.3)';secTag.style.color='#3b82f6';secTag.style.background='rgba(59,130,246,.08)';}else{secTag.style.borderColor='rgba(255,187,0,.3)';secTag.style.color='var(--yellow)';secTag.style.background='rgba(255,187,0,.07)';}
secTag.textContent=`${card.sec} — ${card.secLabel}`;const modeEl=document.getElementById('fc-mode-chip');if(modeEl){let label='Learning deck';if(fcState.reviewMode&&fcState._checkpointReturn)label='Quick review';else if(fcState.reviewMode&&fcState._fullReviewReturn)label='Reviewing missed cards';modeEl.textContent=label;}const streakEl=document.getElementById('fc-streak-chip');if(streakEl){streakEl.textContent=fcState.streak>=3?`Streak: ${fcState.streak}`:'';}// Always reset to question side when rendering a card
// Compute full-session known/learning counts even during mini review decks
let fullKnown=fcState.known.size;let fullLearning=fcState.learning.size;
if(fcState.reviewMode&&fcState._fullReviewReturn){const ret=fcState._fullReviewReturn;const newlyKnown=fcState.known.size;fullKnown=ret.known.size+newlyKnown;fullLearning=Math.max(0,ret.learning.size-newlyKnown);}
else if(fcState.reviewMode&&fcState._checkpointReturn){const ret=fcState._checkpointReturn;const newlyKnown=fcState.known.size;fullKnown=ret.known.size+newlyKnown;fullLearning=Math.max(0,ret.learning.size-newlyKnown);}
document.getElementById('fc-known-count').textContent=fullKnown;document.getElementById('fc-learning-count').textContent=fullLearning;
fcState.flipped=false;document.getElementById('flip-card').classList.remove('flipped');const autoToggle=document.getElementById('fc-auto-next-toggle');if(autoToggle)autoToggle.checked=!!fcState.autoNext;
document.getElementById('fc-verdict').style.display='none';document.getElementById('verdict-hint').classList.remove('hidden');document.getElementById('verdict-hint').textContent='Flip the card to see the definition, then rate yourself';document.getElementById('fc-prev-btn').disabled=fcState.currentIdx===0;document.getElementById('fc-next-btn').disabled=fcState.currentIdx>=fcState.deck.length-1;}

function flipCard(){
  if(fcState._suppressFlipOnce){
    fcState._suppressFlipOnce=false;
    return;
  }
  fcState.flipped=!fcState.flipped;
  document.getElementById('flip-card').classList.toggle('flipped',fcState.flipped);
  if(fcState.flipped){
    document.getElementById('fc-verdict').style.display='grid';
    document.getElementById('verdict-hint').classList.add('hidden');
  }else{
    document.getElementById('fc-verdict').style.display='none';
    document.getElementById('verdict-hint').classList.remove('hidden');
  }
}

function showCheckpoint(pct,onContinue){const learningCount=fcState.learning.size;const icon=pct===100?'🏁':pct>=80?'🔥':pct>=60?'⚡':pct>=40?'💡':'✅';const msgs={20:'Keep going — you\'re building momentum!',40:'Nearly halfway! Good rhythm.',60:'Over halfway — you\'re doing great!',80:'Almost there — final stretch!',100:'You\'ve seen every card!'};const overlay=document.createElement('div');overlay.className='fc-checkpoint-overlay';overlay.id='fc-checkpoint-overlay';overlay.innerHTML=`<div class="fc-checkpoint-box"><div class="fc-checkpoint-icon">${icon}</div><div class="fc-checkpoint-pct">${pct}%</div><div class="fc-checkpoint-title">Checkpoint!</div><div class="fc-checkpoint-sub">${msgs[pct]||''}</div>${learningCount>0?`<div class="fc-checkpoint-learning">📚 ${learningCount} card${learningCount===1?'':'s'} still learning</div>`:'<div class="fc-checkpoint-learning" style="border-color:rgba(0,255,136,.3);color:var(--green);background:rgba(0,255,136,.08)">✓ All cards known so far!</div>'}<div class="fc-cp-btn-row">${learningCount>0?`<button class="fc-cp-review-btn" onclick="document.getElementById('fc-checkpoint-overlay').remove();reviewCheckpointCards()">↩ Quick Review (${learningCount})</button>`:''}  <button class="fc-cp-continue-btn" onclick="document.getElementById('fc-checkpoint-overlay').remove();${onContinue}">Continue →</button></div></div>`;document.body.appendChild(overlay);}
function reviewCheckpointCards(){
  // Build mini-deck from currently-learning cards, preserving their original deck indices
  const reviewPairs=[];
  fcState.learning.forEach(origIdx=>{reviewPairs.push({card:fcState.deck[origIdx],origIdx});});
  for(let i=reviewPairs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[reviewPairs[i],reviewPairs[j]]=[reviewPairs[j],reviewPairs[i]];}
  // Save everything needed to return to the main deck
  fcState._checkpointReturn={
    deck:fcState.deck,
    resumeIdx:fcState.currentIdx,  // we'll advance past this on return
    known:new Set(fcState.known),
    learning:new Set(fcState.learning),
    checkpoints:new Set(fcState.checkpointsDone),
    reviewPairs                     // so we know which origIdx each mini-card maps to
  };
  // Switch to mini-review deck
  fcState.deck=reviewPairs.map(p=>p.card);
  fcState.currentIdx=0;
  fcState.known=new Set();
  fcState.learning=new Set();
  fcState.flipped=false;
  fcState.reviewMode=true;
  fcState.checkpointsDone=new Set([20,40,60,80,100]); // suppress checkpoints during mini-review
  showFCScreen('fc-s-study');
  renderCard();
}
function markCard(verdict){const idx=fcState.currentIdx;let prev='none';if(fcState.known.has(idx))prev='known';else if(fcState.learning.has(idx))prev='learning';fcState.lastAction={idx,prev,verdict};if(verdict==='known'){fcState.known.add(idx);fcState.learning.delete(idx);fcState.streak=(fcState.streak||0)+1;if(fcState.streak>=(fcState.bestStreak||0))fcState.bestStreak=fcState.streak;}else{fcState.learning.add(idx);fcState.known.delete(idx);fcState.streak=0;}
// Auto-advance
const total=fcState.deck.length;const done=fcState.known.size+fcState.learning.size;const pct=Math.round((done/total)*100);const checkpointPcts=[20,40,60,80,100];const hit=checkpointPcts.find(p=>pct>=p&&!fcState.checkpointsDone.has(p));if(hit){fcState.checkpointsDone.add(hit);if(hit===100){showCheckpoint(100, fcState._checkpointReturn ? 'returnFromCheckpointReview()' : 'showFCComplete()');}else{showCheckpoint(hit,'fcNext()');return;}}
const isLast=fcState.currentIdx>=fcState.deck.length-1;
if(!fcState.autoNext){renderCard();return;}
if(isLast){
  if(fcState._checkpointReturn){returnFromCheckpointReview();}
  else if(fcState._fullReviewReturn){returnFromFullReview();}
  else{showFCComplete();}
  return;
}
fcNext();}

function fcNext(){
  if(fcState.currentIdx<fcState.deck.length-1){
    fcState.currentIdx++;
    renderCard();
  } else {
    // If we're in a checkpoint mini-review, return to main deck instead of showing complete screen
    if(fcState._checkpointReturn){
      returnFromCheckpointReview();
    } else if(fcState._fullReviewReturn){
      returnFromFullReview();
    } else {
      showFCComplete();
    }
  }
}

function returnFromCheckpointReview(){
  const ret=fcState._checkpointReturn;
  // Merge mini-review results: cards marked Known → remove from original learning set
  ret.reviewPairs.forEach((pair,miniIdx)=>{
    if(fcState.known.has(miniIdx)){
      // This card was previously "Still Learning" but is now known.
      // Promote it from learning → known in the full deck.
      ret.learning.delete(pair.origIdx);
      ret.known.add(pair.origIdx);
    } else if (fcState.learning.has(miniIdx)) {
      // Still learning after mini-review: keep it in the learning set.
      ret.learning.add(pair.origIdx);
      ret.known.delete(pair.origIdx);
    }
  });
  fcState._checkpointReturn=null;
  // Restore main deck state
  fcState.deck=ret.deck;
  fcState.currentIdx=Math.min(ret.resumeIdx+1, ret.deck.length-1);
  fcState.known=ret.known;
  fcState.learning=ret.learning;
  fcState.checkpointsDone=ret.checkpoints;
  fcState.flipped=false;
  fcState.reviewMode=false;
  showFCScreen('fc-s-study');
  renderCard();
}
function fcPrev(){if(fcState.currentIdx>0){fcState.currentIdx--;renderCard();}}

function showFCComplete(){
  showFCScreen('fc-s-complete');
  const mastered = fcState.known.size;
  const stillLearning = fcState.learning.size;
  const total = fcState.deck.length || 0;

  document.getElementById('fc-final-known').textContent = mastered;
  document.getElementById('fc-final-learning').textContent = stillLearning;
  document.getElementById('fc-final-total').textContent = total;

  const pct = total ? Math.round((mastered / total) * 100) : 0;
  let fb = `Mastered this session: ${mastered}. Still learning: ${stillLearning}. `;
  if (pct >= 90) fb += 'Outstanding! You know this material cold.';
  else if (pct >= 70) fb += 'Strong progress — focus remaining time on the "Still Learning" cards.';
  else if (pct >= 50) fb += 'Good start — use "Review Still Learning" to drill the tricky ones.';
  else fb += 'Keep going — another pass through this deck will really help.';
  document.getElementById('fc-final-fb').textContent = fb;

  // Per-section progress summary
  const sectionStats = {};
  fcState.deck.forEach((card, idx) => {
    const secId = card.sec || '—';
    if (!sectionStats[secId]) {
      sectionStats[secId] = { label: card.secLabel || secId, total: 0, known: 0 };
    }
    sectionStats[secId].total += 1;
    if (fcState.known.has(idx)) {
      sectionStats[secId].known += 1;
    }
  });
  const secSummaryEl = document.getElementById('fc-section-summary');
  if (secSummaryEl) {
    const rows = Object.keys(sectionStats).sort().map((secId) => {
      const s = sectionStats[secId];
      const secPct = s.total ? Math.round((s.known / s.total) * 100) : 0;
      return `<div style="font-size:12px;color:var(--muted);margin-bottom:4px;">
        <strong>${secId}</strong> — ${s.label}: ${secPct}% mastered (${s.known}/${s.total})
      </div>`;
    }).join('');
    secSummaryEl.innerHTML = rows || '';
  }

  const reviewBtn = document.getElementById('fc-review-btn');
  if (fcState.learning.size === 0) {
    reviewBtn.style.display = 'none';
  } else {
    reviewBtn.style.display = 'inline-block';
    reviewBtn.textContent = `Review Still Learning (${fcState.learning.size}) ↩`;
  }
}

function reviewLearning(){// Rebuild deck from learning set only (end-of-deck full review)
const reviewPairs=[];fcState.learning.forEach(idx=>{reviewPairs.push({card:fcState.deck[idx],origIdx:idx});});for(let i=reviewPairs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[reviewPairs[i],reviewPairs[j]]=[reviewPairs[j],reviewPairs[i]];}
fcState._fullReviewReturn={deck:fcState.deck,known:new Set(fcState.known),learning:new Set(fcState.learning),checkpoints:new Set(fcState.checkpointsDone),reviewPairs};
fcState.deck=reviewPairs.map(p=>p.card);fcState.currentIdx=0;fcState.known=new Set();fcState.learning=new Set();fcState.flipped=false;fcState.reviewMode=true;fcState.checkpointsDone=new Set([20,40,60,80,100]);showFCScreen('fc-s-study');renderCard();}

function returnFromFullReview(){
  const ret=fcState._fullReviewReturn;
  if(!ret)return;
  ret.reviewPairs.forEach((pair,miniIdx)=>{
    if(fcState.known.has(miniIdx)){
      ret.learning.delete(pair.origIdx);
      ret.known.add(pair.origIdx);
    } else if(fcState.learning.has(miniIdx)) {
      ret.learning.add(pair.origIdx);
      ret.known.delete(pair.origIdx);
    }
  });
  fcState._fullReviewReturn=null;
  fcState._checkpointReturn=null;
  fcState.deck=ret.deck;
  fcState.currentIdx=Math.min(fcState.currentIdx, Math.max(0, ret.deck.length-1));
  fcState.known=ret.known;
  fcState.learning=ret.learning;
  fcState.checkpointsDone=ret.checkpoints;
  fcState.flipped=false;
  fcState.reviewMode=false;
  showFCComplete();
}

function undoLastFlashcard(){
  const a=fcState.lastAction;
  if(!a)return;
  const idx=a.idx;
  fcState.known.delete(idx);
  fcState.learning.delete(idx);
  if(a.prev==='known'){fcState.known.add(idx);}
  else if(a.prev==='learning'){fcState.learning.add(idx);}
  fcState.lastAction=null;
  renderCard();
}

function adjustFlashcardFont(delta){
  const next=(fcState.fontScale||1)+delta;
  const clamped=Math.max(0.8,Math.min(1.4,next));
  fcState.fontScale=clamped;
  document.documentElement.style.setProperty('--fc-scale',String(clamped));
}

function handleFlashcardKey(e){
  const fcStudy=document.getElementById('fc-s-study');
  if(!fcStudy||!fcStudy.classList.contains('active'))return;
  const tag=(e.target&&e.target.tagName)||'';
  if(/input|textarea|select/i.test(tag))return;
  if(e.key===' '||e.key==='Spacebar'||e.key==='Enter'){
    e.preventDefault();
    flipCard();
  }else if(e.key==='ArrowRight'){
    e.preventDefault();
    fcNext();
  }else if(e.key==='ArrowLeft'){
    e.preventDefault();
    fcPrev();
  }
}

function wireFlashcardGesturesAndKeys(){
  window.addEventListener('keydown',handleFlashcardKey);
  const cont=document.getElementById('flip-container');
  if(!cont)return;
  cont.addEventListener('touchstart',function(e){
    if(!e.touches||!e.touches.length)return;
    fcState._touchStartX=e.touches[0].clientX;
  },{passive:true});
  cont.addEventListener('touchend',function(e){
    if(!e.changedTouches||!e.changedTouches.length)return;
    const endX=e.changedTouches[0].clientX;
    const dx=endX-(fcState._touchStartX||0);
    if(Math.abs(dx)<40)return;
    fcState._suppressFlipOnce=true;
    if(dx<0)fcNext();else fcPrev();
  },{passive:true});
}

function resetFCToMenu(){document.querySelectorAll('[data-fcsecid]').forEach(c=>c.classList.remove('selected'));fcState.selSection=null;document.getElementById('fc-start-btn').disabled=true;showFCScreen('fc-s-module');}

// ═══════════════════════════════════════════════════════
// MODE INDICATOR
// ═══════════════════════════════════════════════════════
function updateModeIndicator(){
  const el=document.getElementById('mode-indicator');
  if(!el)return;
  const online=navigator.onLine;
  const ai=isAIVarietyEnabled();
  const proxy=getProxyUrl();
  let cls='offline',msg='📚 Question bank only — AI variety is off (default)';
  if(online&&ai&&proxy){cls='online';msg='🤖 Live AI — proxy URL set; quizzes & exam use Groq via your worker';}
  else if(online&&ai&&!proxy){msg='⚠️ AI variety on — paste your Cloudflare worker URL below to enable live questions';}
  else if(online&&!ai){msg='📚 Online — question bank (enable AI + proxy for live questions)';}
  else{msg='📦 Offline — question bank';}
  el.innerHTML=`<div class="mode-badge ${cls}"><div class="dot"></div>${msg}</div>`;
}
updateModeIndicator();
window.addEventListener('online',()=>{updateModeIndicator();});
window.addEventListener('offline',()=>{updateModeIndicator();});

// ═══════════════════════════════════════════════════════
// SAVE FLASH INDICATOR
// ═══════════════════════════════════════════════════════
let saveTimer=null;
function flashSave(){
  const el=document.getElementById('save-flash');
  el.classList.add('show');
  clearTimeout(saveTimer);
  saveTimer=setTimeout(()=>el.classList.remove('show'),1800);
}

// ═══════════════════════════════════════════════════════
// STATS: load/save/display
// ═══════════════════════════════════════════════════════
function loadStats(){
  try{return JSON.parse(localStorage.getItem('comptia_stats')||'null')||{quizHistory:[],totalQuizzes:0,bestScore:0,fcKnownTotal:0,fcSessionsTotal:0};}
  catch(e){return{quizHistory:[],totalQuizzes:0,bestScore:0,fcKnownTotal:0,fcSessionsTotal:0};}
}
function saveStats(s){try{localStorage.setItem('comptia_stats',JSON.stringify(s));}catch(e){}}

const LS_WRONG_FOCUS = 'comptia_quiz_wrong_focus';
function loadWrongFocus() {
  try {
    return JSON.parse(localStorage.getItem(LS_WRONG_FOCUS) || '{}') || {};
  } catch (_) {
    return {};
  }
}
function saveWrongFocus(obj) {
  try {
    localStorage.setItem(LS_WRONG_FOCUS, JSON.stringify(obj));
  } catch (_) {}
}
function getQuizSectionMeta(secId) {
  const allS = [...MODULES.mod1.sections, ...MODULES.mod2.sections, ...MODULES.mod3.sections, ...MODULES.mod4.sections, ...MODULES.mod5.sections, ...MODULES.mod6.sections, ...MODULES.mod7.sections];
  return allS.find((s) => s.id === secId) || { id: secId, label: 'Section', mod: 'mod2' };
}
function recordQuizWrong(secId, q) {
  const data = loadWrongFocus();
  if (!data[secId]) data[secId] = { wrong: 0, hint: '', topics: [] };
  data[secId].wrong++;
  data[secId].lastWrongAt = Date.now();
  const line = q && q.question ? String(q.question).replace(/<[^>]+>/g, '').trim().slice(0, 120) : '';
  if (line) data[secId].hint = line;
  const topic = q && q.topic ? String(q.topic).trim() : '';
  if (topic) {
    if (!data[secId].topics) data[secId].topics = [];
    if (!data[secId].topics.includes(topic) && data[secId].topics.length < 6) data[secId].topics.push(topic);
  }
  saveWrongFocus(data);
}
function clearWrongFocus() {
  try {
    localStorage.removeItem(LS_WRONG_FOCUS);
  } catch (_) {}
  renderQuizFocusPanel();
}
function escFocusHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function formatFocusRelative(ts) {
  if (ts == null || typeof ts !== 'number' || !isFinite(ts)) return '';
  const sec = Math.floor((Date.now() - ts) / 1000);
  if (sec < 45) return 'just now';
  const m = Math.floor(sec / 60);
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60);
  if (h < 48) return h + 'h ago';
  const d = Math.floor(h / 24);
  return d + 'd ago';
}
function getSectionFocusBlurb(secId) {
  const raw = SECTION_FOCUS[secId];
  if (!raw) return '';
  let t = String(raw).replace(/^Focus on [\d.]+\s*:\s*/i, '').trim();
  if (t.length > 120) t = t.slice(0, 117) + '\u2026';
  return t;
}
function focusMaybeLeaveQuizInProgress() {
  if (!quizState.inProgress) return true;
  return confirm('Leave your in-progress quiz? You can resume later from the banner above.');
}
function focusOpenSectionQuiz(secId) {
  if (!focusMaybeLeaveQuizInProgress()) return;
  if (quizState.inProgress) exitQuizToMenu();
  const meta = getQuizSectionMeta(secId);
  switchTab('quiz');
  showQScreen('s-module');
  selectModule(meta.mod);
  goToSections();
  selectSection(secId);
  renderQuizResumeBanner();
  const secScreen = document.getElementById('s-section');
  if (secScreen) secScreen.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function focusOpenSectionFlashcards(secId) {
  if (!focusMaybeLeaveQuizInProgress()) return;
  if (quizState.inProgress) exitQuizToMenu();
  const meta = getQuizSectionMeta(secId);
  switchTab('fc');
  showFCScreen('fc-s-module');
  selectFCModule(meta.mod);
  goToFCSections();
  selectFCSection(secId);
  renderQuizResumeBanner();
  const fcSec = document.getElementById('fc-s-section');
  if (fcSec) fcSec.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function renderQuizFocusRowHtml(id, data) {
  const meta = getQuizSectionMeta(id);
  const d = data[id];
  const modTag = meta.mod === 'mod1' ? 'm1' : meta.mod === 'mod3' ? 'm3' : meta.mod === 'mod4' ? 'm4' : meta.mod === 'mod5' ? 'm5' : meta.mod === 'mod6' ? 'm6' : '';
  const studyBlurb = getSectionFocusBlurb(id);
  const studyBlock = studyBlurb
    ? `<div class="focus-study">${escFocusHtml(studyBlurb)}</div>`
    : '';
  const topTopics = (d.topics || []).slice(0, 2);
  const topics = topTopics.length ? `<div class="focus-topics">Topics: ${topTopics.map((t) => `<span class="focus-topic-tag">${escFocusHtml(t)}</span>`).join('')}</div>` : '';
  const hint = d.hint && !studyBlurb ? `<div class="focus-hint">Last miss: “${escFocusHtml(d.hint)}…”</div>` : '';
  const rel = formatFocusRelative(d.lastWrongAt);
  const recency = rel ? `<span class="focus-recency" title="Last wrong answer">${escFocusHtml(rel)}</span>` : '';
  const tip = studyBlurb
    ? ''
    : `<div class="focus-tip">Re-run a <strong>section quiz</strong> on ${id} or open <strong>Flashcards</strong> for the same section.</div>`;
  const actions = `<div class="focus-row-actions"><button type="button" class="focus-short-btn" onclick="focusOpenSectionQuiz('${id}')">Section quiz</button><button type="button" class="focus-short-btn focus-short-btn-fc" onclick="focusOpenSectionFlashcards('${id}')">Flashcards</button></div>`;
  return `<div class="focus-row${modTag ? ' focus-row-' + modTag : ''}">
    <div class="focus-row-head"><span class="focus-sec-id">${id}</span><span class="focus-sec-name">${escFocusHtml(meta.label)}</span><span class="focus-wrong-count">${d.wrong}×</span>${recency}</div>
    ${tip}${studyBlock}${topics}${hint}${actions}
  </div>`;
}
function renderQuizFocusPanel() {
  const el = document.getElementById('quiz-focus-panel');
  if (!el) return;
  const data = loadWrongFocus();
  const ids = Object.keys(data).filter((id) => data[id] && data[id].wrong > 0);
  if (ids.length === 0) {
    el.innerHTML = `<div class="focus-panel focus-panel-empty"><p>Missed quiz questions are tracked by <strong>section</strong>. After you get one wrong, this list shows what to revisit.</p><button type="button" class="focus-empty-link" onclick="var g=document.getElementById('quiz-module-grid');if(g)g.scrollIntoView({behavior:'smooth',block:'start'});">Choose a module below</button></div>`;
    return;
  }
  ids.sort((a, b) => (data[b].wrong || 0) - (data[a].wrong || 0));
  const MAX_FOCUS_ROWS = 12;
  const FOCUS_VISIBLE = 5;
  const capped = ids.slice(0, MAX_FOCUS_ROWS);
  const visibleIds = capped.slice(0, FOCUS_VISIBLE);
  const hiddenIds = capped.slice(FOCUS_VISIBLE);
  const visibleRows = visibleIds.map((id) => renderQuizFocusRowHtml(id, data)).join('');
  const moreBlock =
    hiddenIds.length > 0
      ? `<details class="focus-more-wrap"><summary class="focus-more-sum">Show ${hiddenIds.length} more</summary><div class="focus-more-inner">${hiddenIds.map((id) => renderQuizFocusRowHtml(id, data)).join('')}</div></details>`
      : '';
  el.innerHTML = `<div class="focus-panel">
    <div class="focus-panel-title">Focus on these areas <button type="button" class="focus-clear-btn" onclick="clearWrongFocus()">Clear list</button></div>
    <div class="focus-panel-sub">Built from wrong answers in Quiz mode (not mock exam).</div>
    <div class="focus-rows">${visibleRows}${moreBlock}</div>
  </div>`;
}

function addQuizResult(correct,total,sectionLabel){
  const s=loadStats();
  const pct=Math.round((correct/total)*100);
  const dateStr=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short'});
  s.quizHistory.unshift({pct,label:sectionLabel,date:dateStr,correct,total});
  if(s.quizHistory.length>5)s.quizHistory=s.quizHistory.slice(0,5);
  s.totalQuizzes=(s.totalQuizzes||0)+1;
  if(pct>s.bestScore)s.bestScore=pct;
  saveStats(s);
}
function addFCResult(known,total){
  const s=loadStats();
  s.fcKnownTotal=(s.fcKnownTotal||0)+known;
  s.fcSessionsTotal=(s.fcSessionsTotal||0)+1;
  saveStats(s);
}

function renderQuizStats(){
  const el=document.getElementById('quiz-stats-panel');
  if(!el)return;
  const s=loadStats();
  if(s.totalQuizzes===0){el.innerHTML='';}
  else{
    const avgPct=s.quizHistory.length?Math.round(s.quizHistory.reduce((a,r)=>a+r.pct,0)/s.quizHistory.length):0;
    let histHTML=s.quizHistory.map(r=>{
      const col=r.pct>=80?'sg':r.pct>=60?'sy':'';
      return `<div class="hist-row"><span class="hist-sec">${r.label}</span><span class="hist-score stat-val ${col}">${r.pct}%</span><span class="hist-date">${r.date}</span></div>`;
    }).join('');
    el.innerHTML=`<div class="stats-panel">
    <div class="stats-title">Your Quiz Stats <button class="clear-stats-btn" onclick="clearAllStats()">✕ Reset all</button></div>
    <div class="stats-grid">
      <div class="stat-box"><div class="stat-val sg">${s.totalQuizzes}</div><div class="stat-lbl">Quizzes</div></div>
      <div class="stat-box"><div class="stat-val sp">${s.bestScore}%</div><div class="stat-lbl">Best Score</div></div>
      <div class="stat-box"><div class="stat-val">${avgPct}%</div><div class="stat-lbl">Average</div></div>
      <div class="stat-box"><div class="stat-val sy">${s.fcSessionsTotal||0}</div><div class="stat-lbl">FC Sessions</div></div>
    </div>
    ${histHTML?`<div class="quiz-history">${histHTML}</div>`:''}
  </div>`;
  }
  renderQuizFocusPanel();
}
function renderFCStats(){
  const el=document.getElementById('fc-stats-panel');
  if(!el)return;
  const s=loadStats();
  if(s.fcSessionsTotal===0){el.innerHTML='';return;}
  el.innerHTML=`<div class="stats-panel">
    <div class="stats-title">Your Flashcard Stats <button class="clear-stats-btn" onclick="clearAllStats()">✕ Reset all</button></div>
    <div class="stats-grid">
      <div class="stat-box"><div class="stat-val sy">${s.fcSessionsTotal}</div><div class="stat-lbl">Sessions</div></div>
      <div class="stat-box"><div class="stat-val sg">${s.fcKnownTotal}</div><div class="stat-lbl">Cards Known</div></div>
      <div class="stat-box"><div class="stat-val sp">${s.totalQuizzes||0}</div><div class="stat-lbl">Quizzes Done</div></div>
      <div class="stat-box"><div class="stat-val">${s.bestScore||0}%</div><div class="stat-lbl">Best Quiz</div></div>
    </div>
  </div>`;
}
function clearAllStats(){
  if(!confirm('Reset all your saved stats and progress? This cannot be undone.'))return;
  localStorage.removeItem('comptia_stats');
  localStorage.removeItem('comptia_quiz_save');
  localStorage.removeItem('comptia_fc_save');
  localStorage.removeItem(LS_WRONG_FOCUS);
  renderQuizStats();
  renderFCStats();
  const qr=document.getElementById('quiz-resume-banner');
  if(qr)qr.innerHTML='';
  const fr=document.getElementById('fc-resume-banner');
  if(fr)fr.innerHTML='';
  alert('All progress cleared.');
}

// ═══════════════════════════════════════════════════════
// QUIZ SAVE / LOAD
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
// MOCK EXAM
// ═══════════════════════════════════════════════════════

const EXAM_DOMAINS = {
  core1: [
    {id:'mobile',   label:'Mobile Devices',           weight:15, modules:['mod1'], sections:['1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8']},
    {id:'network',  label:'Networking',                weight:20, modules:['mod2'], sections:['2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8','2.9','2.10','2.11','2.12','2.13']},
    {id:'hardware', label:'Hardware',                  weight:25, modules:['mod3'], sections:['3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8']},
    {id:'virt',     label:'Virtualization & Cloud',    weight:11, modules:['mod5'], sections:['5.1','5.2','5.3']},
    {id:'trouble1', label:'Hardware & Network Troubleshooting', weight:29, modules:['mod3'], sections:['3.9','3.10','3.11','3.12']},
  ],
  core2: [
    {id:'os',       label:'Operating Systems',         weight:27, modules:['mod4'], sections:['4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8','4.9','4.10','4.11','4.12','4.13','4.14','4.15','4.16','4.17','4.18','4.19','4.20','4.21']},
    {id:'security', label:'Security',                  weight:24, modules:['mod6'], sections:['6.1','6.2','6.3','6.4','6.5','6.6','6.7','6.8','6.9','6.10','6.11','6.12','6.13','6.14','6.15','6.16','6.17','6.18','6.19','6.20']},
    {id:'software', label:'Software Troubleshooting',  weight:26, modules:['mod4'], sections:['4.1','4.2','4.3','4.8','4.10','4.11']},
    {id:'ops',      label:'Operational Procedures',    weight:23, modules:['mod7'], sections:['7.1','7.2','7.3','7.4','7.5','7.6','7.7','7.8','7.9','7.10','7.11','7.12','7.13']},
  ]
};

const EXAM_PASS = {core1:675, core2:700};

// Extra exam-style question bank per domain
const EXAM_BANK = {
  mobile:[
    {q:"A user\'s smartphone will not charge even after trying multiple cables. Which component should the technician inspect first?",o:["A. Battery","B. Charging port","C. USB controller","D. Screen digitizer"],c:1,e:"The <strong>charging port</strong> is the first physical point of failure to inspect — debris, bent pins, or corrosion are common. Multiple cables ruling out the cable shifts suspicion to the port itself.",d:"mobile"},
    {q:"A technician needs to configure email on a smartphone so it syncs contacts, calendar, and email. Which protocol provides all three?",o:["A. POP3","B. IMAP","C. Microsoft Exchange / ActiveSync","D. SMTP"],c:2,e:"<strong>Microsoft Exchange / ActiveSync</strong> syncs email, contacts, and calendar items natively. POP3 and IMAP handle email only; SMTP is for sending.",d:"mobile"},
    {q:"A user reports their phone screen is very dim even at maximum brightness. Which hardware component is most likely failing?",o:["A. GPU","B. Digitizer","C. LCD backlight","D. Front camera"],c:2,e:"The <strong>LCD backlight</strong> controls screen brightness. A failing backlight causes dim displays even at maximum brightness settings.",d:"mobile"},
    {q:"An employee\'s company phone must be wiped remotely after it is reported stolen. Which technology enables this?",o:["A. GPS tracking","B. MDM (Mobile Device Management)","C. VPN client","D. Two-factor authentication"],c:1,e:"<strong>MDM (Mobile Device Management)</strong> allows IT administrators to remotely wipe, lock, and manage mobile devices, including issuing remote wipe commands for lost or stolen devices.",d:"mobile"},
    {q:"A user wants to pair a Bluetooth headset with their phone but cannot find the device. What should the technician instruct them to do first?",o:["A. Restart the phone","B. Enable NFC","C. Put the headset into pairing/discovery mode","D. Update the phone OS"],c:2,e:"Bluetooth devices must be in <strong>pairing/discovery mode</strong> to be visible to other devices. Without this, the headset will not appear in the phone\'s Bluetooth scan results.",d:"mobile"},
    {q:"Which mobile screen technology provides deeper blacks and better contrast because pixels produce their own light?",o:["A. IPS LCD","B. TN panel","C. OLED","D. LED-backlit LCD"],c:2,e:"<strong>OLED (Organic LED)</strong> pixels emit their own light and can turn off completely for true black. LCD panels require a backlight, limiting contrast ratio.",d:"mobile"},
    {q:"A technician is replacing a swollen battery on a laptop. What is the most important safety precaution?",o:["A. Wear anti-static strap","B. Discharge the battery first","C. Do not puncture or bend the battery","D. Use a metal spudger only"],c:2,e:"A swollen Li-ion battery can catch fire or explode if <strong>punctured or bent</strong>. Safety dictates careful removal without applying pressure or piercing the casing.",d:"mobile"},
    {q:"A user\'s Android phone is not syncing email. The Wi-Fi and mobile data work fine. What should the technician check first?",o:["A. Reinstall the email app","B. Factory reset the device","C. Check account sync settings and background data permissions","D. Update the OS"],c:2,e:"<strong>Account sync settings and background data permissions</strong> are the most common causes of email sync failure when connectivity is confirmed working. These are toggled per-app in Settings.",d:"mobile"},
    {q:"Which wireless charging standard is used by most modern Android and Apple devices?",o:["A. Qi","B. PMA","C. AirFuel","D. NFC"],c:0,e:"<strong>Qi</strong> is the dominant wireless charging standard adopted by Apple (iPhone 8+) and most Android manufacturers. NFC is for short-range data, not charging.",d:"mobile"},
    {q:"A user reports GPS accuracy is poor indoors but works fine outside. What is the most likely explanation?",o:["A. GPS antenna is damaged","B. GPS relies on line-of-sight satellite signals blocked by buildings","C. Location services are disabled","D. The SIM card is faulty"],c:1,e:"<strong>GPS requires line-of-sight to satellites</strong>, which buildings block. Indoor positioning relies on Wi-Fi/cell tower triangulation instead. This is expected GPS behaviour, not a fault.",d:"mobile"},
  ],
  network:[
    {q:"A technician needs to connect two buildings 300 metres apart without digging trenches. Which network solution is most appropriate?",o:["A. Cat6 UTP cable","B. Coaxial cable","C. Point-to-point wireless bridge","D. Fibre optic in conduit"],c:2,e:"A <strong>point-to-point wireless bridge</strong> avoids trenching. Cat6 UTP max is 100m. Fibre would work but requires trenching. Wireless bridge is the practical solution.",d:"network"},
    {q:"A user reports they can ping 192.168.1.1 but cannot browse the internet. What is the most likely cause?",o:["A. NIC failure","B. Incorrect default gateway","C. DNS failure","D. DHCP server failure"],c:2,e:"Being able to ping the gateway proves local connectivity is fine. Inability to reach the internet with working local connectivity points to <strong>DNS failure</strong> — the computer cannot resolve domain names.",d:"network"},
    {q:"Which port does HTTPS use by default?",o:["A. 80","B. 8080","C. 443","D. 22"],c:2,e:"<strong>HTTPS uses port 443</strong>. HTTP uses 80. Port 22 is SSH. Port 8080 is an alternate HTTP port commonly used for web proxies and development.",d:"network"},
    {q:"A company needs to ensure guest Wi-Fi users cannot access internal servers. Which technology provides this segmentation?",o:["A. WPA2","B. MAC filtering","C. VLAN","D. QoS"],c:2,e:"<strong>VLANs (Virtual LANs)</strong> logically segment network traffic. Guest devices placed on a separate VLAN cannot communicate with internal server VLANs without explicit routing rules.",d:"network"},
    {q:"A technician is crimping an Ethernet cable. The wiring standard requires pin 1 to be white-orange. Which standard is being used?",o:["A. T568A","B. T568B","C. Crossover","D. Rollover"],c:1,e:"<strong>T568B</strong> starts with white-orange on pin 1. T568A starts with white-green. T568B is the most common standard in North American commercial deployments.",d:"network"},
    {q:"A workstation receives a 169.254.x.x IP address. What does this indicate?",o:["A. Static IP assigned","B. DHCP server is reachable","C. APIPA address — DHCP server unreachable","D. IPv6 is enabled"],c:2,e:"<strong>APIPA (Automatic Private IP Addressing)</strong> assigns 169.254.x.x addresses when a DHCP server cannot be reached. This indicates a DHCP communication failure.",d:"network"},
    {q:"Which DNS record type maps a hostname to an IPv4 address?",o:["A. MX","B. CNAME","C. A record","D. PTR"],c:2,e:"An <strong>A record</strong> maps a hostname to an IPv4 address. AAAA maps to IPv6. MX is for mail. CNAME is an alias. PTR is for reverse lookups.",d:"network"},
    {q:"A technician needs to test whether a remote server on port 25 is reachable. Which command is best?",o:["A. ping mailserver","B. nslookup mailserver","C. telnet mailserver 25","D. tracert mailserver"],c:2,e:"<strong>Telnet to a specific port</strong> tests whether that port is open and responding. Ping only tests ICMP reachability, not application port availability.",d:"network"},
    {q:"What is the maximum distance for a Cat5e or Cat6 Ethernet cable run?",o:["A. 50 metres","B. 100 metres","C. 150 metres","D. 300 metres"],c:1,e:"<strong>100 metres (328 feet)</strong> is the maximum for Cat5e/Cat6 copper Ethernet runs per TIA/EIA standards. Beyond this, signal degradation causes errors.",d:"network"},
    {q:"A SOHO router assigns IP addresses automatically. Which service is responsible?",o:["A. DNS","B. NAT","C. DHCP","D. SNMP"],c:2,e:"<strong>DHCP (Dynamic Host Configuration Protocol)</strong> automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to clients on the network.",d:"network"},
  ],
  hardware:[
    {q:"A workstation powers on but immediately shuts off. No POST beeps occur. Which component is most likely failing?",o:["A. RAM","B. GPU","C. Power supply unit","D. Hard drive"],c:2,e:"Immediate shutdown without POST completion typically indicates <strong>PSU failure</strong> — insufficient or unstable power prevents the system from initialising. A failing PSU may provide enough power to start but not sustain boot.",d:"hardware"},
    {q:"A technician is installing RAM into a dual-channel motherboard. How should the DIMMs be installed for optimal performance?",o:["A. Fill slots 1 and 2","B. Fill matching coloured slots (e.g. slots 1 and 3)","C. Fill the slot closest to CPU only","D. It does not matter"],c:1,e:"<strong>Matching coloured slots</strong> enable dual-channel mode, effectively doubling memory bandwidth. Always consult the motherboard manual — typically slots 1&3 or 2&4 form channel pairs.",d:"hardware"},
    {q:"Which RAID level provides disk mirroring with no striping, requiring exactly two drives?",o:["A. RAID 0","B. RAID 1","C. RAID 5","D. RAID 10"],c:1,e:"<strong>RAID 1</strong> mirrors data identically across two drives. If one fails, the other contains a complete copy. No performance gain from striping, but full redundancy.",d:"hardware"},
    {q:"A user installs a new PCIe GPU but gets no display output. The integrated graphics still work. What should the technician check first?",o:["A. Reinstall drivers","B. Check PCIe power connectors are seated","C. Replace the GPU","D. Update BIOS"],c:1,e:"High-performance GPUs require <strong>dedicated PCIe power connectors</strong> (6-pin or 8-pin) from the PSU. Missing or unseated power connectors prevent the GPU from initialising.",d:"hardware"},
    {q:"A laser printer produces pages with toner that smears when rubbed. Which component is most likely faulty?",o:["A. Drum unit","B. Transfer roller","C. Fuser assembly","D. Toner cartridge"],c:2,e:"The <strong>fuser assembly</strong> bonds toner to paper using heat and pressure. If it is failing or at incorrect temperature, toner will not fuse properly and will smear.",d:"hardware"},
    {q:"A technician needs to replace a 3.5-inch SATA HDD with an SSD in a desktop. Which form factor SSD is a direct drop-in replacement?",o:["A. M.2 NVMe","B. 2.5-inch SATA SSD with adapter","C. mSATA","D. PCIe add-in card"],c:1,e:"A <strong>2.5-inch SATA SSD with a 3.5-inch adapter bracket</strong> is the direct replacement. It uses the same SATA interface and is physically compatible with standard drive bays.",d:"hardware"},
    {q:"Which CPU socket type uses a Land Grid Array (LGA) where the pins are on the motherboard, not the CPU?",o:["A. AMD AM4","B. Intel LGA 1700","C. AMD AM5","D. Intel LGA 1700 and AMD AM5 both use LGA"],c:1,e:"<strong>Intel LGA sockets</strong> place pins on the motherboard. AMD traditionally used PGA (pins on CPU) with AM4, though AM5 switched to LGA. For CompTIA A+, Intel = LGA is the key association.",d:"hardware"},
    {q:"A printer is producing blank pages despite a new toner cartridge being installed. What is the most likely cause?",o:["A. Fuser failure","B. Protective tape not removed from cartridge","C. Drum unit failure","D. Paper jam sensor fault"],c:1,e:"New toner cartridges have a <strong>protective sealing tape</strong> that must be removed before installation. Forgetting to pull the tab results in no toner reaching the paper.",d:"hardware"},
    {q:"A technician is told to dispose of old CRT monitors. What is the most important safety concern?",o:["A. Mercury in backlight","B. High-voltage capacitors that retain charge","C. Lead in solder joints","D. Lithium battery inside"],c:1,e:"CRT monitors contain <strong>high-voltage capacitors that can store lethal charge</strong> even when unplugged. They must be discharged safely before handling. This is the primary CRT safety hazard.",d:"hardware"},
    {q:"What does the POST process check, and what indicates a successful completion?",o:["A. Checks OS integrity; success = Windows loads","B. Checks hardware components; success = single short beep","C. Checks BIOS settings; success = BIOS screen appears","D. Checks hard drive; success = drive LED flashes"],c:1,e:"<strong>POST (Power-On Self-Test)</strong> verifies CPU, RAM, GPU, and other hardware. A <strong>single short beep</strong> indicates success. Multiple or long beeps indicate hardware errors.",d:"hardware"},
  ],
  virt:[
    {q:"A developer needs to quickly spin up multiple identical test environments that start in seconds and use minimal system resources. Which technology is best?",o:["A. Type 1 hypervisor VMs","B. Containers","C. VDI","D. Physical servers"],c:1,e:"<strong>Containers</strong> start in milliseconds, share the host kernel, and use far fewer resources than VMs. Ideal for spinning up multiple identical dev/test environments rapidly.",d:"virt"},
    {q:"A company\'s VMware ESXi host is experiencing performance issues with 20 VMs running simultaneously. What should be investigated first?",o:["A. Network bandwidth","B. VM snapshot count","C. Host CPU and RAM utilisation","D. Virtual switch configuration"],c:2,e:"<strong>Host CPU and RAM over-subscription</strong> is the primary cause of multi-VM performance degradation. ESXi shares physical resources; too many VMs competing causes slowdowns.",d:"virt"},
    {q:"Which cloud service model would a company use if they want to deploy their own applications without managing the underlying servers or OS?",o:["A. IaaS","B. PaaS","C. SaaS","D. Private Cloud"],c:1,e:"<strong>PaaS (Platform as a Service)</strong> provides a managed platform — developers deploy applications without managing servers, OS patches, or runtime. AWS Elastic Beanstalk is an example.",d:"virt"},
    {q:"An organisation is concerned about vendor lock-in and data sovereignty. Which cloud deployment model gives the most control?",o:["A. Public Cloud","B. Community Cloud","C. Hybrid Cloud","D. Private Cloud"],c:3,e:"A <strong>Private Cloud</strong> gives the organisation full control over infrastructure, data location, and security. No shared infrastructure with other tenants means maximum data sovereignty.",d:"virt"},
    {q:"A VM snapshot was taken before a major update. The update caused system instability. What is the correct recovery action?",o:["A. Reinstall the OS","B. Revert to the snapshot","C. Restore from tape backup","D. Rebuild from image deployment"],c:1,e:"<strong>Reverting to a snapshot</strong> instantly restores the VM to its pre-update state. This is exactly the use case snapshots are designed for — safe rollback without data loss.",d:"virt"},
  ],
  trouble1:[
    {q:"A workstation\'s display shows vertical lines across the screen that persist even in BIOS. What does this most likely indicate?",o:["A. Monitor cable fault","B. GPU hardware failure","C. Driver corruption","D. RAM failure"],c:1,e:"Vertical lines <strong>present in BIOS</strong> rule out software/driver issues. BIOS runs before the OS loads. This points to <strong>GPU hardware failure</strong> or a damaged display panel.",d:"trouble1"},
    {q:"A technician hears a loud clicking sound from a desktop PC and the system cannot boot. Which component has most likely failed?",o:["A. PSU fan","B. CPU cooler","C. Hard drive (HDD)","D. RAM"],c:2,e:"A <strong>clicking hard drive</strong> (click of death) indicates physical head failure. HDDs produce clicking when the read/write heads cannot find their position — imminent or complete failure.",d:"trouble1"},
    {q:"After installing new RAM, a workstation produces continuous beep codes and does not POST. What should the technician do first?",o:["A. Replace the CPU","B. Flash the BIOS","C. Reseat the RAM and check compatibility","D. Replace the motherboard"],c:2,e:"<strong>Reseating RAM</strong> resolves poor contact. Also check that the RAM is compatible with the motherboard (speed, type, capacity). Beep codes after RAM installation almost always indicate this.",d:"trouble1"},
    {q:"A user reports their laptop overheats and shuts down during video playback. What is the most likely cause?",o:["A. Failing hard drive","B. Clogged cooling vents or failing fan","C. Insufficient RAM","D. GPU driver issue"],c:1,e:"<strong>Clogged cooling vents or a failing fan</strong> prevent heat dissipation. Thermal shutdown is a CPU/GPU protection mechanism. Cleaning vents and reseating/replacing thermal paste resolves most cases.",d:"trouble1"},
    {q:"A network printer is accessible to all users except one. That user receives 'Access Denied'. What should the technician check?",o:["A. Printer driver version","B. Network cable","C. User\'s print permissions in the printer properties","D. IP address of the printer"],c:2,e:"<strong>Print permissions</strong> are set per-user or per-group in the printer\'s Security tab. 'Access Denied' for a single user while others work normally is a permissions issue, not hardware.",d:"trouble1"},
  ],
  os:[
    {q:"A technician runs sfc /scannow and it reports corrupted files that cannot be repaired. What is the next step?",o:["A. Reinstall Windows","B. Run DISM /Online /Cleanup-Image /RestoreHealth","C. Run chkdsk /f","D. Boot into safe mode"],c:1,e:"<strong>DISM /RestoreHealth</strong> repairs the Windows component store that SFC uses as its repair source. If SFC cannot repair files, DISM can download and replace them from Windows Update.",d:"os"},
    {q:"A user cannot access Group Policy features including gpedit.msc. Which Windows edition are they most likely using?",o:["A. Windows 11 Pro","B. Windows 10 Enterprise","C. Windows 10 Home","D. Windows 11 Education"],c:2,e:"<strong>Windows Home</strong> does not include the Local Group Policy Editor (gpedit.msc). Only Pro, Enterprise, and Education editions have this feature.",d:"os"},
    {q:"An administrator needs to prevent a specific application from running on company workstations via Group Policy. Which Windows feature handles this?",o:["A. Task Scheduler","B. AppLocker / Software Restriction Policies","C. Device Manager","D. Windows Defender Firewall"],c:1,e:"<strong>AppLocker and Software Restriction Policies</strong> in Group Policy allow administrators to whitelist or blacklist applications by path, publisher, or hash.",d:"os"},
    {q:"A Linux administrator needs to add a user to the sudo group. Which command achieves this on Ubuntu?",o:["A. adduser username sudo","B. chmod +sudo username","C. usermod -aG sudo username","D. passwd sudo username"],c:2,e:"<strong>usermod -aG sudo username</strong> adds a user to the sudo group. The -a flag appends (rather than replacing) group membership. -G specifies the group.",d:"os"},
    {q:"A macOS user\'s Time Machine backup is failing with 'Backup disk not available'. What should be checked first?",o:["A. Free space on the Mac","B. Whether the backup drive is connected and mounted","C. Time Machine preferences","D. iCloud storage quota"],c:1,e:"Time Machine requires the <strong>backup drive to be connected and mounted</strong>. If the drive is not visible in Finder, it will fail. Check connection, power, and whether Disk Utility shows the volume.",d:"os"},
    {q:"Which Windows command displays the current applied Group Policy settings for a user?",o:["A. gpupdate /force","B. gpedit.msc","C. gpresult /r","D. secpol.msc"],c:2,e:"<strong>gpresult /r</strong> displays the Resultant Set of Policy (RSoP) — showing exactly which Group Policy Objects are applied to the current user and computer.",d:"os"},
    {q:"A technician needs to check which process is using the most CPU on a Windows workstation without installing software. Which built-in tool is used?",o:["A. msinfo32","B. Task Manager (Performance tab)","C. Resource Monitor","D. Event Viewer"],c:2,e:"<strong>Resource Monitor</strong> (resmon) provides per-process CPU, memory, disk, and network usage in real time. Task Manager\'s Processes tab also shows CPU but Resource Monitor gives more detail.",d:"os"},
    {q:"A user accidentally deletes a critical system32 DLL. The system now fails to boot. What is the fastest recovery option?",o:["A. Reinstall Windows","B. Boot from installation media and use System Restore or startup repair","C. Replace the hard drive","D. Run sfc /scannow"],c:1,e:"<strong>Booting from installation media</strong> allows access to Startup Repair and System Restore without a working OS. SFC requires a running Windows environment.",d:"os"},
    {q:"Which file system does Windows 11 require for the system drive?",o:["A. FAT32","B. exFAT","C. NTFS","D. ReFS"],c:2,e:"<strong>NTFS</strong> is required for Windows system drives. It supports permissions, encryption (BitLocker), journaling, and files larger than 4GB. FAT32 and exFAT lack these security features.",d:"os"},
    {q:"A technician needs to schedule a script to run every Monday at 8am on a Windows PC. Which tool is used?",o:["A. Services (services.msc)","B. Task Scheduler (taskschd.msc)","C. Group Policy (gpedit.msc)","D. Registry Editor (regedit)"],c:1,e:"<strong>Task Scheduler (taskschd.msc)</strong> creates and manages automated tasks triggered by time, events, or system conditions. It is the standard Windows tool for scheduled scripts.",d:"os"},
  ],
  security:[
    {q:"A user receives an email appearing to be from IT asking them to verify their password immediately or their account will be locked. What type of attack is this?",o:["A. Vishing","B. Spear phishing","C. Pharming","D. Whaling"],c:1,e:"<strong>Spear phishing</strong> targets specific individuals with personalised messages. This example uses urgency and impersonation of IT — classic spear phishing tactics.",d:"security"},
    {q:"Which Windows feature encrypts the entire system drive and requires a TPM chip or USB key to boot?",o:["A. EFS (Encrypting File System)","B. BitLocker","C. Windows Defender","D. Credential Guard"],c:1,e:"<strong>BitLocker</strong> provides full-drive encryption. It requires TPM 2.0 (or a USB startup key) and is available on Windows Pro/Enterprise/Education. EFS encrypts individual files, not the whole drive.",d:"security"},
    {q:"A company wants to ensure that even if a laptop is stolen, the data cannot be read. What should be implemented?",o:["A. Strong Windows login password","B. Full disk encryption with BitLocker","C. Disable USB ports","D. Enable screensaver with password"],c:1,e:"<strong>Full disk encryption (BitLocker)</strong> renders data unreadable without the encryption key, even if the drive is removed and placed in another machine. A password alone does not protect against physical theft.",d:"security"},
    {q:"An attacker sets up a fake Wi-Fi hotspot with the same SSID as a coffee shop to intercept traffic. What type of attack is this?",o:["A. Man-in-the-middle","B. Evil twin","C. Deauthentication attack","D. War driving"],c:1,e:"An <strong>evil twin</strong> attack mimics a legitimate Wi-Fi access point to trick users into connecting. Once connected, the attacker can intercept all traffic.",d:"security"},
    {q:"Which authentication method requires something you know AND something you have?",o:["A. Single sign-on","B. Biometric authentication","C. Multi-factor authentication (MFA)","D. LDAP authentication"],c:2,e:"<strong>MFA (Multi-Factor Authentication)</strong> combines two or more factors: something you know (password), something you have (token/phone), or something you are (biometrics). Using two factors is 2FA.",d:"security"},
    {q:"A technician needs to ensure that a server room can only be entered one person at a time with authentication. Which physical control should be installed?",o:["A. Bollards","B. Magnetometer","C. Access control vestibule","D. Badge reader only"],c:2,e:"An <strong>access control vestibule (mantrap)</strong> physically allows only one person at a time and requires authentication at each door, preventing tailgating into server rooms.",d:"security"},
    {q:"A company discovers a router still uses the default admin/admin credentials. What is the immediate risk?",o:["A. The router will overheat","B. Attackers can easily gain administrative access","C. The Wi-Fi speed will be reduced","D. DNS resolution will fail"],c:1,e:"Default credentials are publicly known. Any attacker who can reach the router's management interface can log in immediately with default credentials and take full control.",d:"security"},
    {q:"A malware analyst runs a suspicious file in an isolated environment to observe its behaviour without risking production systems. What technique is this?",o:["A. Heuristic scanning","B. Signature matching","C. Sandboxing","D. Quarantine"],c:2,e:"<strong>Sandboxing</strong> runs unknown files in a controlled, isolated environment to safely observe malicious behaviour without risking real systems.",d:"security"},
    {q:"All files on a workstation are renamed with a .locked extension and a ransom note appears. Which malware type is responsible?",o:["A. Spyware","B. Rootkit","C. Ransomware","D. Adware"],c:2,e:"<strong>Ransomware</strong> encrypts or renames files and demands payment for restoration. The .locked extension and ransom note are classic ransomware indicators.",d:"security"},
    {q:"A user downloads what appears to be a free video editor. After installation, attackers gain remote access. What type of malware is this?",o:["A. Virus","B. Trojan","C. Worm","D. Spyware"],c:1,e:"A <strong>Trojan</strong> disguises itself as legitimate software. When executed it opens a backdoor — the apparent free editor was the lure.",d:"security"},
    {q:"A Windows workstation needs full-disk encryption but has no TPM chip. Which BitLocker workaround allows it to still be encrypted?",o:["A. Use EFS instead","B. Use a USB startup key to store the encryption key","C. BitLocker cannot work without TPM","D. Enable Secure Boot"],c:1,e:"BitLocker can use a <strong>USB startup key</strong> as an alternative to TPM — the USB must be present at boot for decryption to proceed.",d:"security"},
    {q:"Which wireless security protocol should be disabled immediately because it is vulnerable to PIN brute-force attacks?",o:["A. WPA3","B. WPA2-Enterprise","C. WPS","D. AES"],c:2,e:"<strong>WPS (Wi-Fi Protected Setup)</strong> uses an 8-digit PIN that can be brute-forced in hours. It should be disabled on all routers regardless of other security settings.",d:"security"},
  ],
  software:[
    {q:"A user\'s browser homepage keeps resetting to an unknown site after each restart despite changing it back. What is the most likely cause?",o:["A. Corrupt browser profile","B. Browser extension conflict","C. Malware or PUP modifying browser settings","D. Windows Update changing settings"],c:2,e:"<strong>Malware or PUPs (Potentially Unwanted Programs)</strong> commonly hijack browser settings and persist across restarts. The fix involves malware removal, not just changing settings.",d:"software"},
    {q:"A technician is troubleshooting a Windows PC that boots into a black screen after login. Safe Mode works normally. What should they do first?",o:["A. Reinstall Windows","B. Run startup repair","C. Disable startup applications and services via msconfig","D. Run sfc /scannow"],c:2,e:"<strong>msconfig</strong> allows selective startup — disabling third-party services and startup items narrows down the culprit causing the black screen. This is the standard clean boot troubleshooting approach.",d:"software"},
    {q:"A user reports an application crashes immediately on launch with 'missing DLL' error. What is the most likely solution?",o:["A. Reinstall the OS","B. Install the missing Visual C++ redistributable or .NET runtime","C. Update the GPU drivers","D. Increase virtual memory"],c:1,e:"<strong>Missing DLL errors</strong> are typically caused by absent runtime libraries like <strong>Visual C++ redistributables or .NET frameworks</strong> that the application depends on.",d:"software"},
    {q:"Which Windows troubleshooting tool generates a detailed report on power usage, battery health, and sleep state failures?",o:["A. eventvwr.msc","B. msinfo32","C. powercfg /batteryreport and /sleepstudy","D. resmon"],c:2,e:"<strong>powercfg</strong> generates battery and sleep diagnostics. /batteryreport produces an HTML battery health report; /sleepstudy shows why the system failed to sleep or woke unexpectedly.",d:"software"},
    {q:"A workstation\'s performance has degraded significantly over six months. Disk usage shows 95% constantly. What should the technician do?",o:["A. Defragment the SSD","B. Run Disk Cleanup and check for malware","C. Replace the RAM","D. Reinstall GPU drivers"],c:1,e:"<strong>Disk Cleanup removes temporary files</strong> that accumulate over time. Sustained high disk usage can also indicate malware, runaway processes, or a failing drive. Check all these in sequence.",d:"software"},
  ],
  security:[
    {q:"A company deploys a solution where every employee\'s laptop drive is fully encrypted and the key is stored in hardware. Which technology combination is this?",o:["A. EFS with TPM","B. BitLocker with TPM 2.0","C. BitLocker-To-Go","D. EFS with smart card"],c:1,e:"<strong>BitLocker with TPM 2.0</strong> provides full-disk encryption where the TPM chip securely stores the encryption key — standard enterprise deployment for laptop protection.",d:"security"},
    {q:"A user receives a phone call from someone claiming to be IT support, asking for their password to fix an urgent issue. What type of attack is this?",o:["A. Smishing","B. Phishing","C. Vishing","D. Whaling"],c:2,e:"<strong>Vishing (voice phishing)</strong> uses phone calls to impersonate IT, banks, or authorities to extract credentials. Legitimate IT will never ask for your password.",d:"security"},
    {q:"After removing malware, a technician notices the infection returns after reboot. What was most likely missed?",o:["A. System Restore was not disabled before removal","B. The firewall was not updated","C. Windows Update was not run","D. The browser cache was not cleared"],c:0,e:"If <strong>System Restore was not disabled</strong> before removal, infected restore points allow malware to restore itself. Always disable System Restore first, then remove, then re-enable.",d:"security"},
    {q:"A Windows user needs to encrypt only their design project folder so only their account can open it, without encrypting the whole drive. Which tool should they use?",o:["A. BitLocker","B. BitLocker-To-Go","C. EFS","D. TPM Manager"],c:2,e:"<strong>EFS (Encrypting File System)</strong> encrypts individual files/folders on NTFS drives, tied to the specific Windows user account — exactly this use case.",d:"security"},
    {q:"An enterprise Wi-Fi network requires each employee to authenticate with individual credentials rather than a shared passphrase. Which server handles this authentication?",o:["A. TACACS+","B. RADIUS","C. Kerberos","D. LDAP"],c:1,e:"<strong>RADIUS</strong> centralises authentication for WPA2/WPA3-Enterprise Wi-Fi — each user has unique credentials verified against the RADIUS server.",d:"security"},
    {q:"An attacker intercepts communication between a user and a banking website by presenting a forged SSL certificate. What type of attack is this?",o:["A. SQL injection","B. DNS poisoning","C. Man-in-the-Middle (MITM)","D. Brute force"],c:2,e:"A <strong>MITM attack</strong> intercepts traffic between two parties. Using a forged certificate allows the attacker to decrypt HTTPS traffic the user believes is secure.",d:"security"},
    {q:"A company enforces a policy where no employee receives more system access than their job requires. Which security principle is this?",o:["A. Zero Trust","B. Principle of Least Privilege","C. Defence in Depth","D. Separation of Duties"],c:1,e:"The <strong>Principle of Least Privilege</strong> limits each user to the minimum access required for their role, reducing the impact if an account is compromised.",d:"security"},
    {q:"A technician discovers a laptop has software that records all keystrokes and sends them to an external server. What type of malware is present?",o:["A. Spyware","B. Rootkit","C. Keylogger","D. Ransomware"],c:2,e:"A <strong>keylogger</strong> records every keystroke — capturing passwords, credit card numbers, and messages — and transmits them to the attacker silently.",d:"security"},
    {q:"A network administrator needs to prevent users from printing to unapproved printers and block USB storage. Which Windows feature enforces these restrictions across all domain computers?",o:["A. Windows Defender Firewall","B. Group Policy Objects (GPOs)","C. BitLocker","D. UAC"],c:1,e:"<strong>GPOs (Group Policy Objects)</strong> in Active Directory can enforce hardware restrictions, including blocking USB storage and restricting printer access across all domain computers.",d:"security"},
    {q:"A workstation consistently shows browser redirects, fake antivirus alerts, and files being renamed. The IT team suspects ransomware. What is the first action?",o:["A. Run antivirus in Normal Mode","B. Enable System Restore","C. Quarantine the machine by disconnecting from the network","D. Reimage immediately"],c:2,e:"<strong>Quarantine first</strong> — disconnect from the network to stop the ransomware spreading to network shares and other machines. Then follow the malware removal process.",d:"security"},
  ],
  ops:[
    {q:"A technician is about to perform a major OS upgrade on a production server. What must be done first?",o:["A. Notify users","B. Test in a VM","C. Create a complete backup","D. Disable antivirus"],c:2,e:"<strong>Creating a complete backup</strong> is always the first step before any major change. This ensures recovery is possible if the upgrade fails or causes data loss.",d:"ops"},
    {q:"A company\'s change management policy requires documentation before any system changes. Which document formally authorises the change?",o:["A. Incident report","B. Risk assessment","C. Change request / RFC","D. SLA"],c:2,e:"A <strong>Change Request (RFC - Request for Change)</strong> formally documents and authorises modifications to IT systems. Change management prevents uncontrolled changes that cause outages.",d:"ops"},
    {q:"A technician finds a USB drive in the car park. What is the correct action according to security policy?",o:["A. Plug it in to identify the owner","B. Take it home","C. Hand it to IT security without plugging it in","D. Destroy it immediately"],c:2,e:"<strong>Hand to IT security</strong> without plugging it in. USB drives can contain autorun malware. This is a common social engineering technique called baiting. Never plug in unknown devices.",d:"ops"},
    {q:"What is the correct order for troubleshooting an IT problem?",o:["A. Fix, test, document","B. Identify, theory, test, solution, verify, document","C. Escalate, research, fix","D. Restart, update, escalate"],c:1,e:"CompTIA\'s <strong>6-step troubleshooting methodology</strong>: 1) Identify the problem, 2) Establish theory, 3) Test the theory, 4) Establish action plan, 5) Verify and prevent, 6) Document findings.",d:"ops"},
    {q:"A technician needs to securely dispose of an old hard drive containing sensitive company data. What is the most thorough method?",o:["A. Delete all files and empty recycle bin","B. Format the drive","C. Physical destruction or certified data shredding","D. Overwrite with zeros once"],c:2,e:"<strong>Physical destruction or certified shredding</strong> is the most thorough disposal method. Deleting files, formatting, or single-pass overwrite can all be reversed with forensic tools on magnetic drives.",d:"ops"},
  ],
};

let examState = {
  selectedExam: null,
  questions: [],
  currentQ: 0,
  answers: [],
  answered: false,
  domainResults: {},
};

function selectExam(exam) {
  examState.selectedExam = exam;
  document.querySelectorAll('.exam-choice-card').forEach(c => c.classList.remove('selected-exam'));
  document.getElementById(exam === 'core1' ? 'ex-card-1' : 'ex-card-2').classList.add('selected-exam');
  document.getElementById('ex-selected-label').textContent = exam === 'core1' ? '220-1201 Core 1 selected — 50 questions' : '220-1202 Core 2 selected — 50 questions';
  document.getElementById('ex-start-btn').disabled = false;
}

function buildExamDeck(exam) {
  const domains = EXAM_DOMAINS[exam];
  const totalQ = 50;
  const deck = [];
  // Distribute questions proportionally by domain weight
  domains.forEach(domain => {
    const count = Math.round((domain.weight / 100) * totalQ);
    const pool = [];
    // Pull from EXAM_BANK
    if (EXAM_BANK[domain.id]) pool.push(...EXAM_BANK[domain.id].map(q => ({...q, domainId: domain.id, domainLabel: domain.label})));
    // Pull from BANK for sections in this domain
    domain.sections.forEach(sec => {
      if (BANK[sec]) BANK[sec].forEach(q => pool.push({q:q.q, o:q.o, c:q.c, e:q.e, d:domain.id, domainId:domain.id, domainLabel:domain.label}));
    });
    // Shuffle and pick
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
    deck.push(...pool.slice(0, count));
  });
  // Shuffle full deck
  for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [deck[i],deck[j]]=[deck[j],deck[i]]; }
  return deck.slice(0, totalQ);
}

function startMockExam() {
  if (!examState.selectedExam) return;
  // Build bank-based fallback deck upfront
  examState.fallbackDeck = buildExamDeck(examState.selectedExam);
  examState.currentQ = 0;
  examState.answers = [];
  examState.answered = false;
  examState.usedExamTopics = [];   // global topics used across all domains
  examState.domainTopics = {};    // per-domain topic history
  examState.domainResults = {};
  EXAM_DOMAINS[examState.selectedExam].forEach(d => { examState.domainResults[d.id] = {label:d.label, correct:0, total:0}; });
  // Pick domain for Q1
  examState.currentDomain = pickExamDomain(examState.selectedExam, 0);
  showExScreen('ex-quiz');
  renderExamQuestion();
}

function pickExamDomain(exam, qIndex) {
  // Cycle through domains proportionally so ~50 questions cover all domains
  const domains = EXAM_DOMAINS[exam];
  const totalQ = 50;
  let slot = 0;
  for (let i = 0; i < domains.length; i++) {
    const count = Math.round((domains[i].weight / 100) * totalQ);
    if (qIndex < slot + count) return domains[i];
    slot += count;
  }
  return domains[domains.length - 1];
}

function showExScreen(id) {
  document.querySelectorAll('#exam-pane .screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

async function renderExamQuestion() {
  if (examState.currentQ >= 50) { showExamResults(); return; }
  const total = 50;
  const pct = Math.round((examState.currentQ / total) * 100);
  const domain = examState.currentDomain || pickExamDomain(examState.selectedExam, examState.currentQ);
  document.getElementById('ex-q-counter').textContent = `Q ${examState.currentQ + 1} / ${total}`;
  document.getElementById('ex-domain-tag').textContent = domain.label;
  document.getElementById('ex-score-live').textContent = `${examState.answers.filter(a=>a).length} correct`;
  document.getElementById('ex-prog-fill').style.width = pct + '%';
  document.getElementById('ex-prog-txt').textContent = pct + '%';
  examState.answered = false;
  const area = document.getElementById('ex-q-area');
  const useAI = canUseLiveAI();
  area.innerHTML = `<div class="load-card"><div class="spinner"></div><div class="load-txt">${useAI ? 'Generating question…' : 'Loading from question bank…'}</div><div class="load-sub">${domain.label}</div></div>`;
  let q = null;
  if (useAI) {
    try { q = await generateExamQuestion(domain, examState.selectedExam); } catch(e) {}
  }
  // Fallback to bank
  if (!q) {
    const fb = examState.fallbackDeck[examState.currentQ % examState.fallbackDeck.length];
    q = {question: fb.q||fb.question, options: fb.o||fb.options, correct: fb.c!==undefined?fb.c:fb.correct, explanation: fb.e||fb.explanation, scenario: fb.sc||fb.scenario||'', domainId: domain.id, domainLabel: domain.label};
  }
  examState.currentQuestion = q;
  const scenario = q.scenario || q.sc || '';
  area.innerHTML = `<div class="ex-q-card">
    ${scenario ? `<div class="ex-scenario">📋 ${scenario}</div>` : ''}
    <div class="ex-question">${q.question || q.q}</div>
    ${(q.options || q.o).map((opt, i) => `<button class="ex-opt" onclick="answerExam(${i})">${opt}</button>`).join('')}
  </div>`;
}

async function generateExamQuestion(domain, exam) {
  const examLabel = exam === 'core1' ? '220-1201 Core 1' : '220-1202 Core 2';
  // Build avoid list: ALL topics used in this domain + recent global topics
  if (!examState.domainTopics) examState.domainTopics = {};
  if (!examState.domainTopics[domain.id]) examState.domainTopics[domain.id] = [];
  const domainAvoid = examState.domainTopics[domain.id].join(', ');
  const globalAvoid = (examState.usedExamTopics || []).slice(-10).join(', ');
  const avoidStr = [...new Set([...examState.domainTopics[domain.id], ...(examState.usedExamTopics||[]).slice(-4)])].join(', ');
  // Pick relevant notes
  const notesSrc = domain.modules.includes('mod1') ? NOTES_M1
    : domain.modules.includes('mod3') ? NOTES_M3
    : domain.modules.includes('mod4') ? NOTES_M4
    : domain.modules.includes('mod5') ? NOTES_M5
    : domain.modules.includes('mod6') ? NOTES_M6
    : NOTES_M2;
  const prompt = `You are a CompTIA A+ ${examLabel} exam question writer. Generate ONE authentic exam-style question for the domain: "${domain.label}".

STUDY NOTES (for context):
${notesSrc.substring(0, 2000)}

REQUIREMENTS:
- Scenario-based ("A technician...", "A user reports...", "A company needs...")
- 4 answer options (A/B/C/D), exactly one correct, all distractors plausible
- CompTIA exam difficulty — not trivially easy
- Domain: ${domain.label}
- Pick a SPECIFIC sub-topic within this domain — be precise, not generic
- Each question must test a DIFFERENT concept
${avoidStr ? `- STRICTLY AVOID these already-used topics (do not repeat or rephrase): ${avoidStr}` : ''}

Return ONLY valid JSON, no markdown:
{"scenario":"optional setup sentence","question":"the question text","options":["A. option","B. option","C. option","D. option"],"correct":0,"explanation":"clear explanation of why correct and why others are wrong","topic":"2-4 word specific topic tag"}`;

  const text = await completeViaProxy(prompt);
  const q = parseJSONFromModel(text);
  if (!q.question||!q.options||q.options.length!==4||q.correct===undefined) throw new Error('Invalid format');
  q.domainId = domain.id;
  q.domainLabel = domain.label;
  if (q.topic) {
    if (!examState.usedExamTopics) examState.usedExamTopics = [];
    if (!examState.domainTopics) examState.domainTopics = {};
    if (!examState.domainTopics[domain.id]) examState.domainTopics[domain.id] = [];
    examState.usedExamTopics.push(q.topic);
    examState.domainTopics[domain.id].push(q.topic); // track per-domain too
  }
  return q;
}

function answerExam(chosen) {
  if (examState.answered) return;
  examState.answered = true;
  const q = examState.currentQuestion;
  const correct = q.correct !== undefined ? q.correct : q.c;
  const isCorrect = chosen === correct;
  examState.answers.push(isCorrect);
  // Track domain
  const dId = q.domainId || q.d;
  if (examState.domainResults[dId]) {
    examState.domainResults[dId].total++;
    if (isCorrect) examState.domainResults[dId].correct++;
  }
  // Update score
  document.getElementById('ex-score-live').textContent = `${examState.answers.filter(a=>a).length} correct`;
  // Style buttons
  const btns = document.querySelectorAll('.ex-opt');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('ex-correct');
    else if (i === chosen) btn.classList.add('ex-incorrect');
    else btn.classList.add('ex-revealed');
  });
  // Add explanation + next button
  const area = document.getElementById('ex-q-area');
  const exp = document.createElement('div');
  exp.innerHTML = `<div class="ex-exp"><strong>${isCorrect ? '✓ Correct' : '✗ Incorrect — Correct answer: ' + ['A','B','C','D'][correct]}</strong><br>${q.e || q.explanation}</div>
    <button class="ex-next-btn" onclick="nextExamQ()">${examState.currentQ + 1 >= examState.questions.length ? 'VIEW RESULTS →' : 'NEXT QUESTION →'}</button>`;
  area.querySelector('.ex-q-card').appendChild(exp);
}

function nextExamQ() {
  examState.currentQ++;
  if (examState.currentQ >= 50) { showExamResults(); return; }
  examState.currentDomain = pickExamDomain(examState.selectedExam, examState.currentQ);
  renderExamQuestion();
}

function showExamResults() {
  showExScreen('ex-results');
  const exam = examState.selectedExam;
  const total = 50; // fixed exam length
  const correct = examState.answers.filter(a => a).length;
  const rawScore = Math.round((correct / total) * 900);
  const passMark = EXAM_PASS[exam];
  const passed = rawScore >= passMark;
  const pct = Math.round((correct / total) * 100);

  // Domain breakdown
  const domains = EXAM_DOMAINS[exam];
  let domainRows = '';
  const weakDomains = [], strongDomains = [];
  domains.forEach(d => {
    const res = examState.domainResults[d.id];
    if (!res || res.total === 0) return;
    const dp = Math.round((res.correct / res.total) * 100);
    const colour = dp >= 80 ? '#00ff88' : dp >= 60 ? '#ffd700' : '#ff6b6b';
    domainRows += `<div class="ex-domain-row">
      <div class="ex-domain-name">${d.label}</div>
      <div class="ex-domain-bar-wrap"><div class="ex-domain-bar-fill" style="width:${dp}%;background:${colour};"></div></div>
      <div class="ex-domain-pct" style="color:${colour};">${dp}%</div>
    </div>`;
    if (dp < 70) weakDomains.push({label: d.label, pct: dp, id: d.id});
    else if (dp >= 85) strongDomains.push({label: d.label, pct: dp});
  });

  // Revision tips per weak domain
  const tips = {
    mobile:'Review charging ports, battery types, MDM, Bluetooth pairing, and screen technologies.',
    network:'Focus on IP addressing, DNS records, DHCP, cable standards, ports & protocols.',
    hardware:'Study PSU symptoms, RAID levels, POST codes, printer components, and RAM installation.',
    virt:'Review Type 1 vs Type 2 hypervisors, container differences, IaaS/PaaS/SaaS, and snapshots.',
    trouble1:'Practise HDD failure sounds, display fault diagnosis, thermal shutdown, and POST beep codes.',
    os:'Focus on Windows editions, CLI commands (sfc/DISM/diskpart), macOS FileVault, Linux permissions.',
    security:'Study all malware types, physical security measures, encryption (BitLocker/EFS/TPM), wireless protocols (WPA2/WPA3/RADIUS), social engineering attacks, malware removal steps, and workstation hardening.',
    software:'Review startup repair, msconfig clean boot, missing DLL fixes, and browser hijack removal.',
    ops:'Study change management, disposal methods, troubleshooting methodology, and incident response.',
  };
  const weakCards = weakDomains.map(d => `<div class="ex-weak-card"><div class="ex-weak-title">⚠ ${d.label} — ${d.pct}%</div><div class="ex-weak-tip">${tips[d.id]||'Review this domain in Quiz and Flashcard modes.'}</div></div>`).join('');
  const strongCards = strongDomains.map(d => `<div class="ex-strong-card"><div class="ex-strong-title">✓ ${d.label} — ${d.pct}%</div></div>`).join('');

  document.getElementById('ex-result-content').innerHTML = `
    <div class="ex-result-header">
      <div class="ex-result-score" style="color:${passed?'var(--green)':'#ff6b6b'};">${rawScore}</div>
      <div class="ex-result-label">/ 900 scaled score</div>
      <div class="ex-pass-badge ${passed?'ex-pass':'ex-fail'}">${passed ? '✓ PASS' : '✗ FAIL'}</div>
      <div style="font-size:13px;color:var(--muted);">${correct} / ${total} correct (${pct}%) • Pass mark: ${passMark}</div>
    </div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;color:var(--text);margin-bottom:12px;">Domain Breakdown</div>
    <div style="margin-bottom:24px;">${domainRows}</div>
    ${weakDomains.length ? `<div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;color:#ff6b6b;margin-bottom:12px;">⚠ Areas to Work On</div>${weakCards}` : ''}
    ${strongDomains.length ? `<div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;color:var(--green);margin:16px 0 12px;">✓ Strong Areas</div>${strongCards}` : ''}
    <button class="start-btn" style="margin-top:20px;" onclick="retakeExam()">RETAKE EXAM →</button>
    <button class="restart-btn" style="margin-top:10px;" onclick="backToExamHome()">← CHOOSE EXAM</button>
  `;
}

function retakeExam() { examState.usedExamTopics = []; examState.domainTopics = {}; startMockExam(); }
function backToExamHome() { showExScreen('ex-home'); }

function saveQuizProgress(){
  if(!quizState.inProgress)return;
  try{
    const save={
      selModule:quizState.selModule,
      selSection:quizState.selSection,
      totalQ:quizState.totalQ,
      currentQ:quizState.currentQ,
      correct:quizState.correct,
      wrong:quizState.wrong,
      sessionSections:quizState.sessionSections,
      bankUsed:quizState.bankUsed,
      savedAt:Date.now()
    };
    localStorage.setItem('comptia_quiz_save',JSON.stringify(save));
    flashSave();
  }catch(e){}
}
function loadQuizSave(){
  try{return JSON.parse(localStorage.getItem('comptia_quiz_save')||'null');}
  catch(e){return null;}
}
function clearQuizSave(){try{localStorage.removeItem('comptia_quiz_save');}catch(e){}}

function renderQuizResumeBanner(){
  const el=document.getElementById('quiz-resume-banner');
  if(!el)return;
  const save=loadQuizSave();
  if(!save){el.innerHTML='';return;}
  const age=Math.round((Date.now()-save.savedAt)/60000);
  const ageStr=age<60?`${age}m ago`:`${Math.round(age/60)}h ago`;
  const modLabel={all:'All Modules',mod1:'Module 1',mod2:'Module 2',mod3:'Module 3',mod4:'Module 4',mod5:'Module 5',mod6:'Module 6',mod7:'Module 7'}[save.selModule]||'';
  const secLabel=save.selSection==='all'?'All Sections':save.selSection;
  const totalQ=save.totalQ||20;
  const pct=save.correct+save.wrong>0?Math.round(save.correct/(save.correct+save.wrong)*100):0;
  el.innerHTML=`<div class="resume-banner">
    <div class="resume-icon">📋</div>
    <div class="resume-info">
      <div class="resume-title">Resume Quiz — Q${save.currentQ+1} of ${totalQ}</div>
      <div class="resume-sub">${modLabel} · ${secLabel} · ${save.correct}✓ ${save.wrong}✗ · ${pct}% · ${ageStr}</div>
    </div>
    <div class="resume-btns">
      <button class="resume-go" onclick="resumeQuiz()">CONTINUE →</button>
      <button class="resume-dismiss" onclick="clearQuizSave();renderQuizResumeBanner()">Discard</button>
    </div>
  </div>`;
}
function resumeQuiz(){
  const save=loadQuizSave();
  if(!save)return;
  quizState.selModule=save.selModule;
  quizState.selSection=save.selSection;
  quizState.totalQ=save.totalQ||20;
  quizState.currentQ=save.currentQ;
  quizState.correct=save.correct;
  quizState.wrong=save.wrong;
  quizState.sessionSections=save.sessionSections||[];
  quizState.bankUsed=save.bankUsed||{};
  quizState.usedTopics=[];
  quizState.inProgress=true;
  document.getElementById('score-display').style.display='flex';
  updateScore();
  showQScreen('s-quiz');
  loadQuestion();
}

// ═══════════════════════════════════════════════════════
// FLASHCARD SAVE / LOAD
// ═══════════════════════════════════════════════════════
function saveFCProgress(){
  try{
    const save={
      selModule:fcState.selModule,
      selSection:fcState.selSection,
      deck:fcState.deck,
      currentIdx:fcState.currentIdx,
      known:Array.from(fcState.known),
      learning:Array.from(fcState.learning),
      reviewMode:fcState.reviewMode,checkpointsDone:Array.from(fcState.checkpointsDone||[]),
      savedAt:Date.now()
    };
    localStorage.setItem('comptia_fc_save',JSON.stringify(save));
    flashSave();
  }catch(e){}
}
function loadFCSave(){
  try{return JSON.parse(localStorage.getItem('comptia_fc_save')||'null');}
  catch(e){return null;}
}
function clearFCSave(){try{localStorage.removeItem('comptia_fc_save');}catch(e){}}

function renderFCResumeBanner(){
  const el=document.getElementById('fc-resume-banner');
  if(!el)return;
  const save=loadFCSave();
  if(!save||!save.deck||save.deck.length===0){el.innerHTML='';return;}
  const age=Math.round((Date.now()-save.savedAt)/60000);
  const ageStr=age<60?`${age}m ago`:`${Math.round(age/60)}h ago`;
  const modLabel={all:'All Modules',mod1:'Module 1',mod2:'Module 2',mod3:'Module 3',mod4:'Module 4',mod5:'Module 5',mod6:'Module 6',mod7:'Module 7'}[save.selModule]||'';
  const secLabel=save.selSection==='all'?'All Sections':save.selSection;
  const knownCount=(save.known||[]).length;
  const total=save.deck.length;
  el.innerHTML=`<div class="resume-banner fc-resume">
    <div class="resume-icon">🃏</div>
    <div class="resume-info">
      <div class="resume-title">Resume Flashcards — Card ${save.currentIdx+1} of ${total}</div>
      <div class="resume-sub">${modLabel} · ${secLabel} · ✓${knownCount} known · ${ageStr}</div>
    </div>
    <div class="resume-btns">
      <button class="resume-go fc-go" onclick="resumeFC()">CONTINUE →</button>
      <button class="resume-dismiss" onclick="clearFCSave();renderFCResumeBanner()">Discard</button>
    </div>
  </div>`;
}
function resumeFC(){
  const save=loadFCSave();
  if(!save)return;
  fcState.selModule=save.selModule;
  fcState.selSection=save.selSection;
  fcState.deck=save.deck;
  fcState.currentIdx=save.currentIdx;
  fcState.known=new Set(save.known||[]);
  fcState.learning=new Set(save.learning||[]);
  fcState.flipped=false;
  fcState.reviewMode=save.reviewMode||false;fcState.checkpointsDone=new Set(save.checkpointsDone||[]);
  showFCScreen('fc-s-study');
  renderCard();
}

// ═══════════════════════════════════════════════════════
// HOOK SAVES INTO EXISTING FUNCTIONS (patches)
// ═══════════════════════════════════════════════════════
// Patch answer() to save after each question
const _origAnswer=answer;
window.answer=function(chosen,correct){
  const ok=chosen===correct;
  _origAnswer(chosen,correct);
  saveQuizProgress();
  if(!ok){
    let q=null;
    try{const area=document.getElementById('q-area');if(area&&area.dataset.q)q=JSON.parse(area.dataset.q);}catch(e){}
    recordQuizWrong(getCurrentSection(),q);
    renderQuizFocusPanel();
  }
};

// Patch markCard() to save after each card
const _origMarkCard=markCard;
window.markCard=function(verdict){
  _origMarkCard(verdict);
  saveFCProgress();
};

// Patch fcNext/fcPrev to save position
const _origFcNext=fcNext;
window.fcNext=function(){_origFcNext();saveFCProgress();};
const _origFcPrev=fcPrev;
window.fcPrev=function(){_origFcPrev();saveFCProgress();};

// Patch showFinal to record stats and clear save
const _origShowFinal=showFinal;
window.showFinal=function(){
  _origShowFinal();
  const allSecs=[...MODULES.mod1.sections,...MODULES.mod2.sections,...MODULES.mod3.sections,...MODULES.mod4.sections,...MODULES.mod5.sections,...MODULES.mod6.sections,...MODULES.mod7.sections];
  const secInfo=allSecs.find(s=>s.id===quizState.selSection);
  const lbl=quizState.selSection==='all'?'All Sections':(secInfo?secInfo.label:quizState.selSection);
  addQuizResult(quizState.correct,quizState.totalQ,lbl);
  clearQuizSave();
};

// Patch showFCComplete to record stats and clear save
const _origShowFCComplete=showFCComplete;
window.showFCComplete=function(){
  _origShowFCComplete();
  addFCResult(fcState.known.size,fcState.deck.length);
  clearFCSave();
};

// Patch resetToMenu to refresh banners/stats
const _origResetToMenu=resetToMenu;
window.resetToMenu=function(){
  _origResetToMenu();
  renderQuizResumeBanner();
  renderQuizStats();
};

// Patch resetFCToMenu
const _origResetFCToMenu=resetFCToMenu;
window.resetFCToMenu=function(){
  _origResetFCToMenu();
  renderFCResumeBanner();
  renderFCStats();
};

// Patch switchTab to refresh banners when switching
const _origSwitchTab=switchTab;
window.switchTab=function(tab){
  _origSwitchTab(tab);
  if(tab==='quiz'){renderQuizResumeBanner();renderQuizStats();}
  else if(tab==='fc'){renderFCResumeBanner();renderFCStats();}
  else if(tab==='tutor'){renderTutorContextChip();renderTutorLog();}
};

// ═══════════════════════════════════════════════════════
// INITIALISE ON PAGE LOAD
// ═══════════════════════════════════════════════════════
function saveProxySettings(){
  const u=(document.getElementById('proxy-url')?.value||'').trim();
  const s=(document.getElementById('proxy-secret')?.value||'').trim();
  if(u)localStorage.setItem(LS_PROXY_URL,u);else localStorage.removeItem(LS_PROXY_URL);
  if(s)localStorage.setItem(LS_PROXY_SECRET,s);else localStorage.removeItem(LS_PROXY_SECRET);
  const m=document.getElementById('proxy-save-msg');
  if(m){m.textContent='Saved';setTimeout(()=>{m.textContent='';},2200);}
  updateModeIndicator();
}
function loadProxySettingsFields(){
  const u=document.getElementById('proxy-url');
  const s=document.getElementById('proxy-secret');
  if(u)u.value=getProxyUrl();
  if(s)s.value=getProxySecret();
}
(function wireAIVarietyToggle(){
  const cb=document.getElementById('ai-variety-toggle');
  if(!cb)return;
  cb.checked=isAIVarietyEnabled();
  cb.addEventListener('change',()=>{
    localStorage.setItem(LS_AI_VARIETY,cb.checked?'1':'0');
    updateModeIndicator();
  });
  loadProxySettingsFields();
})();
renderQuizResumeBanner();
renderQuizStats();
renderFCResumeBanner();
renderFCStats();
wireTutorEnterKey();
tutorState.messages = loadTutorHistory();
renderTutorContextChip();
renderTutorLog();
wireFlashcardGesturesAndKeys();
