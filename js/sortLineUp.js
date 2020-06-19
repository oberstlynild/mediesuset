let stageOne = document.getElementsByClassName('stage-1-data');
let stageTwo = document.getElementsByClassName('stage-2-data');
let stageThree = document.getElementsByClassName('stage-3-data');
let stageFour = document.getElementsByClassName('stage-4-data');

let colorBase = "#121212";
let colorBaseActive = "#2c2c2c";
let colorRed = "#A33A49";
let colorBlue = "#396999";
let colorGreen = "#6B8846";
let colorPurple = "#80347C";

let menuBase = document.getElementById('line-up-menu-all');
let menuRed = document.getElementById('line-up-menu-roed');
let menuBlue = document.getElementById('line-up-menu-blaa');
let menuGreen = document.getElementById('line-up-menu-groen');
let menuPurple = document.getElementById('line-up-menu-lilla');

function sortAll() {
    menuBase.style.backgroundColor = colorBaseActive;
    menuRed.style.backgroundColor = colorBase;
    menuBlue.style.backgroundColor = colorBase;
    menuGreen.style.backgroundColor = colorBase;
    menuPurple.style.backgroundColor = colorBase;

    for (i = 0; i < stageOne.length; i++) {
        stageOne[i].style.display = "block";
    }
    for (i = 0; i < stageTwo.length; i++) {
        stageTwo[i].style.display = "block";
    }
    for (i = 0; i < stageThree.length; i++) {
        stageThree[i].style.display = "block";
    }
    for (i = 0; i < stageFour.length; i++) {
        stageFour[i].style.display = "block";
    }
}

function sortRed() {
    menuBase.style.backgroundColor = colorBase;
    menuRed.style.backgroundColor = colorRed;
    menuBlue.style.backgroundColor = colorBase;
    menuGreen.style.backgroundColor = colorBase;
    menuPurple.style.backgroundColor = colorBase;
    for (i = 0; i < stageOne.length; i++) {
        stageOne[i].style.display = "block";
    }
    for (i = 0; i < stageTwo.length; i++) {
        stageTwo[i].style.display = "none";
    }
    for (i = 0; i < stageThree.length; i++) {
        stageThree[i].style.display = "none";
    }
    for (i = 0; i < stageFour.length; i++) {
        stageFour[i].style.display = "none";
    }
}

function sortBlue() {
    menuBase.style.backgroundColor = colorBase;
    menuRed.style.backgroundColor = colorBase;
    menuBlue.style.backgroundColor = colorBlue;
    menuGreen.style.backgroundColor = colorBase;
    menuPurple.style.backgroundColor = colorBase;
    for (i = 0; i < stageOne.length; i++) {
        stageOne[i].style.display = "none";
    }
    for (i = 0; i < stageTwo.length; i++) {
        stageTwo[i].style.display = "block";
    }
    for (i = 0; i < stageThree.length; i++) {
        stageThree[i].style.display = "none";
    }
    for (i = 0; i < stageFour.length; i++) {
        stageFour[i].style.display = "none";
    }
}

function sortGreen() {
    menuBase.style.backgroundColor = colorBase;
    menuRed.style.backgroundColor = colorBase;
    menuBlue.style.backgroundColor = colorBase;
    menuGreen.style.backgroundColor = colorGreen;
    menuPurple.style.backgroundColor = colorBase;
    for (i = 0; i < stageOne.length; i++) {
        stageOne[i].style.display = "none";
    }
    for (i = 0; i < stageTwo.length; i++) {
        stageTwo[i].style.display = "none";
    }
    for (i = 0; i < stageThree.length; i++) {
        stageThree[i].style.display = "block";
    }
    for (i = 0; i < stageFour.length; i++) {
        stageFour[i].style.display = "none";
    }
}

function sortPurple() {
    menuBase.style.backgroundColor = colorBase;
    menuRed.style.backgroundColor = colorBase;
    menuBlue.style.backgroundColor = colorBase;
    menuGreen.style.backgroundColor = colorBase;
    menuPurple.style.backgroundColor = colorPurple;
    for (i = 0; i < stageOne.length; i++) {
        stageOne[i].style.display = "none";
    }
    for (i = 0; i < stageTwo.length; i++) {
        stageTwo[i].style.display = "none";
    }
    for (i = 0; i < stageThree.length; i++) {
        stageThree[i].style.display = "none";
    }
    for (i = 0; i < stageFour.length; i++) {
        stageFour[i].style.display = "block";
    }
}