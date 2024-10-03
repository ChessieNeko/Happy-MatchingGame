import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards){
    const $htmlCardFrontBack = CardFrontBack(); 

    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);
    console.log($htmlContent)

    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
export default BoardGame;