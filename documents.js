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

    if(numbersLength === 0) {
        numbers.value += '('
    } else if(numbersLength === 3) {
        numbers.value += ') '
    }

    if ((numbersLength === 10)) {
        numbers.value += '-'
    }
})