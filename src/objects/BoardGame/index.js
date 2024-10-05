import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data";

window.boardGame = {};
window.boardGame.handleClick = (event)=>{
    const $boardGame = document.querySelector(".board-game");
    const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active");
    const $arrowDown = document.getElementById("icon-arrow");
    console.log($arrowDown);

    const flipAndHideCards = ()=>{
        $cardsActive.forEach((card) => {
            card.classList.remove("-active");
        })
    }

    const changePlayer = () =>{    
        const currentPlayer = $arrowDown.getAttribute("data-currentPlayer"); 

        $arrowDown.setAttribute("data-currentPlayer", currentPlayer == 1 ? 2 : 1);
    }
    
    if($cardsActive.length == 2){
        setTimeout(()=> {     
            flipAndHideCards();
            changePlayer();
        }, 700);
        
    }
    
}

function BoardGame(amountCards){
    const $htmlCardFrontBack = CardFrontBack();
    
    const $htmlCardsList = cards.map((card)=>{
        return CardFrontBack(card.icon, card.altIcon)
    });
    const $htmlCards = $htmlCardsList.join('');

    return /*html*/`
        <section class="board-game" onClick="boardGame.handleClick(event)">
            ${$htmlCards}
        </section>
    `;
}
export default BoardGame;