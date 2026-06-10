const chat = document.getElementById("chat");

let lastResponse = "";

/* ---------------- CHAT ---------------- */

function addMsg(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

/* TYPEWRITER AI */
function typeMessage(text, type) {
  const div = document.createElement("div");
  div.className = "msg ai";
  chat.appendChild(div);

  let i = 0;
  function type() {
    if (i < text.length) {
      div.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 20);
    }
  }
  type();
}

/* SIMPLE AI ENGINE */
function getAI(input) {
  input = input.toLowerCase();

  if (input.includes("taj")) {
    return "The Taj Mahal was built by Shah Jahan in memory of Mumtaz Mahal. It is one of the Seven Wonders of the World.";
  }

  if (input.includes("charminar")) {
    return "Charminar is a historic monument built in 1591 in Hyderabad by Muhammad Quli Qutb Shah.";
  }

  if (input.includes("red fort")) {
    return "The Red Fort is a UNESCO World Heritage Site built by Shah Jahan in Delhi.";
  }

  return "I am still learning. Try asking about Taj Mahal, Charminar, or Red Fort.";
}

/* SEND MESSAGE */
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value;
  if (!text) return;

  addMsg(text, "user");
  input.value = "";

  const reply = getAI(text);
  lastResponse = reply;

  setTimeout(() => {
    typeMessage(reply, "ai");
  }, 600);
}

/* ---------------- LENS SCAN ---------------- */

function lensScan() {
  const input = document.getElementById("lensInput");
  const status = document.getElementById("scanStatus");

  if (!input.value) return;

  status.innerHTML = "🔍 Scanning...";
  status.className = "scan";

  setTimeout(() => {
    status.innerHTML = "✔ Monument Identified: " + input.value;
    status.className = "";

    const reply = getAI(input.value);
    lastResponse = reply;

    typeMessage("📷 Lens AI: " + reply, "ai");
  }, 2000);
}

/* ---------------- VOICE ---------------- */

function speakLast() {
  if (!lastResponse) return;

  const speech = new SpeechSynthesisUtterance(lastResponse);
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

function stopSpeech() {
  window.speechSynthesis.cancel();
}

/* ---------------- IMAGE MODAL DEMO ---------------- */

function openModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
