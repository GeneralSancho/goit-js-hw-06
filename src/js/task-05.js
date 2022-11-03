const nameVal = document.querySelector('#name-output');
const inputVal = document.querySelector('#name-input');
console.log(inputVal.value);

inputVal.addEventListener('change', () => {
    if (inputVal.value === "") {
        nameVal.innerHTML = 'Anonymous'
    } else {
        nameVal.innerHTML = inputVal.value
    }
})