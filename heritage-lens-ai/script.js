// Shared AI state
let lastAnswer = "";

/* ---------------- CHAT SYSTEM ---------------- */

function addMessage(text, type) {
  const chat = document.getElementById("chat");

  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

/* TYPE EFFECT */
function typeText(text, container) {
  let i = 0;
  container.innerHTML = "";

  function run() {
    if (i < text.length) {
      container.innerHTML += text[i];
      i++;
      setTimeout(run, 15);
    }
  }
  run();
}

/* SEND MESSAGE */
async function sendMessage() {
  const input = document.getElementById("input");
  if (!input) return;

  const text = input.value;
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const reply = await askAI(text);
  lastAnswer = reply;

  const div = document.createElement("div");
  div.className = "msg ai";

  document.getElementById("chat").appendChild(div);
  typeText(reply, div);
}

/* ---------------- VOICE ---------------- */

function speak() {
  if (!lastAnswer) return;

  const speech = new SpeechSynthesisUtterance(lastAnswer);
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

function stopSpeak() {
  window.speechSynthesis.cancel();
}

/* ---------------- CAMERA WRAPPER ---------------- */

function startCamera() {
  if (typeof window.startCamera === "function") {
    window.startCamera();
  }
}

function capture() {
  if (typeof window.capture === "function") {
    window.capture();
  }
}
