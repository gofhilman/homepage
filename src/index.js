import HeaderTyping from "./modules/header-typing";
import IntroTyping from "./modules/intro-typing";
import "./styles.css";

const introTyping = new IntroTyping(
  [
    "Software Engineer.",
    "Web Developer.",
    "Data Engineer.",
    "Data Analyst.",
  ],
  40,
);

const headerTyping = new HeaderTyping("Hilman Fikry");

const typing = document.querySelector("#typing");
const cursor = document.querySelector("#cursor");
const headTyping = document.querySelector("#head-typing");
const headCursor = document.querySelector("#head-cursor");

setInterval(() => {
  introTyping.type();
  typing.textContent = introTyping.typedString;
  cursor.textContent = introTyping.cursor;
}, 100);

setInterval(() => {
  headerTyping.type();
  headTyping.textContent = headerTyping.typedString;
  headCursor.textContent = headerTyping.cursor;
}, 120);
