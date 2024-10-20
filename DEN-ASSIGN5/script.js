
// Get form and input fields
const form = document.getElementById('reservationForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const dateField = document.getElementById('date');

// Get error display elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const dateError = document.getElementById('dateError');

// Function to show error message
function showError(input, message, errorField) {
    input.classList.add('error');
    errorField.textContent = message;
}

// Function to clear error message
function clearError(input, errorField) {
    input.classList.remove('error');
    errorField.textContent = '';
}

// Validate form
form.addEventListener('submit', function(event) {
    let isValid = true;

    // Name validation
    if (nameField.value.trim() === '') {
        showError(nameField, 'Name is required', nameError);
        isValid = false;
    } else {
        clearError(nameField, nameError);
    }

    // Email validation
    if (emailField.value.trim() === '') {
        showError(emailField, 'Email is required', emailError);
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailField.value)) {
        showError(emailField, 'Invalid email format', emailError);
        isValid = false;
    } else {
        clearError(emailField, emailError);
    }

    // Date validation
    if (dateField.value === '') {
        showError(dateField, 'Reservation date is required', dateError);
        isValid = false;
    } else {
        clearError(dateField, dateError);
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
