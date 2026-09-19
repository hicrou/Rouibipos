document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('has_registered_trial') === 'true') {
        document.getElementById('register-form').style.display = 'none';
        const alertBox = document.getElementById('register-alert');
        alertBox.innerText = 'You have already registered for a trial on this device.';
        alertBox.className = 'alert error';
        alertBox.style.display = 'block';
    }
});

document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const businessName = document.getElementById('businessName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;

    const btnSubmit = document.getElementById('btn-submit');
    const alertBox = document.getElementById('register-alert');
    
    // Reset alert
    alertBox.className = 'alert';
    alertBox.style.display = 'none';
    
    // Disable button
    btnSubmit.disabled = true;
    btnSubmit.innerText = 'Creating Account...';

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                businessName,
                email,
                phone,
                adminUsername,
                adminPassword
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Set flag to prevent future trials
            localStorage.setItem('has_registered_trial', 'true');
            
            // Hide form, show success
            document.getElementById('register-form').style.display = 'none';
            const successContainer = document.getElementById('success-container');
            successContainer.classList.add('show');
            document.getElementById('display-slug').innerText = data.tenant.slug;
            
            // Optionally, we could automatically log them in or redirect,
            // but showing the slug is crucial for them to know how to log in next time.
        } else {
            alertBox.innerText = data.error || 'Registration failed';
            alertBox.className = 'alert error';
            alertBox.style.display = 'block';
            btnSubmit.disabled = false;
            btnSubmit.innerText = 'Create Account';
        }

    } catch (err) {
        console.error('Network error:', err);
        alertBox.innerText = 'Network error. Please try again.';
        alertBox.className = 'alert error';
        alertBox.style.display = 'block';
        btnSubmit.disabled = false;
        btnSubmit.innerText = 'Create Account';
    }
});
