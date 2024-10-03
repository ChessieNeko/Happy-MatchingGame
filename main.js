import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
import BoardGame from "./src/objects/BoardGame";
import PlayerScore from "./src/components/PlayerScore";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", 
    `
    ${PlayerName("Player 1")}
    ${PlayerName("Player 2")}
    ${BoardGame(6)}
    `
);    
