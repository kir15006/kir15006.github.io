const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let info = document.createElement('div')
        info.setAttribute('class', 'info')

        let town_name = document.createElement('h1');
        let motto = document.createElement('h4');
        let year = document.createElement('h3');
        let population = document.createElement('h3');
        let rain = document.createElement('h3');
        let photo = document.createElement('img');

        town_name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        photo.setAttribute('src', 'images/' + towns[i].photo)

        info.appendChild(town_name);
        info.appendChild(motto);
        info.appendChild(year);
        info.appendChild(population);
        info.appendChild(rain);

        card.appendChild(info)
        card.appendChild(photo);

        document.querySelector('#town_cards').appendChild(card);
        

}
});