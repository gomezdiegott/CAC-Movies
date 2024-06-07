
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDIxMTk5OGEwMWIxMGM1MDk5OGE1YTBkODI3NzI0MSIsInN1YiI6IjY2NTczNjFjODZjYzJiNzJkZjFjZjI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3SxeWj4H5Sfe_B2MkiY2fXzXNeFH02UDlH3XVo5N-qI';
const API_URL = 'https://api.themoviedb.org/3';

const idioma="es-MX";

function llamarApi(id){
    fetch(`${API_URL}/movie/${id}?language=${idioma}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    })
    .then(response => response.json())
    .then(data => dibujarBanner(data));
}

function dibujarBanner(json) {
    let banner= crearBanner(json)
    document.querySelector('.bannerMovie').innerHTML = banner;
    
}
function crearBanner(movie) {
    return `
    <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="">
    <div>
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
          <div class="detalles">
            <h2 class="resaltador">${movie.title}</h2>
            <div>
              <p class="resaltador">${movie.overview}</p>
            </div>
            <div class="masDetalles">
              <ul class="resaltador">
                <li>Genero</li>
                ${obtenerGeneros(movie)}
              </ul>
              <ul class="resaltador">
                <li>Fecha de lansamiento : ${movie.release_date}</li>
              </ul>
              <ul class="resaltador">
                <li>Votos :</li>
                <li>${parseInt(movie.vote_average)}/10</li>
              </ul>
              <ul class="resaltador">
                <li>Duracion :</li>
                <li>${movie.runtime}m</li>
              </ul>
            </div>
          </div>
        </div>
    `;
}
//falta mostrar los generos
const obtenerGeneros=(json)=>{
    json.genres.forEach(genero=>{
        return `<li>${genero.name}</li>`
    })

}
llamarApi(sessionStorage.getItem('idMovie'))

// b51f92fb25219c57dbe48d8fd2100fdd    
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTFmOTJmYjI1MjE5YzU3ZGJlNDhkOGZkMjEwMGZkZCIsInN1YiI6IjY2NWIzNDAxZDQ5M2FmYjU2ODU5MzE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPpjx8AqjYlpq0YJ6F1gh5hgxSvQcGJck_PIaX8BuEM