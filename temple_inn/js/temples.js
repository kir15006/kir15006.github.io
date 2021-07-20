fetch("json/temples.json")
.then(function (response) {
    return response.json();
})
.then(function (temples) {
    console.log(temples);

    for (let i = 0; i < temples.length; i++) {
        let location = document.querySelector("#" + temples[i].name)
        for (let j = 0; j < temples[i].closures.length; j++) {
            let closure = document.createElement('li');
            closure.innerHTML = temples[i].closures[j];
            location.appendChild(closure);
        }
    }


})
