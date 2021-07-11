window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    var date = new Date();
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const cry = document.querySelector("#currentDate");
    cry.textContent = dayNames[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();

});
