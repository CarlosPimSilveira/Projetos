const btnCalcular = document.querySelector('.btnCalcular')
const mainPrincipal = document.querySelector('.main')

btnCalcular.addEventListener('click', () => {
    const txtNum = document.querySelector('#txtNum').value
    const DivResp = document.createElement('div')
    DivResp.classList.add('DivResp')
    for (let c = 0; c <= 10; c++) {
        let ResP = document.createElement("p")
        ResP.classList.add('resposta-tabuada')
        ResP.innerText = c + ' x ' + txtNum + ' = ' + (txtNum * c) 
        DivResp.appendChild(ResP)
    }
    document.body.appendChild(DivResp)
})