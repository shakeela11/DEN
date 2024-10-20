// Handle click event for "Explore now" button
const exploreButton = document.querySelector('.content button');
exploreButton.addEventListener('click', () => {
    alert('Thanks for your interest! More cool stuff coming soon!');
});

// Select the Sign In button
const signInButton = document.querySelector('.nav button');

// Function to create a basic sign-in form popup
function createSignInForm() {
    // Create the form container
    const formContainer = document.createElement('div');
    formContainer.style.position = 'fixed';
    formContainer.style.top = '50%';
    formContainer.style.left = '50%';
    formContainer.style.transform = 'translate(-50%, -50%)';
    formContainer.style.padding = '20px';
    formContainer.style.backgroundColor = '#fff';
    formContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    formContainer.style.borderRadius = '8px';
    formContainer.style.zIndex = '1000';
    formContainer.style.textAlign = 'center';
    formContainer.style.maxWidth = '300px';  // Improved for small screens
    formContainer.style.width = '80%';

    // Create the form elements
    formContainer.innerHTML = `
        <h3>Sign In</h3>
        <input type="text" id="username" placeholder="Username" style="margin: 10px 0; padding: 10px; width: 100%;" />
        <input type="password" id="password" placeholder="Password" style="margin: 10px 0; padding: 10px; width: 100%;" />
        <button id="submitBtn" style="margin-top: 10px; padding: 10px 20px; background-color: coral; color: white; border: none; cursor: pointer;">Submit</button>
        <button id="closeBtn" style="margin-top: 10px; padding: 10px 20px; background-color: gray; color: white; border: none; cursor: pointer;">Close</button>
    `;

    // Append form to the body
    document.body.appendChild(formContainer);

    // Close button functionality
    document.getElementById('closeBtn').addEventListener('click', () => {
        document.body.removeChild(formContainer);
    });

    // Handle form submission
    document.getElementById('submitBtn').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Please fill in both fields.');
        } else {
            alert(`Sign In Successful! Welcome, ${username}!`);
            document.body.removeChild(formContainer); // Close the form after submission
        }
    });
}

// Event listener for Sign In button
signInButton.addEventListener('click', createSignInForm);
