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