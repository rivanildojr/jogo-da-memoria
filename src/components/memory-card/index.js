// function createMemoryCard($icon, variation = "") {

//   const $memoryCard = document.createElement("article");

//   if (variation != "") {
//     $memoryCard.classList.add("memory-card", variation);
//   }

//   $memoryCard.classList.add("memory-card");

//   $memoryCard.insertAdjacentHTML("afterbegin", $icon);

//   return $memoryCard;
// }

const createMemoryCard = (
  variation = "",
  img = "icon-collabcode.png",
  alt = "Gueio mascote da Collabcode"
) => `
    <article class="memory-card ${variation}">
      <img 
        src='img/${img}' 
        alt=${alt} 
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

function handleClick() {
  console.log("ae");
}
