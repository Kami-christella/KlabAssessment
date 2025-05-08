document.getElementById('readmore').addEventListener('click', function() {
  
    alert("Hello, Kamikazi Christella");
});

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission

    // Get values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }


    // If all valid
    if (isValid) {

        alert('Thank you for contacting Us');
       
       
    }
});
