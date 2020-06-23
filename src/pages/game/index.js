const $root = document.querySelector("#root");

const $iconC = `<img 
      src='img/icon-c.png' 
      alt='ícone de um livro da linguagem C++' 
      class='icon'
    />`;

const $icon = `<img 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da Collabcode' 
    class='icon'
  />`;

$root.insertBefore($wrapCards, null);

createMemoryCard($iconC, "-front");
createMemoryCard($iconC, "-front");

for (let index = 0; index < 18; index++) {
  createMemoryCard($icon);
}
