// variables

let $ = document;
let heading = $.querySelector('.heading');
let keyCodeElem = $.querySelector('#keycode');
let keyElem = $.querySelector('#key');
let locationElem = $.querySelector('#location');
let codeElem = $.querySelector('#code');
let whichElem = $.querySelector('#which');
let infos = $.querySelector('.infos');

// eventListener

$.body.addEventListener("keydown", function(event){

    event.preventDefault();

    starter.style.display = 'none';
    heading.style.display = 'flex';
    keyCodeElem.style.display = 'flex';
    infos.style.display = 'flex';

    // events
    
    let eventKeyCode = event.keyCode;
    let eventKey  = event.key;
    let eventLocation = event.location;
    let eventCode = event.code;
    let eventWhich = event.which;

    keyCodeElem.innerHTML = eventKeyCode;
    keyElem.innerHTML = eventKey;
    locationElem.innerHTML = eventLocation;
    codeElem.innerHTML = eventCode;
    whichElem.innerHTML = eventWhich;


})