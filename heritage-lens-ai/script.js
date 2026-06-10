const chat = document.getElementById("chat");

let memory = [];
let lastAnswer = "";

/* ---------------- AI CORE ---------------- */

/*
  LEVEL 3 AI SYSTEM:
  - If API key exists → real AI (OpenAI)
  - Else → smart fallback AI engine
*/

const OPENAI_API_KEY = ""; // 🔴 optional (leave empty for fallback mode)

/* ADD MESSAGE */
function add(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

/* ---------------- REAL AI CALL ---------------- */
async function askAI(prompt) {
  if (!OPENAI_API_KEY) {
    return fallbackAI(prompt);
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a heritage tourism AI expert." },
          ...memory,
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "No response.";
  } catch (e) {
    return fallbackAI(prompt);
  }
}

/* ---------------- FALLBACK AI ---------------- */
function fallbackAI(text) {
  text = text.toLowerCase();

  if (text.includes("taj")) {
    return "The Taj Mahal is a Mughal masterpiece built by Shah Jahan in memory of Mumtaz Mahal.";
  }

  if (text.includes("red fort")) {
    return "The Red Fort in Delhi was built by Shah Jahan and represents Mughal power.";
  }

  if (text.includes("charminar")) {
    return "Charminar is a symbol of Hyderabad built in 1591.";
  }

  return "AI is learning. Try Taj Mahal, Red Fort, or Charminar.";
}

/* ---------------- CHAT SEND ---------------- */
async function send() {
  const input = document.getElementById("input");
  const text = input.value;
  if (!text) return;

  add(text, "user");
  input.value = "";

  const answer = await askAI(text);

  memory.push({ role: "user", content: text });
  memory.push({ role: "assistant", content: answer });

  lastAnswer = answer;

  type(answer);
}

/* ---------------- TYPE ANIMATION ---------------- */
function type(text) {
  const div = document.createElement("div");
  div.className = "msg ai";
  chat.appendChild(div);

  let i = 0;
  function run() {
    if (i < text.length) {
      div.innerHTML += text[i];
      i++;
      setTimeout(run, 15);
    }
  }
  run();
}

/* ---------------- VOICE ---------------- */
function startVoice() {
  if (!lastAnswer) return;

  const speech = new SpeechSynthesisUtterance(lastAnswer);
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

function stopVoice() {
  window.speechSynthesis.cancel();
}

/* ---------------- LENS AI ---------------- */
async function lens() {
  const val = document.getElementById("lens").value;
  const scan = document.getElementById("scan");

  scan.innerHTML = "🔍 Scanning...";

  const result = await askAI("Explain monument: " + val);

  scan.innerHTML = "✔ " + val + " identified";

  add("📷 Lens AI: " + result, "ai");

  lastAnswer = result;
}

/* ---------------- MAP ---------------- */
function showMap(place) {
  const map = document.getElementById("map");
  map.innerHTML =
    `<a target="_blank"
      href="https://www.google.com/maps/search/${place}">
      📍 Open ${place} in Google Maps
    </a>`;
}

/* auto map trigger */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("msg")) {
    const text = e.target.innerText;
    if (text.includes("Taj")) showMap("Taj Mahal");
    if (text.includes("Red Fort")) showMap("Red Fort Delhi");
    if (text.includes("Charminar")) showMap("Charminar Hyderabad");
  }
});
