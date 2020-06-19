function logOutUser() {
    sessionStorage.removeItem("loggedin");
    sessionStorage.removeItem("bearer");
    sessionStorage.removeItem("user_id");

    console.log(location);
    setTimeout(function() { location.replace("/login.html"); }, 500);
}