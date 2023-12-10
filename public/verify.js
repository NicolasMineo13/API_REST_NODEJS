async function isValidToken() {
    try {
        token = localStorage.getItem('token');
        const response = await fetch(`/verifyToken`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });

        if (!response.ok) {
            throw new Error('Token invalide !.');
        }

        const data = await response.json();

        if (data.status === true) {
            console.log('Token valide');
            return true;
        } else {
            throw new Error('Token expiré !.');
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        // Affichez un message convivial à l'utilisateur pour l'informer de l'échec de la connexion.
        return false;
    }
}

isValidToken().then((result) => {
    if (!result) {
        window.location.href = "/index.html";
    }
});