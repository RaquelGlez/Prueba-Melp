
window.getLocations = (data) => {
    const locationsInfo = []; 
    let locationData = {};
    let locationsLat = '';
    let locationsLng = '';
    let label = '';

    for (key in data) {
        let items = Object.values(data[key]);
        console.log(items);

        let locations = items[4].location;
        let locationsLat = locations.lat;
        let locationsLng = locations.lng;

        let label = items[2];
        let position = items[1];
        let detail = `${label}; \nCalif:${position}`;
           
        let locationData = {
            position: {
                lat: locationsLat, 
                lng: locationsLng},
            name: detail
        };
        locationsInfo.push(locationData);            

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((data)=>{
                let currentPosition = {
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                };
                dibujarMapa(currentPosition, locationsInfo);
            });
        };
    };
};

const dibujarMapa = (obj, locationsInfo) => {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: obj
    });
 
    let marker = new google.maps.Marker({
        position: obj,
        title: 'Tu ubicacion'
    });
    marker.setMap(map);
 
    let markers = locationsInfo.map(place => {
        return new google.maps.Marker({
            position: place.position,
            map: map,
            title: place.name
        });
    });
};

window.addEventListener('load', getLocations);