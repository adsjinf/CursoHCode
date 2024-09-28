const shareButton = document.querySelector('.share-button');
const menu = document.querySelector('.menu');

shareButton.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});
