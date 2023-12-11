async function logout() {
    const token = localStorage.getItem('token');
    const response = await fetch(`/utilisateurs/logout/${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });

    if (!response.ok) {
        throw new Error('Erreur lors de la déconnexion !');
    }

    const data = await response.json();

    if (data.status === true) {
        localStorage.removeItem('token');
        window.location.href = '../index.html';
    }
}