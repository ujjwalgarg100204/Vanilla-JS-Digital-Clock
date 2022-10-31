"use strict";

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const amPM = document.querySelector("#am-pm");

function setText(element, text) {
    element.textContent = text;
}

function padWithZeroes(number, length) {
    let zeroes = "";

    for (let i = 0; i < length - number.toString().length; i++)
        zeroes += "0";

    return zeroes + number.toString();   // concatenating zeroes to given number
}

setInterval(() => {
        const now = new Date();
        ;
        setText(hour, padWithZeroes(now.getHours() - 12, 2));
        setText(minute, padWithZeroes(now.getMinutes(), 2));
        setText(second, padWithZeroes(now.getSeconds(), 2));
        setText(amPM, now.getHours() > 12 ? "PM" : "AM");
    },
    1000
);
