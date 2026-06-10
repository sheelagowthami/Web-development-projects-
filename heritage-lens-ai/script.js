/* =============================================
   HeritageLens AI — Core JavaScript Engine
   ============================================= */

// =============================================
// MONUMENT KNOWLEDGE DATABASE
// =============================================
const HERITAGE_DB = {
  "taj mahal": {
    name: "Taj Mahal",
    emoji: "🕌",
    location: "Agra, Uttar Pradesh, India",
    mapQuery: "Taj+Mahal+Agra+India",
    lat: 27.1751, lng: 78.0421,
    built: "1632–1653 CE",
    builtBy: "Emperor Shah Jahan",
    style: "Mughal Architecture",
    color: "#E8C96E",
    story: `The Taj Mahal is one of the most breathtaking monuments ever created by human hands — a testament to eternal love, grief, and imperial grandeur.

Emperor Shah Jahan, the fifth Mughal emperor, commissioned this ivory-white marble mausoleum in 1632 in memory of his beloved wife, Mumtaz Mahal, who died during the birth of their 14th child. Devastated by grief, Shah Jahan reportedly turned grey overnight and wore mourning clothes for two years.

Over 20,000 artisans from across the Mughal Empire — India, Persia, Central Asia, and even Europe — labored for 21 years to complete this masterpiece. More than 1,000 elephants transported the vast quantities of Makrana marble from Rajasthan. The central dome rises 73 meters high, and four identical minarets stand at each corner, deliberately tilted slightly outward so that in any earthquake they would fall away from the main tomb.

The interior houses the cenotaphs of Mumtaz Mahal and Shah Jahan, adorned with intricate pietra dura — a technique of inlaying precious stones like lapis lazuli, jasper, and carnelian into marble. At dawn, the Taj glows pink; at noon, blinding white; at sunset, golden; and under moonlight, it appears almost translucent.

Shah Jahan spent his final years imprisoned in Agra Fort by his own son Aurangzeb, gazing across the river at his monument of love. He was eventually buried beside Mumtaz Mahal — the only asymmetry in an otherwise perfectly symmetrical structure.`,
    facts: [
      "Designated a UNESCO World Heritage Site in 1983",
      "Considered the finest example of Mughal architecture",
      "The calligraphy on the arches slightly enlarges higher up for optical perfection",
      "A symmetrical garden (Charbagh) divides the complex into four quadrants",
      "The marble changes colour depending on sunlight and moonlight"
    ],
    cultural: "The Taj Mahal represents the pinnacle of Indo-Islamic art and is considered a living symbol of India's rich history. It draws over 8 million visitors annually and was voted one of the New Seven Wonders of the World in 2007.",
    nearbyPlaces: ["Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Itmad-ud-Daulah"]
  },

  "red fort": {
    name: "Red Fort",
    emoji: "🏯",
    location: "Chandni Chowk, Old Delhi, India",
    mapQuery: "Red+Fort+Delhi+India",
    lat: 28.6562, lng: 77.2410,
    built: "1638–1648 CE",
    builtBy: "Emperor Shah Jahan",
    style: "Mughal Architecture",
    color: "#E8A838",
    story: `The Red Fort — Lal Qila in Hindi — stands as the symbolic heart of India, an imposing fortified palace complex that served as the seat of Mughal power for nearly 200 years.

Shah Jahan moved the Mughal capital from Agra to Delhi in 1638, and construction of this massive red sandstone fort began the same year. The fort gets its distinctive name from the deep crimson hue of its massive sandstone walls, which stretch for 2.41 kilometers and stand up to 33 meters high.

Within its walls existed an entire world — a complete palace city with royal apartments, audience halls, the famous Diwan-i-Am (Hall of Public Audience) where the emperor heard petitions from ordinary citizens, and the exquisite Diwan-i-Khas (Hall of Private Audience) that once housed the legendary Peacock Throne, encrusted with diamonds, rubies, and emeralds. Above the throne was inscribed the famous couplet: "If there is paradise on earth, it is here, it is here, it is here."

The Moti Masjid (Pearl Mosque) inside the fort was added by Aurangzeb for his personal use, built entirely of white marble. The Rang Mahal (Palace of Colours) was the harem quarters, with a central pool carved from a single marble slab.

In 1857, during India's First War of Independence, the fort became the rallying point for rebel soldiers who declared the last Mughal emperor Bahadur Shah Zafar as their leader. After independence, on August 15, 1947, India's first Prime Minister Jawaharlal Nehru hoisted the national flag from its ramparts — a tradition that continues every Independence Day.`,
    facts: [
      "UNESCO World Heritage Site since 2007",
      "Spread across 254 acres inside the walls",
      "The original fort housed over 3,000 people in its prime",
      "Every Independence Day, India's PM addresses the nation from here",
      "Kohinoor diamond was once part of the treasures housed here"
    ],
    cultural: "The Red Fort is the living symbol of Indian sovereignty and national pride. It represents the extraordinary synthesis of Persian, European, and Indian architectural styles that defined Mughal art.",
    nearbyPlaces: ["Jama Masjid", "Chandni Chowk Bazaar", "Qutub Minar", "Humayun's Tomb"]
  },

  "qutub minar": {
    name: "Qutub Minar",
    emoji: "🗼",
    location: "Mehrauli, New Delhi, India",
    mapQuery: "Qutub+Minar+Delhi+India",
    lat: 28.5245, lng: 77.1855,
    built: "1193–1368 CE",
    builtBy: "Qutb ud-Din Aibak (started), later sultans",
    style: "Indo-Islamic Architecture",
    color: "#C9A84C",
    story: `The Qutub Minar soars 72.5 meters into the Delhi sky — the tallest brick minaret in the world, a tower of victory, prayer, and extraordinary craftsmanship built over centuries by successive rulers.

Construction began in 1193 by Qutb ud-Din Aibak, the founder of the Delhi Sultanate, to proclaim the arrival of Islam in the Indian subcontinent. The tower was meant to symbolize the new religious and political order, used by the muezzin to call the faithful to prayer five times a day. Aibak only managed to complete the base before his death; his successor Iltutmish added three more stories, and Firoz Shah Tughlaq added the final two in the 14th century.

The result is a tapestry of architectural evolution — the lower three floors are made of red sandstone, the top two of white marble. Each floor has a projecting balcony adorned with elaborate muqarnas (honeycomb vaulting), and the entire surface is covered with intricate Arabic inscriptions from the Quran, interlaced with decorative bands of geometric patterns and floral motifs.

Within the complex stands the mysterious Iron Pillar of Delhi, a 7-meter high, 6-tonne pillar cast around 402 CE during the Gupta Empire. Despite being over 1,600 years old and standing in the open air, it shows almost no rust — a metallurgical mystery that baffled scientists until recently. It is said that if you can encircle the pillar with your arms from behind, your wish will be granted.`,
    facts: [
      "UNESCO World Heritage Site and part of the Qutb complex",
      "The Iron Pillar inside the complex is 1,600 years old with minimal rust",
      "Has withstood multiple earthquakes over 800 years",
      "Five distinct sections built by different rulers over 175 years",
      "The first story alone has 379 steps in a spiral staircase"
    ],
    cultural: "Qutub Minar marks the beginning of Islamic rule in India and represents the extraordinary artistic synthesis between Indian craftsmen and Central Asian design that would define Indo-Islamic architecture for centuries.",
    nearbyPlaces: ["Humayun's Tomb", "Mehrauli Archaeological Park", "Lotus Temple", "Garden of Five Senses"]
  },

  "india gate": {
    name: "India Gate",
    emoji: "🏛️",
    location: "Rajpath, New Delhi, India",
    mapQuery: "India+Gate+New+Delhi+India",
    lat: 28.6129, lng: 77.2295,
    built: "1921–1931 CE",
    builtBy: "Designed by Sir Edwin Lutyens",
    style: "Neo-Classical / Triumphal Arch",
    color: "#F5EDD6",
    story: `India Gate stands as the nation's most solemn memorial — a 42-meter triumphal arch of warm Bharatpur sandstone that honors the 84,000 Indian soldiers who sacrificed their lives in World War I and the Third Anglo-Afghan War.

Designed by the renowned British architect Sir Edwin Lutyens — who also designed much of New Delhi — India Gate was inspired by the Arc de Triomphe in Paris. The foundation stone was laid by the Duke of Connaught in 1921, and it was formally dedicated by the Viceroy Lord Irwin in 1931. The names of over 13,516 British and Indian soldiers are inscribed on the walls and foundations — a permanent roll call of the fallen.

At the centre of the arch burns the Amar Jawan Jyoti (Flame of the Immortal Soldier), an eternal flame that was lit on January 26, 1972, beneath an inverted rifle topped with a helmet — the symbol of an unknown soldier. Since 1972, this flame burned without interruption until it was merged with the National War Memorial flame in 2022.

The surrounding lawns become a beloved social space for Delhi's residents every evening — families picnicking, children flying kites, vendors selling ice cream under the glow of floodlit sandstone. During Republic Day, the great procession of India's military might and cultural diversity passes directly beneath its arch.`,
    facts: [
      "Names of 13,516 soldiers are inscribed on the structure",
      "Stands 42 meters tall and 9.1 meters wide",
      "Modelled after the Arc de Triomphe in Paris",
      "Located at the eastern end of the Rajpath ceremonial boulevard",
      "Visited by over 50,000 people on Republic Day alone"
    ],
    cultural: "India Gate is the emotional centrepiece of the Indian Republic — where every national celebration converges and where the nation collectively honors its martyrs. It is among the most photographed landmarks in Asia.",
    nearbyPlaces: ["Rashtrapati Bhavan", "National War Memorial", "National Museum", "Connaught Place"]
  },

  "hawa mahal": {
    name: "Hawa Mahal",
    emoji: "🏰",
    location: "Jaipur, Rajasthan, India",
    mapQuery: "Hawa+Mahal+Jaipur+Rajasthan+India",
    lat: 26.9239, lng: 75.8267,
    built: "1799 CE",
    builtBy: "Maharaja Sawai Pratap Singh",
    style: "Rajput & Mughal Architecture",
    color: "#E8A838",
    story: `Hawa Mahal — the Palace of Winds — is perhaps the most dramatic façade in all of Indian architecture: a five-story, honeycomb-pink sandstone screen of 953 intricately latticed windows, rising like a crown from the heart of the Pink City.

Maharaja Sawai Pratap Singh built this remarkable structure in 1799 to allow the women of the royal harem — who lived in strict purdah and could not appear in public — to observe festivals, processions, and daily street life on the bazaar below without being seen themselves. The ingenious system of hundreds of small windows and perforated screens created a perfect veil of invisibility while offering complete views of the world outside.

The structure's name comes from its extraordinary ventilation system. The multitude of small windows creates a through-breeze that keeps the interior cool even in the scorching Rajasthan summer — an early form of passive air conditioning that modern engineers still marvel at. The palace is only one room deep in most places; it is essentially an elaborate screen.

The façade is shaped like the crown of Lord Krishna, reflecting the maharaja's deep devotion. Each floor has a distinct architectural character: the top three stories are built in a lighter style using red and pink sandstone with delicate marble details, while elaborate floral motifs, arched roofs, and finial spires create a visual rhythm that seems to undulate like music frozen in stone.`,
    facts: [
      "953 small windows (jharokhas) cover the façade",
      "Only one room deep — essentially an enormous ornamental screen",
      "Built in the shape of Lord Krishna's crown",
      "The wind system keeps the interior 5–10°C cooler than outside",
      "One of the most photographed buildings in Rajasthan"
    ],
    cultural: "Hawa Mahal is the defining icon of Jaipur and a masterpiece of Rajput ingenuity — a building that solved a complex social problem with extraordinary architectural elegance. It has inspired countless adaptations in contemporary Indian design.",
    nearbyPlaces: ["City Palace Jaipur", "Jantar Mantar", "Amber Fort", "Jal Mahal"]
  }
};

// =============================================
// CHAT STATE
// =============================================
let chatHistory = [];
let currentMonument = null;
let isSpeaking = false;
let speechInstance = null;
let currentMode = 'text'; // 'text' | 'lens'
let voiceSpeed = 0.9;

// =============================================
// AI RESPONSE ENGINE
// =============================================
function detectMonument(input) {
  const lower = input.toLowerCase().trim();
  for (const key of Object.keys(HERITAGE_DB)) {
    if (lower.includes(key) || key.includes(lower)) return key;
  }
  // Partial match
  for (const key of Object.keys(HERITAGE_DB)) {
    const words = key.split(' ');
    if (words.some(w => lower.includes(w) && w.length > 3)) return key;
  }
  return null;
}

function isFollowUp(input) {
  const followUpTriggers = [
    'who', 'when', 'where', 'why', 'how', 'what', 'tell me more', 'more about',
    'built', 'located', 'history', 'facts', 'interesting', 'story', 'cultural',
    'nearby', 'visit', 'hours', 'cost', 'price', 'architecture', 'style'
  ];
  const lower = input.toLowerCase();
  return followUpTriggers.some(t => lower.includes(t));
}

function generateFollowUpResponse(input, monument) {
  const lower = input.toLowerCase();
  const db = HERITAGE_DB[monument];

  if (lower.includes('built') && (lower.includes('who') || lower.includes('by')))
    return `${db.name} was built by **${db.builtBy}**. Construction spanned from ${db.built}. ${lower.includes('why') || lower.includes('reason') ? 'The monument was commissioned as ' + (monument === 'taj mahal' ? 'a mausoleum for Emperor Shah Jahan\'s beloved wife Mumtaz Mahal.' : 'a demonstration of imperial power and architectural excellence.') : ''}`;

  if (lower.includes('when') || lower.includes('year'))
    return `${db.name} was constructed during **${db.built}**, spanning the reign of ${db.builtBy}. It took decades of labor involving thousands of craftsmen from across the empire.`;

  if (lower.includes('where') || lower.includes('location') || lower.includes('located'))
    return `${db.name} is located in **${db.location}**. It sits at approximately latitude ${db.lat}°N, longitude ${db.lng}°E. ${db.nearbyPlaces ? 'Nearby attractions include: ' + db.nearbyPlaces.join(', ') + '.' : ''}`;

  if (lower.includes('nearby') || lower.includes('visit') || lower.includes('tourism'))
    return `When visiting ${db.name}, here are wonderful nearby places to explore:\n\n${db.nearbyPlaces.map((p, i) => `**${i+1}. ${p}**`).join('\n')}\n\nAll these sites are within convenient distance and form a perfect heritage trail together.`;

  if (lower.includes('facts') || lower.includes('interesting') || lower.includes('fun'))
    return `Here are fascinating facts about ${db.name}:\n\n${db.facts.map(f => `✦ ${f}`).join('\n')}`;

  if (lower.includes('cultural') || lower.includes('importance') || lower.includes('significance'))
    return db.cultural;

  if (lower.includes('architecture') || lower.includes('style') || lower.includes('design'))
    return `${db.name} is a masterpiece of **${db.style}**. ${lower.includes('material') || lower.includes('built') ? 'The construction employed thousands of skilled artisans who crafted intricate details by hand, using techniques passed down through generations.' : 'The architectural style reflects the unique synthesis of cultural influences that defined its era.'}`;

  return `That is a fascinating question about ${db.name}! ${db.story.split('\n\n')[1] || db.cultural} Is there anything more specific you would like to know about this remarkable monument?`;
}

function generateAIResponse(userInput) {
  const lower = userInput.toLowerCase().trim();

  // Greeting
  if (['hello', 'hi', 'hey', 'namaste', 'greetings'].some(g => lower === g || lower.startsWith(g + ' ')))
    return `Namaste! 🙏 Welcome to **HeritageLens AI** — your intelligent guide to India's extraordinary heritage.

I can help you explore iconic monuments with rich historical stories, fascinating facts, voice narration, and location guides.

Try asking about: **Taj Mahal**, **Red Fort**, **Qutub Minar**, **India Gate**, or **Hawa Mahal** — or use the Lens Mode to "scan" a monument!`;

  // Follow-up with context
  if (currentMonument && isFollowUp(lower) && !detectMonument(lower)) {
    return generateFollowUpResponse(userInput, currentMonument);
  }

  // Monument detection
  const key = detectMonument(lower);
  if (key) {
    currentMonument = key;
    const db = HERITAGE_DB[key];
    updateInfoPanel(key);
    return `# ${db.emoji} ${db.name}\n\n📍 *${db.location}* | 🏛️ *${db.style}* | 📅 *${db.built}*\n\n${db.story}\n\n---\n*Ask me a follow-up question — "Who built it?", "What are the facts?", or "What's nearby?"*`;
  }

  // Unknown with heritage context
  const heritageKeywords = ['monument', 'temple', 'fort', 'palace', 'mosque', 'heritage', 'ancient', 'historical', 'ruins', 'site', 'pillar', 'tower', 'arch'];
  if (heritageKeywords.some(k => lower.includes(k))) {
    return `That sounds like a fascinating heritage site! While I have deep knowledge of India's most iconic monuments — **Taj Mahal, Red Fort, Qutub Minar, India Gate,** and **Hawa Mahal** — every heritage site carries its own unique story.

India alone has over **3,500 protected monuments** under the Archaeological Survey of India, and the country has **42 UNESCO World Heritage Sites**. Each one is a chapter in the grand story of human civilization.

Would you like to explore one of the monuments in my knowledge base? Or ask me about the history of Indian heritage in general?`;
  }

  // General fallback
  return `I specialize in heritage and cultural tourism! Ask me about famous Indian monuments like the **Taj Mahal**, **Red Fort**, **Qutub Minar**, **India Gate**, or **Hawa Mahal**.

You can also:
- 📷 Switch to **Lens Mode** to simulate scanning a monument
- 🔊 Click **Listen** to hear stories narrated aloud
- 🗺️ View the **location map** of any monument

What heritage site would you like to explore today?`;
}

// =============================================
// CHAT UI
// =============================================
function appendMessage(role, text, animate = true) {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const msg = document.createElement('div');
  msg.className = `msg ${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = role === 'ai' ? '🏛️' : '👤';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';

  const formatted = formatMarkdown(text);

  if (role === 'ai' && animate) {
    bubble.innerHTML = '';
    msg.appendChild(avatar);
    msg.appendChild(bubble);
    container.appendChild(msg);
    scrollChat();
    typeText(bubble, formatted);
  } else {
    bubble.innerHTML = formatted;
    if (role === 'ai') {
      const actions = document.createElement('div');
      actions.className = 'msg-actions';
      actions.innerHTML = `
        <button class="msg-action-btn" onclick="speakText(this)">🔊 Listen</button>
        <button class="msg-action-btn" onclick="copyText(this)">📋 Copy</button>
      `;
      actions.dataset.text = text;
      bubble.appendChild(actions);
    }
    msg.appendChild(avatar);
    msg.appendChild(bubble);
    container.appendChild(msg);
    scrollChat();
  }

  chatHistory.push({ role, text });
}

function typeText(element, html, speed = 8) {
  // Strip HTML for typing, then set HTML at end
  const plain = html.replace(/<[^>]+>/g, '');
  let i = 0;
  const interval = setInterval(() => {
    element.textContent = plain.slice(0, i) + (i < plain.length ? '▌' : '');
    i += 3;
    if (i >= plain.length) {
      clearInterval(interval);
      element.innerHTML = html;
      addMsgActions(element, plain);
      scrollChat();
    }
  }, speed);
}

function addMsgActions(bubble, text) {
  const actions = document.createElement('div');
  actions.className = 'msg-actions';
  actions.innerHTML = `
    <button class="msg-action-btn" onclick="speakText(this, '${encodeURIComponent(text.slice(0, 500))}')">🔊 Listen</button>
    <button class="msg-action-btn" onclick="copyMsg(this)">📋 Copy</button>
  `;
  bubble.appendChild(actions);
}

function formatMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^# (.+)$/gm, '<h3 style="font-family:Playfair Display,serif;color:var(--gold2);margin-bottom:0.5rem">$1</h3>')
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid rgba(201,168,76,0.2);margin:0.75rem 0">')
    .replace(/✦ (.+)/g, '<div class="fact-chip">$1</div>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

function showTypingIndicator() {
  const container = document.getElementById('chatMessages');
  if (!container) return null;
  const el = document.createElement('div');
  el.className = 'msg ai'; el.id = 'typingIndicator';
  el.innerHTML = `
    <div class="msg-avatar">🏛️</div>
    <div class="msg-bubble">
      <div class="typing-indicator">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <span style="font-size:0.75rem;color:var(--text-muted);margin-left:0.5rem;font-family:'JetBrains Mono',monospace">AI is thinking…</span>
      </div>
    </div>`;
  container.appendChild(el);
  scrollChat();
  return el;
}

function scrollChat() {
  const container = document.getElementById('chatMessages');
  if (container) container.scrollTop = container.scrollHeight;
}

// =============================================
// SEND MESSAGE
// =============================================
function sendMessage(inputOverride = null) {
  const inputEl = document.getElementById('chatInput');
  const text = inputOverride || (inputEl ? inputEl.value.trim() : '');
  if (!text) return;

  appendMessage('user', text, false);
  if (inputEl) inputEl.value = '';

  const typing = showTypingIndicator();
  setTimeout(() => {
    if (typing) typing.remove();
    const response = generateAIResponse(text);
    appendMessage('ai', response, true);
  }, 900 + Math.random() * 600);
}

// =============================================
// LENS MODE
// =============================================
function activateLensMode(placeName) {
  const scanArea = document.getElementById('lensScanArea');
  const scanResult = document.getElementById('scanResult');
  const lensInput = document.getElementById('lensInput');

  if (!scanArea || !scanResult) return;

  const name = placeName || (lensInput ? lensInput.value.trim() : '');
  if (!name) { showToast('Please enter a monument name to scan!'); return; }

  scanArea.classList.add('scanning');
  scanResult.classList.remove('show');

  const key = detectMonument(name);
  const db = key ? HERITAGE_DB[key] : null;

  setTimeout(() => {
    scanArea.classList.remove('scanning');
    const displayName = db ? db.name : name;
    const emoji = db ? db.emoji : '🏛️';

    scanResult.classList.add('show');
    scanResult.innerHTML = `
      <span style="color:var(--gold2);display:block;margin-bottom:0.4rem">▶ HERITAGE LENS AI — SCAN COMPLETE</span>
      <span class="scan-line-text">${emoji} Monument identified: ${displayName}</span>
      <span style="display:block;margin-top:0.5rem;color:rgba(245,237,214,0.5)">→ Generating heritage story…</span>
    `;

    // Push to chat
    setTimeout(() => {
      sendMessage(`📷 [Lens Scan] ${displayName}`);
    }, 800);
  }, 2200);
}

// =============================================
// VOICE NARRATION
// =============================================
function speakText(btn, encodedText) {
  if (!window.speechSynthesis) { showToast('Voice not supported in this browser'); return; }

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    document.querySelectorAll('.voice-btn').forEach(b => b.classList.remove('speaking'));
    if (btn) { btn.textContent = '🔊 Listen'; }
    return;
  }

  let text = '';
  if (encodedText) {
    text = decodeURIComponent(encodedText);
  } else if (currentMonument) {
    const db = HERITAGE_DB[currentMonument];
    text = `${db.name}. Located in ${db.location}. ${db.story}`;
  } else {
    text = 'Please explore a monument first by typing its name in the chat!';
  }

  const utterance = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, '').replace(/[*#→✦▶]/g, ''));
  utterance.rate = voiceSpeed;
  utterance.pitch = 0.9;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => v.lang === 'en-IN') ||
                    voices.find(v => v.lang.startsWith('en') && v.name.includes('Female')) ||
                    voices.find(v => v.lang.startsWith('en'));
  if (preferred) utterance.voice = preferred;

  utterance.onstart = () => {
    isSpeaking = true;
    document.querySelectorAll('.voice-btn').forEach(b => b.classList.add('speaking'));
    if (btn) btn.textContent = '⏹ Stop';
    showToast('🔊 Voice narration started');
  };
  utterance.onend = () => {
    isSpeaking = false;
    document.querySelectorAll('.voice-btn').forEach(b => b.classList.remove('speaking'));
    document.querySelectorAll('.voice-btn').forEach(b => { if (!b.dataset.original) b.textContent = '🔊 Listen'; });
  };

  window.speechSynthesis.speak(utterance);
}

function narrate() {
  speakText(null, null);
}

function updateVoiceSpeed(val) {
  voiceSpeed = parseFloat(val);
  const label = document.getElementById('speedLabel');
  if (label) label.textContent = val + 'x';
}

// =============================================
// INFO PANEL UPDATES
// =============================================
function updateInfoPanel(key) {
  const db = HERITAGE_DB[key];
  if (!db) return;

  // Update map label
  const mapLabel = document.getElementById('mapLocationLabel');
  if (mapLabel) mapLabel.textContent = `📍 ${db.location}`;

  // Update map iframe if present
  const mapIframe = document.getElementById('mapIframe');
  if (mapIframe) {
    mapIframe.style.display = 'block';
    mapIframe.src = `https://maps.google.com/maps?q=${db.mapQuery}&output=embed`;
  }
  const mapPlaceholder = document.getElementById('mapPlaceholder');
  if (mapPlaceholder) mapPlaceholder.style.display = 'none';

  // Update facts
  const factsList = document.getElementById('factsList');
  if (factsList) {
    factsList.innerHTML = db.facts.slice(0, 3).map(f => `<div class="fact-chip">${f}</div>`).join('');
  }

  // Update gallery
  updateGallery(db);

  // Update current monument name
  const currentName = document.getElementById('currentMonumentName');
  if (currentName) currentName.textContent = `${db.emoji} ${db.name}`;
}

function updateGallery(db) {
  const grid = document.getElementById('imgGrid');
  if (!grid) return;

  const visuals = [
    { emoji: db.emoji, label: 'Main View' },
    { emoji: '🌅', label: 'Dawn View' },
    { emoji: '🌙', label: 'Night View' },
    { emoji: '🎨', label: 'Art Detail' },
    { emoji: '🏔️', label: 'Landscape' },
    { emoji: '🔍', label: 'Close-Up' }
  ];

  grid.innerHTML = visuals.map((v, i) => `
    <div class="img-thumb" onclick="openModal('${db.name}', '${v.label}', '${v.emoji}')">
      <span>${v.emoji}</span>
      <div class="img-overlay">🔍</div>
    </div>
  `).join('');
}

// =============================================
// MODAL
// =============================================
function openModal(name, view, emoji) {
  const overlay = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  if (!overlay) return;

  if (modalImg) { modalImg.textContent = emoji; }
  if (modalTitle) modalTitle.textContent = `${name} — ${view}`;
  if (modalDesc) modalDesc.textContent = `${view} of ${name}. ${HERITAGE_DB[detectMonument(name)]?.cultural?.slice(0, 120) || 'One of India\'s most treasured heritage monuments.'}…`;

  overlay.classList.add('open');
}

function closeModal() {
  const overlay = document.getElementById('imgModal');
  if (overlay) overlay.classList.remove('open');
}

// =============================================
// MODE SWITCHING
// =============================================
function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`mode-${mode}`);
  if (btn) btn.classList.add('active');

  const textPanel = document.getElementById('textModePanel');
  const lensPanel = document.getElementById('lensModePanel');

  if (mode === 'text') {
    if (textPanel) textPanel.style.display = 'flex';
    if (lensPanel) lensPanel.style.display = 'none';
  } else {
    if (textPanel) textPanel.style.display = 'none';
    if (lensPanel) lensPanel.style.display = 'block';
  }

  showToast(mode === 'lens' ? '📷 Lens Mode activated' : '💬 Text Mode activated');
}

// =============================================
// QUICK TAGS
// =============================================
function sendQuickTag(text) {
  sendMessage(text);
}

// =============================================
// COPY
// =============================================
function copyMsg(btn) {
  const bubble = btn.closest('.msg-bubble');
  if (!bubble) return;
  const text = bubble.innerText.replace(/🔊 Listen|📋 Copy/g, '').trim();
  navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!'));
}

// =============================================
// TOAST
// =============================================
function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast'; toast.id = 'globalToast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// =============================================
// SCROLL ANIMATIONS
// =============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

// =============================================
// NAV MOBILE TOGGLE
// =============================================
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }

  // Set active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// =============================================
// KEYBOARD SHORTCUTS
// =============================================
function initKeyboard() {
  const input = document.getElementById('chatInput');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); sendMessage();
      }
    });
    // Auto-resize
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
  }
}

// =============================================
// INIT WELCOME MESSAGE
// =============================================
function initDemo() {
  setTimeout(() => {
    appendMessage('ai', `Namaste! 🙏 Welcome to **HeritageLens AI** — your intelligent cultural heritage companion.

I can tell you rich historical stories about India's greatest monuments, narrate them aloud, show you locations, and even let you "scan" places with the **Heritage Lens Mode**.

**Try these popular monuments:**`, false);

    // Preload gallery with Taj Mahal
    updateInfoPanel('taj mahal');
    currentMonument = 'taj mahal';
  }, 400);
}

// =============================================
// VOICES LOAD
// =============================================
window.speechSynthesis && window.speechSynthesis.addEventListener('voiceschanged', () => {
  // voices loaded
});

// =============================================
// DOM READY
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initKeyboard();

  if (document.getElementById('chatMessages')) {
    initDemo();
  }

  // Modal close on overlay click
  const modal = document.getElementById('imgModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
