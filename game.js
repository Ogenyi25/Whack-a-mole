const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

//this randomly selects any square in the grid
function randomSquare() {
    //this line removes any class from divs so that there are no seemingly left behind div with styling on the board
    square.forEach(className => {
        className.classList.remove('mole')
    })

    //math.floor is used to round down to the nearest interger, so that the random position is always under or equal to 9
    //math.random is used to define a random position on the grid
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

//this moves the mole here and there
function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1500) //higher time makes the mole moves slower
}

moveMole()

//this makes the timer goes down by one, till it hits zero.
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your score is' + result)
    }
}

let timerId = setInterval(countDown, 1000)




