# JS Library Front-end site: Interactive map of Switzerland 

## Concept
I was looking through the Javascript libraries that we went through in class, and I thought leaflet would be interesting to try out. 
While I was in Switzerland over the summer, my sisters and I were laughing about the fact that we have probably seen more of Switzerland than our own country..
So, my idea was to make an interactive map of Switzerland with pins to show the places I've been to with litte bits of info about each place. 

## Process and Challenges
The first thing I did was figure out how to get my map to display on screen the way I had envisioned. 
I went on the leaflet website and followed along with the 'Quick Start' tutorial to get a map to display on screen.
Working with leaflet was mostly straightforward, I understood most things just by changing up the code and seeing what happened. 
I changed the ```minZoom``` to zoom out only until the whole of Switzerland was showing on screen, not more.

One thing that was a little confusing was setting the view to Switzerland instead of London - I was able to get coordinates from geojson.com but the map was not displaying properly.
Turns out, the coordinates were switched as some programs put in Latitude first while others put Longitude first. I switched the coordinates and Switzerland was at the focus of the map.

Adding the pins was pretty straightforward, I used the ```onMapClick``` function from the tutorial to pinpoint the coordinares for each pin and copied it into the js file:
```
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
```
It is now commented out as I do not think its needed in my site, but I left it in the code just to refer to, as it was part of the process.

The popups were very easy to add to each pin using ```bindPopup()``` which is a leaflet command that allows the popup to show when you click the pin.


## Next Steps
I will try to explore more of Leaflet's capabilities in the future as well as look into the other libraries and see which would fit my final project the best.

## Conclusion
It was pretty fun to work with Leaflet and make a visual representation of my travels throughout Switzerland!
