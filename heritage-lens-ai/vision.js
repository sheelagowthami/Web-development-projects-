const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

/* START CAMERA */
async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
}

/* CAPTURE IMAGE */
async function capture() {
  const ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0);

  document.getElementById("visionResult").innerText =
    "🔍 AI analyzing image...";

  setTimeout(async () => {
    const fakeResult = "Taj Mahal detected by AI vision";
    document.getElementById("visionResult").innerText = fakeResult;

    const ai = await askAI(fakeResult);

    addMessage("📸 " + ai, "ai");
  }, 2000);
}
