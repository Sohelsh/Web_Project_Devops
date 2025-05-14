function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    alert(`Login Attempt\nUsername: ${username}\nPassword: ${password}`);
    // Add real validation or API call here
}

function handleRegister(event) {
    event.preventDefault();
    const fullname = document.getElementById("reg-fullname").value;
    const email = document.getElementById("reg-email").value;
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert(`Registered Successfully\nUsername: ${username}`);
    // Add real registration logic here
}

function handleAddUser(event) {
    event.preventDefault();
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;

    alert(`User Added:\nName: ${name}\nEmail: ${email}`);
    // Add logic to store or send user data
}
