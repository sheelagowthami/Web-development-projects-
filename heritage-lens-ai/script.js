function openScanner(){
  document.getElementById("scanner").click();
}

function handleScan(event){
  const file = event.target.files[0];
  if(!file) return;

  const name = file.name.split(".")[0];

  sendMessage(name);
}

function sendMessage(monument){
  const data = fakeAIResponse(monument);
  document.getElementById("aiOutput").innerHTML = data.text;
  document.getElementById("mapFrame").src = generateMapLink(monument);
}

function fakeAIResponse(name){
  return {
    text: `
      <h3>${name}</h3>
      <p><b>History:</b> Ancient cultural monument of global significance.</p>
      <p><b>Built by:</b> Historical rulers/artisans</p>
      <p><b>Year:</b> Varies historically</p>
      <p><b>Importance:</b> UNESCO heritage landmark</p>
      <p><b>Tourism:</b> Major global attraction</p>
    `
  };
}

function generateMapLink(name){
  return "https://maps.google.com/maps?q=" + encodeURIComponent(name) + "&output=embed";
}

function speakText(){
  const text = document.getElementById("aiOutput").innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

function stopSpeech(){
  speechSynthesis.cancel();
}

function openModal(src){
  document.getElementById("modal").style.display="block";
  document.getElementById("modalImg").src=src;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}
