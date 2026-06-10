function askAI() {
  let input = document.getElementById("input").value.toLowerCase();
  let output = document.getElementById("output");

  if (input.includes("taj")) {
    output.innerText = "Taj Mahal is a UNESCO World Heritage Site built by Shah Jahan.";
  }
  else if (input.includes("charminar")) {
    output.innerText = "Charminar is a symbol of Hyderabad built in 1591.";
  }
  else if (input.includes("fort")) {
    output.innerText = "India has many forts like Red Fort, Amer Fort, and Golconda Fort.";
  }
  else {
    output.innerText = "AI is learning... try Taj Mahal or Charminar.";
  }
}
