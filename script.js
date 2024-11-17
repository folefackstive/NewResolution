// Super utilisateur (identifiants statiques)
const SUPER_ADMIN = {
    phone: "693517598",
    password: "superadmin",
};

// Gestion de la connexion
function loginUser() {
    const identifier = document.getElementById("identifier").value;
    const password = document.getElementById("password").value;

    if (identifier === SUPER_ADMIN.phone && password === SUPER_ADMIN.password) {
        localStorage.setItem("currentUser", JSON.stringify(SUPER_ADMIN));
        window.location.href = "superadmin.html";
    } else {
        // Logique utilisateur classique
    }
}

// Charger les données admin
function loadAdminData() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("user-list");
    const requestsList = document.getElementById("requests-list");

    users.forEach(user => {
        const li = document.createElement("li");
        li.innerText = `${user.username} - Solde : ${user.balance} CFA`;
        userList.appendChild(li);
    });

    // Charge les retraits en attente
    // Exemple statique (à adapter pour une vraie logique)
}
