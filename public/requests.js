async function getLivres() {
    try {
        token = localStorage.getItem('token');

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
                'Authorization': token
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
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = document.querySelector('tbody');

            data.livres.forEach(livre => {
                tbody.innerHTML += `
                    <tr>
                        <td>${livre.titre}</td>
                        <td>${livre.date}</td> 
                        <td>${livre.id_auteur}</td>
                        <td>${livre.id_genre}</td>
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
                'Authorization': token
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
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

            const tbody = document.querySelector('tbody');

            data.auteurs.forEach(auteur => {
                tbody.innerHTML += `
                <tr>
                    <td>${auteur.nom}</td>
                    <td>${auteur.prenom}</td> 
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

        const nom = document.getElementById('nom');

        let conditions = '';
        if (nom.value !== '') {
            conditions += `genre=${encodeURIComponent(nom.value)}&`;
        }

        const response = await fetch(`/genres?${conditions}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
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
                    <th>Nom</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

            const tbody = document.querySelector('tbody');

            data.genres.forEach(genre => {
                tbody.innerHTML += `
                <tr>
                    <td>${genre.genre}</td>
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
                'Authorization': token
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
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

            const tbody = document.querySelector('tbody');

            data.utilisateurs.forEach(utilisateur => {
                tbody.innerHTML += `
                <tr>
                    <td>${utilisateur.login}</td>
                    <td>${utilisateur.password}</td> 
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