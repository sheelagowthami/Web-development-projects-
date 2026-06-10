let memory = [];

function sendMessage() {
  let input = document.getElementById("user-input");
  let text = input.value;
  if (!text) return;

  appendMessage("You", text);
  memory.push(text);

  setTimeout(() => {
    fakeAIResponse(text);
  }, 800);

  input.value = "";
}

function fakeAIResponse(msg) {
  let response = "";

  if (msg.toLowerCase().includes("taj")) {
    response = "Taj Mahal is a symbol of eternal love built by Shah Jahan.";
  } 
  else if (msg.toLowerCase().includes("red fort")) {
    response = "Red Fort was the main residence of Mughal emperors.";
  } 
  else {
    response = "This is an AI-generated heritage insight based on historical patterns.";
  }

  typeWriter("AI", response);
}

function appendMessage(sender, text) {
  let log = document.getElementById("chat-log");
  log.innerHTML += `<p><b>${sender}:</b> ${text}</p>`;
  log.scrollTop = log.scrollHeight;
}

function typeWriter(sender, text) {
  let log = document.getElementById("chat-log");
  let i = 0;
  let msg = document.createElement("p");
  msg.innerHTML = `<b>${sender}:</b> `;
  log.appendChild(msg);

  let interval = setInterval(() => {
    msg.innerHTML = `<b>${sender}:</b> ` + text.substring(0, i);
    i++;
    if (i > text.length) clearInterval(interval);
  }, 30);
}

function speakText() {
  let speech = new SpeechSynthesisUtterance();
  speech.text = memory[memory.length - 1] || "Ask something first";
  window.speechSynthesis.speak(speech);
}

function openModal(name) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-title").innerText = name;
  document.getElementById("modal-text").innerText =
    name + " is one of India's iconic heritage monuments.";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function startScan() {
  appendMessage("System", "Scanning monument...");
  setTimeout(() => {
    appendMessage("AI", "Analysis complete: Historical structure detected.");
  }, 1500);
}
