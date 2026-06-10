const chat = document.getElementById("chat");

/* ADD MESSAGE */
function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

/* ASK AI */
async function ask() {
  const input = document.getElementById("input");
  const text = input.value;

  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const reply = await askAI(text);
  lastAnswer = reply;

  const div = document.createElement("div");
  div.className = "msg ai";

  chat.appendChild(div);
  typeAI(reply, div);
}
