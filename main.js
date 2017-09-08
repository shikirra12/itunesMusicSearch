/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let musicPlayer = document.getElementsByClassName('music-player')[0];
let  searchMusic = document.getElementById('submit');
let results = document.getElementById('results');

console.log('Results div: ', results);

searchMusic.addEventListener('click', function(a) {
  let input = document.getElementById('field');
console.log(input.value);

let searchInfo = input.value.split('').join("+");


fetch("https://itunes.apple.com/search?term=" + searchInfo + "&entity=song")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }

      response.json().then(function(data) {
        displaySong(data);
        // console.log("Here is the data:", data.results);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
})


function displaySong(data) {
  let template = '';

  for (var i = 0; i < data.results.length; i++) {

    template +=
    `
    <div class="songs">
    <img src="${data.results[i].artworkUrl100}">
    <h3>${data.results[i].artistName}</h3>
    <h5>${data.results[i].trackName}</h5>
    </div>
    `;

  }
  results.innerHTML = template;
  let song = document.getElementsByClassName('songs');
console.log("songs are: ", song);
    for (var i = 0; i < song.length; i++) {
      let result = i
      song[i].addEventListener('click', function() {
        console.log("result is: ", data.results[result], result);
        musicPlayer.src = data.results[result].previewUrl;
        musicPlayer.play();
      })
    }
}
