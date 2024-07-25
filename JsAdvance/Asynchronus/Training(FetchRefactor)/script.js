
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
  try{
    const inputKey = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKey.value);
    updateUI(movies);        
  }catch(error){
    alert(error);
  }
});

function getMovies(keyword){
  return fetch(`https://www.omdbapi.com/?apikey=270102db&s=${keyword}`)
  .then(res => {
    if(!res.ok){
      throw new Error(res.statusText);
    }
    return res.json();
  })
  .then(res => {
    if(res.Response === "False"){
      console.log(res);
      // throw new Error(res.Error);
    }
    return res.Search;
  });
}

function updateUI(movies){
  let cards = '';
  movies.forEach(el => cards += showCard(el));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});


function getMovieDetail(imdbid){
    return fetch(`https://www.omdbapi.com/?apikey=270102db&i=${imdbid}`)
    .then(res => res.json())
    .then(res => res);
}

function updateUIDetail(value){
    const movieDetail = showMovDetail(value);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function showCard(values) {
  return `
            <div class="col-md-4 my-3">
                <div class="card">
                    <img src="${values.Poster === "N/A" ? "img/default-movie.jpg" : values.Poster}" alt="${values.Title} ${values.Year}" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${values.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${values.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetail" data-imdbid="${values.imdbID}">Show Details</a>
                    </div>
                  </div>
            </div>
            `;
}

function showMovDetail(values){
 return `          
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${values.Poster === "N/A" ? "img/default-movie.jpg" : values.Poster}" alt="${values.Title} ${values.Year}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${values.Title} (${values.Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong>${values.Director}</li>
                  <li class="list-group-item"><strong>Actors : </strong>${values.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong>${values.Writer}</li>
                  <li class="list-group-item"><strong>Plot : </strong><br>${values.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`
}