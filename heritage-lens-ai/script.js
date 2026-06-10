function askAI() {
  const input = document.getElementById("searchInput").value;
  generateResponse(input);
}

function quickAsk(text) {
  document.getElementById("searchInput").value = text;
  generateResponse(text);
}

function generateResponse(query) {
  const box = document.getElementById("responseBox");

  box.innerHTML = "🤖 AI is thinking...";

  setTimeout(() => {

    let response = "";

    if (query.toLowerCase().includes("taj")) {
      response = "🏛️ Taj Mahal is a UNESCO World Heritage Site built by Shah Jahan in memory of Mumtaz Mahal. It symbolizes eternal love.";
    }
    else if (query.toLowerCase().includes("red fort")) {
      response = "🏰 Red Fort in Delhi was built by Shah Jahan in 1648 and represents Mughal power and architecture.";
    }
    else if (query.toLowerCase().includes("hampi")) {
      response = "🪨 Hampi is a historic Vijayanagara Empire city with stunning ruins and temple architecture.";
    }
    else {
      response = "📚 I found heritage information about: " + query + ". More detailed story coming soon in AI upgrade mode.";
    }

    box.innerHTML = response;

  }, 1200);
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}
