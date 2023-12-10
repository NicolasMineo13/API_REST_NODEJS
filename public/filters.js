document.getElementById('getLivresFilters').addEventListener('click', getLivresFilters);
document.getElementById('getAuteursFilters').addEventListener('click', getAuteursFilters);
document.getElementById('getGenresFilters').addEventListener('click', getGenresFilters);
document.getElementById('getUtilisateursFilters').addEventListener('click', getUtilisateursFilters);

async function getLivresFilters() {
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');

    filterInputDiv.innerHTML = `
    <div>
        <label>Titre</label>
        <input id="titre" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <label>Date</label>
        <input id="date" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <label>Auteur</label>
        <input id="id_auteur" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <label>Genre</label>
        <input id="id_genre" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <button id="getLivres" class="btn btn-primary">Afficher</button>
    </div>
    `;

    document.getElementById('getLivres').addEventListener('click', getLivres);
}

async function getAuteursFilters() {
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');

    filterInputDiv.innerHTML = `
    <div>
        <label>Nom</label>
        <input id="nom" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <label>Prénom</label>
        <input id="prenom" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <button id="getAuteurs" class="btn btn-primary">Afficher</button>
    </div>
    `;

    document.getElementById('getAuteurs').addEventListener('click', getAuteurs);
}

async function getGenresFilters() {
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');

    filterInputDiv.innerHTML = `
    <div>
        <label>Libellé</label>
        <input id="nom" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <button id="getGenres" class="btn btn-primary">Afficher</button>
    </div>
    `;

    document.getElementById('getGenres').addEventListener('click', getGenres);
}

async function getUtilisateursFilters() {
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');

    filterInputDiv.innerHTML = `
    <div>
        <label>Login</label>
        <input id="login" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <label>Mot de passe</label>
        <input id="password" type="text" class="form-control" placeholder="Pas de filtre...">
    </div>
    <div class="mt-3">
        <button id="getUtilisateurs" class="btn btn-primary">Afficher</button>
    </div>
    `;

    document.getElementById('getUtilisateurs').addEventListener('click', getUtilisateurs);
}