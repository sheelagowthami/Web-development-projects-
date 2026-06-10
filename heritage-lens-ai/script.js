function askAI(){

  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value;
  if(!text) return;

  chat.innerHTML += `<div class="msg user">You: ${text}</div>`;

  let reply = "I am learning about this topic.";

  if(text.toLowerCase().includes("taj")){
    reply = "Taj Mahal is one of the 7 wonders of the world built by Shah Jahan.";
  }

  if(text.toLowerCase().includes("red fort")){
    reply = "Red Fort is a Mughal monument in Delhi symbolizing India's history.";
  }

  chat.innerHTML += `<div class="msg ai">AI: ${reply}</div>`;

  input.value="";
}
