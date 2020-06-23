// function createMemoryCard($icon, variation = "") {

//   const $memoryCard = document.createElement("article");

//   if (variation != "") {
//     $memoryCard.classList.add("memory-card", variation);
//   }

//   $memoryCard.classList.add("memory-card");

//   $memoryCard.insertAdjacentHTML("afterbegin", $icon);

//   return $memoryCard;
// }

function createMemoryCard() {
  const $memoryCard = `
    <article class="memory-card">
      <img 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da Collabcode' 
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

  return $memoryCard;
}

function createMemoryCardFront() {
  const $memoryCard = `
    <article class="memory-card -front">
      <img 
        src='img/icon-c.png' 
        alt='ícone de um livro da linguagem C++' 
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

  return $memoryCard;
}

function handleClick() {
  console.log("ae");
}
