document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const loadingSpinner = document.getElementById('loading-spinner');

    auth.onAuthStateChanged(user => {
        if (user) {
            window.location.href = 'dashboard.html';
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        errorMessage.textContent = '';
        loadingSpinner.style.display = 'block';

        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Redirect will be handled by onAuthStateChanged
        } catch (error) {
            errorMessage.textContent = error.message;
        } finally {
            loadingSpinner.style.display = 'none';
        }
    });
});