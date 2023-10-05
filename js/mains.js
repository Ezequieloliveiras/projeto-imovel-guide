//SCRIPT MAIN

let openModalBtn = document.getElementById("openModalBtn")
let modal = document.getElementById("myModal")
let closeModalBtn = document.querySelector(".close")


closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none"
})

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
})


// MENU

const mobileMenuIcon = document.getElementById("mobile-menu-icon")
const mobileMenu = document.getElementById("mobile-menu")
const mobileMenuSecond = document.getElementById("mobile-menu-second")


mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show")
})

mobileMenuIcon.addEventListener("click", () => {
    mobileMenuSecond.classList.toggle("show")
})


// DOCUMENTS

const input = document.querySelector('#cpf')
const numbers = document.querySelector('#numbers')
const button = document.querySelector('#button')

button.onclick = function () {
    alert('Mensagem enviada com sucesso!')
}

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    if (inputLength === 3 || inputLength === 7) {
        input.value += '.'
    } else if (inputLength === 11) {
        input.value += "-"
    }
})

numbers.addEventListener('keypress', () => {
    let numbersLength = numbers.value.length

    if (numbersLength === 0) {
        numbers.value += '('
    } else if (numbersLength === 3) {
        numbers.value += ') '
    }

    if ((numbersLength === 10)) {
        numbers.value += '-'
    }
})


//CALCULATOR

document.querySelector('#calculator').addEventListener('click', function () {
    const num1 = parseFloat(document.querySelector('#num1').value)
    const num2 = parseFloat(document.querySelector('#num2').value)
    const num3 = parseFloat(document.querySelector('#num3').value)

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num2 === 0) {
        document.querySelector('#result').textContent = "Inválido"
        return
    }

    let result = (num3 * num1) / num2

    if (Number.isInteger(result)) {
        document.querySelector('#result').textContent = result
    } else {
        document.querySelector('#result').textContent = result.toFixed(2).replace('.', ',')
    }

})


// ZOOM

let imagemZoom = document.querySelector('#imagem-zoom')
let zoomed = false // Variável para controlar o estado de zoom

// Função para aplicar o zoom automaticamente ao carregar a página
function aplicarZoomAutomatico() {
    imagemZoom.classList.add('zoomed')
    zoomed = true
}

// Adicione um ouvinte de evento 'load' para chamar a função após o carregamento da página
window.addEventListener('load', function () {
    if (!zoomed) {
        // Se o zoom não foi aplicado durante o refresh, aplique-o automaticamente
        imagemZoom.style.transform = 'scale(1.5)'
        imagemZoom.classList.add('zoomed')
    }
})

// Adicione um ouvinte de evento 'beforeunload' para remover a classe 'zoomed' antes de descarregar a página
window.addEventListener('beforeunload', function () {
    imagemZoom.classList.remove('zoomed')
})
