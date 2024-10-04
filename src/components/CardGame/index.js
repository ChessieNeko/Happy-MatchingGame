import "./style.css"

function CardGame(logoIcon = "alura", alt="Ícone da Alura"){
    return /*html*/`
        <article class="card-game">
            <img src="src/images/${logoIcon}.png" alt="${alt}">
        </article>
    `
}
export default CardGame;