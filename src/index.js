const $root = document.querySelector("#root");

const $game = document.createElement("main");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $icon = `<img 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da Collabcode' 
    class='icon'
  />`;

const $iconC = `<img 
    src='img/icon-c.png' 
    alt='ícone de um livro da linguagem C++' 
    class='icon'
  />`;

$game.classList.add("game");
$memoryCardFront.classList.add("memory-card", "-front");
$memoryCard.classList.add("memory-card");

$root.insertBefore($game, null);
$root.insertBefore($memoryCardFront, null);
$root.insertBefore($memoryCard, null);

$game.insertAdjacentElement("afterbegin", $memoryCard);
$game.insertAdjacentElement("afterbegin", $memoryCardFront);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
