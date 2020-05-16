// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let topicsDivDoc = document.querySelector('.topics')

//Use Axios to get address above
let data = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        //deal with response

        let arrTopics = response.data.topics;
        console.log(arrTopics)
        arrTopics.forEach(items => {
            let tabsDiv = document.createElement('div');
            tabsDiv.classList.add('tab');    
            tabsDiv.textContent = items;
            

            topicsDivDoc.appendChild(tabsDiv)
        });

    })
    .catch( err => {
        //deal with error
        console.log('Error');
    })
