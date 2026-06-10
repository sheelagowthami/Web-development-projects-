const chat = document.getElementById("chat");

let memory = [];

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function fakeAIResponse(input) {
  input = input.toLowerCase();

  if (input.includes("taj")) {
    return "The Taj Mahal was built by Shah Jahan in memory of Mumtaz Mahal. It represents eternal love and Mughal architecture.";
  }

  if (input.includes("charminar")) {
    return "Charminar, built in 1591, is located in Hyderabad and symbolizes the foundation of the city.";
  }

  if (input.includes("fort")) {
    return "India has many historic forts like Red Fort, Golconda Fort, and Amer Fort, each with rich military history.";
  }

  return "I am still learning about this monument. Try asking about Taj Mahal, Charminar, or forts of India.";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (!text) return;

  addMessage(text, "user");
  memory.push(text);

  input.value = "";

  setTimeout(() => {
    const response = fakeAIResponse(text);
    addMessage(response, "ai");
    memory.push(response);
  }, 800);
}

/* MOBILE MENU */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}
