const submitBtn = document.querySelector('.notify-me-btn');
const email = document.querySelector('input[type="email"]');
const alertBox = document.querySelector('.alert-box');
const closeBtn = document.querySelector('.alert__close-btn');

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

submitBtn.addEventListener('click', validateForm);
closeBtn.addEventListener('click', closeAlertBox);

function closeAlertBox() {
    alertBox.classList.remove('active');
}

function validateForm(e) {
    e.preventDefault();

    if (email.value === '') {
        email.nextElementSibling.textContent = 'Email cannot be empty';
        email.className = 'empty';
    } else if (!emailRegex.test(email.value)) {
        email.nextElementSibling.textContent = 'Please provide a valid email address';
        email.className = 'invalid';
    } else {
        alertBox.classList.add('active');
        email.value = '';
        email.removeAttribute('class');
    }
}