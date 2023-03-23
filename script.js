
const container = document.querySelector('.cards')
const objetivos = document.querySelector('.objetivos')
const containerPrimario = document.querySelector('.container-primario')

const container3 = document.querySelector('.container-3')
const button = document.querySelector('.btn').addEventListener('click',() =>{
container.classList.toggle('ativo')
container3.classList.toggle('off')
objetivos.classList.toggle('off')
containerPrimario.classList.toggle('off')
})