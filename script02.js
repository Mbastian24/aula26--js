// baseado no comando que for informado, 
// mostrar a lampada ligada ou desligada

const comando = prompt("Informe o comando para lampada (ligar/desligar):")

const elementoImagem = document.createElement("img")


switch (comando) {
    case "ligar":
        elementoImagem.src = "./assets/on.png"
        break;
        case "desligar":
            elementoImagem.src = "./assets/off.png"
            break;
    default:
        break;
}

if (elementoImagem.src != null){
    document.body.appendChild(elementoImagem)
}