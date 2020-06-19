let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0]

function fetchLineup() {
    fetch('https://api.mediehuset.net/mediesuset/events')
        .then(response => response.json())
        .then(data => writeLineup(data))
}

function writeLineup(data) {
    let lineUpWrapper = document.getElementById('line-up-items');

    for (i = 0; i < data.count; i++) {
        let unix_timestamp = data.items[i].datetime;
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
        tidspunkt_string = dayName + " kl. " + hours + ":" + minutes;

        let lineUpItem = document.createElement('div');
        lineUpItem.setAttribute('class', 'line-up-item stage-' + data.items[i].stage_id + '-data');
        let lineUpItemHref = data.items[i].id;

        lineUpItem.addEventListener("click", function() {
            location.href = "artist.html?id=" + lineUpItemHref; //samme href alligvel
        });

        let image = document.createElement('img');
        image.src = data.items[i].image;

        let title = document.createElement('h3');
        title.innerHTML = data.items[i].title;

        let tidspunkt = document.createElement('p');
        tidspunkt.setAttribute('class', 'line-up-item-tidspunkt');
        tidspunkt.innerHTML = tidspunkt_string;

        lineUpItem.appendChild(image);
        lineUpItem.appendChild(title);
        lineUpItem.appendChild(tidspunkt);
        lineUpWrapper.appendChild(lineUpItem);

    }

    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}

// function writeLineup(data) {
//     console.log(data);
//     let lineUpWrapper = document.getElementById('line-up-items');
//     for (i = 0; i < data.count; i++) {
//         let lineUpItem = document.createElement('div');
//         lineUpItem.setAttribute('class', 'line-up-item stage-' + data.items[i].stage_id + "-data");

//         let image = document.createElement('img');
//         image.src = data.items[i].image;

//         let title = document.createElement('h3');
//         title.innerHTML = data.items[i].title;

//         let unix_timestamp = data.items[i].datetime;
//         let days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
//         let date = new Date(unix_timestamp * 1000);
//         let dayName = days[date.getDay()];
//         minutes = '' + date.getMinutes();
//         hours = '' + date.getHours();
//         if (hours == "0") {
//             hours = "00";
//         }
//         if (minutes == "0") {
//             minutes = "00"
//         }
//         tidspunkt_string = dayName + " kl. " + hours + ":" + minutes;

//         let tidspunkt = document.createElement('p');
//         tidspunkt.setAttribute('class', 'line-up-item-tidspunkt');
//         tidspunkt.innerHTML = tidspunkt_string;

//         lineUpItem.appendChild(image);
//         lineUpItem.appendChild(title);
//         lineUpItem.appendChild(tidspunkt);
//         lineUpWrapper.appendChild(lineUpItem);

//     }

//     document.getElementsByClassName('loader')[0].style.display = "none";
//     loader_wrapper.style.display = "block";
// }