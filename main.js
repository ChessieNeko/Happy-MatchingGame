import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
import BoardGame from "./src/objects/BoardGame";
import PlayerScore from "./src/components/PlayerScore";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
const $htmlBoardGame = BoardGame(6);
const $htmlPlayerScore = PlayerScore();
const $body = document.querySelector("body");

$body.insertAdjacentHTML("beforeend", $htmlPlayerScore); 
//$root.insertAdjacentHTML("beforeend", $htmlCardGame);    
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);    
