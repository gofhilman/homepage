import introTyping from "./modules/intro-typing";
import "./styles.css";

const typing = document.querySelector("#typing");
const cursor = document.querySelector("#cursor");

setInterval(() => {
  introTyping.type();
  typing.textContent = introTyping.typedString;
  cursor.textContent = introTyping.cursor;
}, 100);