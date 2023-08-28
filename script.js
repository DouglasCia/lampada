const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

function isLampBreak() {
  return lamp.src.indexOf('Quebrada') >-1 // A condição vai ser verdadeira quando estiver 'quebrada'
}

function lampOn() {
  if ( !isLampBreak () ) {
     lamp.src = './img/lampAcesa.jpg';
     
    }
}

function lampOff() {
  if ( !isLampBreak () ) {
  lamp.src = './img/lampApagada.jpg'
  }
}

function lampBreak() {
  lamp.src = './img/lampQuebrada.jpg'
}


ligar.addEventListener('click', lampOn )
desligar.addEventListener('click', lampOff )
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBreak)
