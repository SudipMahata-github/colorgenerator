const button = document.querySelector(".btn");
const heading = document.querySelector("h2");
const color = document.querySelector(".color");

function ColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}
button.addEventListener("click", () => {
  const randomColor = ColorGenerator();
  color.style.backgroundColor = randomColor;
  heading.textContent = randomColor;
  console.log(randomColor);
});
