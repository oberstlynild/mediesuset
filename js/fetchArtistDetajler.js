let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0];
let artist_wrapper = document.getElementById('artist-details');
let token_type = "Bearer ";
let token_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmNzExOWQzLTlkMWUtNGFmMS04OTFkLTFhMGQwODgzYzY4ZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiJmZjcxMTlkMy05ZDFlLTRhZjEtODkxZC0xYTBkMDg4M2M2OGYiLCJpYXQiOjE1OTIyMDY0ODAsIm5iZiI6MTU5MjIwNjQ4MCwiZXhwIjoxNTkyODExMjgwLCJ1aWQiOiJvYmVyc3RseW5pbGQifQ.A3NYNRg09odLH2scUGmCANeHj9wxSona7kSV0grxe2TQyJn4XAZ5ec8QVMMrY2cAaIWOV-3kgd-NJxxKtNb84w";

function readDataID(data_id) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    data_id = urlParams.get('id');
    if (sessionStorage.getItem('loggedin')) {
        fetchLikeKnap(data_id);
    } else {
        fetchArtistDetajler(data_id);
    }
}

function fetchLikeKnap(data_id) {
    fetch('https://api.mediehuset.net/mediesuset/programme/7', {
            headers: {
                'Authorization': token_type + token_key
            },
        })
        .then(response => response.json())
        .then(data => writeLikeKnap(data, data_id))
}

function writeLikeKnap(data, data_id) {
    let like = document.createElement('button');
    like.setAttribute('class', 'artist-like-knap');
    like.setAttribute('id', 'artist-like-knap');
    like.setAttribute('onclick', 'addMinSide()')
    like.innerHTML = "TILFØJ TIL MIT PROGRAM";
    artist_wrapper.appendChild(like);

    let dislike = document.createElement('button');
    dislike.setAttribute('class', 'artist-dislike-knap');
    dislike.setAttribute('id', 'artist-dislike-knap');
    dislike.setAttribute('onclick', 'removeMinSide()')
    dislike.innerHTML = "FJERN FRA MIT PROGRAM";
    dislike.style.display = "none";
    artist_wrapper.appendChild(dislike);
    for (i = 0; i < data.count; i++) {
        if (data_id == data.items[i].event_id) {
            dislike.style.display = "block";
            like.style.display = "none";
            fetchArtistDetajler(data_id);
            return;
        }
    }
    fetchArtistDetajler(data_id);
}

function addMinSide() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    event_id = urlParams.get('id');
    let user_id = sessionStorage.getItem('user_id');
    let formData = new FormData()
    formData.append('user_id', user_id)
    formData.append('event_id', event_id)
    fetch('https://api.mediehuset.net/mediesuset/programme', {
            headers: {
                'Authorization': token_type + token_key
            },
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => writeAddMinSide(data))
}

function removeMinSide() {
    fetch('https://api.mediehuset.net/mediesuset/programme/7', {
            headers: {
                'Authorization': token_type + token_key
            },
        })
        .then(response => response.json())
        .then(data => writeRemoveMinSide(data))
}

function writeRemoveMinSide(data) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    url_id = urlParams.get('id');
    console.log(data);
    for (i = 0; i < data.count; i++) {
        if (url_id == data.items[i].event_id) {
            min_side_id = data.items[i].id;
            console.log(data.items[i].id);
            console.log(min_side_id);
        }
    }
    actuallyRemoveMinSide(min_side_id);
}

function actuallyRemoveMinSide(min_side_id) {
    fetch('https://api.mediehuset.net/mediesuset/programme/' + min_side_id, {
            headers: {
                'Authorization': token_type + token_key
            },
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => actuallyWriteRemoveMinSide(data))
}

function writeAddMinSide() {
    let like = document.getElementById('artist-like-knap');
    let dislike = document.getElementById('artist-dislike-knap');
    dislike.style.display = "block";
    like.style.display = "none";
}

function actuallyWriteRemoveMinSide() {
    let like = document.getElementById('artist-like-knap');
    let dislike = document.getElementById('artist-dislike-knap');
    dislike.style.display = "none";
    like.style.display = "block";
}

function fetchArtistDetajler(data_id) {
    fetch('https://api.mediehuset.net/mediesuset/events/' + data_id)
        .then(response => response.json())
        .then(data => writeArtistDetajler(data))
}

function writeArtistDetajler(data) {

    let unix_timestamp = data.item.datetime;
    let days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    let date = new Date(unix_timestamp * 1000);
    let dayName = days[date.getDay()];
    minutes = '' + date.getMinutes();
    hours = '' + date.getHours();
    if (hours == "0") {
        hours = "00";
    }
    if (minutes == "0") {
        minutes = "00"
    }
    tidspunkt_string = data.item.stage_name + "<br>" + dayName + " kl. " + hours + ":" + minutes;

    let title = document.createElement('h2');
    title.setAttribute('class', 'artist-title');
    title.innerHTML = data.item.title;
    artist_wrapper.appendChild(title);

    let tidspunkt = document.createElement('p');
    tidspunkt.setAttribute('class', 'artist-tidspunkt');
    tidspunkt.innerHTML = tidspunkt_string;
    artist_wrapper.appendChild(tidspunkt);

    let image = document.createElement('img');
    image.src = data.item.image;
    artist_wrapper.appendChild(image);

    let description = document.createElement('p');
    description.setAttribute('class', 'artist-description');
    description.innerHTML = data.item.description;
    artist_wrapper.appendChild(description);

    let facebookshare = document.createElement('a');
    facebookshare.href = "https://www.facebook.com/sharer/sharer.php?u=" + location.host + location.pathname;
    facebookshare.innerHTML = "<i class='fab fa-facebook-f'></i>";
    artist_wrapper.appendChild(facebookshare);



    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}