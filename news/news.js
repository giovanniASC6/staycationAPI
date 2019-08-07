let url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ead573e08744fb4b9d14601e5b585ae';
var req = new Request(url);
fetch(req)
    .then(function (response) {
        return (response.json())
    }).then(function (res) {
        console.log(res)
        const createCard = (res, indx) => {
            const newCard = document.createElement("div")
            newCard.className = "card"
            newCard.id = indx
            const newText = document.createElement("p")
            newText.innerText = `${res.articles.author} `
            newCard.appendChild(newText)
        }
    })


    