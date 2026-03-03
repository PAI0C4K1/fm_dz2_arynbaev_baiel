//lesson 1
//part A
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._%+-]{5,}@gmail\.com$/;

gmailButton.addEventListener("click", () => {
    const value = gmailInput.value.trim();      

    if (gmailRegex.test(value)) {
        gmailResult.textContent = "Gmail введён корректно ✅";
        gmailResult.style.color = "lime";   
        gmailInput.style.border = "2px solid lime";
    } else {
        gmailResult.textContent = "Неверный формат Gmail ❌";
        gmailResult.style.color = "red";
        gmailInput.style.border = "2px solid red";
    }
});

//part B

// const parentBlock = document.querySelector(".parent_block");
// const childBlock = document.querySelector(".child_block");

// let position = 0;
// const speed = 2;

// function moveBlock() {
//     const parentWidth = parentBlock.clientWidth;
//     const childWidth = childBlock.clientWidth;

//     if (position <= parentWidth - childWidth) {
//         childBlock.style.left = `${position}px`;
//         position += speed;

//         requestAnimationFrame(moveBlock);
//     }
// }

// moveBlock();

//lesson 1
//move block V2
const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")

let posX = 0, posY = 0;
let disX = 1, disY = 0;
const speed = 2;

function move() {
    const fixedParentWidth = parentBlock.clientWidth - childBlock.clientWidth;
    const fixedParentHeight = parentBlock.clientHeight - childBlock.clientHeight;

    if (posX + disX * speed > fixedParentWidth || posX + disX * speed < 0) {
        [disX, disY] = [0, disX];
    }

    if (posY + disY * speed > fixedParentHeight || posY + disY * speed < 0) {
        [disX, disY] = [-dy, 0];
    }

    posX += disX * speed;
    posY += disY * speed;

    childBlock.style.left = `${posX}px`;
    childBlock.style.top = `${posY}px`;

    requestAnimationFrame(move);
}

move();

//part Timer

let alrdGo = null;

const time = document.querySelector("#seconds")


document.querySelector("#start").onclick = () => {
    if (alrdGo != null) return;
    alrdGo = setInterval (() => {
        time.innerHTML++
    }, 1000)
}
document.querySelector("#stop").onclick = () => {
    clearInterval(alrdGo)
    alrdGo = null
}
document.querySelector("#reset").onclick = () => {
    clearInterval(alrdGo)
    alrdGo = null
    time.innerHTML = 0
}