function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");

  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $styles = document.createElement("style");
  $styles.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 16px;
      padding-bottom: 16px;
    }

    .cards-wrapper > .card {
      margin-bottom: 16px;
    }
  `;

  $head.insertBefore($styles, null);

  return $cardsWrapper;
}
