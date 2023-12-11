async function createLivre() {
    try {
        token = localStorage.getItem('token');

        const titre = document.getElementById('titre');
        const date = document.getElementById('date');
        const auteur = document.getElementById('id_auteur');
        const genre = document.getElementById('id_genre');

        if (titre.value === '' || date.value === '' || auteur.value === '' || genre.value === '') {
            alert('Veuillez remplir tous les champs.');
            return false;
        }

        let conditions = '';
        if (titre.value !== '') {
            conditions += `titre=${encodeURIComponent(titre.value)}&`;
        }
        // Si la date est un nombre
        if (!isNaN(date.value)) {
            conditions += `date=${encodeURIComponent(date.value)}&`;
        } else {
            alert('La date doit être un nombre.');
            return false;
        }
        if (!isNaN(auteur.value)) {
            conditions += `id_auteur=${encodeURIComponent(auteur.value)}&`;
        } else {
            alert('L\'identifiant de l\'auteur doit être un nombre.');
            return false;
        }
        if (!isNaN(genre.value)) {
            conditions += `id_genre=${encodeURIComponent(genre.value)}&`;
        } else {
            alert('L\'identifiant du genre doit être un nombre.');
            return false;
        }

        const response = await fetch(`/livres?${conditions}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des livres.');
        }

        const data = await response.json();
        console.log(data);

        if (data.livre) {
            const filterResponseMessageDiv = document.getElementById('filterResponseMessageDiv');
            filterResponseMessageDiv.classList.remove('d-none');
            const filterResponseMessage = document.getElementById('filterResponseMessage');
            filterResponseMessage.innerHTML = 'Livre créé avec succès.';
            setTimeout(() => {
                filterResponseMessageDiv.classList.add('d-none');
            }, 1500);
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function createAuteur() {
    try {
        token = localStorage.getItem('token');

        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');

        if (nom.value === '' || prenom.value === '') {
            alert('Veuillez remplir tous les champs.');
            return false;
        }

        let conditions = '';
        if (nom.value !== '') {
            conditions += `nom=${encodeURIComponent(nom.value)}&`;
        }
        if (prenom.value !== '') {
            conditions += `prenom=${encodeURIComponent(prenom.value)}&`;
        }

        const response = await fetch(`/auteurs?${conditions}`, {
            method: 'POST',
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

        if (data.auteur) {
            const filterResponseMessageDiv = document.getElementById('filterResponseMessageDiv');
            filterResponseMessageDiv.classList.remove('d-none');
            const filterResponseMessage = document.getElementById('filterResponseMessage');
            filterResponseMessage.innerHTML = 'Auteur créé avec succès.';
            setTimeout(() => {
                filterResponseMessageDiv.classList.add('d-none');
            }, 1500);
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function createGenre() {
    try {
        token = localStorage.getItem('token');

        const libelle = document.getElementById('libelle');

        if (libelle.value === '') {
            alert('Veuillez remplir tous les champs.');
            return false;
        }

        let conditions = '';
        if (libelle.value !== '') {
            conditions += `genre=${encodeURIComponent(libelle.value)}&`;
        }

        const response = await fetch(`/genres?${conditions}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des genres.');
        }

        const data = await response.json();
        console.log(data);

        if (data.newGenre) {
            const filterResponseMessageDiv = document.getElementById('filterResponseMessageDiv');
            filterResponseMessageDiv.classList.remove('d-none');
            const filterResponseMessage = document.getElementById('filterResponseMessage');
            filterResponseMessage.innerHTML = 'Genre créé avec succès.';
            setTimeout(() => {
                filterResponseMessageDiv.classList.add('d-none');
            }, 1500);
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function createUtilisateur() {
    try {
        token = localStorage.getItem('token');

        const login = document.getElementById('login');
        const password = document.getElementById('password');

        if (login.value === '' || password.value === '') {
            alert('Veuillez remplir tous les champs.');
            return false;
        }

        let conditions = '';
        if (login.value !== '') {
            conditions += `login=${encodeURIComponent(login.value)}&`;
        }
        if (password.value !== '') {
            conditions += `password=${encodeURIComponent(password.value)}&`;
        }

        const response = await fetch(`/utilisateurs/register?${conditions}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des utilisateurs.');
        }

        const data = await response.json();
        console.log(data);

        if (data.status === true) {
            const filterResponseMessageDiv = document.getElementById('filterResponseMessageDiv');
            filterResponseMessageDiv.classList.remove('d-none');
            const filterResponseMessage = document.getElementById('filterResponseMessage');
            filterResponseMessage.innerHTML = 'Utilisateur créé avec succès.';
            setTimeout(() => {
                filterResponseMessageDiv.classList.add('d-none');
            }, 1500);
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}