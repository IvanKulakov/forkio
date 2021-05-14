let btn = document.getElementById('btn');
let menu = document.getElementById('main-menu');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');

let mainManuInvis = function(){
    menu.classList.add('top-menu__main-menu--invisible')
};
mainManuInvis();

let bntPress = function () {
    menu.classList.toggle('top-menu__main-menu--invisible')
};
let btnTransform = function() {
    line1.classList.toggle('top-menu-btn__line--turnLeft');
    line2.classList.toggle('top-menu-btn__line--turnRight');
    line3.classList.toggle('invisible')
};
// let menuOff = function () {
//     menu.classList.add('top-menu__main-menu--invisible')
//     line1.classList.remove('top-menu-btn__line--turnLeft');
//     line2.classList.remove('top-menu-btn__line--turnRight');
//     line3.classList.remove('invisible')
// };
btn.addEventListener('click', bntPress);
btn.addEventListener('click', btnTransform);
