const buttonElement = document.querySelector('#next')

function addCSS(){
    const textAreaElement = document.querySelector('textarea')
    const css = textAreaElement.value
    const foreFront = document.querySelector('#forefront')
    foreFront.style.cssText = css
    console.log(foreFront)
}

buttonElement.addEventListener('click', addCSS)


