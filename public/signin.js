document.getElementById("signin-form").addEventListener("submit", function (event) {
    event.preventDefault();
    signin();
});

async function signin() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if(login === "" || password === "") {
        console.error('Erreur d\inscription:', 'Identifiants non rentrés');
        return;
    }

    try {
        const response = await fetch(`/utilisateurs/create?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        if (!response.ok) {
            throw new Error('Réponse du serveur non valide');
        }
    
        const data = await response.json();
    
        if (data.status === true) {
            window.location.href = "/index.html";
        } else {
            console.error('Erreur d\'inscription:', data.error);
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
    }
    
}
