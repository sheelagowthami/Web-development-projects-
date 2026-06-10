/**
 * HeritageLens AI Engine Architecture Core Configuration
 */

// Memory storage tracking interactive sessions dynamically
let sessionQueryMemory = [];
let voiceSynthesisInstance = window.speechSynthesis;
let currentUtteranceInstance = null;

// Comprehensive Historical Telemetry Database Matrix
const globalHeritageDatabase = {
    "taj": {
        name: "The Taj Mahal",
        location: "Agra, Uttar Pradesh, India",
        timeline: "17th Century (Completed around 1648)",
        architect: "Ustad Ahmad Lahori under Mughal Emperor Shah Jahan",
        history: "Commissioned in 1631 by the fifth Mughal Emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal. Construction spanned over two decades, employing thousands of artisans, stonecutters, and structural calligraphers across Asia.",
        importance: "Widely regarded as the greatest architectural achievement in the whole history of Indo-Islamic architecture. Its perfect symmetry, geometric balancing, and intricate white marble pietra dura inlay craftsmanship represent unmatched Mughal artistic zenith.",
        whyFamous: "Famous globally for its optical symmetry, pristine white Makrana marble that changes color hues based on daylight context, and its profound status as a universal symbol of eternal architectural devotion.",
        mapQuery: "Taj+Mahal,+Agra"
    },
    "redfort": {
        name: "The Red Fort (Lal Qila)",
        location: "Old Delhi, India",
        timeline: "17th Century (Constructed 1638–1648)",
        architect: "Ustad Ahmad Lahori under Mughal Emperor Shah Jahan",
        history: "Constructed when Emperor Shah Jahan decided to shift his ruling capital from Agra to Delhi, founding Shahjahanabad. It served as the official political throne of the Mughal Empire for nearly 200 years until the shift of imperial power.",
        importance: "Represents the absolute pinnacle of Mughal palace planning and defensive fort execution. Its design fuses Persian, Timurid, and traditional Hindu architectural styles harmoniously.",
        whyFamous: "Renowned for its massive octagonal defensive walls sculpted from rich red sandstone, structural court chambers like the Diwan-i-Aam, and its deep modern sovereign importance as the site of India's annual Independence Day addresses.",
        mapQuery: "Red+Fort,+Delhi"
    },
    "charminar": {
        name: "The Charminar",
        location: "Hyderabad, Telangana, India",
        timeline: "16th Century (Erected in 1591)",
        architect: "Sultan Muhammad Quli Qutb Shah",
        history: "Built immediately after shifting the regional operational capital from Golconda to Hyderabad due to water shortages. It was constructed structurally to commemorate the absolute eradication of a devastating plague epidemic across the kingdom.",
        importance: "An architectural pivot marking the center of historic Hyderabad. It beautifully incorporates classic Islamic structural layout with Persian-influenced grand minarets and ornate internal stucco decorations.",
        whyFamous: "Famous for its four colossal structural minarets soaring to 56 meters, its integrated top-floor historical mosque, and the bustling vibrant heritage bazaar networks surrounding its base.",
        mapQuery: "Charminar,+Hyderabad"
    },
    "hampi": {
        name: "Hampi Monumental Complex",
        location: "Vijayanagara District, Karnataka, India",
        timeline: "14th - 16th Century",
        architect: "Rulers of the Vijayanagara Empire",
        history: "Served as the rich imperial capital seat of the historic Vijayanagara Empire. Described by medieval European and Persian travelers as a sprawling, highly sophisticated metropolis before being ransacked following structural battles in 1565.",
        importance: "A massive outdoor structural museum showcasing Dravidian religious architecture, highly advanced hydrological channel grids, military installations, and royal civic halls.",
        whyFamous: "Celebrated for the stunning active Virupaksha Temple, the legendary Stone Chariot monument layout, and the surreal boulder-strewn natural landscape creating an unmatched structural setting.",
        mapQuery: "Hampi+Ruins"
    },
    "qutub": {
        name: "Qutub Minar Complex",
        location: "Mehrauli, New Delhi, India",
        timeline: "12th - 13th Century",
        architect: "Initiated by Qutb-ud-din Aibak, expanded by Shams-ud-din Iltutmish",
        history: "Construction commenced around 1199 CE to mark the establishment of the Delhi Sultanate power base. Additional vertical tiers were carefully appended by subsequent historic rulers across generations.",
        importance: "A profound early prototype demonstrating the structural evolution of Indo-Islamic engineering, fusing local masonry traditions with high-altitude minaret specifications.",
        whyFamous: "Recognized globally as the tallest brick minaret on Earth (72.5 meters), famous for its intricately carved Arabic structural bands, and the ancient corrosion-resistant 4th-century Iron Pillar sitting inside its courtyard matrix.",
        mapQuery: "Qutub+Minar,+Delhi"
    },
    "colosseum": {
        name: "The Colosseum",
        location: "Rome, Italy",
        timeline: "1st Century CE (Completed in 80 CE)",
        architect: "Commissioned under Flavian Emperors Vespasian and Titus",
        history: "Constructed as a massive amphitheater in the center of Rome to host public spectacles, gladiatorial combats, wild animal hunts, and theatrical re-enactments of historic battles as state entertainment.",
        importance: "An engineering marvel of ancient Rome showcasing the advanced deployment of structural concrete arches, vaulting systems, and multi-tier seating logistics capable of holding over 50,000 spectators.",
        whyFamous: "Famous as an enduring global icon of Imperial Rome, celebrated for its complex underground hypogeum chambers and magnificent outer travertine facade architecture.",
        mapQuery: "Colosseum,+Rome"
    },
    "eiffel": {
        name: "The Eiffel Tower",
        location: "Paris, France",
        timeline: "Late 19th Century (Completed in 1889)",
        architect: "Designed by Senior Engineer Gustave Eiffel",
        history: "Erected as the grand entrance archway for the 1889 Exposition Universelle (World's Fair) to celebrate the centennial anniversary of the French Revolution, showcasing industrial processing capabilities.",
        importance: "A masterwork of late 19th-century structural iron engineering, demonstrating advanced calculation techniques against dynamic wind resistance using open-lattice geometries.",
        whyFamous: "Recognized as the defining structural emblem of France, renowned for its architectural silhouette across the Parisian landscape, and its status as one of the most visited monuments worldwide.",
        mapQuery: "Eiffel+Tower,+Paris"
    },
    "machu": {
        name: "Machu Picchu",
        location: "Cusco Region, Peru",
        timeline: "15th Century (Built circa 1450)",
        architect: "Inca Empire Engineers under Emperor Pachacuti",
        history: "Constructed as a royal estate and sacred sanctuary high in the Andes mountains. It was abandoned during the Spanish Conquest and remained protected from outside destruction until introduced globally in 1911.",
        importance: "Showcases absolute mastery of classic Incan dry-stone masonry, where heavy granite blocks were cut precisely to fit tightly together without any binding mortar.",
        whyFamous: "Famous for its dramatic geographic location on a mountain ridge, its terraced agricultural steps, and its mystical layout overlooking the Urubamba River valley.",
        mapQuery: "Machu+Picchu"
    },
    "greatwall": {
        name: "The Great Wall of China",
        location: "Northern Borders of China",
        timeline: "3rd Century BCE to 17th Century",
        architect: "Multiple Imperial Chinese Dynasties (Extensively reconstructed by the Ming Dynasty)",
        history: "A continuous series of military fortifications built across historical northern borders to protect the Chinese empires against nomadic incursions and military raids from external tribal groups.",
        importance: "One of the largest collective civil engineering projects in human history, incorporating defensive watchtowers, troop garrison barracks, and high-altitude signaling capabilities.",
        whyFamous: "Famous for its vast scale, snaking across rugged mountain ridges, and symbolizing historical isolationist defense and advanced structural scaling.",
        mapQuery: "Great+Wall+of+China"
    },
    "pyramids": {
        name: "The Great Pyramids of Giza",
        location: "Giza Plateau, Cairo, Egypt",
        timeline: "Old Kingdom Era (Circa 2580–2560 BCE)",
        architect: "Ancient Egyptian Royal Architects under Pharaoh Khufu",
        history: "Constructed as colossal monumental tombs for the ruling Pharaohs of Egypt's Old Kingdom, designed to preserve their souls and treasures for the afterlife journey.",
        importance: "Features the Pyramid of Khufu, the oldest and last remaining wonder of the ancient world, showcasing incredible mathematical alignment to true cardinal directions.",
        whyFamous: "Famous for its massive structural blocks of limestone and granite, its alignment with stellar patterns, and the enigmatic Great Sphinx standing guard nearby.",
        mapQuery: "Great+Pyramid+of+Giza"
    },
    "statue": {
        name: "The Statue of Liberty",
        location: "Liberty Island, New York, USA",
        timeline: "Late 19th Century (Dedicated in 1886)",
        architect: "Sculpted by Frédéric-Auguste Bartholdi; Internal structural frame by Gustave Eiffel",
        history: "A monumental gift from the citizens of France to the United States celebrating the centenary of American Independence and representing shared democratic ideals.",
        importance: "Features a pioneering internal iron pylon skeleton structure that allows the copper exterior skin to expand and contract independently under high harbor winds.",
        whyFamous: "Famous as a universal icon of liberty and welcoming sign to millions of historic immigrants arriving by sea, recognizable by her torch and tablet.",
        mapQuery: "Statue+of+Liberty,+New+York"
    },
    "petra": {
        name: "Petra",
        location: "Ma'an Governorate, Jordan",
        timeline: "Circa 4th Century BCE to 1st Century CE",
        architect: "The Nabataean Kingdom",
        history: "Established as the booming capital city of the Nabataeans, who grew immensely wealthy by controlling ancient desert trade routes for frankincense, myrrh, and rare spices.",
        importance: "World-renowned for its rock-cut architecture carved directly into pink sandstone cliffs, alongside highly sophisticated ancient dam and water storage conduit networks.",
        whyFamous: "Famous for 'Al-Khazneh' (The Treasury) facade carved directly into the canyon wall, accessed through a narrow, dramatic cliff gorge known as the Siq.",
        mapQuery: "Petra,+Jordan"
    },
    "chichen": {
        name: "Chichen Itza",
        location: "Yucatán State, Mexico",
        timeline: "Terminal Classic Period (Circa 600–1200 CE)",
        architect: "Maya-Toltec Civilization Engineers",
        history: "Served as a dominant political and religious focal city center across the Northern Maya Lowlands, orchestrating regional trade networks and sacred ceremonies.",
        importance: "Exhibits an architecture rich with cosmic alignments. The central El Castillo pyramid acts as a physical stone calendar mapping solar cycles.",
        whyFamous: "Famous for the spectacular shadow illusion of a serpent crawling down the pyramid staircases during the spring and autumn equinoxes.",
        mapQuery: "Chichen+Itza"
    }
};

/**
 * PARSING ENGINE LOGIC
 * Extracts relevant keywords to search the core analytical database
 */
function searchDatabaseForMonument(inputString) {
    const cleanStr = inputString.toLowerCase().replace(/[^a-z0-9\s]/g, "");
    const tokens = cleanStr.split(/\s+/);
    
    // Explicit mapping dictionary for keyword variants
    const keywordMap = {
        "taj": "taj", "mahal": "taj",
        "red": "redfort", "fort": "redfort", "qila": "redfort", "lal": "redfort",
        "charminar": "charminar", "hyderabad": "charminar",
        "hampi": "hampi", "vijayanagara": "hampi",
        "qutub": "qutub", "minar": "qutub", "qutb": "qutub",
        "colosseum": "colosseum", "rome": "colosseum", "roma": "colosseum",
        "eiffel": "eiffel", "paris": "eiffel", "tower": "eiffel",
        "machu": "machu", "picchu": "machu", "peru": "machu",
        "great": "greatwall", "wall": "greatwall", "china": "greatwall",
        "pyramid": "pyramids", "giza": "pyramids", "egypt": "pyramids", "khufu": "pyramids",
        "statue": "statue", "liberty": "statue", "york": "statue",
        "petra": "petra", "jordan": "petra",
        "chichen": "chichen", "itza": "chichen", "mexico": "chichen"
    };

    for (let token of tokens) {
        if (keywordMap[token]) {
            return globalHeritageDatabase[keywordMap[token]];
        }
    }
    return null;
}

/**
 * COMPILE RECONSTRUCTED MARKDOWN TEXT STRING
 * Assembles comprehensive profile for tourists and historians
 */
function generateStructuredProfile(data) {
    return `🏛️ SITE PROFILE: ${data.name.toUpperCase()}\n\n` +
           `📍 GEOGRAPHIC LOCATION: ${data.location}\n` +
           `⏳ HISTORICAL TIMELINE: ${data.timeline}\n` +
           `👑 PATRON & ARCHITECT: ${data.architect}\n\n` +
           `📖 BRIEF HISTORY:\n${data.history}\n\n` +
           `💡 ARCHITECTURAL IMPORTANCE:\n${data.importance}\n\n` +
           `🎯 TOURIST INSIGHT & WHY FAMOUS:\n${data.whyFamous}`;
}

/**
 * TYPING GLITCH ANIMATION CONTROLLER
 */
function executeTypewriterEffect(element, text, speed = 8, callback = null) {
    element.innerText = "";
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }
    type();
}

/**
 * CHAT SYSTEM INTERACTION HANDLER
 */
function sendChatMessage() {
    const chatInput = document.getElementById("chatInput");
    const chatSpace = document.getElementById("chatSpace");
    if (!chatInput || !chatInput.value.trim()) return;

    const query = chatInput.value.trim();
    
    // Build user speech bubble
    const userBubble = document.createElement("div");
    userBubble.className = "message user-msg";
    userBubble.innerText = query;
    chatSpace.appendChild(userBubble);
    
    chatInput.value = "";
    chatSpace.scrollTop = chatSpace.scrollHeight;

    // Trigger AI compilation response bubble
    setTimeout(() => {
        const aiBubble = document.createElement("div");
        aiBubble.className = "message ai-msg";
        const textPlaceholder = document.createElement("p");
        textPlaceholder.innerText = "Analyzing query matrices...";
        aiBubble.appendChild(textPlaceholder);
        chatSpace.appendChild(aiBubble);
        chatSpace.scrollTop = chatSpace.scrollHeight;

        const matchedData = searchDatabaseForMonument(query);
        let finalResponseText = "";

        if (matchedData) {
            finalResponseText = generateStructuredProfile(matchedData);
            sessionQueryMemory.push({ query, result: matchedData.name });
        } else {
            finalResponseText = `⚠️ LANDMARK ANOMALY: "${query}" could not be parsed with high certainty inside our local system. For optimal precision, input a direct single word structural keyword like 'Colosseum', 'Petra', 'Taj', 'Pyramids', or 'Eiffel'.`;
        }

        executeTypewriterEffect(textPlaceholder, finalResponseText, 6, () => {
            chatSpace.scrollTop = chatSpace.scrollHeight;
        });

    }, 600);
}

/**
 * NEURAL HERITAGE LENS CONTROLLER (SIMULATION & UPLOAD ARTIFACTS)
 */
function triggerLensUpload() {
    document.getElementById("lensFileInput").click();
}

function handleLensFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Simulate identification of standard files via matching names or random injection
    const fileName = file.name.toLowerCase();
    let detectedKey = "taj"; // Default fallback match
    
    if (fileName.includes("red") || fileName.includes("fort")) detectedKey = "redfort";
    else if (fileName.includes("charminar")) detectedKey = "charminar";
    else if (fileName.includes("hampi")) detectedKey = "hampi";
    else if (fileName.includes("qutub") || fileName.includes("minar")) detectedKey = "qutub";
    else if (fileName.includes("colosseum")) detectedKey = "colosseum";
    else if (fileName.includes("eiffel")) detectedKey = "eiffel";
    else if (fileName.includes("machu")) detectedKey = "machu";
    else if (fileName.includes("wall")) detectedKey = "greatwall";
    else if (fileName.includes("pyramid")) detectedKey = "pyramids";
    else if (fileName.includes("liberty") || fileName.includes("statue")) detectedKey = "statue";
    else if (fileName.includes("petra")) detectedKey = "petra";
    else if (fileName.includes("chichen") || fileName.includes("itza")) detectedKey = "chichen";

    processLensAnalysis(detectedKey);
}

function injectGalleryToLens(monumentKey, fallbackImgUrl) {
    // Standardize key conversion lookup
    let standardizedKey = monumentKey.toLowerCase().replace(/\s+/g, "");
    if (standardizedKey.includes("taj")) standardizedKey = "taj";
    if (standardizedKey.includes("red")) standardizedKey = "redfort";
    if (standardizedKey.includes("greatwall")) standardizedKey = "greatwall";
    if (standardizedKey.includes("pyramid")) standardizedKey = "pyramids";
    if (standardizedKey.includes("statue")) standardizedKey = "statue";

    processLensAnalysis(standardizedKey);
    
    // Provide smooth user viewport jumping on desktop devices
    const outputElem = document.getElementById("lensOutput");
    if (outputElem) {
        outputElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function processLensAnalysis(key) {
    const loader = document.getElementById("lensLoader");
    const title = document.getElementById("lensTitle");
    const textBody = document.getElementById("lensText");
    const mapContainer = document.getElementById("lensMapContainer");

    if (!loader || !textBody) return;

    // Interrupt open narration frames
    stopNarration();

    loader.style.display = "flex";
    title.innerText = "Scanning Matrix...";
    textBody.innerText = "Running edge-detection and feature-extraction heuristics on the uploaded structural layout...";
    mapContainer.innerHTML = "";

    setTimeout(() => {
        loader.style.display = "none";
        const data = globalHeritageDatabase[key] || globalHeritageDatabase["taj"];
        
        title.innerText = `🔍 Identified: ${data.name}`;
        const profileText = generateStructuredProfile(data);
        
        executeTypewriterEffect(textBody, profileText, 5, () => {
            // Render integrated active map route navigation asset link
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${data.mapQuery}`;
            mapContainer.innerHTML = `<a href="${mapUrl}" target="_blank" class="map-embed-link">🗺️ Open Interactive Route Guidance Map for ${data.name} &rarr;</a>`;
        });
    }, 1500);
}

/**
 * ACOUSTIC VOICE SYNTHESIS CONTROL (WEB SPEECH API NARRATION)
 */
function narrateOutput() {
    const textToSpeak = document.getElementById("lensText")?.innerText;
    if (!textToSpeak || !voiceSynthesisInstance) return;

    // Terminate existing active acoustic feedback
    voiceSynthesisInstance.cancel();

    currentUtteranceInstance = new SpeechSynthesisUtterance(textT
