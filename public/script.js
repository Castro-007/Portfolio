document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "DEVELOPER.", "CURATOR.", "PROGRAMMER."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekck if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.getElementById("hallo").innerHTML = text.substring(0, i+1) ;
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 500);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 10000);
       }
       // check if dataText[i] exists
      if (i < dataText.length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

//   decode effect


  function decodeText(){
    var text = document.getElementsByClassName('decode-text')[0];
    // debug with
    // console.log(text, text.children.length);

    // assign the placeholder array its places
    var state = [];
    for(var i = 0, j = text.children.length; i < j; i++ ){
        text.children[i].classList.remove('state-1','state-2','state-3');
        state[i] = i;
    }

    // shuffle the array to get new sequences each time
    var shuffled = shuffle(state);
 
    for(var i = 0, j = shuffled.length; i < j; i++ ){
        var child = text.children[shuffled[i]];
        classes = child.classList;

        // fire the first one at random times
        var state1Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){ 
            setTimeout(firstStages.bind(null, child), state1Time);
        }
    }
}

// send the node for later .state changes
function firstStages(child){
    if( child.classList.contains('state-2') ){   
        child.classList.add('state-3');
    } else if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
    } else if( !child.classList.contains('state-1') ){
        child.classList.add('state-1');
        setTimeout(secondStages.bind(null, child), 100);
    }    
}
function secondStages(child){
    if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
        setTimeout(thirdStages.bind(null, child), 100);
    } 
    else if( !child.classList.contains('state-1') )
    {
        child.classList.add('state-1')
    }
}
function thirdStages(child){
    if( child.classList.contains('state-2') ){
        child.classList.add('state-3')
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Demo only stuff
decodeText();

// beware: refresh button can overlap this timer and cause state mixups
setInterval(function(){ decodeText(); }, 10000);



