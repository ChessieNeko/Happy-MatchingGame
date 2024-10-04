import "./style.css"
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";

function ScoreBoard(){

    return /*html*/`
        <header class="score-board">
            ${PlayerName("Player 1")}
            ${PlayerScore()}
            ${PlayerScore()}
            ${PlayerName("Player 2")}
        </header>
    `;
}
export default ScoreBoard;