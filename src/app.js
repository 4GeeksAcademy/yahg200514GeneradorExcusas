/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch"
  ];
  let mathWho = who[Math.floor(Math.random() * who.length)];
  let mathAction = action[Math.floor(Math.random() * action.length)];
  let mathWhat = what[Math.floor(Math.random() * what.length)];
  let mathWhen = when[Math.floor(Math.random() * when.length)];
  let excuse = mathWho + " " + mathAction + " " + mathWhat + " " + mathWhen;
  return excuse;
}

let excuse = generateExcuse();

document.querySelector("#excuse").innerText = excuse;
};