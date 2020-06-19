let wednesdayItems = document.getElementsByClassName('program-day-onsdag-data');
let thursdayItems = document.getElementsByClassName('program-day-torsdag-data');
let fridayItems = document.getElementsByClassName('program-day-fredag-data');
let saturdayItems = document.getElementsByClassName('program-day-lørdag-data');

let colorBase = "#121212";
let colorRed = "#A33A49";
let colorBlue = "#396999";
let colorGreen = "#6B8846";
let colorPurple = "#80347C";

let wednesdayMenu = document.getElementById('program-menu-onsdag');
let thursdayMenu = document.getElementById('program-menu-torsdag');
let fridayMenu = document.getElementById('program-menu-fredag');
let saturdayMenu = document.getElementById('program-menu-lørdag');


function sortWednesday() {


    wednesdayMenu.style.backgroundColor = colorBlue;
    thursdayMenu.style.backgroundColor = colorBase;
    fridayMenu.style.backgroundColor = colorBase;
    saturdayMenu.style.backgroundColor = colorBase;

    for (i = 0; i < wednesdayItems.length; i++) {
        wednesdayItems[i].style.display = "grid";
    }

    for (i = 0; i < thursdayItems.length; i++) {
        thursdayItems[i].style.display = "none";
    }

    for (i = 0; i < fridayItems.length; i++) {
        fridayItems[i].style.display = "none";
    }

    for (i = 0; i < saturdayItems.length; i++) {
        saturdayItems[i].style.display = "none";
    }
}

function sortThursday() {

    wednesdayMenu.style.backgroundColor = colorBase;
    thursdayMenu.style.backgroundColor = colorRed;
    fridayMenu.style.backgroundColor = colorBase;
    saturdayMenu.style.backgroundColor = colorBase;

    for (i = 0; i < wednesdayItems.length; i++) {
        wednesdayItems[i].style.display = "none";
    }

    for (i = 0; i < thursdayItems.length; i++) {
        thursdayItems[i].style.display = "grid";
    }

    for (i = 0; i < fridayItems.length; i++) {
        fridayItems[i].style.display = "none";
    }

    for (i = 0; i < saturdayItems.length; i++) {
        saturdayItems[i].style.display = "none";
    }
}

function sortFriday() {
    wednesdayMenu.style.backgroundColor = colorBase;
    thursdayMenu.style.backgroundColor = colorBase;
    fridayMenu.style.backgroundColor = colorGreen;
    saturdayMenu.style.backgroundColor = colorBase;
    for (i = 0; i < wednesdayItems.length; i++) {
        wednesdayItems[i].style.display = "none";
    }

    for (i = 0; i < thursdayItems.length; i++) {
        thursdayItems[i].style.display = "none";
    }

    for (i = 0; i < fridayItems.length; i++) {
        fridayItems[i].style.display = "grid";
    }

    for (i = 0; i < saturdayItems.length; i++) {
        saturdayItems[i].style.display = "none";
    }
}

function sortSaturday() {
    wednesdayMenu.style.backgroundColor = colorBase;
    thursdayMenu.style.backgroundColor = colorBase;
    fridayMenu.style.backgroundColor = colorBase;
    saturdayMenu.style.backgroundColor = colorPurple;

    for (i = 0; i < wednesdayItems.length; i++) {
        wednesdayItems[i].style.display = "none";
    }

    for (i = 0; i < thursdayItems.length; i++) {
        thursdayItems[i].style.display = "none";
    }

    for (i = 0; i < fridayItems.length; i++) {
        fridayItems[i].style.display = "none";
    }

    for (i = 0; i < saturdayItems.length; i++) {
        saturdayItems[i].style.display = "grid";
    }
}