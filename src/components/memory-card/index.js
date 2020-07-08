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

function styles() {
  const $head = document.querySelector("head");
  const $styles = document.createElement("style");
  $styles.textContent = `
    .memory-card {
      background-color: #f25a70;
      border-radius: 30px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      height: 155px;
      width: 155px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
    }

    .memory-card > .icon {
      width: 100px;
    }

    .memory-card.-front {
      background-color: #fff;
    }

    .memory-card.-front::before {
      content: "";
      height: 94px;
      width: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

  $head.insertAdjacentElement("beforeend", $styles);
}

styles();

function handleClick() {
  console.log("ae");
}
