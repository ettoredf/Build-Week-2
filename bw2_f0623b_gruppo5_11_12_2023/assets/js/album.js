const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34873529bamshe8bf35b1fe52c95p15a23ejsn39f258d31102",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

document.addEventListener("DOMContentLoaded", function () {
  // Recupera i parametri dall'URL
  const urlParams = new URLSearchParams(window.location.search);

  const albumId = urlParams.get("Meteora"); // Sostituisci con il parametro corretto

  // Esegui la chiamata API per ottenere dettagli artista
  fetch(`https://api.deezer.com/artist/${obj.album.id}`)
    .then((response) => response.json())
    .then((albumData) => {
      // Popola la pagina con i dettagli dell'artista
      document.getElementById("nomealbum").textContent = albumData.name;
      // Aggiungi altri dettagli artistici

      // Esegui la chiamata API per ottenere dettagli album
      return fetch(`<a class="customColo" href="./album.html?idAlbum=${obj.album.id}">${obj.album.title}</a>`);
    })
    .then((response) => response.json())
    .then((albumData) => {
      // Popola la pagina con i dettagli dell'album
      document.getElementById("nomeAlbum").textContent = albumData.title;
      // Aggiungi altri dettagli dell'album
    })
    .catch((error) => console.error("Errore nel recupero dei dati:", error));
});
