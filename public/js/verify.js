async function isValidToken() {
    try {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await fetch(`/verifyToken`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                'Refresh-Token': refreshToken
            },
        });

        if (!response.ok) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('id');
            window.location.href = '../index.html';
            return response.json().then((err) => {
                throw new Error(err.error);
            });
        }

        const data = await response.json();

        if (data.status === true) {
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            return true;
        } else {
            throw new Error('Token expiré !.');
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        return false;
    }
}

isValidToken();