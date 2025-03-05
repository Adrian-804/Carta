const loginBtn = document.querySelector('.toggle-left .toggle-btn');
const registerBtn = document.querySelector('.toggle-right .toggle-btn');
const container = document.querySelector('.container');

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});