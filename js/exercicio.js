"use strict";
const button = [...document.getElementsByTagName("button")];
const body = [...document.getElementsByTagName("body")];
const input = [...document.getElementsByTagName("input")];
const list = [...document.getElementsByTagName("ul")];
const img = [...document.getElementsByTagName("img")];
const h2 = [...document.getElementsByTagName("h2")];
// 1)
button[0].addEventListener("click", () => {
    let r = 0, g = 0, b = 0;
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    body[0].setAttribute("style", `background-color: rgb(${r},${g},${b});`);
});

// 2)
const newItem = document.createElement('li');

button[1].addEventListener("click", () => {
    let conteudo = input[0].value;
    console.log(conteudo);
    list[0].appendChild(newItem).innerHTML = conteudo;
});

// 3)
button[2].addEventListener("click", () => {
    img[0].src = "../img/lobo2.jpg";
});

// 4)
button[3].addEventListener("click", () => {
    h2[0].innerHTML = "Exercício 4 completo!";
});

// 5)
button[4].addEventListener("click", () => {
    img[1].hidden = true;
});