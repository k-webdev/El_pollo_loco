let canvas;
let keyboard = new Keyboard(); // Ein neues KeyBoard wird erstellt.
let world;

/* =============================== */

let countOpenCloseHELP = 0;

/* =============================== */
function init() {

}

function openCloseHELP() {
    if (countOpenCloseHELP == 0) {
        document.getElementById('help-context-show-hide').classList.remove('d-none');
        document.getElementById('help-context-show-hide').classList.add('context');
        countOpenCloseHELP++;
    } else {
        document.getElementById('help-context-show-hide').classList.add('d-none');
        document.getElementById('help-context-show-hide').classList.remove('context');
        countOpenCloseHELP = 0;
    }
}

function startGame() {
    canvas = document.getElementById('canvas');// canvas enthält den Zugriffsparameter auf das canvas!!! 
    world = new World(canvas, keyboard);// initialisiert die Klasse World und erstellt eine neue Welt. canvas wird an Welt übergeben. keyboard wird an Welt übergeben

    console.log('my character is ', world);// world.character funktioniert wie world['character']!!! (wie ein Json)
}

function addRemoveStartImage() {
    document.getElementById('start-image').classList.remove('start-image');
    document.getElementById('start-image').classList.add('d-none');
    document.getElementById('load-image').classList.remove('d-none');
    document.getElementById('load-image').classList.add('load-image');
    document.getElementById('load-text').classList.remove('d-none');
    document.getElementById('load-text').classList.add('load-text');
}

function openGame() {
    addRemoveStartImage();
    setTimeout(() => {
        loading();
        startGame();
        document.getElementById('load-text').classList.remove('load-text');
        document.getElementById('load-text').classList.add('d-none');
        document.getElementById('container-load-image').classList.remove('container-load-image')
        document.getElementById('container-load-image').classList.add('d-none');
    }, 5000);

}
/* Bilder müssen noch im Wechsel hinzugefügt werden. */
let loadImages = [
    './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
    './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
    './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
];

function loading() {
    document.getElementById('load-image').classList.remove('load-image');
    document.getElementById('load-image').classList.add('d-none');
    document.getElementById('canvas').classList.add('canvas');
    document.getElementById('canvas').classList.remove('d-none');
}

function fullscreen(){
    if(openGame() == true){
        document.getElementById('canvas').requestFullscreen();
    }else{
        openGame();
        document.getElementById('canvas').requestFullscreen();
    }
}









































document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true; // der Wert der Variable RIGHT wird auf true gesetzt. 
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 84) {
        keyboard.T = true;
    }
    /* console.log(event);  */
});

document.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false; // Der Wert der Variablen RIGHT wird wieder auf false gesetzt.
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 84) {
        keyboard.T = false;
    }
});