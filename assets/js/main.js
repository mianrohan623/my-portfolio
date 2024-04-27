const words = ["Web Developer", "Web Designer", "Youtuber"];
const typingElement = document.querySelector('.typing');
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    } else {
        setTimeout(erase, 3000); // Wait 2 seconds before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here (in milliseconds)
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(type, 500); // Wait 0.5 seconds before typing the next word
    }
}

type(); // Start typing


// this is for header menu 

let menuIcon = document.querySelector("#menu-icon");
let menuOptions = document.querySelector("#menu-options");

menuIcon.addEventListener("click", () => {
    if (menuOptions.classList.contains("d-none")) {
        menuOptions.classList.remove("d-none");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuOptions.classList.add("d-none");
        menuIcon.classList.remove("fa-xmark");
    }
});


// send message to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMBc3V7lqFrwV3Qd4qYwKRHfCdxarkguj7mmnKVQcYTDH11hL3oTQB1M9UZhjvBJEJ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.querySelector("#msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent sucessfully"
            setTimeout(()=>{
                msg.innerHTML = ""

            },5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});