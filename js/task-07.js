const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
//listener
inputEl.addEventListener('input', (event) => {
    
    const textSize = event.currentTarget.value;
    textEl.style.fontSize = `${textSize}px`; 
    
})