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

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let position = 0;
const speed = 2;

function moveBlock() {
    const parentWidth = parentBlock.clientWidth;
    const childWidth = childBlock.clientWidth;

    if (position <= parentWidth - childWidth) {
        childBlock.style.left = position + "px";
        position += speed;

        requestAnimationFrame(moveBlock);
    }
}

moveBlock();