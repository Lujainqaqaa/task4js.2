let form = document.getElementById("orderForm");

let username = document.getElementById("username");

let password = document.getElementById("password");

let phone = document.getElementById("phone");

let order = document.getElementById("order");

let welcome = document.getElementById("welcome");

let savedOrder = document.getElementById("savedOrder");

let savedUsername = document.getElementById("savedUsername");


form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values

    let usernameValue = username.value;

    let passwordValue = password.value;

    let phoneValue = phone.value;

    let orderValue = order.value;


    // Regex

    let usernameRegex = /^\S+$/;

    let passwordRegex = /^(?=.*\d).{8,}$/;

    let phoneRegex = /^07\d{8}$/;


    // Username validation

    if (!usernameRegex.test(usernameValue)) {

        alert("Username must not be empty or contain spaces.");

        return;
    }


    // Password validation

    if (!passwordRegex.test(passwordValue)) {

        alert("Password must be at least 8 characters and contain at least one number.");

        return;
    }


    // Phone validation

    if (!phoneRegex.test(phoneValue)) {

        alert("Phone must be exactly 10 digits and start with 07.");

        return;
    }


    // Order validation

    if (orderValue === "") {

        alert("Please select an order.");

        return;
    }


    // Welcome

    welcome.textContent = "Welcome, " + usernameValue;


    // Local Storage

    localStorage.setItem("order", orderValue);


    // Session Storage

    sessionStorage.setItem("username", usernameValue);


    // Get data from Local Storage

    let storedOrder = localStorage.getItem("order");


    // Get data from Session Storage

    let storedUsername = sessionStorage.getItem("username");


    // Display saved data

    savedOrder.textContent = "Saved Order: " + storedOrder;

    savedUsername.textContent = "Saved Username: " + storedUsername;

});
      





