window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    const option_banner = document.querySelector('.option_banner');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    var date = new Date();
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    if (date.getDay() == 6){
        option_banner.style.display = 'block';
    }

    const cry = document.querySelector("#currentDate");
    cry.textContent = dayNames[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();

});
