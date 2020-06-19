let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0]
let camps_grid = document.getElementById('camps-grid');

function fetchCamps() {
    fetch('https://api.mediehuset.net/mediesuset/camps')
        .then(response => response.json())
        .then(data => writeCamps(data))
}

function writeCamps(data) {
    console.log(data);

    for (i = 0; i < data.count; i++) {
        let camp_item = document.createElement('div');
        camp_item.setAttribute('class', 'camp-item');

        let img = document.createElement('img');
        img.src = data.items[i].image;
        camp_item.appendChild(img);

        let name = document.createElement('p');
        name.setAttribute('class', 'camp-item-navn');
        name.classList.add('uppercase-text');
        name.innerHTML = data.items[i].name;
        camp_item.appendChild(name);

        let description = document.createElement('p');
        description.setAttribute('class', 'camp-item-beskrivelse');
        if (data.items[i].tickets.length == 6) {
            description.innerHTML = "Camp Colorit er Mediesusets store campingområde, hvor du automatisk har adgang til at overnatte gratis i medbragt telt, så snart du har en gyldig partoutbillet eller endagsbillet til festivallen.";
        }
        if (data.items[i].tickets.length == 2) {
            description.innerHTML = "Camp Kultunaut er kendetegnet ved at være en camp, hvor fællesskab og miljø går hånd i hånd. Ønsker du at bo på en af Mediasusets hyggeligste og mest unikke camps? Så skal du vælge Camp Kultunaut!";
        }
        if (data.items[i].tickets.length == 1) {
            description.innerHTML = "Camp De Luxe er et område, der er placeret tæt på festivalens scener. På Camp De Luxe er stemning og service i højsædet, idet der ydes service til alle pladser det meste af døgnet, og morgenmad er også med i prisen.";
        }
        camp_item.appendChild(description);

        let info_wrapper = document.createElement('div');
        info_wrapper.setAttribute('class', 'camp-item-info-wrapper');

        let adgang = document.createElement('p');
        adgang.setAttribute('class', 'camp-item-adgang');
        if (data.items[i].tickets.length == 6) {
            adgang.innerHTML = "<span class='bold-text'>Adgang:</span> Alle armbånd";
        }
        if (data.items[i].tickets.length == 2) {
            adgang.innerHTML = "<span class='bold-text'>Adgang:</span> 4 dages partout armbånd";
        }
        if (data.items[i].tickets.length == 1) {
            adgang.innerHTML = "<span class='bold-text'>Adgang:</span> 4 dages De Luxe partout armbånd";
        }
        info_wrapper.appendChild(adgang);

        let antal_pladser = document.createElement('p');
        antal_pladser.setAttribute('class', 'camp-item-antal-pladser');
        if (data.items[i].tickets.length == 6) {
            antal_pladser.innerHTML = "<span class='bold-text'>Samlet antal pladser:</span> 1200";
        }
        if (data.items[i].tickets.length == 2) {
            antal_pladser.innerHTML = "<span class='bold-text'>Samlet antal pladser:</span> 600";
        }
        if (data.items[i].tickets.length == 1) {
            antal_pladser.innerHTML = "<span class='bold-text'>Samlet antal pladser:</span> 400";
        }
        info_wrapper.appendChild(antal_pladser);

        let ledige_pladser = document.createElement('p');
        ledige_pladser.setAttribute('class', 'camp-item-ledige-pladser');
        if (data.items[i].tickets.length == 6) {
            ledige_pladser.innerHTML = "<span class='bold-text'>Ledige pladser:</span> " + data.items[i].num_people;
        }
        if (data.items[i].tickets.length == 2) {
            ledige_pladser.innerHTML = "<span class='bold-text'>Ledige pladser:</span> " + data.items[i].num_people;
        }
        if (data.items[i].tickets.length == 1) {
            ledige_pladser.innerHTML = "<span class='bold-text'>Ledige pladser:</span> " + data.items[i].num_people;
        }
        info_wrapper.appendChild(ledige_pladser);
        camp_item.appendChild(info_wrapper);

        let knap = document.createElement('button');
        knap.innerHTML = "LÆS MERE";

        let knap_link = document.createElement('a');
        knap_link.setAttribute('class', 'camps-knap')
        knap_link.href = "camps-detajler.html?id=" + data.items[i].id;
        knap_link.appendChild(knap);

        camp_item.appendChild(knap_link);

        camps_grid.appendChild(camp_item);
    }

    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}