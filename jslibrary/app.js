let map = L.map('map').setView([46.91814199455288, 8.438721006880996], 8);


let tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 8,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let popup = L.popup()

let interlakenPin = L.marker([46.685111, 7.858829]).addTo(map);
interlakenPin.bindPopup("Interlaken, Switzerland <br> My favorite place to stay at, the views are stunning!");

let bernPin = L.marker([46.945304, 7.454567]).addTo(map);
bernPin.bindPopup("Bern, Switzerland <br> The capital of Switzerland - it has pretty buildings and is fun to shop in!");

let luganoPin = L.marker([46.003501, 8.951969]).addTo(map);
luganoPin.bindPopup("Lugano, Switzerland <br> It's in the italian-speaking region, facing the beautiful lake como!");

let genevaPin = L.marker([46.19857, 6.146507]).addTo(map);
genevaPin.bindPopup("Geneva, Switzerland <br> A city with a pretty lake view :) you can see mont blanc from here!");

let montreuxPin = L.marker([46.431282, 6.914263]).addTo(map);
montreuxPin.bindPopup("Montreux, Switzerland <br> A town facing lake geneva - france is on the other side of the lake which is crazy!");

let veveyPin = L.marker([46.4584, 6.844139]).addTo(map);
veveyPin.bindPopup("Vevey, Switzerland <br> A town by lake geneva.. theres a giant fork on the lake that people like to take pictures of..");

let grindelwaldPin = L.marker([46.623133, 8.037357]).addTo(map);
grindelwaldPin.bindPopup("Grindelwald, Switzerland <br> A mountainous town that is absolutely stunning and snow-covered during wintertime !!");

let zurichPin = L.marker([47.374273, 8.542385]).addTo(map);
zurichPin.bindPopup("Zurich, Switzerland <br> The largest city in Switzerland, it's very fun to explore the city and admire the architecture!");

let luzernPin = L.marker([47.050107, 8.304806]).addTo(map);
luzernPin.bindPopup("Luzern, Switzerland <br> The train ride here is so pretty and you pass by so many different views from lakes to mountains, 100% better than going by car!!!");

let gstaadPin = L.marker([46.476695, 7.287111]).addTo(map);
gstaadPin.bindPopup("Gstaad, Switzerland <br> The train rides here were so unforgettable, we came from montreux on a 1930s style train and left on a panoramic train with windows at the front so you could see the tracks! so cool!!");

let jungfrauPin = L.marker([46.547422, 7.98279]).addTo(map);
jungfrauPin.bindPopup("Jungfrau, Switzerland <br> Jungfrau is a mountain with a height of 4158 meters, it is home to the Jungfraujoch railway - the highest accessible point in Europe!");

let thunPin = L.marker([46.756997, 7.631721]).addTo(map);
thunPin.bindPopup("Thun, Switzerland <br> A town near Lake Thun, it's a historic Swiss town featuring the Thun Castle which was built in the 1100s! ");

let brienzPin = L.marker([46.755957, 8.031521]).addTo(map);
brienzPin.bindPopup("Brienz, Switzerland <br> A town by Lake Brienz, which is a lake with absolutely stunning blue-green hues!");





function onMapClick(e) {
    //used this to make the pins - i clicked on where I wanted the pin to be placed and copied the coordinates above ^
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
}

map.on('click', onMapClick);
