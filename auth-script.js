function switchRole(role) {
    const idLabel = document.getElementById('idLabel');
    const idInput = document.getElementById('userID');

    if (role === 'fac') {
        idLabel.innerText = "Facilitator ID / Email";
        idInput.placeholder = "e.g. smith.j@gocbt.com";
    } else {
        idLabel.innerText = "Registration Number";
        idInput.placeholder = "e.g. 2024/CS/001";
    }
}

function handleLogin() {
    const btn = document.querySelector('.btn-login');
    btn.innerText = "Authenticating...";
    btn.disabled = true;

    // Simulated Authentication Delay
    setTimeout(() => {
        const isFac = document.getElementById('facRole').checked;
        if (isFac) {
            alert("Facilitator Authenticated. Redirecting to Dashboard...");
        } else {
            alert("Student Authenticated. Redirecting to Portal...");
        }
        // Redirect logic would go here: window.location.href = "dashboard.html";
        btn.innerText = "Sign In to Portal";
        btn.disabled = false;
    }, 1500);
}
window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    
    // Wait 2.5 seconds (2s for loader + 0.5s buffer)
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 2500);
});
