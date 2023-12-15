const apiKey = "34873529bamshe8bf35b1fe52c95p15a23ejsn39f258d31102";

async function getPlaylists(value, container, cardType) {
  const apiUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.statusText}`);
    }

    const data = await response.json();
    generateCardList(data, container, cardType);

    console.log("Lista di playlist:", data);
  } catch (error) {
    console.error("Si è verificato un errore:", error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  let timer;

  searchBar.addEventListener("input", () => {
    const valueSearched = searchBar.value;

    clearTimeout(timer);

    timer = setTimeout(() => {
      getPlaylists(valueSearched, "ascoltatiRecenti", "small");
    }, 1000);
  });

  getPlaylists("Linkin Park", "smallIcons", "small");
  getPlaylists("Linkin Park", "firstAlbum", "large");
  getPlaylists("Sabaton", "secondAlbum", "large");
  getPlaylists("Metallica", "contenitore3", "large");
  getPlaylists("Slayer", "contenitore4", "large");
});

const generateCardList = (arrayObj, container, cardType) => {
  const cardContainer = document.getElementById(container);
  cardContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let card = createCard(arrayObj.data[i], cardType);
    cardContainer.appendChild(card);
  }
};

const createCard = (obj, cardType) => {
  if (cardType == "large") {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
    <div class="card gx-4" id="large">
      <img src="${obj.album.cover}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column justify-content-between">
        <h6 class="card-title m max-h-50 fs-6" id="nomeAlbum"><a class="customColo" href="./album.html?idAlbum=${obj.album.id}">${obj.album.title}</a></h6>
        <p class="card-text">${obj.artist.name}</p>
      </div>
    </div>`;

    const cardContainer = card.querySelector(".card");
    cardContainer.addEventListener("mouseover", () => {
      cardContainer.style.backgroundColor = "gray";
    });

    cardContainer.addEventListener("mouseout", () => {
      cardContainer.style.backgroundColor = "";
    });

    return card;
  }
};
