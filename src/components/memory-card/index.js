function createMemoryCard($icon, variation = "") {
  const $memoryCard = document.createElement("article");

  if (variation != "") {
    $memoryCard.classList.add("memory-card", variation);
  }

  $memoryCard.classList.add("memory-card");

  $wrapCards.insertAdjacentElement("afterbegin", $memoryCard);

  $memoryCard.insertAdjacentHTML("afterbegin", $icon);
}
