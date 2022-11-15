function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textOfColor = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const body = document.querySelector('body');

btnEl.addEventListener('click', () => {
  let color = getRandomHexColor();
  textOfColor.textContent = color;
  body.style.backgroundColor = color;
});