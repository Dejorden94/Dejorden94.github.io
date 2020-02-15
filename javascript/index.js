//dit zijn de variables voor de mobiele versie.
var mobileButton = document.querySelector('.menu-knop');
var mobielMenu = document.querySelector('.hidden-menu-container');
var closeButton = document.querySelector('#close');

var artiestenKnop = document.querySelector('#firstLi');

var artiestenLink1 = document.querySelector('#artiest1');
var artiestenLink2 = document.querySelector('#artiest2');
var artiestenLink3 = document.querySelector('#artiest3');

function pushLeft(){
    mobielMenu.classList.add('verschijn');
    mobielMenu.classList.remove('verdwijn');
}

function pushRight(){
    mobielMenu.classList.add('verdwijn');
    mobielMenu.classList.remove('verschijn');
}

function artiestVerschijnt (){
    artiestenLink1.classList.toggle('artiestVerschijn');
    artiestenLink2.classList.toggle('artiestVerschijn');
    artiestenLink3.classList.toggle('artiestVerschijn');
}

artiestenKnop.addEventListener('click',artiestVerschijnt);

mobileButton.addEventListener('click', pushLeft);

closeButton.addEventListener('click', pushRight);

//Dit zijn de variabelen voor de dektop versie.
var dektopArtiest = document.querySelector('#desk-artists');
var artiestContainer = document.querySelector('.dropdown-content');

function artiestVerschijnDesk (){
    artiestContainer.classList.toggle('dropdown-content-verschijnt');
}

dektopArtiest.addEventListener('click',artiestVerschijnDesk);