const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Icone do Livro da Linguagem C++",
});
const $memoryCardBug = createMemoryCard({
  src: "img/icon-bug.png",
  alt: "Icone de um bug",
});
const $memoryCardJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Icone do Livro da Linguagem JS",
});
const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Icone do Livro da Linguagem Java",
});
const $memoryCardPhp = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Icone do Livro da Linguagem PHP",
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
