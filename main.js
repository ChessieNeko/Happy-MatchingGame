import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/elements/base.css";

import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", 
    `
    ${ScoreBoard()}
    ${BoardGame(6)}
    `
);    

const arrow = $root.querySelector("#icon-arrow");

arrow.addEventListener("click", aiclica=>{
    console.log("clickei");
    arrow.classList.toggle("-move");
});