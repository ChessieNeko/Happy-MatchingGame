import "./style.css"

function PlayerScore(points = 0){
    return /*html*/`
    <ul class="player-score" data-points="${points}">
        <li class="pointer"></li>
        <li class="pointer"></li>
        <li class="pointer"></li>
    </ul>
    `
}

export default PlayerScore;