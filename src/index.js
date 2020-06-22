const $root = document.querySelector("#root");

const $game = document.createElement("main");
const $memoryCard = document.createElement("article");
const $memoryCardBack = document.createElement("article");

const $icon = `<img 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da Collabcode' 
    class='icon'
  />`;

const $iconC = `<img 
    src='img/icon-c.png' 
    alt='Livro da Linguagem C++' 
    class='icon'
  />`;

const $divCircle = `<div class='circle'>${$iconC}</div>`;

$game.classList.add("game");
$memoryCardBack.classList.add("memory-card", "-back");
$memoryCard.classList.add("memory-card");

$root.insertBefore($game, null);
$root.insertBefore($memoryCardBack, null);
$root.insertBefore($memoryCard, null);

$game.insertAdjacentElement("afterbegin", $memoryCard);
$game.insertAdjacentElement("afterbegin", $memoryCardBack);

$memoryCardBack.insertAdjacentHTML("afterbegin", $divCircle);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
