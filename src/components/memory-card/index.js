const memoryCard = () => {
  styles();

  return ({ src, alt }) => ` 
    <div class="memory-card" onClick="handleClick(this)">
      <article class="card -front">
        <img 
          src='${src}' 
          alt=${alt} 
          class='icon'
        />     
      </article>
      <article class="card" >
        <img 
          src="img/icon-collabcode.png"
          alt="Gueio Mascote da CollabCode"
          class='icon'
        />        
      </article>
    </div>
  `;
};

function styles() {
  const $head = document.querySelector("head");
  const $styles = document.createElement("style");
  $styles.textContent = `
    .memory-card {
      height: 155px;
      width: 155px;
      position: relative;
    }
    .memory-card .card {
      background-color: #f25a70;
      border-radius: 30px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      position: absolute;
    }

    .memory-card.-active .card {
      display: none;
    }

    .memory-card.-active .card.-front {
      display: flex;
    }

    .memory-card .card > .icon {
      width: 100px;
    }

    .memory-card .card.-front {
      background-color: #fff;
    }

    .memory-card .card.-front::before {
      content: "";
      height: 94px;
      width: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

  $head.insertAdjacentElement("beforeend", $styles);
}

const handleClick = ($element) => $element.classList.toggle("-active");
