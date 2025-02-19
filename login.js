document.addEventListener('DOMContentLoaded', function() {
    const loginOverlay = document.getElementById('loginOverlay');
    
    // For testing - remove any existing login state
    localStorage.removeItem('isLoggedIn');
    
    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        console.log('User not logged in, showing overlay');
        loginOverlay.style.display = 'flex';
        // Force a reflow
        void loginOverlay.offsetWidth;
        loginOverlay.classList.add('show');
    } else {
        console.log('User already logged in');
        loginOverlay.style.display = 'none';
    }

    // Universal login credentials for testing
    const validCredentials = {
        email: 'gikireunion@gmail.com',
        password: 'giki@123'
    };

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check against universal credentials
        const isValidUser = (email === validCredentials.email && password === validCredentials.password);

        if (isValidUser) {
            // Store login state
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            
            // Update animation
            loginOverlay.classList.remove('show');
            setTimeout(() => {
                loginOverlay.style.display = 'none';
            }, 300);

            showToast(`Welcome, ${email}!`);
        } else {
            showToast('Invalid email or password!', 'error');
        }
    });
});

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 3000);
} 