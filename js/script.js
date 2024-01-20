let phone = document.querySelector('#phone')
phone.addEventListener('keydown', (event) => {
    //event.key содержит значение нажатого символаб, event.type тип события, event содержит инфу о событии
    //event.preventDefault отмена действия по умолчанию
    let isDigit = false
    let isDash = false
    let isControl = false
    let isArrow = false
    if (event.key >= 0 && event.key <= 9 && event.key != ' ') {
        isDigit = true
    }

    if (event.key == '-') {
        isDash = true
    }

    if (event.key == 'Backspace') {
        isControl = true
    }

    if (event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        isArrow = true
    }

    if (!isDigit && !isDash && !isControl && !isArrow) {//isDigit == false && isDash == false && isControl == false
        event.preventDefault()
    }
})
