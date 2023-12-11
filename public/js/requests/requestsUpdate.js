async function updateLivre(id, originalTitle, originalDate, originalAuthor, originalGenre) {
    try {

        const titre = document.getElementById('input_titre' + id).value;
        const date = document.getElementById('input_date' + id).value;
        const auteur = document.getElementById('input_auteur' + id).value;
        const genre = document.getElementById('input_genre' + id).value;

        // Vérifier qu'il y a une modification
        if (titre === originalTitle && date === originalDate && auteur === originalAuthor && genre === originalGenre) {
            alert('Aucune modification.');
            return false;
        }

        const confirmation = confirm("Êtes-vous sûr de vouloir modifier ce livre ?");
        if (!confirmation) {
            return false;
        }

        // Vérifier quels sont les champs modifiés
        let conditions = '';
        if (titre !== originalTitle) {
            conditions += `titre=${encodeURIComponent(titre)}&`;
        }
        if (date !== originalDate) {
            conditions += `date=${encodeURIComponent(date)}&`;
        }
        if (auteur !== originalAuthor) {
            conditions += `id_auteur=${encodeURIComponent(auteur)}&`;
        }
        if (genre !== originalGenre) {
            conditions += `id_genre=${encodeURIComponent(genre)}&`;
        }

        const response = await fetch(`/livres/${id}?${conditions}`, {
            method: 'PATCH',
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
            alert(data.message);
            document.getElementById('updateLivreFilters').setAttribute('onclick', `updateLivreFilters('${id}', '${titre.replace(/'/g, "\\'")}', '${date}', '${auteur}', '${genre}')`);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function updateAuteur(id, originalNom, originalPrenom) {
    try {

        const nom = document.getElementById('input_nom' + id).value;
        const prenom = document.getElementById('input_prenom' + id).value;

        // Vérifier qu'il y a une modification
        if (nom === originalNom && prenom === originalPrenom) {
            alert('Aucune modification.');
            return false;
        }

        const confirmation = confirm("Êtes-vous sûr de vouloir modifier cet auteur ?");
        if (!confirmation) {
            return false;
        }

        // Vérifier quels sont les champs modifiés
        let conditions = '';
        if (nom !== originalNom) {
            conditions += `nom=${encodeURIComponent(nom)}&`;
        }
        if (prenom !== originalPrenom) {
            conditions += `prenom=${encodeURIComponent(prenom)}&`;
        }

        const response = await fetch(`/auteurs/${id}?${conditions}`, {
            method: 'PATCH',
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
            alert(data.message);
            document.getElementById('updateAuteurFilters').setAttribute('onclick', `updateAuteurFilters('${id}', '${nom.replace(/'/g, "\\'")}', '${prenom.replace(/'/g, "\\'")}')`);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function updateGenre(id, originalGenre) {
    try {

        const genre = document.getElementById('input_libelle' + id).value;

        // Vérifier qu'il y a une modification
        if (genre === originalGenre) {
            alert('Aucune modification.');
            return false;
        }

        const confirmation = confirm("Êtes-vous sûr de vouloir modifier ce genre ?");
        if (!confirmation) {
            return false;
        }

        // Vérifier quels sont les champs modifiés
        let conditions = '';
        if (genre !== originalGenre) {
            conditions += `genre=${encodeURIComponent(genre)}&`;
        }

        const response = await fetch(`/genres/${id}?${conditions}`, {
            method: 'PATCH',
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
            alert(data.message);
            document.getElementById('updateGenreFilters').setAttribute('onclick', `updateGenreFilters('${id}', '${genre.replace(/'/g, "\\'")}')`);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function updateUtilisateur(id, originalLogin, originalPassword) {
    try {

        const login = document.getElementById('input_login' + id).value;
        const password = document.getElementById('input_password' + id).value;

        // Vérifier qu'il y a une modification
        if (login === originalLogin && password === originalPassword) {
            alert('Aucune modification.');
            return false;
        }

        const confirmation = confirm("Êtes-vous sûr de vouloir modifier cet utilisateur ?");
        if (!confirmation) {
            return false;
        }

        // Vérifier quels sont les champs modifiés
        let conditions = '';
        if (login !== originalLogin) {
            conditions += `login=${encodeURIComponent(login)}&`;
        }
        if (password !== originalPassword) {
            conditions += `password=${encodeURIComponent(password)}&`;
        }

        const response = await fetch(`/utilisateurs/${id}?${conditions}`, {
            method: 'PATCH',
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
            alert(data.message);
            document.getElementById('updateUtilisateurFilters').setAttribute('onclick', `updateUtilisateurFilters('${id}', '${login.replace(/'/g, "\\'")}', '${password.replace(/'/g, "\\'")}')`);
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}