const p = document.querySelector('.p')
const adicionaP = document.querySelector('.adiciona-p')
const button = document.querySelector('.ver-mais')

function adicionarBorda() {
  if (scrollY > 150 && scrollY < 750) {
    p.style.borderLeft = '3px solid #000'
  } else {
    p.style.border = '0'
  }
}

function verMais() {
  adicionaP.style.display = 'block'
  adicionaP.style.paddingLeft = '10px'
  button.style.display = 'none'
}

addEventListener('scroll', adicionarBorda, verMais)