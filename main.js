"use strict";

const down = document.getElementById("down");
const b = document.getElementById("ball");

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2");
subHeader.setAttribute("class", "my-subheader");
subHeader.innerHTML = "Game by: Dmitry Borok";
header.appendChild(subHeader);

const offset = 15;

function clickLeft() {
    let style = getComputedStyle(b);
    let currentPos = parseInt(style.left);
    let newPos = currentPos - offset;
    if (newPos > 10) {
        b.style.left = `${newPos}px`;
    }
}

function clickRight() {
    let style = getComputedStyle(b);
    let parentStyle = getComputedStyle(b.parentElement);
    let currentPos = parseInt(style.left);
    let newPos = currentPos + offset;
    if (newPos < parseInt(parentStyle.width) - parseInt(style.width) - 10) {
        b.style.left = `${newPos}px`;
    }
}

function clickUp() {
    let style = getComputedStyle(b);
    let currentPos = parseInt(style.top);
    let newPos = currentPos - offset;
    if (newPos > 10) {
        b.style.top = `${newPos}px`;
    }
}

function clickDown() {
    let style = getComputedStyle(b);
    let parentStyle = getComputedStyle(b.parentElement);
    let currentPos = parseInt(style.top);
    let newPos = currentPos + offset;
    if (newPos < parseInt(parentStyle.height) - parseInt(style.height) - 10) {
        b.style.top = `${newPos}px`;
    }
}