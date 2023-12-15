async function logout() {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    const id = localStorage.getItem('id');

    const response = await fetch(`/utilisateurs/logout/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'Refresh-Token': refreshToken
        }
    });

    console.log(response);

    if (!response.ok) {
        window.location.href = '../index.html';
        return response.json().then((err) => {
            throw new Error(err.error);
        });
    }

    const data = await response.json();

    console.log(data);

    if (data.status === true) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('id');
        window.location.href = '../index.html';
    }
}