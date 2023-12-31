import data from "./assets/data.json" assert { type: "json" };
import languajeSelector from "./languajes.js";

const d = document;
const $usos = d.querySelector(".usos");
const $hello = d.querySelector(".hello-world");
const $img = d.querySelector(".code-img");
const $video = d.getElementById("video");
d.addEventListener("DOMContentLoaded", (e) => {
  let languaje = data.languajes[0];

  $usos.innerHTML = "";
  $hello.innerHTML = "";

  languaje.usos.forEach((uso) => {
    let el = d.createElement("li");
    el.innerText = uso;
    console.log(uso);
    $usos.appendChild(el);
  });

  languaje.holaMundo.forEach((line) => {
    let code = d.createElement("li");
    code.innerHTML = line;

    $hello.appendChild(code);
  });

  $img.src = languaje.proyecto;
});

d.addEventListener("click", (e) => {
  e.preventDefault;
  if (e.target.matches("button")) {
    const $buttons = d.querySelectorAll("button");
    $buttons.forEach((button) => {
      if (button.name === e.target.name) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    languajeSelector(data, $img, e.target.name, $usos, $hello, $img, $video);
  }
});
