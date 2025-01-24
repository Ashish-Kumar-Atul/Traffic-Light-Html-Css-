const redColor = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const love = document.querySelector('.base')
const main = document.querySelector('main')

redColor.addEventListener('click', () => {
    redColor.style.backgroundColor = 'red';
});
yellow.addEventListener('click',()=>{
    yellow.style.backgroundColor='yellow'
});
green.addEventListener('click',()=>{
    green.style.backgroundColor='green'
});
love.addEventListener('dblclick',()=>{
    love.innerHTML='<h1 class="love">Made with Love ❤️</h1>';
});
main.addEventListener('click',()=>{
    main.style.backgroundColor='white'
});
