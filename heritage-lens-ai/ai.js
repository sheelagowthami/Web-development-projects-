let memory = [];
let lastAnswer = "";

/* MAIN AI FUNCTION */
async function askAI(prompt) {
  prompt = prompt.toLowerCase();

  // 🔥 SMART FALLBACK AI (NO API REQUIRED)
  if (prompt.includes("taj")) {
    return "Taj Mahal is a UNESCO World Heritage site built by Shah Jahan in memory of Mumtaz Mahal.";
  }

  if (prompt.includes("red fort")) {
    return "Red Fort in Delhi was built by Shah Jahan and symbolizes Mughal power.";
  }

  if (prompt.includes("charminar")) {
    return "Charminar is a historical monument built in 1591 in Hyderabad.";
  }

  return "AI is learning. Try Taj Mahal, Red Fort, or Charminar.";
}

/* TYPE ANIMATION */
function typeAI(text, container) {
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
