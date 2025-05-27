document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button[type="submit"], input[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents form submission for demo purposes
            alert('Good to see you again mate!');
        });
    }
});