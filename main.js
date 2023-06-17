//Variables main page
const form = document.querySelector('form')
let inputWeight = document.querySelector('#weight')
let inputHeight = document.querySelector('#height')
const btn = document.querySelector('form button')

// Modal
const modalWrapper = document.querySelector('.modal-wrapper')
const modalTextIMC = modalWrapper.querySelector('span')
const modalCategorySpan = document.querySelector('.category-wrapper span')
const btnClose = document.querySelector('.close')

// Error
const alertError = document.querySelector('#alertError')

//Events
btn.addEventListener('click', IMC)
btnClose.addEventListener('click', CloseModel)
document.addEventListener('keydown', keyDownCloseModel)

//Functions 
function IMC (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const imc = (Number(weight / (height**2)).toFixed(1))

  let category = ''
  
  if(imc >= 40) {
    category = 'Obesidade Grave'
  } 
  else if (imc >= 30) {
    category = 'Obesidade'
  } 
  else if (imc >= 25) {
    category = 'Sobrepeso'
  } 
  else if (imc >= 18.5) {
    category = 'Normal'
  } 
  else if (imc > 1) {
    category = 'Magreza'
  }

  if (imc > 1 && imc != Infinity && imc != NaN) {
    modalMessages(imc, category)
    alertError.classList.remove('open')
  } else {
    alertError.classList.add('open')
  }
  
}

function modalMessages (imc, category) {
  modalWrapper.classList.add('open')
  modalTextIMC.innerText = `Seu IMC é de ${imc}`
  modalCategorySpan.innerText = category
}

function CloseModel () {
  modalWrapper.classList.remove('open')
  inputWeight.value = ''
  inputHeight.value = ''
}

function keyDownCloseModel (e) {
  if(e.key == 'Enter' && modalWrapper.classList.contains('open')) {
    btnClose.focus()
    CloseModel()
  }
}





