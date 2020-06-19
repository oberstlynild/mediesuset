let nyheds_content = document.getElementsByClassName('loader-wrapper')[0]
let aktuel_nyhed = document.getElementById('nyheder-aktuel-nyhed');

function readDataID(data_id) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    data_id = urlParams.get('id');
    fetchNyhederDetajler(data_id);
}

function fetchNyhederDetajler(data_id) {
    fetch('https://api.mediehuset.net/mediesuset/news/' + data_id)
        .then(response => response.json())
        .then(data => writeNyhederDetajler(data))
}

function writeNyhederDetajler(data) {
    console.log(data);
    let title = document.createElement('h2');
    title.innerHTML = data.item.title;

    let unix_timestamp = data.item.datetime;
    var date = new Date(unix_timestamp * 1000);
    minutes = '' + date.getMinutes();
    hours = '' + date.getHours();
    month = '' + (date.getMonth() + 1);
    day = '' + date.getDate();
    year = date.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    if (hours == "0") {
        hours = "00";
    }
    if (minutes == "0") {
        minutes = "00"
    }
    date = day + "/" + month + " " + hours + ':' + minutes;

    let tidspunkt = document.createElement('p');
    tidspunkt.setAttribute('class', 'aktuel-nyhed-tid');
    tidspunkt.innerHTML = date;

    let author = document.createElement('p');
    author.setAttribute('class', 'aktuel-nyhed-forfatter');
    author.innerHTML = "Skrevet af " + data.item.author;

    let image = document.createElement('img');
    image.src = data.item.image;

    let content = document.createElement('p');
    content.setAttribute('class', 'aktuel-nyhed-content')
    content.innerHTML = data.item.content;

    aktuel_nyhed.appendChild(title);
    aktuel_nyhed.appendChild(tidspunkt);
    aktuel_nyhed.appendChild(author);
    aktuel_nyhed.appendChild(image);
    aktuel_nyhed.appendChild(content);

    fetchNyheder();
}

function fetchNyheder() {
    fetch('https://api.mediehuset.net/mediesuset/news')
        .then(response => response.json())
        .then(data => writeNyheder(data))
}

function writeNyheder(data) {
    let nyhederGrid = document.getElementById('nyheder-grid');
    for (i = 0; i < data.count; i++) {

        let nyhedsItem = document.createElement('div');
        nyhedsItem.setAttribute('class', 'nyheder-grid-item');

        let image = document.createElement('img');
        image.src = data.items[i].image;

        let overskrift = document.createElement('h3');
        overskrift.innerHTML = data.items[i].title;

        let teaser = document.createElement('p');
        teaser.innerHTML = data.items[i].teaser;

        let knap = document.createElement('button');
        knap.innerHTML = "LÆS MERE";

        let knap_link = document.createElement('a');
        knap_link.setAttribute('class', 'nyheds-knap')
        knap_link.href = "nyheder.html?id=" + data.items[i].id;
        knap_link.appendChild(knap);

        nyhedsItem.appendChild(image);
        nyhedsItem.appendChild(overskrift);
        nyhedsItem.appendChild(teaser);
        nyhedsItem.appendChild(knap_link);
        nyhederGrid.appendChild(nyhedsItem);
    }
    document.getElementsByClassName('loader')[0].style.display = "none";
    nyheds_content.style.display = "block";
}