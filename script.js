// =======================
// TYPING EFFECT
// =======================


const text = document.querySelector("#typingText");


const words = [

"Web Developer",
"Frontend Developer",
"JavaScript Developer",
"Creative Designer",
"React Developer"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typing(){


let currentWord = words[wordIndex];


if(!deleting){


text.innerHTML = currentWord.substring(0,charIndex++);


if(charIndex > currentWord.length){


deleting=true;


setTimeout(typing,1200);

return;


}


}else{


text.innerHTML=currentWord.substring(0,charIndex--);


if(charIndex ===0){


deleting=false;


wordIndex++;


if(wordIndex >= words.length){

wordIndex=0;

}


}

}


setTimeout(
typing,
deleting ? 70 : 120
);


}


typing();




// =======================
// SCROLL REVEAL
// =======================


const reveals=document.querySelectorAll(".reveal");


window.addEventListener(
"scroll",
()=>{


reveals.forEach((item)=>{


let windowHeight=window.innerHeight;

let revealTop=item.getBoundingClientRect().top;


if(revealTop < windowHeight-100){


item.classList.add("show");


}


});


});


window.dispatchEvent(new Event("scroll"));