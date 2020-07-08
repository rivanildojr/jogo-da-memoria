const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardC = createMemoryCard(
  "-front",
  "icon-c.png",
  "Icone do Livro da Linguagem C++"
);
const $memoryCardBug = createMemoryCard(
  "-front",
  "icon-bug.png",
  "Icone de um bug"
);
const $memoryCardJs = createMemoryCard(
  "-front",
  "icon-js.png",
  "Icone do Livro da Linguagem JS"
);
const $memoryCardJava = createMemoryCard(
  "-front",
  "icon-java.png",
  "Icone do Livro da Linguagem Java"
);
const $memoryCardPhp = createMemoryCard(
  "-front",
  "icon-php.png",
  "Icone do Livro da Linguagem PHP"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
