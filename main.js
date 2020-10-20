// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function callback(e) {
  let heart = e.target
  mimicServerCall()
  .then(message => {
    heart.innerText = glyph[heart.innerText]
    heart.style.color = clr[heart.style.color]
  })

  .catch(message => {
    errorModal.hidden = false
    setTimeout(function() {
      errorModal.hidden = true}, 5000)

  })
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
