/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  for (let p of pronouns) {
    for (let a of adj) {
      for (let n of nouns) {
        for (let x of ext) {
          console.log(`${[p,a,n,x].join('')}`);
          //document.querySelector("#output").innerHTML += `${[p,a,n,x].join('')} <br>`; // This line prints the generated domains on to the HTML page. Why don't you uncomment(?) it?
        }
      }
    }
  }
  
};

let pronouns = ["the", "our", "them"];
let adj = ["great", "epic", "fantastic", "scrumptious"];
let nouns = ["racoon", "win", "khakis"];
let ext = [".com", ".de", ".net", ".gov", ".io"]
