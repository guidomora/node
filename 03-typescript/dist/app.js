"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroe_service_1 = require("./services/heroe.service");
const heroe = (0, heroe_service_1.findHeroeById)(2);
console.log(heroe);
