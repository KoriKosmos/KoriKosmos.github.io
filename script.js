document.addEventListener('DOMContentLoaded', () => {
    const usernameElements = document.querySelectorAll('.username');
    const username = 'KoriKosmos';

    usernameElements.forEach(element => {
        element.textContent = username;
    });

    const imageUsernameElement = document.querySelector('.card-image .username');
    imageUsernameElement.textContent = `${username} | Mori Calliope © 2016 - ${new Date().getFullYear()} Cover Corp`;

    const copyrightElement = document.querySelector('#copyright');
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `${currentYear} ${username}`;
});