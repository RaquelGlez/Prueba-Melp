let myRequest = new Request('./data/data_melp.json');

fetch(myRequest).then((resp) => {
    return resp.json();
}).then((data) => {
    viewRating(data);
    getLocations(data);
}).catch((error)=> {
    console.log('Error');
});

