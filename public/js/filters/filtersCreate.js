document.getElementById('createLivreFilters').addEventListener('click', createLivreFilters);
document.getElementById('createAuteurFilters').addEventListener('click', createAuteurFilters);
document.getElementById('createGenreFilters').addEventListener('click', createGenreFilters);
document.getElementById('createUtilisateurFilters').addEventListener('click', createUtilisateurFilters);

async function createLivreFilters() {
    hideResult();
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = 'Créer un livre';

    filterInputDiv.innerHTML = `
    <div>
        <label>Titre</label>
        <input id="titre" type="text" class="form-control" placeholder="Entrez un titre...">
    </div>
    <div class="mt-3">
        <label>Date</label>
        <input id="date" type="text" class="form-control" placeholder="Entrez une date...">
    </div>
    <div class="mt-3">
        <label>Auteur</label>
        <input id="id_auteur" type="text" class="form-control" placeholder="Entrez un identifiant auteur...">
    </div>
    <div class="mt-3">
        <label>Genre</label>
        <input id="id_genre" type="text" class="form-control" placeholder="Entrez un identifiant genre...">
    </div>
    <div class="mt-3">
        <button id="createLivre" class="btn btn-primary">Créer</button>
    </div>
    `;

    document.getElementById('createLivre').addEventListener('click', createLivre);
}

async function createAuteurFilters() {
    hideResult();
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = 'Créer un auteur';

    filterInputDiv.innerHTML = `
    <div>
        <label>Nom</label>
        <input id="nom" type="text" class="form-control" placeholder="Entrez un nom...">
    </div>
    <div class="mt-3">
        <label>Prénom</label>
        <input id="prenom" type="text" class="form-control" placeholder="Entrez un prénom...">
    </div>
    <div class="mt-3">
        <button id="createAuteur" class="btn btn-primary">Créer</button>
    </div>
    `;

    document.getElementById('createAuteur').addEventListener('click', createAuteur);
}

async function createGenreFilters() {
    hideResult();
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = 'Créer un genre';

    filterInputDiv.innerHTML = `
    <div>
        <label>Libellé</label>
        <input id="libelle" type="text" class="form-control" placeholder="Entrez un libellé...">
    </div>
    <div class="mt-3">
        <button id="createGenre" class="btn btn-primary">Créer</button>
    </div>
    `;

    document.getElementById('createGenre').addEventListener('click', createGenre);
}

async function createUtilisateurFilters() {
    hideResult();
    const filterDiv = document.getElementById('filterDiv');
    filterDiv.classList.remove('d-none');
    const filterInputDiv = document.getElementById('filterInputDiv');
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = 'Créer un utilisateur';

    filterInputDiv.innerHTML = `
    <div>
        <label>Login</label>
        <input id="login" type="text" class="form-control" placeholder="Entrez un login...">
    </div>
    <div class="mt-3">
        <label>Mot de passe</label>
        <input id="password" type="password" class="form-control" placeholder="Entrez un mot de passe...">
    </div>
    <div class="mt-3">
        <button id="createUtilisateur" class="btn btn-primary">Créer</button>
    </div>
    `;

    document.getElementById('createUtilisateur').addEventListener('click', createUtilisateur);
}