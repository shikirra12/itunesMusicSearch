/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let musicPlayer = document.getElementsByClassName('music-player');
let results;


let artistSearch = document.querySelector('find');
let submit = document.getElementsByClassName('search-form');
artistSearch.addEventListener('onclick', buttonAction);
console.log(artistSearch);


function buttonAction() {

fetch("https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/", "POST")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {

        console.log("Here is the data:", data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
}

// function functionName() {
//
// }




//  let url= "https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/"
//   let submit = document.getElementsByTagName('button');
//   let artistSearch = document.getElementsByClassName('search-form')
//
// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify() ,
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(function(response) {
//     return response.json ();
//   }).then(function(data) {
//     console.log(data);
//   })


// submit.addEventListener('click', function() {
//   fetchData();
//
// })
//
// function fetchData() {
//   fetch  (url)
//     .then(function(res) {
//       return res.json();
//     }).then(function(data) {
// let load = data.payload;
// for(var i=0; i < load.length;  i++) {
//   console.log(load[i].username);
//   console.log(load[i].password);
// }
// })
// }
