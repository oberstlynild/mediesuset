let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0]
let token_billet_type = "Bearer ";
let token_billet_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmNzExOWQzLTlkMWUtNGFmMS04OTFkLTFhMGQwODgzYzY4ZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiJmZjcxMTlkMy05ZDFlLTRhZjEtODkxZC0xYTBkMDg4M2M2OGYiLCJpYXQiOjE1OTIyMDY0ODAsIm5iZiI6MTU5MjIwNjQ4MCwiZXhwIjoxNTkyODExMjgwLCJ1aWQiOiJvYmVyc3RseW5pbGQifQ.A3NYNRg09odLH2scUGmCANeHj9wxSona7kSV0grxe2TQyJn4XAZ5ec8QVMMrY2cAaIWOV-3kgd-NJxxKtNb84w";

let ticket_form = document.getElementById("buy-ticket-form");

function handleForm(event) { event.preventDefault(); }
ticket_form.addEventListener('submit', handleForm);

function loadPage() {
    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}

function validateTicket() {

    let camp = document.getElementById('bestilling-camp');
    camp_value = camp.value;
    let camp_label = document.getElementById('bestilling-camp-label');

    let email = document.getElementById('bestilling-email');
    let email_value = email.value;
    let email_label = document.getElementById('bestilling-email-label');
    let email_flueben = false;

    let adgangskode = document.getElementById('bestilling-adgangskode');
    let adgangskode_value = adgangskode.value;
    let adgangskode_label = document.getElementById('bestilling-adgangskode-label');
    let adgangskode_flueben = false;

    let gentag_adgangskode = document.getElementById('bestilling-gentag-adgangskode');
    let gentag_adgangskode_value = gentag_adgangskode.value;
    let gentag_adgangskode_label = document.getElementById('bestilling-gentag-adgangskode-label');
    let gentag_adgangskode_flueben = false;

    let navn = document.getElementById('bestilling-navn');
    let navn_value = navn.value;
    let navn_label = document.getElementById('bestilling-navn-label');
    let navn_flueben = false;

    let adresse = document.getElementById('bestilling-adresse');
    let adresse_value = adresse.value;
    let adresse_label = document.getElementById('bestilling-adresse-label');
    let adresse_flueben = false;

    let postnummer = document.getElementById('bestilling-postnummer');
    let postnummer_value = postnummer.value;
    let postnummer_label = document.getElementById('bestilling-postnummer-label');
    let postnummer_flueben = false;

    let by = document.getElementById('bestilling-by');
    let by_value = by.value;
    let by_label = document.getElementById('bestilling-by-label');
    let by_flueben = false;

    let forsendelse = document.getElementsByName('bestilling-forsendelse');
    let forsendelse_flueben = false;
    let forsendelse_error = document.getElementById('forsendelse-error');

    for (i = 0; i < forsendelse.length; i++) {
        if (forsendelse[i].checked === true) {
            var forsendelse_value = forsendelse[i].value;
        }
    }

    /*EMAIL VALIDERING*/
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email_label.innerHTML = "Indtast mail i korrekt format!";
        email_label.style.color = "red";
        email_flueben = false;
    } else {
        email_label.innerHTML = "Email:";
        email_label.style.color = "black";
        email_flueben = true;
    }
    /*ADGANGSKODE VALIDERING*/
    if (!adgangskode.value) {
        adgangskode_label.innerHTML = "Indtast en adgangskode!";
        adgangskode_label.style.color = "red";
        adgangskode_flueben = false;
    } else {
        adgangskode_label.innerHTML = "Adgangskode:";
        adgangskode_label.style.color = "black";
        adgangskode_flueben = true;
    }
    /*GENTAG ADGANGSKODE VALIDERING*/
    if (gentag_adgangskode.value != adgangskode.value || !gentag_adgangskode.value) {
        gentag_adgangskode_label.innerHTML = "Koden stemmer ikke overens med overstående!";
        gentag_adgangskode_label.style.color = "red";
        gentag_adgangskode_flueben = false;
    } else {
        gentag_adgangskode_label.innerHTML = "Gentag adgangskode:";
        gentag_adgangskode_label.style.color = "black";
        gentag_adgangskode_flueben = true;
    }
    /*NAVN*/
    if (!/^[A-Za-zæøåÆØÅ ]+$/.test(navn.value)) {
        navn_label.innerHTML = "Kun bogstaver i navn!"
        navn_label.style.color = "red";
        navn_flueben = false;
    } else {
        navn_label.innerHTML = "Navn"
        navn_label.style.color = "black";
        navn_flueben = true;
    }
    /*ADRESSE*/
    if ((adresse.value)) {
        let letmatch = adresse.value.match(/[a-z]/g);
        let digmatch = adresse.value.match(/[0-9]/g);

        if (letmatch && digmatch) {
            if (!/^[0-9A-Za-zæøåÆØÅ. ]+$/.test(adresse.value)) {
                adresse_label.innerHTML = "Kun nummer, tal og punktum i adresse!";
                adresse_label.style.color = "red";
                adresse_flueben = false;
            } else {
                adresse_label.innerHTML = "Adresse:"
                adresse_label.style.color = "black";
                adresse_flueben = true;
            }
        } else {
            adresse_label.innerHTML = "Kun nummer, tal og punktum i adresse!";
            adresse_label.style.color = "red";
            adresse_flueben = false;
        }
    } else {
        adresse_label.innerHTML = "Indtast en adresse!"
        adresse_label.style.color = "red";
        adresse_flueben = false;
    }
    /*POST NUMMER*/
    if (!/^[0-9]+$/.test(postnummer.value)) {
        postnummer_label.innerHTML = "Kun tal i postnummer!";
        postnummer_label.style.color = "red";
        postnummer_flueben = false;
    } else {
        postnummer_label.innerHTML = "Postnummer:";
        postnummer_label.style.color = "black";
        postnummer_flueben = true;
    }
    /*BY*/
    if (!/^[A-Za-zæøåÆØÅ]+$/.test(by.value)) {
        by_label.innerHTML = "Kun bogstaver i by!";
        by_label.style.color = "red";
        by_flueben = false;
    } else {
        by_label.innerHTML = "By:";
        by_label.style.color = "black";
        by_flueben = true;
    }

    if (forsendelse_value) {
        forsendelse_flueben = true;
        forsendelse_error.style.visibility = "hidden";
    } else {
        forsendelse_error.style.visibility = "visible";
    }

    console.log(email_flueben, adgangskode_flueben, gentag_adgangskode_flueben, navn_flueben, adresse_flueben, postnummer_flueben, by_flueben, forsendelse_flueben);

    if (email_flueben === true && adgangskode_flueben === true && gentag_adgangskode_flueben === true && navn_flueben === true && adresse_flueben === true && postnummer_flueben === true && by_flueben === true && forsendelse_flueben === true) {
        sendForm(camp_value, email_value, adgangskode_value, gentag_adgangskode_value, navn_value, adresse_value, postnummer_value, by_value, forsendelse_value)
    }
}

function sendForm(camp_value, email_value, adgangskode_value, gentag_adgangskode_value, navn_value, adresse_value, postnummer_value, by_value, forsendelse_value) {
    let formData = new FormData()
    formData.append('email', email_value)
    formData.append('password', adgangskode_value)
    formData.append('name', navn_value)
    formData.append('address', adresse_value)
    formData.append('zipcode', postnummer_value)
    formData.append('city', by_value)
    formData.append('ticket_id', "1")
    formData.append('camp_id', camp_value)
    formData.append('quantity', "1")
    formData.append('type', forsendelse_value)
    fetch('https://api.mediehuset.net/mediesuset/usertickets', {
            method: "POST",
            headers: {
                'Authorization': token_billet_type + token_billet_key
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => writeBilletBuy(data))
}



function writeBilletBuy() {
    window.location = "tak.html";
}