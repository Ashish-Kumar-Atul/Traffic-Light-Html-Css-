const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const love = document.querySelector('.base')
const main = document.querySelector('main')

let redColorChanger = true;
let yellowColorChanger = true;
let greenColorChanger = true;


red.addEventListener('click', () => {
    if (redColorChanger===true) {
        red.style.backgroundColor = 'red';
        redChanger=false;
    } else {
        red.style.backgroundColor = 'rgb(215, 86, 86)'
        redColorChanger=true
    }
});

yellow.addEventListener('click', () => {
    if (yellowColorChanger===true) {
        yellow.style.backgroundColor = 'yellow';
        yellowColorChanger=false;
    } else {
        yellow.style.backgroundColor = 'rgb(248, 248, 170)'
        yellowColorChanger=true
    }
});

green.addEventListener('click', () => {
    if (greenColorChanger===true) {
        green.style.backgroundColor = 'green';
        greenColorChanger=false;
    } else {
        green.style.backgroundColor = 'rgb(97, 145, 97)'
        greenColorChanger=true
    }
});
main.addEventListener('click',()=>{
    main.style.backgroundColor='white'
});