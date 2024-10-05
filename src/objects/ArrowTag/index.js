import "./style.css"

function ArrowTag(currentPlayer = 1){
    return /*html*/`
        <span id="icon-arrow"
            data-currentPlayer="${currentPlayer}"
        >
            <img src="src/images/IconArrow.png" alt="icone arrow">
        </span>
    `;
}

export default ArrowTag;