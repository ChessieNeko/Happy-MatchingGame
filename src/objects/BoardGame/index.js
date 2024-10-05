import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data";

function BoardGame(amountCards){
    const $htmlCardFrontBack = CardFrontBack();
    
    const $htmlCardsList = cards.map((card)=>{
        return CardFrontBack(card.icon, card.altIcon)
    });
    const $htmlCards = $htmlCardsList.join('');

    return /*html*/`
        <section class="board-game">
            ${$htmlCards}
        </section>
    `;
}
export default BoardGame;