const cardArray = [
    {
        name: "red",
        img: "images/red.jpg"
    },
    {
        name: "orange",
        img: "images/orange.jpg"
    },
    {
        name: "yellow",
        img: "images/yellow.jpg"
    },
    {
        name: "green",
        img: "images/green.jpg"
    },
    {
        name: "blue",
        img: "images/blue.jpg"
    },
    {
        name: "purple",
        img: "images/purple.jpg"
    },
    {
        name: "pink",
        img: "images/pink.jpg"
    },
    {
        name: "brown",
        img: "images/brown.jpg"
    },
    {
        name: "grey",
        img: "images/grey.jpg"
    },
    {
        name: "red",
        img: "images/red.jpg"
    },
    {
        name: "orange",
        img: "images/orange.jpg"
    },
    {
        name: "yellow",
        img: "images/yellow.jpg"
    },
    {
        name: "green",
        img: "images/green.jpg"
    },
    {
        name: "blue",
        img: "images/blue.jpg"
    },
    {
        name: "purple",
        img: "images/purple.jpg"
    },
    {
        name: "pink",
        img: "images/pink.jpg"
    },
    {
        name: "brown",
        img: "images/brown.jpg"
    },
    {
        name: "grey",
        img: "images/grey.jpg"
    }
]

let cardsChosen = []
const cardsDisplay = document.querySelector("#cardsId")
let cardsChosenIds = []
const cardsWon = []
let rounds = document.querySelector("#roundsId")
let scoreDisplay = document.querySelector("#scoreId")
let num_Rounds = 0
let joks = 0

cardArray.sort(() => 0.5 - Math.random())

function createBoard() {
    for (let i = 0; i < 18; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "images/frontCard.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        console.log (card, i)
        cardsDisplay.appendChild(card)
        
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img")
    const optionOne = cardsChosenIds[0]
    const optionTwo = cardsChosenIds[1]
    console.log ("check for match!")
    console.log ("ids", cardsChosenIds)
    console.log (cardsChosen)
    if (optionOne == optionTwo) {
        alert ("You clicked the same image!")
        cards[optionOne].setAttribute("src", "images/frontCard.jpg")
        cards[optionTwo].setAttribute("src", "images/frontCard.jpg")
        num_Rounds = (num_Rounds - 1)
        joks = (joks + 1)
            if (joks > 1){
                num_Rounds = (num_Rounds + 1)
            }

    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOne].removeEventListener("click", flipCard)
        cards[optionTwo].removeEventListener("click", flipCard)
        cardsWon.push(cards.Chosen)
        

    } else {
        cards[optionOne].setAttribute("src", "images/frontCard.jpg")
        cards[optionTwo].setAttribute("src", "images/frontCard.jpg")
    }
    num_Rounds = (num_Rounds + 1)
    console.log ("rounds =", num_Rounds)
    cardsChosenIds = []
    cardsChosen = []
    rounds.textContent = num_Rounds
    scoreDisplay.textContent = cardsWon.length
    console.log (cards)

    if (cardsWon.length == cardArray.length/2) {
        alert("YOU WON!")
    }
}

function flipCard() {
    const cardIdNew = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardIdNew].name)
    cardsChosenIds.push(cardIdNew)
    this.setAttribute("src", cardArray[cardIdNew].img)
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 400)
    }
    
}
