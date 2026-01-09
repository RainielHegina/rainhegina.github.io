
function showOS(os) {
  const cards = document.querySelectorAll(".os-card");

  cards.forEach(card => {
    card.style.display = "none";
  });

  const selected = document.getElementById(os);
  if (selected) {
    selected.style.display = "block";
  }
}


function toggleKernel() {
  const kernelInfo = document.getElementById("kernelInfo");
  kernelInfo.classList.toggle("hidden");
}


const securityRange = document.getElementById("securityRange");
const securityText = document.getElementById("securityText");

securityRange.addEventListener("input", () => {
  const value = securityRange.value;
  let level = "Medium";

  if (value <= 3) level = "Low";
  else if (value <= 7) level = "Medium";
  else level = "High";

  securityText.textContent = `Security Level: ${level}`;
});


const canvas = document.getElementById("osChart");
const ctx = canvas.getContext("2d");

const data = [
  { label: "Windows", value: 73, color: "#2563eb" },
  { label: "macOS", value: 15, color: "#9ca3af" },
  { label: "Linux", value: 2, color: "#ef4444" }
];

const total = data.reduce((sum, item) => sum + item.value, 0);

let startAngle = 0;

data.forEach(item => {
  const sliceAngle = (item.value / total) * Math.PI * 2;

  ctx.beginPath();
  ctx.moveTo(250, 125);
  ctx.arc(250, 125, 100, startAngle, startAngle + sliceAngle);
  ctx.closePath();

  ctx.fillStyle = item.color;
  ctx.fill();

  startAngle += sliceAngle;
});


let y = 20;
data.forEach(item => {
  ctx.fillStyle = item.color;
  ctx.fillRect(380, y, 12, 12);

  ctx.fillStyle = "#111";
  ctx.font = "14px Arial";
  ctx.fillText(`${item.label} (${item.value}%)`, 400, y + 10);

  y += 22;
});
