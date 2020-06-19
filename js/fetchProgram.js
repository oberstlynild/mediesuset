let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0]

function fetchLineup() {
    fetch('https://api.mediehuset.net/mediesuset/events')
        .then(response => response.json())
        .then(data => writeLineup(data))
}

function writeLineup(data) {
    let programRoedWrapper = document.getElementById('program-roed-scene-items')
    let programBlaaWrapper = document.getElementById('program-blaa-scene-items')
    let programGroenWrapper = document.getElementById('program-groen-scene-items')
    let programLillaWrapper = document.getElementById('program-lilla-scene-items')

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

        let programItem = document.createElement('div');
        programItem.setAttribute('class', 'program-item program-stage-' + data.items[i].stage_id + '-data program-day-' + dayName + '-data');
        let programItemHref = data.items[i].id;

        programItem.addEventListener("click", function() {
            location.href = "artist.html?id=" + programItemHref;
        });


        let program_tidspunkt = document.createElement('p');
        program_tidspunkt.setAttribute('class', 'program-item-tidspunkt');
        program_tidspunkt.innerHTML = hours + ":" + minutes;

        let program_tidspunkt_placeholder = document.createElement('div');
        program_tidspunkt_placeholder.setAttribute('class', 'program-tidspunkt-placeholder');
        program_tidspunkt_placeholder.appendChild(program_tidspunkt);

        let program_kunstner = document.createElement('p');
        program_kunstner.setAttribute('class', 'program-item-kunstner');
        program_kunstner.innerHTML = data.items[i].title;

        let program_type = document.createElement('p');
        program_type.setAttribute('class', 'program-item-type');
        program_type.innerHTML = data.items[i].type_name;

        let program_type_kunstner_placeholder = document.createElement('div');
        program_type_kunstner_placeholder.setAttribute('class', 'program-type-kunstner-placeholder');
        program_type_kunstner_placeholder.appendChild(program_kunstner);
        program_type_kunstner_placeholder.appendChild(program_type);

        programItem.appendChild(program_tidspunkt_placeholder);
        programItem.appendChild(program_type_kunstner_placeholder);

        if (data.items[i].stage_name == "Rød scene") {
            programRoedWrapper.appendChild(programItem);
        }

        if (data.items[i].stage_name == "Blå scene") {
            programBlaaWrapper.appendChild(programItem);
        }

        if (data.items[i].stage_name == "Grøn scene") {
            programGroenWrapper.appendChild(programItem);
        }

        if (data.items[i].stage_name == "Lilla scene") {
            programLillaWrapper.appendChild(programItem);
        }
    }

    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}