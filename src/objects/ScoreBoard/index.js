import "./style.css"
import PlayerInfo from "../../components/PlayerInfo";
import VsPlayer from "../../components/VsPlayer";
import ArrowTag from "../../objects/ArrowTag";

function ScoreBoard(){

    return /*html*/`
        <header class="score-board">
            ${ArrowTag()}
            ${PlayerInfo("Player 1", 3)}
            ${VsPlayer()}            
            ${PlayerInfo("Player 2", 2)}
        </header>
    `;
}
export default ScoreBoard;