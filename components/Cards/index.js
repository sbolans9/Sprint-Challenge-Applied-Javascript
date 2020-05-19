// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
let cards = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //Obejct
        console.log(response.data.articles)

        let js = response.data.articles.javascript;
        js.forEach(x => {
            cards.appendChild(card(x));
        })

        let bootstrap = response.data.articles.bootstrap;
        console.log(bootstrap)
        bootstrap.forEach(element => {
            cards.appendChild(card(element));
        });

        let technology = response.data.articles.technology;
        technology.forEach(x => {
            cards.appendChild(card(x));
        })

        let jquery = response.data.articles.jquery;
        jquery.forEach(x => {
            cards.appendChild(card(x));
        })

        let node = response.data.articles.node;
        node.forEach(x => {
            cards.appendChild(card(x));
        })

        })


function card(arr){
    // create tags
    let divCard = document.createElement('div');
    let divHeadline = document.createElement('div');
    let divAuthor = document.createElement('div');
    let divImgContainer = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    // appending tags
    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);
    divAuthor.appendChild(divImgContainer);
    divImgContainer.appendChild(img);
    divAuthor.appendChild(span)

    //adding class name
    divCard.classList.add('card');
    divHeadline.classList.add('author');
    divImgContainer.classList.add('img-container');

    // //adding text/img
    divHeadline.textContent = `${arr.headline}`;
    img.src = arr.authorPhoto;
    span.textContent = `${arr.authorName}`;  

    //return
    return divCard

}
