// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // Create Tags
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    let headerSpan1 = document.createElement('span');
    headerSpan1.classList.add('date');
    let headerH1 = document.createElement('h1');
    let headerSpan2 = document.createElement('span');

    //Append Tags to Div
    headerDiv.appendChild(headerSpan1);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerSpan2);

    return headerDiv
}

//Append functionDiv to Doc
let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());