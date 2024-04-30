
const btnSearch = document.getElementById('searchBtn');
const btnClear = document.getElementById('clearBtn');
function searchRecommendation() {
    var keyword = document.getElementById('search-input').value.toLowerCase();
    var resultDiv = document.getElementById('result-div');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then((data) => {
            switch (keyword) {
                case 'country' || 'countries':
                    data.countries.forEach((country) => {
                        country.cities.forEach((city) => {
                            var resultCard = document.createElement('div');
                            resultCard.classList.add('result-card');
                            var img = document.createElement("img");
                            img.classList.add('img-card');
                            img.src = "./images/" + city.imageUrl;
                            var resultCardLower = document.createElement("div");
                            resultCardLower.classList.add('result-card-lower');
                            var cityTitle = document.createElement('h2');
                            cityTitle.innerText = city.name;
                            var cityDescr = document.createElement('p');
                            cityDescr.innerText = city.description;
                            var visitButton = document.createElement('button');
                            visitButton.classList.add('visit-button');
                            visitButton.innerHTML = "Visit";
                            resultCard.appendChild(img);
                            resultCard.appendChild(resultCardLower);
                            resultCardLower.appendChild(cityTitle);
                            resultCardLower.appendChild(cityDescr);
                            resultCardLower.appendChild(visitButton);
                            resultDiv.appendChild(resultCard);
                        })
                    })
                    break;
                case 'temple' || 'temples':
                    data.temples.forEach((temple) => {
                        var resultCard = document.createElement('div');
                        resultCard.classList.add('result-card');
                        var img = document.createElement("img");
                        img.classList.add('img-card');
                        img.src = "./images/" + temple.imageUrl;
                        var resultCardLower = document.createElement("div");
                        resultCardLower.classList.add('result-card-lower');
                        var templeTitle = document.createElement('h2');
                        templeTitle.innerText = temple.name;
                        var templeDescr = document.createElement('p');
                        templeDescr.innerText = temple.description;
                        var visitButton = document.createElement('button');
                        visitButton.classList.add('visit-button');
                        visitButton.innerHTML = "Visit";
                        resultCard.appendChild(img);
                        resultCard.appendChild(resultCardLower);
                        resultCardLower.appendChild(templeTitle);
                        resultCardLower.appendChild(templeDescr);
                        resultCardLower.appendChild(visitButton);
                        resultDiv.appendChild(resultCard);
                    })
                    break;
                case 'beach' || 'beaches':
                    data.beaches.forEach((beach) => {
                        var resultCard = document.createElement('div');
                        resultCard.classList.add('result-card');
                        var img = document.createElement("img");
                        img.classList.add('img-card');
                        img.src = "./images/" + beach.imageUrl;
                        var resultCardLower = document.createElement("div");
                        resultCardLower.classList.add('result-card-lower');
                        var beachTitle = document.createElement('h2');
                        beachTitle.innerText = beach.name;
                        var beachDescr = document.createElement('p');
                        beachDescr.innerText = beach.description;
                        var visitButton = document.createElement('button');
                        visitButton.classList.add('visit-button');
                        visitButton.innerHTML = "Visit";
                        resultCard.appendChild(img);
                        resultCard.appendChild(resultCardLower);
                        resultCardLower.appendChild(beachTitle);
                        resultCardLower.appendChild(beachDescr);
                        resultCardLower.appendChild(visitButton);
                        resultDiv.appendChild(resultCard);
                    })
                    break;

            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function clear() {
    var search = document.getElementById("search-input");
    search.value = "";
    var resultDiv = document.getElementById('result-div');
    resultDiv.innerHTML = '';
}

btnSearch.addEventListener('click', searchRecommendation);
btnClear.addEventListener('click', clear);
