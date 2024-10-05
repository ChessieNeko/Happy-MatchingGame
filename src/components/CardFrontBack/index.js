import CardGame from "../CardGame";
import "./style.css"

window.cardFrontBack = {};
window.cardFrontBack.handleClick = (event)=>{
    const $clickOrigin = event.currentTarget;
    //const $cardFrontBack = $clickOrigin.closest(".card-front-back");
    
    $clickOrigin.classList.toggle("-active");
};

function CardFrontBack(icon, altIcon){

    return /*html*/`
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(icon, altIcon)}
            </div>
        </article>
    `;
}

export default CardFrontBack;