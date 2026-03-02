const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerText = 'GOOD'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerText = 'try again'
        gmailResult.style.color = 'red'
    }
}