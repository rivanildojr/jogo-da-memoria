// function createMemoryCard($icon, variation = "") {

//   const $memoryCard = document.createElement("article");

//   if (variation != "") {
//     $memoryCard.classList.add("memory-card", variation);
//   }

//   $memoryCard.classList.add("memory-card");

//   $memoryCard.insertAdjacentHTML("afterbegin", $icon);

//   return $memoryCard;
// }

const createMemoryCard = ({ nameClass, src, alt }) => `
    <article class="memory-card ${nameClass}">
      <img 
        src='${src}' 
        alt=${alt} 
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

function handleClick() {
  console.log("ae");
}
