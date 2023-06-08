const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};
function getRandomColor() {
  const colorFn = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  refs.body.style.backgroundColor = colorFn;
  refs.span.textContent = colorFn;
}

refs.btn.addEventListener("click", getRandomColor);
