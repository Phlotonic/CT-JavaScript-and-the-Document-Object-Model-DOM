// Task 2: Handle Form Submissions and Store User Input
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        console.log('User Data:', userData);
        // You can now use the userData object as needed
    });
});
