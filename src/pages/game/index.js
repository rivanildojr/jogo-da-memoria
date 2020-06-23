const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

for (let index = 0; index < 6; index++) {
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
}
