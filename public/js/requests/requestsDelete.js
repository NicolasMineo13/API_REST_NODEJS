async function deleteLivre(id) {
    try {
        const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce livre ?");
        if (!confirmation) {
            return false;
        }

        const response = await fetch(`/livres/${id}`, {
            method: 'DELETE',
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
        console.log(data);

        if (data.status === true) {
            alert(data.message);
            document.getElementById('tr' + id).remove();
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function deleteAuteur(id) {
    try {
        const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet auteur ?");
        if (!confirmation) {
            return false;
        }

        const response = await fetch(`/auteurs/${id}`, {
            method: 'DELETE',
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
        console.log(data);

        if (data.status === true) {
            alert(data.message);
            document.getElementById('tr' + id).remove();
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function deleteGenre(id) {
    try {
        const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce genre ?");
        if (!confirmation) {
            return false;
        }

        const response = await fetch(`/genres/${id}`, {
            method: 'DELETE',
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
        console.log(data);

        if (data.status === true) {
            alert(data.message);
            document.getElementById('tr' + id).remove();
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

async function deleteUtilisateur(id) {
    try {
        const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
        if (!confirmation) {
            return false;
        }

        const response = await fetch(`/utilisateurs/${id}`, {
            method: 'DELETE',
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
        console.log(data);

        if (data.status === true) {
            alert(data.message);
            document.getElementById('tr' + id).remove();
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}