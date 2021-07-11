window.addEventListener('load', () => {
    const option_banner = document.querySelector('.option_banner');

    date = new Date();

    if (date.getDay() == 6){
        option_banner.style.display = 'block';
    }

});