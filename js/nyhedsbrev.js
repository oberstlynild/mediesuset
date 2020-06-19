let token_nyhedsbrev_type = "Bearer ";
let token_nyhedsbrev_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmNzExOWQzLTlkMWUtNGFmMS04OTFkLTFhMGQwODgzYzY4ZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiJmZjcxMTlkMy05ZDFlLTRhZjEtODkxZC0xYTBkMDg4M2M2OGYiLCJpYXQiOjE1OTIyMDY0ODAsIm5iZiI6MTU5MjIwNjQ4MCwiZXhwIjoxNTkyODExMjgwLCJ1aWQiOiJvYmVyc3RseW5pbGQifQ.A3NYNRg09odLH2scUGmCANeHj9wxSona7kSV0grxe2TQyJn4XAZ5ec8QVMMrY2cAaIWOV-3kgd-NJxxKtNb84w";

let desktop_form = document.getElementById("nyhedsbrev-form-desktop");
let mobile_form = document.getElementById("nyhedsbrev-form-mobile");

let nyhedsbrev_error = document.getElementById('nyhedsbrev-error');

function handleForm(event) { event.preventDefault(); }
desktop_form.addEventListener('submit', handleForm);
mobile_form.addEventListener('submit', handleForm);

function validerNyhedsbrevDesktop() {
    let email = document.getElementById('nyhedsbrev-email-desktop').value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        nyhedsbrev_error.innerHTML = "Indtast mail i korrekt format!";
    } else {
        nyhedsbrev_error.style.color = "#6B8846";
        nyhedsbrev_error.innerHTML = "Tak for din tilmelding!<br>" + email;
        let formData = new FormData()
        formData.append('email', email)
        fetch('https://api.mediehuset.net/mediesuset/newsletter', {
            method: "POST",
            headers: {
                'Authorization': token_nyhedsbrev_type + token_nyhedsbrev_key
            },
            body: formData,
        })
    }
}

function validerNyhedsbrevMobile() {
    let email = document.getElementById('nyhedsbrev-email-mobile').value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        nyhedsbrev_error.innerHTML = "Indtast mail i korrekt format!";
    } else {
        nyhedsbrev_error.style.color = "#6B8846";
        nyhedsbrev_error.innerHTML = "Tak for din tilmelding!";
        let formData = new FormData()
        formData.append('email', email)
        fetch('https://api.mediehuset.net/mediesuset/newsletter', {
            method: "POST",
            headers: {
                'Authorization': token_type + token_key
            },
            body: formData,
        })
    }
}