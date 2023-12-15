async function getLivres() {
    try {
        token = localStorage.getItem('token');
        refreshToken = localStorage.getItem('refreshToken');

        const titre = document.getElementById('titre');
        const date = document.getElementById('date');
        const auteur = document.getElementById('id_auteur');
        const genre = document.getElementById('id_genre');

        let conditions = '';
        if (titre.value !== '') {
            conditions += `titre=${encodeURIComponent(titre.value)}&`;
        }
        if (date.value !== '') {
            conditions += `date=${encodeURIComponent(date.value)}&`;
        }
        if (auteur.value !== '') {
            conditions += `id_auteur=${encodeURIComponent(auteur.value)}&`;
        }
        if (genre.value !== '') {
            conditions += `id_genre=${encodeURIComponent(genre.value)}&`;
        }

        const response = await fetch(`/livres?${conditions}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                'Refresh-Token': refreshToken
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des livres.');
        }

        const data = await response.json();

        if (data.livres) {
            const tableDiv = document.getElementById('tableDiv');
            tableDiv.classList.remove('d-none');
            const tableTitle = document.getElementById('tableTitle');
            tableTitle.innerHTML = 'Livres';
            const table = document.querySelector('table');

            table.innerHTML = `
                <thead class="bg-secondary text-white">
                    <tr>
                        <th>Titre</th>
                        <th>Date</th>
                        <th>Auteur</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = document.querySelector('tbody');

            data.livres.forEach(livre => {
                tbody.innerHTML += `
                    <tr id='tr${livre.id}'>
                        <td><input id='input_titre${livre.id}' type='text' class='form-control' value="${livre.titre}"</td>
                        <td><input id='input_date${livre.id}' type='text' class='form-control' value="${livre.date}"</td>
                        <td><input id='input_auteur${livre.id}' type='text' class='form-control' value="${livre.id_auteur}"</td>
                        <td><input id='input_genre${livre.id}' type='text' class='form-control' value="${livre.id_genre}"</td>
                        <td>
                            <button id="updateLivreFilters" onclick="updateLivreFilters('${livre.id}', '${livre.titre.replace(/'/g, "\\'")}', '${livre.date}', '${livre.id_auteur}', '${livre.id_genre}')" class="btn btn-warning">Modifier</button>
                            <button id="deleteLivreFilters" onclick="deleteLivreFilters('${livre.id}')" class="btn btn-danger">Supprimer</button>
                        </td>
                    </tr>
                `;
            });
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function getAuteurs() {
    try {
        token = localStorage.getItem('token');
        refreshToken = localStorage.getItem('refreshToken');

        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');

        let conditions = '';
        if (nom.value !== '') {
            conditions += `nom=${encodeURIComponent(nom.value)}&`;
        }
        if (prenom.value !== '') {
            conditions += `prenom=${encodeURIComponent(prenom.value)}&`;
        }

        const response = await fetch(`/auteurs?${conditions}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                'Refresh-Token': refreshToken
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des auteurs.');
        }

        const data = await response.json();
        console.log(data);

        if (data.auteurs) {
            const tableDiv = document.getElementById('tableDiv');
            tableDiv.classList.remove('d-none');
            const tableTitle = document.getElementById('tableTitle');
            tableTitle.innerHTML = 'Auteurs';
            const table = document.querySelector('table');

            table.innerHTML = `
            <thead class="bg-secondary text-white">
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

            const tbody = document.querySelector('tbody');

            data.auteurs.forEach(auteur => {
                tbody.innerHTML += `
                <tr id='tr${auteur.id}'>
                    <td><input id='input_nom${auteur.id}' type='text' class='form-control' value="${auteur.nom}"</td>
                    <td><input id='input_prenom${auteur.id}' type='text' class='form-control' value="${auteur.prenom}"</td>
                    <td>
                        <button id="updateAuteurFilters" onclick="updateAuteurFilters('${auteur.id}', '${auteur.nom.replace(/'/g, "\\'")}', '${auteur.prenom.replace(/'/g, "\\'")}')" class="btn btn-warning">Modifier</button>
                        <button id="deleteAuteurFilters" onclick="deleteAuteurFilters('${auteur.id}')" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            `;
            });
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function getGenres() {
    try {
        token = localStorage.getItem('token');
        refreshToken = localStorage.getItem('refreshToken');

        const nom = document.getElementById('nom');

        let conditions = '';
        if (nom.value !== '') {
            conditions += `genre=${encodeURIComponent(nom.value)}&`;
        }

        const response = await fetch(`/genres?${conditions}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                'Refresh-Token': refreshToken
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des genres.');
        }

        const data = await response.json();

        if (data.genres) {
            const tableDiv = document.getElementById('tableDiv');
            tableDiv.classList.remove('d-none');
            const tableTitle = document.getElementById('tableTitle');
            tableTitle.innerHTML = 'Genres';
            const table = document.querySelector('table');

            table.innerHTML = `
            <thead class="bg-secondary text-white">
                <tr>
                    <th>Libellé</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

            const tbody = document.querySelector('tbody');

            data.genres.forEach(genre => {
                tbody.innerHTML += `
                <tr id='tr${genre.id}'>
                    <td><input id='input_libelle${genre.id}' type='text' class='form-control' value="${genre.genre}"</td>
                    <td>
                        <button id="updateGenreFilters" onclick="updateGenreFilters('${genre.id}', '${genre.genre.replace(/'/g, "\\'")}')" class="btn btn-warning">Modifier</button>
                        <button id="deleteGenreFilters" onclick="deleteGenreFilters('${genre.id}')" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            `;
            });
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function getUtilisateurs() {
    try {
        token = localStorage.getItem('token');
        refreshToken = localStorage.getItem('refreshToken');

        const login = document.getElementById('login');
        const password = document.getElementById('password');

        let conditions = '';
        if (login.value !== '') {
            conditions += `login=${encodeURIComponent(login.value)}&`;
        }
        if (password.value !== '') {
            conditions += `password=${encodeURIComponent(password.value)}&`;
        }

        const response = await fetch(`/utilisateurs?${conditions}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                'Refresh-Token': refreshToken
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des utilisateurs.');
        }

        const data = await response.json();

        if (data.utilisateurs) {
            const tableDiv = document.getElementById('tableDiv');
            tableDiv.classList.remove('d-none');
            const tableTitle = document.getElementById('tableTitle');
            tableTitle.innerHTML = 'Utilisateurs';
            const table = document.querySelector('table');

            table.innerHTML = `
            <thead class="bg-secondary text-white">
                <tr>
                    <th>Login</th>
                    <th>Mot de passe</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

            const tbody = document.querySelector('tbody');

            data.utilisateurs.forEach(utilisateur => {
                tbody.innerHTML += `
                <tr id='tr${utilisateur.id}'>
                    <td><input id='input_login${utilisateur.id}' type='text' class='form-control' value="${utilisateur.login}"</td>
                    <td><input id='input_password${utilisateur.id}' type='password' class='form-control' value=""</td>
                    <td>
                        <button id="updateUtilisateurFilters" onclick="updateUtilisateurFilters('${utilisateur.id}', '${utilisateur.login.replace(/'/g, "\\'")}', '')" class="btn btn-warning">Modifier</button>
                        <button id="deleteUtilisateurFilters" onclick="deleteUtilisateurFilters('${utilisateur.id}')" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            `;
            });
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}