
// Use JQuery Ajax And Boostrap

// $('.search-button').on('click',function(){
//     $.ajax({
//       url: `https://www.omdbapi.com/?apikey=270102db&s=${$('.input-keyword').val()}`,
//       success: (result) => {
//         const movies = result.Search;
//         let elCard = "";
//         movies.forEach(values => {
//           elCard += showCard(values);
//         });
//         $(".movie-container").html(elCard);
    
//         // Ketika Tombol Detail Di Click
//         $(".modal-detail-button").on("click", function () {
//           $.ajax({
//             url: `https://www.omdbapi.com/?apikey=270102db&i=${$(this).data(
//               "imdbid"
//             )}`,
//             success: values => {
//               const movDetail = showMovDetail(values);
//               $(".modal-body").html(movDetail);
//             },
//             error: (e) => {
//               console.log(e.responseText);
//             },
//           });
//         });
//       },
//       error: (e) => {
//         console.log(e.responseText);
//       },
//     });
// });








// Use Fetch Js Vanilla
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click',function(){

  const inputKeyword = document.querySelector('.input-keyword');
  fetch(`https://www.omdbapi.com/?apikey=270102db&s=${inputKeyword.value}`)
    .then(res => res.json())
    .then(res => {
      const movies = res.Search;
      let cards = '';
      movies.forEach(el => cards += showCard(el));
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;

      
    // ketika tombol di click
    const modalDetailButton = document.querySelectorAll('.modal-detail-button');
    modalDetailButton.forEach(el => {
      el.addEventListener('click',function(){
        const imdbid = this.dataset.imdbid;
        fetch(`https://www.omdbapi.com/?apikey=270102db&i=${imdbid}`)
        .then(res => res.json())
        .then(res => {
          const movieDetail = showMovDetail(res);
          const modalBody = document.querySelector('.modal-body');
          modalBody.innerHTML = movieDetail;
        })
      })
    })
    });
});




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