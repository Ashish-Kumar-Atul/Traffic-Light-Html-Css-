const redColor = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

redColor.addEventListener('click', () => {
    redColor.style.backgroundColor = 'red';
});
yellow.addEventListener('click',function(){
    yellow.style.backgroundColor='yellow'
});
green.addEventListener('click',function(){
    green.style.backgroundColor='green'
});