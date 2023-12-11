async function logout() {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    console.log(id);
    const response = await fetch(`/utilisateurs/logout/${id}`, {
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
        localStorage.removeItem('id');
        window.location.href = '../index.html';
    }
}