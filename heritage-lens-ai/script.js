// script.js

const monuments = {
  "Taj Mahal": {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    images: ["https://upload.wikimedia.org/wikipedia/commons/d/d4/Taj_Mahal_in_March_2004.jpg"],
    description: "An iconic white marble mausoleum built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    history: "Construction started in 1632 and completed in 1653. Built by Shah Jahan, it's a UNESCO World Heritage Site.",
    builder: "Ustad Ahmad Lahori",
    year: "1632-1653",
    importance: "Symbol of love and Mughal architecture.",
    facts: ["One of the New Seven Wonders of the World.", "Features extensive intricate carvings and inlay work."],
    UNESCO: "Yes",
    lat: 27.1751,
    lon: 78.0421
  },
  // add more monuments similarly...
};

const foreignMonuments = {
  "Eiffel Tower": {
    name: "Eiffel Tower",
    location: "Paris, France",
    images: ["https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"],
    description: "A wrought-iron lattice tower on the Champ de Mars, an iconic symbol of Paris.",
    history: "Constructed between 1887-1889 for the 1889 World's Fair.",
    builder: "Gustave Eiffel",
    year: "1887-1889",
    importance: "Global cultural icon, engineering marvel.",
    facts: ["Was the tallest man-made structure for 41 years.", "Visited by millions annually."],
    UNESCO: "No",
    lat: 48.8584,
    lon: 2.2945
  },
  // add more foreign monuments...
};

const wonders = ["Great Wall of China", "Petra", "Colosseum", "Chichen Itza", "Machu Picchu", "Taj Mahal", "Christ the Redeemer"];

const allMonuments = { ...monuments, ...foreignMonuments };

const categories = {
  "Indian Monuments": Object.values(monuments),
  "Foreign Monuments": Object.values(foreignMonuments),
  "7 Wonders": wonders.map(name => allMonuments[name])
};

function populateCards() {
  for (const [category, items] of Object.entries(categories)) {
    const container = document.getElementById(
      category === "Indian Monuments"
        ? "indian-monuments"
        : category === "Foreign Monuments"
        ? "foreign-monuments"
        : "wonders-list"
    );
    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = item.images[0];
      card.appendChild(img);

      const infoDiv = document.createElement("div");
      infoDiv.className = "card-info";

      const title = document.createElement("div");
      title.className = "card-title";
      title.innerText = item.name;

      const loc = document.createElement("div");
      loc.className = "card-location";
      loc.innerText = item.location;

      infoDiv.appendChild(title);
      infoDiv.appendChild(loc);

      const btnContainer = document.createElement("div");
      btnContainer.className = "card-buttons";

      const aboutBtn = document.createElement("button");
      aboutBtn.innerText = "🧠 About";
      aboutBtn.onclick = () => {
        sendAIMessage(`Tell me about ${item.name}`);
        window.location.href = "demo.html";
      };

      const mapBtn = document.createElement("button");
      mapBtn.innerText = "🗺️ Map";
      mapBtn.onclick = () => {
        generateMapLink(item.lat, item.lon);
      };

      btnContainer.appendChild(aboutBtn);
      btnContainer.appendChild(mapBtn);

      infoDiv.appendChild(btnContainer);
      card.appendChild(infoDiv);
      container.appendChild(card);
    });
  }
}

populateCards();

// AI Chat system
const chatHistory = [];

function sendAIMessage(message) {
  chatHistory.push({ role: "user", content: message });
  fakeAIResponse(message);
}

function fakeAIResponse(message) {
  const responseBox = document.getElementById("aiResponse");
  let responseText = "";

  // Basic keyword detection
  for (const key in allMonuments) {
    if (message.toLowerCase().includes(key.toLowerCase())) {
      const monument = allMonuments[key];
      responseText = `
        <h3>${monument.name}</h3>
        <p><strong>History:</strong> ${monument.history}</p>
        <p><strong>Builder:</strong> ${monument.builder}</p>
        <p><strong>Year:</strong> ${monument.year}</p>
        <p><strong>Importance:</strong> ${monument.importance}</p>
        <p><strong>Interesting Facts:</strong> ${monument.facts.join(", ")}</p>
        <p><strong>UNESCO World Heritage:</strong> ${monument.UNESCO}</p>
      `;
      break;
    }
  }
  if (!responseText) {
    responseText = "<p>Sorry, I couldn't find information about that monument.</p>";
  }
  responseBox.innerHTML = responseText;
  typeWriter(responseBox);
}

function typeWriter(element) {
  const text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;
  const speed = 50;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Map link generator
function generateMapLink(lat, lon) {
  const link = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  document.getElementById("mapContainer").innerHTML = `<iframe width="100%" height="300" frameborder="0" style="border:0" src="${link}" allowfullscreen></iframe>`;
}

// Image upload and recognition simulation
const scanBtn = document.getElementById("scanButton");
const imageInput = document.getElementById("imageInput");
const recognizedInfo = document.getElementById("recognizedInfo");
const mapContainer = document.getElementById("mapContainer");
const aiResponse = document.getElementById("aiResponse");

scanBtn.onclick = () => {
  imageInput.click();
};

imageInput.onchange = () => {
  if (imageInput.files && imageInput.files[0]) {
    recognizedInfo.innerHTML = "<p>Recognizing monument...</p>";
    // simulate recognition delay
    setTimeout(() => {
      // Randomly pick a monument for demo
      const allNames = Object.keys(allMonuments);
      const randomName = allNames[Math.floor(Math.random() * allNames.length)];
      const monument = allMonuments[randomName];

      recognizedInfo.innerHTML = `
        <h3>${monument.name}</h3>
        <p>Location: ${monument.location}</p>
        <p>Description: ${monument.description}</p>
      `;
      generateMapLink(monument.lat, monument.lon);
      // Show info card
      aiResponse.innerHTML = `
        <h3>${monument.name}</h3>
        <p>${monument.description}</p>
        <button id="aiSpeakBtn">🔊 Listen</button>
      `;
      document.getElementById("aiSpeakBtn").onclick = () => {
        speakText(`${monument.name}. ${monument.description}`);
      };
    }, 1500);
  }
};

// Speech synthesis
function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

// Modal image gallery
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModalBtn = document.getElementById("closeModal");

function openModal(src, caption) {
  modal.style.display = "flex";
  modalImg.src = src;
  modalCaption.innerText = caption;
}

closeModalBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Utility functions
function sendMessage() {
  const input = document.querySelector(".demo-input");
  if (input && input.value.trim() !== "") {
    sendAIMessage(input.value);
    input.value = "";
  }
}
