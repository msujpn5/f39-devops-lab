let button = document.querySelector('button')
let messageDiv = document.getElementById('messageDiv')

const buttonMessage = () => {
    let newP = document.createElement('p')
    newP.innerHTML = "Well, that's not very nice"
    
    messageDiv.appendChild(newP)
}

button.addEventListener('click', buttonMessage)