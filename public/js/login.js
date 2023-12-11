document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

async function login() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if (login === "" || password === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    try {
        const response = await fetch(`/utilisateurs/login?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Identifiants incorrects !.');
        }

        const data = await response.json();
        console.log(data)

        if (data.status === true) {
            console.log('Connexion réussie');
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshtoken);
            localStorage.setItem('id', data.id);
            window.location.href = "/html/main.html";
        } else {
            throw new Error('Identifiants incorrects !.');
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
    }
}