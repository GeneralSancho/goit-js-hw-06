
const form=document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (email === "" || password=== "") {
        return alert("Please fill in all the fields!");
    } else {
        const info = {
            email,
            password,
        };
        console.log(info);
    }
    return form.reset();
});