/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  for (let p of pronouns) {
    for (let a of adj) {
      for (let n of nouns) {
        for (let x of ext) {
          console.log(`${[p,a,n,x].join('')}`);
          //document.querySelector("#output").innerHTML += `<p class="h5 m-3">${[p,a,n,x].join('')}</p>`; // This line prints the generated domains on to the HTML page. Why don't you uncomment(?) it?
        }
      }
    }
  }
  
};

let pronouns = ["the", "our", "this"];
let adj = ["great", "epic", "dubious", "ultimate"];
let nouns = ["bamboozle", "win", "website"];
let ext = [".com", ".us", ".net", ".gov", ".io"]
