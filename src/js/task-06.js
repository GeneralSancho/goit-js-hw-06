const inputEl = document.querySelector('#validation-input');
const lengthEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener('blur', (event) => {
    const length = Number(lengthEl.dataset.length);
    const arrayInput = event.currentTarget.value.split('');

    if (arrayInput.length === length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid')
    }
});