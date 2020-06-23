// function createMemoryCard($icon, variation = "") {

//   const $memoryCard = document.createElement("article");

//   if (variation != "") {
//     $memoryCard.classList.add("memory-card", variation);
//   }

//   $memoryCard.classList.add("memory-card");

//   $memoryCard.insertAdjacentHTML("afterbegin", $icon);

//   return $memoryCard;
// }

const createMemoryCard = () => `
    <article class="memory-card">
      <img 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da Collabcode' 
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

const createMemoryCardFront = () => `
    <article class="memory-card -front">
      <img 
        src='img/icon-c.png' 
        alt='ícone de um livro da linguagem C++' 
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

function handleClick() {
  console.log("ae");
}
