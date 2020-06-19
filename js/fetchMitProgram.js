let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0]
let token_type = "Bearer ";
let token_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmNzExOWQzLTlkMWUtNGFmMS04OTFkLTFhMGQwODgzYzY4ZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiJmZjcxMTlkMy05ZDFlLTRhZjEtODkxZC0xYTBkMDg4M2M2OGYiLCJpYXQiOjE1OTIyMDY0ODAsIm5iZiI6MTU5MjIwNjQ4MCwiZXhwIjoxNTkyODExMjgwLCJ1aWQiOiJvYmVyc3RseW5pbGQifQ.A3NYNRg09odLH2scUGmCANeHj9wxSona7kSV0grxe2TQyJn4XAZ5ec8QVMMrY2cAaIWOV-3kgd-NJxxKtNb84w";

function fetchMitProgram() {
    fetch('https://api.mediehuset.net/mediesuset/programme/7', {
            headers: {
                'Authorization': token_type + token_key
            },
        })
        .then(response => response.json())
        .then(data => writeMitProgram(data))
}

function writeMitProgram(data) {
    onsdag_grid = document.getElementById('mit-program-onsdag-items');
    torsdag_grid = document.getElementById('mit-program-torsdag-items');
    fredag_grid = document.getElementById('mit-program-fredag-items');
    loerdag_grid = document.getElementById('mit-program-lørdag-items');



    for (i = 0; i < data.count; i++) {
        let event_dato = data.items[i].datetime.slice(0, 10);
        console.log(data);
        if (event_dato == "2020-07-08") {
            /*RØD*/
            if (data.items[i].stage_name == "Rød scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_roed_item = document.createElement('div');
                mit_program_roed_item.setAttribute('class', 'mit-program-roed-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " Kl. " + event_tid;
                mit_program_roed_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_roed_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                onsdag_grid.appendChild(mit_program_item);
            }
            /*BLÅ*/
            if (data.items[i].stage_name == "Blå scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_blaa_item = document.createElement('div');
                mit_program_blaa_item.setAttribute('class', 'mit-program-blaa-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_blaa_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_blaa_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                onsdag_grid.appendChild(mit_program_item);
            }
            /*LILLA*/
            if (data.items[i].stage_name == "Lilla scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_lilla_item = document.createElement('div');
                mit_program_lilla_item.setAttribute('class', 'mit-program-lilla-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_lilla_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_lilla_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                onsdag_grid.appendChild(mit_program_item);
            }
            if (data.items[i].stage_name == "Grøn scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_groen_item = document.createElement('div');
                mit_program_groen_item.setAttribute('class', 'mit-program-groen-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_groen_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_groen_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                onsdag_grid.appendChild(mit_program_item);
            }
        }
        if (event_dato == "2020-07-09") {
            /*RØD*/
            if (data.items[i].stage_name == "Rød scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_roed_item = document.createElement('div');
                mit_program_roed_item.setAttribute('class', 'mit-program-roed-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " Kl. " + event_tid;
                mit_program_roed_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_roed_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                torsdag_grid.appendChild(mit_program_item);
            }
            /*BLÅ*/
            if (data.items[i].stage_name == "Blå scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_blaa_item = document.createElement('div');
                mit_program_blaa_item.setAttribute('class', 'mit-program-blaa-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_blaa_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_blaa_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                torsdag_grid.appendChild(mit_program_item);
            }
            /*LILLA*/
            if (data.items[i].stage_name == "Lilla scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_lilla_item = document.createElement('div');
                mit_program_lilla_item.setAttribute('class', 'mit-program-lilla-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_lilla_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_lilla_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                torsdag_grid.appendChild(mit_program_item);
            }
            if (data.items[i].stage_name == "Grøn scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_groen_item = document.createElement('div');
                mit_program_groen_item.setAttribute('class', 'mit-program-groen-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_groen_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_groen_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                torsdag_grid.appendChild(mit_program_item);
            }
        }
        if (event_dato == "2020-07-10") {
            /*RØD*/
            if (data.items[i].stage_name == "Rød scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_roed_item = document.createElement('div');
                mit_program_roed_item.setAttribute('class', 'mit-program-roed-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " Kl. " + event_tid;
                mit_program_roed_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_roed_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                fredag_grid.appendChild(mit_program_item);
            }
            /*BLÅ*/
            if (data.items[i].stage_name == "Blå scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_blaa_item = document.createElement('div');
                mit_program_blaa_item.setAttribute('class', 'mit-program-blaa-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_blaa_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_blaa_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                fredag_grid.appendChild(mit_program_item);
            }
            /*LILLA*/
            if (data.items[i].stage_name == "Lilla scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_lilla_item = document.createElement('div');
                mit_program_lilla_item.setAttribute('class', 'mit-program-lilla-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_lilla_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_lilla_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                fredag_grid.appendChild(mit_program_item);
            }
            if (data.items[i].stage_name == "Grøn scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_groen_item = document.createElement('div');
                mit_program_groen_item.setAttribute('class', 'mit-program-groen-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_groen_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_groen_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                fredag_grid.appendChild(mit_program_item);
            }
        }
        if (event_dato == "2020-07-11") {
            /*RØD*/
            if (data.items[i].stage_name == "Rød scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_roed_item = document.createElement('div');
                mit_program_roed_item.setAttribute('class', 'mit-program-roed-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " Kl. " + event_tid;
                mit_program_roed_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_roed_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                loerdag_grid.appendChild(mit_program_item);
            }
            /*BLÅ*/
            if (data.items[i].stage_name == "Blå scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_blaa_item = document.createElement('div');
                mit_program_blaa_item.setAttribute('class', 'mit-program-blaa-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_blaa_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_blaa_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                loerdag_grid.appendChild(mit_program_item);
            }
            /*LILLA*/
            if (data.items[i].stage_name == "Lilla scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_lilla_item = document.createElement('div');
                mit_program_lilla_item.setAttribute('class', 'mit-program-lilla-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_lilla_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_lilla_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                loerdag_grid.appendChild(mit_program_item);
            }
            if (data.items[i].stage_name == "Grøn scene") {
                let mit_program_item = document.createElement('div');
                mit_program_item.setAttribute('class', 'mit-program-item');
                mit_program_item.setAttribute('id', 'remove-' + data.items[i].id + '-id-item')

                let mit_program_groen_item = document.createElement('div');
                mit_program_groen_item.setAttribute('class', 'mit-program-groen-item');
                let event_tid = data.items[i].datetime.slice(11, 19);

                mit_program_tid = document.createElement('h4');
                mit_program_tid.innerHTML = data.items[i].stage_name + " " + event_tid;
                mit_program_groen_item.appendChild(mit_program_tid);

                mit_program_item.appendChild(mit_program_groen_item);

                let mit_program_kunstner_item = document.createElement('div');
                mit_program_kunstner_item.setAttribute('class', 'mit-program-kunstner-item');

                mit_program_kunstner = document.createElement('h4');
                mit_program_kunstner.innerHTML = data.items[i].event_title;
                mit_program_kunstner_item.appendChild(mit_program_kunstner);

                mit_program_slet = document.createElement('i')
                mit_program_slet.setAttribute('class', 'fas fa-trash-alt');
                mit_program_slet.setAttribute('data-id', data.items[i].id);
                mit_program_slet.setAttribute('id', 'remove-' + data.items[i].id + "-id")
                mit_program_slet.setAttribute('onclick', 'removeFraMinSide(this)');

                mit_program_kunstner_item.appendChild(mit_program_slet);
                mit_program_item.appendChild(mit_program_kunstner_item);
                loerdag_grid.appendChild(mit_program_item);
            }
        }
    }

    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}

function removeFraMinSide(trash_id) {
    let trashId = trash_id.getAttribute('data-id');
    document.getElementById('remove-' + trashId + '-id-item').style.display = "none";
    fetch('https://api.mediehuset.net/mediesuset/programme/' + trashId, {
        headers: {
            'Authorization': token_type + token_key
        },
        method: "DELETE",
    })

}

/*
    fetch('https://api.mediehuset.net/mediesuset/programme/' + min_side_id, {
            headers: {
                'Authorization': token_type + token_key
            },
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => actuallyWriteRemoveMinSide(data))
*/