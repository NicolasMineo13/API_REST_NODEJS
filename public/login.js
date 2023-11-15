document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

async function login() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if(login === "" || password === ""){
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

        // console.log(response);

        if (!response.ok) {
            throw new Error('Identifiants incorrects !.');
        }

        const data = await response.json();

        if (data.status === true) {
            console.log('Connexion réussie');
            // Ajoutez ici le code pour rediriger l'utilisateur, afficher une nouvelle page, etc.
            window.location.href = "/main.html";
        } else {
            throw new Error('Identifiants incorrects !.');
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        // Affichez un message convivial à l'utilisateur pour l'informer de l'échec de la connexion.
    }
}