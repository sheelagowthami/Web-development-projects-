// ============================
// HERITAGELENS AI
// PREMIUM SCRIPT
// ============================

let chatHistory = [];

// MONUMENT DATABASE

const monumentDatabase = {

"taj mahal": {
location:"Agra, Uttar Pradesh",
year:"1632–1653",
builder:"Emperor Shah Jahan",
info:"The Taj Mahal is one of the world's most famous monuments and a UNESCO World Heritage Site. Built in memory of Mumtaz Mahal, it symbolizes eternal love and Mughal architecture excellence.",
map:"https://maps.google.com/?q=Taj+Mahal"
},

"hampi": {
location:"Karnataka",
year:"14th Century",
builder:"Vijayanagara Empire",
info:"Hampi was the capital of the Vijayanagara Empire and is known for its stunning temple complexes and ancient ruins.",
map:"https://maps.google.com/?q=Hampi"
},

"red fort": {
location:"Delhi",
year:"1638",
builder:"Shah Jahan",
info:"The Red Fort served as the main residence of Mughal emperors and is a major symbol of Indian history.",
map:"https://maps.google.com/?q=Red+Fort"
},

"qutub minar": {
location:"Delhi",
year:"1193",
builder:"Qutb ud-Din Aibak",
info:"The Qutub Minar is the tallest brick minaret in the world and a UNESCO heritage site.",
map:"https://maps.google.com/?q=Qutub+Minar"
},

"mysore palace": {
location:"Karnataka",
year:"1912",
builder:"Wodeyar Dynasty",
info:"Mysore Palace is one of India's most visited monuments and showcases Indo-Saracenic architecture.",
map:"https://maps.google.com/?q=Mysore+Palace"
},

"konark": {
location:"Odisha",
year:"1250 CE",
builder:"King Narasimhadeva I",
info:"Konark Sun Temple is designed as a gigantic stone chariot dedicated to the Sun God.",
map:"https://maps.google.com/?q=Konark+Sun+Temple"
},

"victoria memorial": {
location:"Kolkata",
year:"1921",
builder:"British Government",
info:"Victoria Memorial is a magnificent marble monument dedicated to Queen Victoria.",
map:"https://maps.google.com/?q=Victoria+Memorial"
},

"eiffel tower": {
location:"Paris, France",
year:"1889",
builder:"Gustave Eiffel",
info:"The Eiffel Tower is one of the world's most recognizable landmarks and a symbol of France.",
map:"https://maps.google.com/?q=Eiffel+Tower"
},

"colosseum": {
location:"Rome, Italy",
year:"80 AD",
builder:"Emperor Titus",
info:"The Colosseum is the largest ancient amphitheater ever built and a major Roman landmark.",
map:"https://maps.google.com/?q=Colosseum"
},

"great wall": {
location:"China",
year:"7th Century BC",
builder:"Various Chinese Dynasties",
info:"The Great Wall of China is one of the greatest engineering achievements in history.",
map:"https://maps.google.com/?q=Great+Wall+of+China"
}

};

// ============================
// CHAT SYSTEM
// ============================

function sendMessage(){

const input = document.getElementById("userInput");

if(!input) return;

const text = input.value.trim();

if(text === "") return;

addMessage(text,"user");

chatHistory.push(text);

input.value="";

showTyping();

setTimeout(()=>{

removeTyping();

const reply = fakeAIResponse(text);

typeWriter(reply);

},1200);

}

// ============================
// AI RESPONSE
// ============================

function fakeAIResponse(userText){

const query = userText.toLowerCase();

for(let key in monumentDatabase){

if(query.includes(key)){

let monument = monumentDatabase[key];

return `
🏛 Monument: ${key.toUpperCase()}

📍 Location:
${monument.location}

👷 Builder:
${monument.builder}

📅 Construction:
${monument.year}

📖 History:
${monument.info}

🌍 Tourism Value:
A major cultural and tourism destination attracting visitors from around the world.

⭐ Heritage Importance:
Represents architectural excellence and cultural identity.

🗺 Map:
${monument.map}
`;

}

}

return `
Hello! I am HeritageLens AI.

Try asking about:

• Taj Mahal
• Hampi
• Red Fort
• Qutub Minar
• Mysore Palace
• Konark Sun Temple
• Victoria Memorial
• Eiffel Tower
• Colosseum
• Great Wall of China

I can provide history, builders, tourism significance and cultural importance.
`;

}

// ============================
// CHAT UI
// ============================

function addMessage(message,type){

const container =
document.getElementById("chatMessages");

if(!container) return;

const div =
document.createElement("div");

div.className =
`message ${type}-message`;

div.innerText = message;

container.appendChild(div);

container.scrollTop =
container.scrollHeight;

}

// ============================
// TYPING
// ============================

function showTyping(){

const container =
document.getElementById("chatMessages");

const div =
document.createElement("div");

div.className =
"message ai-message typing";

div.id =
"typingIndicator";

div.innerHTML =
"🤖 HeritageLens AI is thinking...";

container.appendChild(div);

}

function removeTyping(){

const typing =
document.getElementById("typingIndicator");

if(typing){

typing.remove();

}

}

function typeWriter(text){

const container =
document.getElementById("chatMessages");

const div =
document.createElement("div");

div.className =
"message ai-message";

container.appendChild(div);

let i = 0;

const speed = 10;

const interval = setInterval(()=>{

if(i < text.length){

div.innerHTML += text.charAt(i);

i++;

}else{

clearInterval(interval);

}

},speed);

container.scrollTop =
container.scrollHeight;

}

// ============================
// VOICE
// ============================

let speechInstance;

function speakText(text){

speechInstance =
new SpeechSynthesisUtterance(text);

speechInstance.rate = 1;

speechInstance.pitch = 1;

speechSynthesis.speak(speechInstance);

}

function stopSpeech(){

speechSynthesis.cancel();

}

// ============================
// IMAGE SCANNER
// ============================

function scanMonument(){

const fileInput =
document.getElementById("imageInput");

if(!fileInput || !fileInput.files[0]){

alert("Please upload an image.");

return;

}

showTyping();

setTimeout(()=>{

removeTyping();

typeWriter(`
📷 HeritageLens Scan Result

Detected Monument:
Taj Mahal (Demo Recognition)

Confidence:
96%

Location:
Agra, Uttar Pradesh

UNESCO World Heritage Site

AI Analysis:
One of the finest examples of Mughal architecture and among the most visited heritage sites in the world.
`);

},1500);

}

// ============================
// MAP
// ============================

function generateMapLink(monument){

const place =
encodeURIComponent(monument);

return
`https://maps.google.com/?q=${place}`;

}

// ============================
// IMAGE MODAL
// ============================

function openModal(src){

const modal =
document.getElementById("imageModal");

const image =
document.getElementById("modalImage");

if(!modal || !image) return;

modal.style.display="flex";

image.src = src;

}

function closeModal(){

const modal =
document.getElementById("imageModal");

if(modal){

modal.style.display="none";

}

}

// ============================
// AUTO MONUMENT FROM URL
// ============================

window.onload = function(){

const params =
new URLSearchParams(
window.location.search
);

const place =
params.get("place");

if(place){

setTimeout(()=>{

const reply =
fakeAIResponse(place);

typeWriter(reply);

},800);

}

};
