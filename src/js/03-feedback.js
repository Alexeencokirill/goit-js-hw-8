import { throttle } from "lodash";

const form = document.querySelector('.feedback-form')
const mail = document.querySelector('mail')
const message = document.querySelector('message')


form.addEventListener('input', throttle(evt => {
    const input = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(input));
}, 500)
);


form.addEventListener('submit', evt => {
    evt.preventDefault();
    const {
        elements: {email, message},
    } = evt.currentTarget;
    console.log({email: email.value, message: message.value});

    evt.currentTarget.reset();
    localStorage.clear();
});

const storage = localStorage.getItem('feedback-form-state')
const parseStorageData = JSON.parse(storage);
const tryFoo = () => {
    if (parseStorageData !== null) {
        email.value = parseStorageData.email;
        text.value = parseStorageData.message
    }
}


tryFoo();