// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const usernameElements = document.querySelectorAll('.username');
    const username = 'KoriKosmos';

    usernameElements.forEach(element => {
        element.textContent = username;
    });

    const copyrightElement = document.querySelector('#copyright');
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `${currentYear} ${username}`;
});