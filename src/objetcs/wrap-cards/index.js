const $wrapCards = document.createElement("main");

$wrapCards.classList.add("wrap-cards");

$wrapCards.addEventListener("click", function (event) {
  const target = event.target;

  console.log(target);
});
