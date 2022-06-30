const visor = document.querySelector("input")

let valor1 = 0
let valor2 = 0
let op = 0
let limpaVisor = false

document.addEventListener('click', e => {
    let alvo = e.target

    if(alvo.nodeName == 'BUTTON'){
        if(alvo.classList.contains('operacao')){
            
            valor1 = Number(visor.value)

            limpaVisor = true

            if(alvo.textContent == '+'){
                op = 1
            } else  if(alvo.textContent == '-'){
                op = 1
            } else  if(alvo.textContent == 'X'){
                op = 1
            } else  if(alvo.textContent == '/'){
                op = 1
            }

        } else if(alvo.classList.contains('igual')){
            //valor2 = Number(visor.value)
            igual()
        } else if (alvo.classList.contains('limpar')){
           limparVisor()
        }  else{
            adicionarVisor(alvo.textContent)
        }
    }
})

let adicionarVisor = numero => {

    if(limpaVisor){
        visor.value = ''
        limpaVisor = false
    }
   
    if(numero == '0' && visor.value == '0'){
        visor.value = numero

    } else if(visor.value == 0){
            visor.value = numero
    } else {
        visor.value += numero
    }
}

let limparVisor = () => {

    valor1 = 0
    valor = 0
    op = 0
    
    visor.value = ''
}

let igual = () => {

    let resultado = 0

    valor2 = Number(visor.value)

    switch (op) {
        case 1: //soma
            resultado = valor1 + valor2
            break; 
         case 2: //subtração
            resultado = valor1 - valor2
            break;
         case 3: //multiplicação
            resultado = valor1 * valor2
            break;
         case 4: //divisão
            resultado = valor1 / valor2
            break;
    }
    visor.value = resultado
}
