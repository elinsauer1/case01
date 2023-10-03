"use strict";

// Declaring all the variables that will be used repeatedly
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const eggTimes = [
    {
        size: "small",
        consistency: "liquid",
        temp: "room",
        minutes: 4,
        seconds: 37
    },
    {
        size: "small",
        consistency: "liquid",
        temp: "fridge",
        minutes: 5,
        seconds: 56
    },
    {
        size: "medium",
        consistency: "liquid",
        temp: "room",
        minutes: 5,
        seconds: 14
    },
    {
        size: "medium",
        consistency: "liquid",
        temp: "fridge",
        minutes: 6,
        seconds: 44
    },
    {
        size: "large",
        consistency: "liquid",
        temp: "room",
        minutes: 5,
        seconds: 49
    },
    {
        size: "large",
        consistency: "liquid",
        temp: "fridge",
        minutes: 7,
        seconds: 28
    },
    {
        size: "small",
        consistency: "soft",
        temp: "room",
        minutes: 5,
        seconds: 30
    },
    {
        size: "small",
        consistency: "soft",
        temp: "fridge",
        minutes: 6,
        seconds: 49
    },
    {
        size: "medium",
        consistency: "soft",
        temp: "room",
        minutes: 6,
        seconds: 14
    },
    {
        size: "medium",
        consistency: "soft",
        temp: "fridge",
        minutes: 7,
        seconds: 43
    },
    {
        size: "large",
        consistency: "soft",
        temp: "room",
        minutes: 6,
        seconds: 55
    },
    {
        size: "large",
        consistency: "soft",
        temp: "fridge",
        minutes: 8,
        seconds: 35
    },
    {
        size: "small",
        consistency: "hard",
        temp: "room",
        minutes: 7,
        seconds: 27
    },
    {
        size: "small",
        consistency: "hard",
        temp: "fridge",
        minutes: 8,
        seconds: 45
    },
    {
        size: "medium",
        consistency: "hard",
        temp: "room",
        minutes: 8,
        seconds: 27
    },
    {
        size: "medium",
        consistency: "hard",
        temp: "fridge",
        minutes: 9,
        seconds: 56
    },
    {
        size: "large",
        consistency: "hard",
        temp: "room",
        minutes: 9,
        seconds: 23
    },
    {
        size: "large",
        consistency: "hard",
        temp: "fridge",
        minutes: 11,
        seconds: 3
    }
];