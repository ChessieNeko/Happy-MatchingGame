import "./style.css"
import PlayerInfo from "../../components/PlayerInfo";
import ArrowTag from "../../objects/ArrowTag";

function ScoreBoard(){

    return /*html*/`
        <header class="score-board">
            ${ArrowTag()}
            ${PlayerInfo("Player 1")}
            <p>vs</p>
            ${PlayerInfo("Player 2")}
        </header>
    `;
}
export default ScoreBoard;