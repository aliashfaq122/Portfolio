const words = [

"Full Stack Developer",
"Web Designer",
"JavaScript Developer",
"Frontend Developer"

];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = words[i];

if(isDeleting){

document.getElementById("typing").textContent =
current.substring(0,j--);

}else{

document.getElementById("typing").textContent =
current.substring(0,j++);

}

if(!isDeleting && j===current.length+1){

isDeleting=true;

setTimeout(type,1200);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length){

i=0;

}

}

setTimeout(type,isDeleting?60:120);

}

type();

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

});

/* Back To Top */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

/* Contact Form */

document.querySelector(".contact-form").addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent.");

e.target.reset();

});