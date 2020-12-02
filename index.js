const form = document.getElementById('form');
const subject = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const phoneNumber = document.getElementById('phoneNumber');
let isSubject = false;
let isEm = false;
let isMessage = false;
let isPhoneNumber = false;




form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();

    if(isSubject && isEm && isMessage && isPhoneNumber){
        const myForm = document.getElementById("form-container");
        myForm.remove();

        const Thanks = `<div class="about">
                            <h1 class="intro form-done">
                                Thank you! Ill get back to you shortly.
                            </h1>
                        </div>`

        document.getElementById("form-foo").innerHTML = Thanks;
    }


});

function checkInputs() {
    // trim to remove the whitespaces
    const subjectValue = subject.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();


    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        isEm = true;
        setSuccessFor(email);
    }

    if(subjectValue === '') {
        setErrorFor(subject, 'Subject cannot be blank');
    } else {
        isSubject = true;
        setSuccessFor(subject);
    }

    if(messageValue === '') {
        setErrorFor(message, 'Message cannot be blank');
    } else {
        isMessage = true;
        setSuccessFor(message);
    }

    if(phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'Phone Number cannot be blank');
    } else if (!isphoneNumber(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Not a valid phone number')
    } else {
        isPhoneNumber = true;
        setSuccessFor(phoneNumber);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isphoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber)
}
