//DOM
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');

const image = document.querySelector('#ilustracao');

let btn_Resultado = document.querySelector('#btn-resultado');
let resultado = document.querySelector('#resultado');

//eventos
btn_Resultado.addEventListener('click', calcularMedia);

//funções

function calcularMedia(){
    let n1 = parseFloat(peso.value);
    let n2 = parseFloat(altura.value);
    let media = n1/(n2 * n2);
    
    if(media < 18.5){
        mensagem = 'com magreza'; 
        image.src = 'images/anorexia.png';
    }
    else if(media >= 18.5 && media <= 25){
        mensagem = 'com peso normal';
        image.src = 'images/peso_normal.png';
    }
    else if(media >= 25 && media <= 30){
        mensagem = 'Acima do peso';
        image.src = 'images/acima_do_peso.png';
    }
    else {
        mensagem = 'com Obesidade';
        image.src = 'images/obesidade.png';
    }

    resultado.textContent = `Seu IMC: ${media.toFixed()}, você esta:${mensagem}`;
}