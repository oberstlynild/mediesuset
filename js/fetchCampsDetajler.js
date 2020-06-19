let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0];
let camps_wrapper = document.getElementById('camps-details');

function readDataID(data_id) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    data_id = urlParams.get('id');
    fetchCampsDetajler(data_id);
}

function fetchCampsDetajler(data_id) {
    fetch('https://api.mediehuset.net/mediesuset/camps/' + data_id)
        .then(response => response.json())
        .then(data => writeCampsDetajler(data))
}

function writeCampsDetajler(data) {
    console.log(data)


    document.getElementById('camps-section-seperator').style.backgroundImage = "url(" + data.item.image + ")";

    let title = document.createElement('h2');
    title.setAttribute('class', 'camp-detajle-titel');
    title.innerHTML = data.item.name;
    camps_wrapper.appendChild(title);

    let description = document.createElement('p');
    description.setAttribute('class', 'camp-detajle-beskrivelse');
    description.innerHTML = data.item.description;
    camps_wrapper.appendChild(description);

    let adgang_overskrift = document.createElement('p');
    adgang_overskrift.setAttribute('class', 'camp-detajle-adgang-overskrift');
    adgang_overskrift.innerHTML = "<span class='bold-text'>Adgang:</span>"
    camps_wrapper.appendChild(adgang_overskrift);

    for (i = 0; i < data.item.tickets.length; i++) {
        let adgang_list = document.createElement('ul');
        let adgang = document.createElement('li');
        adgang.setAttribute('class', 'camp-detajle-adgang-item');
        adgang.innerHTML = data.item.tickets[i].name;
        adgang_list.appendChild(adgang);
        camps_wrapper.appendChild(adgang_list);
    }

    let faciliteter_overskrift = document.createElement('p');
    faciliteter_overskrift.setAttribute('class', 'camp-detajle-faciliteter-overskrift');
    faciliteter_overskrift.innerHTML = "<span class='bold-text'>På " + data.item.name + " får du:</span>";
    camps_wrapper.appendChild(faciliteter_overskrift);

    for (i = 0; i < data.item.facilities.length; i++) {
        if (data.item.facilities[i].id == 8) {

        } else {
            let facilitet_list = document.createElement('ul');
            let facilitet = document.createElement('li');
            facilitet.setAttribute('class', 'camp-detajle-facilitet-item');
            facilitet.innerHTML = data.item.facilities[i].title;
            facilitet_list.appendChild(facilitet);
            camps_wrapper.appendChild(facilitet_list);
        }
    }

    console.log(data.item.name);

    if (data.item.id == 1) {
        let aabningstider = document.createElement('p');
        aabningstider.setAttribute('class', 'camp-detajle-åbningstider');
        aabningstider.innerHTML = "<span class='bold-text'>Åbningstider:<br><br></span>Campen åbner tirsdag kl. 18:00 og lukker igen søndag kl. 14:00, hvor alle skal have forladt området.";
        camps_wrapper.appendChild(aabningstider);

        let antal_pladser = document.createElement('p');
        antal_pladser.setAttribute('class', 'camp-detajle-antal-pladser');
        antal_pladser.innerHTML = "<span class='bold-text'>Antal pladser i alt:</span><br>1200";
        camps_wrapper.appendChild(antal_pladser);

        let ledige_pladser = document.createElement('p');
        ledige_pladser.setAttribute('class', 'camp-detajle-ledige-pladser');
        ledige_pladser.innerHTML = "<span class='bold-text'>Ledige pladser: </span><br>" + data.item.num_people;
        camps_wrapper.appendChild(ledige_pladser);
    }

    if (data.item.id == 2) {
        let aabningstider = document.createElement('p');
        aabningstider.setAttribute('class', 'camp-detajle-åbningstider');
        aabningstider.innerHTML = "<span class='bold-text'>Åbningstider:<br><br></span>Campen åbner tirsdag kl. 18.00 og lukker igen søndag kl. 14.00, hvor alle skal have forladt området.";
        camps_wrapper.appendChild(aabningstider);

        let antal_pladser = document.createElement('p');
        antal_pladser.setAttribute('class', 'camp-detajle-antal-pladser');
        antal_pladser.innerHTML = "<span class='bold-text'>Antal pladser i alt:</span><br>600";
        camps_wrapper.appendChild(antal_pladser);

        let ledige_pladser = document.createElement('p');
        ledige_pladser.setAttribute('class', 'camp-detajle-ledige-pladser');
        ledige_pladser.innerHTML = "<span class='bold-text'>Ledige pladser: </span><br>" + data.item.num_people;
        camps_wrapper.appendChild(ledige_pladser);
    }

    if (data.item.id == 3) {
        let aabningstider = document.createElement('p');
        aabningstider.setAttribute('class', 'camp-detajle-åbningstider');
        aabningstider.innerHTML = "<span class='bold-text'>Åbningstider:<br><br></span>Campen åbner tirsdag kl. 18.00 og lukker igen søndag kl. 14.00, hvor alle skal have forladt området.";
        camps_wrapper.appendChild(aabningstider);

        let antal_pladser = document.createElement('p');
        antal_pladser.setAttribute('class', 'camp-detajle-antal-pladser');
        antal_pladser.innerHTML = "<span class='bold-text'>Antal pladser i alt:</span><br>400";
        camps_wrapper.appendChild(antal_pladser);

        let ledige_pladser = document.createElement('p');
        ledige_pladser.setAttribute('class', 'camp-detajle-ledige-pladser');
        ledige_pladser.innerHTML = "<span class='bold-text'>Ledige pladser: </span><br>" + data.item.num_people;
        camps_wrapper.appendChild(ledige_pladser);
    }

    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}