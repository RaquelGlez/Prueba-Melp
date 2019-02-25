let btnSearch = document.getElementById('search-user');

btnSearch.addEventListener('click', ()=> {
    let ratingNumber = document.getElementById('rating').value;
    if (ratingNumber === '') {
        alert('Ingresa un número');
    } else {
        viewRating(ratingNumber);
    };
});


window.viewRating = (data, ratingNumber) => {
    
    const information = document.getElementById('result-rating');
 
};

