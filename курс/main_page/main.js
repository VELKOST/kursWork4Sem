// main.js
document.addEventListener('DOMContentLoaded', function () {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function () {
        const sectionCallus = document.querySelector('.galleryimgs');
        sectionCallus.scrollIntoView({ behavior: 'smooth' });
    });
});
