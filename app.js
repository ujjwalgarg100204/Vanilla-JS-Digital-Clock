"use strict";

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const amPM = document.querySelector("#am-pm");
const hourDot = document.querySelector(".dot-1");
const minDot = document.querySelector(".dot-2");
const secDot = document.querySelector(".dot-3");
const hourCircle = document.querySelector(".circle-1 > div[role=\"progressbar\"]");
const minCircle = document.querySelector(".circle-2 > div[role=\"progressbar\"]");
const secCircle = document.querySelector(".circle-3 > div[role=\"progressbar\"]");


function setText(element, text) {
    element.textContent = text;
}

function padWithZeroes(number, length) {
    let zeroes = "";

    for (let i = 0; i < length - number.toString().length; i++)
        zeroes += "0";

    return zeroes + number.toString();   // concatenating zeroes to given number
}

function toRadian(deg) {
    return deg * Math.PI / 180;
}

function moveDot(dot, circle, deg) {
    dot.style.transform = `translate(${7.1 * Math.cos(toRadian(deg))}rem, ${7 * Math.sin(toRadian(deg))}rem)`;
    circle.style.setProperty('--value', `${Math.abs((toRadian(deg + 90) / (2 * Math.PI)) * 100)}`);
}


setInterval(() => {
        const now = new Date();
        const h = now.getHours() % 12;
        setText(hour, padWithZeroes(h, 2));
        setText(minute, padWithZeroes(now.getMinutes(), 2));
        setText(second, padWithZeroes(now.getSeconds(), 2));
        setText(amPM, now.getHours() > 12 ? "PM" : "AM");

        moveDot(hourDot, hourCircle, 30 * h - 90);
        moveDot(minDot, minCircle, 6 * now.getMinutes() - 90);
        moveDot(secDot, secCircle, 6 * now.getSeconds() - 90);
    },
    1000
);
