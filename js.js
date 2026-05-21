//Takrorlash

//getElementBy ...
//querySelector, All ...
//append
//createElement
//addEventListener
//setAttribute
//textContent
//innerHTML`
//e.preventDefault()
//input.value
//classList

// querySelector
const title = document.querySelector("h1");
console.log(title);

// querySelectorAll
const items = document.querySelectorAll(".item");
console.log(items);

// createElement
const button = document.createElement("button");
button.textContent = "Нажми";

// setAttribute
button.setAttribute("class", "btn");

// addEventListener
button.addEventListener("click", () => {
    console.log("Кнопка нажата");
});

// append
const div = document.querySelector(".box");
div.append(button);

// textContent
title.textContent = "Новый заголовок";

// innerHTML
div.innerHTML += "<h2>Привет</h2>";

// e.preventDefault()
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Отправка остановлена");
});

// input.value
const input = document.querySelector("input");

input.addEventListener("input", () => {
    console.log(input.value);
});

// classList
div.classList.add("active");
div.classList.toggle("dark");