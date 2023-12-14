document.addEventListener("DOMContentLoaded", function () {
  // Recupera i parametri dall'URL
  const urlParams = new URLSearchParams(window.location.search);
  const artistId = urlParams.get("Linkin Park"); // Sostituisci con il parametro corretto
  const albumId = urlParams.get("Meteora"); // Sostituisci con il parametro corretto

  // Esegui la chiamata API per ottenere dettagli artista
  fetch(`https://api.deezer.com/artist/${obj.artist.id}`)
    .then((response) => response.json())
    .then((artistData) => {
      // Popola la pagina con i dettagli dell'artista
      document.getElementById("nomeArtista").textContent = artistData.name;
      // Aggiungi altri dettagli artistici

      // Esegui la chiamata API per ottenere dettagli album
      return fetch(`https://api.deezer.com/album/${obj.album.id}`);
    })
    .then((response) => response.json())
    .then((albumData) => {
      // Popola la pagina con i dettagli dell'album
      document.getElementById("nomeAlbum").textContent = albumData.title;
      // Aggiungi altri dettagli dell'album
    })
    .catch((error) => console.error("Errore nel recupero dei dati:", error));
});
