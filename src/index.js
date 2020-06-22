const $root = document.querySelector("#root");

const $game = document.createElement("main");
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

$root.insertBefore($game, null);

let $memoryCard = [];

for (let index = 0; index < 19; index++) {
  $memoryCard[index] = document.createElement("article");

  $memoryCard[index].classList.add("memory-card");

  $game.insertAdjacentElement("afterbegin", $memoryCard[index]);

  $memoryCard[index].insertAdjacentHTML("afterbegin", $icon);
}

$game.insertAdjacentElement("afterbegin", $memoryCardFront);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
