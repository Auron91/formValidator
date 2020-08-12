
const username = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#e-mail");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const inputs = [username,pass,pass2,email];

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} składa się z min. ${min} znaków.`)
    }
}

const checkPassword = () =>{
    if (pass.value !== pass2.value) {
        showError(pass2,'Hasła nie są takie same');
    }
}

const checkMail = email => {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

        if(!re.test(email.value)){
            showError(email,'Wpisz poprawny adres E-mail');
        }
}
const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el);
        }
    })
}

sendBtn.addEventListener('click', e =>{
    e.preventDefault();

    checkForm(inputs);
    checkLength(username,3);
    checkLength(pass,8);
    checkPassword();
});

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    inputs.map(function(e){
        e.value = "";
    });


});