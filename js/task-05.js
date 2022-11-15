// const nameVal = document.querySelector('#name-output');
// const inputVal = document.querySelector('#name-input');
// console.log(inputVal.value);

// inputVal.addEventListener('change', () => {
//     if (inputVal.value === "") {
//         nameVal.innerHTML = 'Anonymous'
//     } else {
//         nameVal.innerHTML = inputVal.value
//     }
// })



const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
// add listener
inputEl.addEventListener('input', (event) => {
    textEl.textContent = event.currentTarget.value;
if (event.currentTarget.value==='') {
    textEl.textContent = 'Anonymous';
}
    
});