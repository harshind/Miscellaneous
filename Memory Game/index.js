document.addEventListener("DOMContentLoaded",()=>{
    const cardArray = [
        {
            name: "fries",
            img:"img/fries.png"
        },
        {
            name: "fries",
            img:"img/fries.png"
        },
        {
            name: "cheeseburger",
            img:"img/cheeseburger.png"
        },
        {
            name: "cheeseburger",
            img:"img/cheeseburger.png"
        },
        {
            name: "hotdog",
            img:"img/hotdog.png"
        },
        {
            name: "hotdog",
            img:"img/hotdog.png"
        },
        {
            name: "ice-cream",
            img:"img/ice-cream.png"
        },
        {
            name: "ice-cream",
            img:"img/ice-cream.png"
        },
        {
            name: "milkshake",
            img:"img/milkshake.png"
        },
        {
            name: "milkshake",
            img:"img/milkshake.png"
        },
        {
            name: "pizza",
            img:"img/pizza.png"
        },
        {
            name: "pizza",
            img:"img/pizza.png"
        }
    ]

    let grid = document.querySelector('.grid');
    let displayScore = document.getElementById('result');
    let cardChosen =[];
    let cardChosenId = [];
    let cardWon = [];
    //console.log(cardArray);
    // create your Board

    function createBoard(){
        for(let i=0; i< cardArray.length;i++){
            let card = document.createElement('img');
            card.setAttribute("src","img/blank.png");
            card.setAttribute("data-id",i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
            //console.log(card);

        }
    }
    createBoard()
    // function to check match

    function checkMatch(){
        let cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if(cardChosen[0] === cardChosen[1]){
            alert("You Won the game");
            cards[optionOneId].setAttribute('src', 'img/white.png');
            cards[optionTwoId].setAttribute('src', 'img/white.png');
            cardWon.push(cardChosen);
        }else{
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
            alert("Sorry Try Again!!");
        }
        cardChosen = [];
        cardChosenId = [];

        displayScore.textContent = cardWon.length;
        if(cardWon.length === cardArray.length/2){
            alert("Congratulations!!!!!!")
        }
    }


    // function to flip the card

    function flipCard(){
        cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if(cardChosen.length === 2){
            setTimeout(checkMatch, 500);
        }
    }
})

