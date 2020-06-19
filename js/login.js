var form = document.getElementById("login-form");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


function validateLoginForm() {
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    fetch('https://api.mediehuset.net/token', {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => loginUser(data))
}

function loginUser(data) {
    console.log(data);

    main_menu_login_desktop.style.display = "none";
    main_menu_login_mobile.style.display = "none";
    main_menu_min_side_desktop.style.display = "inline-block";
    main_menu_min_side_mobile.style.display = "block";

    if (data.access_token) {
        sessionStorage.setItem("loggedin", true);
        sessionStorage.setItem("bearer", data.access_token);
        sessionStorage.setItem("user_id", data.user_id);
        drawLogin()
    } else {
        sessionStorage.removeItem("loggedin");
        sessionStorage.removeItem("bearer");
        sessionStorage.removeItem("user_id");
        drawLoginOnFault()
    }
}

function drawLogin() {
    document.getElementById('login-section').innerHTML = "";
    document.getElementById('login-section').innerHTML = "<h2>Du er nu logget ind!</h2>";
}

function drawLoginOnFault() {

}