window.addEventListener('load', () => {
    let toggle = 0;
    document.querySelector('#servicesDropDown').addEventListener("click", () => {
        if (toggle  == 0) {
            document.querySelector('#hidden_nav').style.display = 'block';
            document.querySelector('#servicesDropDown').innerHTML = ' ▾';
            toggle = 1;
        }
        else if (toggle == 1) {
            document.querySelector('#hidden_nav').style.display = 'none';
            document.querySelector('#servicesDropDown').innerHTML = ' ▸';
            toggle = 0;
        }
    });

    let ham = document.querySelector('.ham');
    ham.addEventListener('click', () => {
        document.querySelector('#nav').classList.toggle('responsive')}, true);

})
