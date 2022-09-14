document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'chairy',
            img: 'images/chairy.jpg'
        },
        {
            name: 'chairy',
            img: 'images/chairy.jpg'
        },
        {
            name: 'clocky',
            img: 'images/clocky.jpg'
        },
        {
            name: 'clocky',
            img: 'images/clocky.jpg'
        },
        {
            name: 'coolcat',
            img: 'images/coolcat.jpg'
        },
        {
            name: 'coolcat',
            img: 'images/coolcat.jpg'
        },
        {
            name: 'cowboycurtis',
            img: 'images/cowboycurtis.jpg'
        },
        {
            name: 'cowboycurtis',
            img: 'images/cowboycurtis.jpg'
        },
        {
            name: 'flowers',
            img: 'images/flowers.jpg'
        },
        {
            name: 'flowers',
            img: 'images/flowers.jpg'
        },
        {
            name: 'jambi',
            img: 'images/jambi.jpg'
        },
        {
            name: 'jambi',
            img: 'images/jambi.jpg'
        },
        {
            name: 'missyvonne',
            img: 'images/missyvonne.jpg'
        },
        {
            name: 'missyvonne',
            img: 'images/missyvonne.jpg'
        },
        {
            name: 'peeweehelmet',
            img: 'images/peeweehelmet.jpg'
        },
        {
            name: 'peeweehelmet',
            img: 'images/peeweehelmet.jpg'
        },
        {
            name: 'peeweehole',
            img: 'images/peeweehole.jpg'
        },
        {
            name: 'peeweehole',
            img: 'images/peeweehole.jpg'
        },
        {
            name: 'pterri',
            img: 'images/pterri.jpg'
        },
        {
            name: 'pterri',
            img: 'images/pterri.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    //create board game
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/front.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

//check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId [1]
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white square.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white square.jpg')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/front.jpg')
        cards[optionTwoId].setAttribute('src', 'images/front.jpg')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

//flip your card 
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})

