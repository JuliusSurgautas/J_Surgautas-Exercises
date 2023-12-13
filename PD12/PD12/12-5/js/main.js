"use strict";

const pradinisZuvuKiekis = 5;
const zuvuPridejimoPerDiena = 3;
const dienuSkaicius = 3;

const bendrasZuvuKiekis = pradinisZuvuKiekis + (zuvuPridejimoPerDiena * dienuSkaicius);

console.log(`Po ${dienuSkaicius} dienų akvariume gyvens ${bendrasZuvuKiekis} žuvų.`);