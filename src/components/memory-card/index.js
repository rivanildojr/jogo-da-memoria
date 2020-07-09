const memoryCard = () => {
  styles();

  return ({ nameClass, src, alt }) => ` 
    <div class="card" onClick="handleClick(this)">
      <article class="memory-card -active" >
        <img 
          src="img/icon-collabcode.png"
          alt="Gueio Mascote da CollabCode"
          class='icon'
        />        
      </article>
      <article class="memory-card ${nameClass}">
        <img 
          src='${src}' 
          alt=${alt} 
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
      display: none;
    }
    .memory-card.-active {
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

    .memory-card.-active > .icon {
      width: 100px;
    }

    .memory-card.-active.-front {
      background-color: #fff;
    }

    .memory-card.-active.-front::before {
      content: "";
      height: 94px;
      width: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card.-active.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

  $head.insertAdjacentElement("beforeend", $styles);
}

function handleClick(e) {
  const $children = e.children;
  $children[0].classList.toggle("-active");
  $children[1].classList.toggle("-active");
}
