import "./style.css"

import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";

function PlayerInfo(namePlayer, points){
    return /*html*/`
        <div class="player-info">
            ${PlayerName(namePlayer)}
            ${PlayerScore(points)}
        </div>
    `;
}

export default PlayerInfo;