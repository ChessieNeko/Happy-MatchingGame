import "./style.css"

import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";

function PlayerInfo(namePlayer){
    return /*html*/`
        <div class="player-info">
            ${PlayerName(namePlayer)}
            ${PlayerScore()}
        </div>
    `;
}

export default PlayerInfo;