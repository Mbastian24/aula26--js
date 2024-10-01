// if/ else if
// se/ senão se

const numeroMes = Number(prompt(`Informe o número do mês`))

// verifica se numeroMes for 1, então o mês é janeiro
// senão, verifica se numeroMes for 2, então o mês é fevereiro
// senão, verifica se numeroMes for 3 então o mês é março
// senão, verifica se numeroMes for 4 então o mês é abril
// senão, verifica se numeroMes for 5 então o mês é maio
// senão, verifica se numeroMes for 6 então o mês é junho
// senão, verifica se numeroMes for 7 então o mês é julho
// senão, verifica se numeroMes for 8 então o mês é agosto
// senão, verifica se numeroMes for 9 então o mês é setembro
// senão, verifica se numeroMes for 10 então o mês é outubro
// senão, verifica se numeroMes for 11 então o mês é novembro
// senão, verifica se numeroMes for 12 então o mês é dezembro

// let nomeMes

if (numeroMes === 1) {
nomeMes = "Janeiro"
} else if (numeroMes === 2) {
    nomeMes = "Fevereiro"
} else if (numeroMes === 3) {
    nomeMes = "Março"
} else if (numeroMes === 4) {
    nomeMes = "Abril"
} else if (numeroMes === 5) {
    nomeMes = "Maio"
} else if (numeroMes === 6) {
    nomeMes = "Junho"
} else if (numeroMes === 7) {
    nomeMes = "Julho"
} else if (numeroMes === 8) {
    nomeMes = "Agosto"
} else if (numeroMes === 9) {
    nomeMes = "Setembro"
} else if (numeroMes === 10) {
    nomeMes = "Outubro"
} else if (numeroMes === 11) {
    nomeMes = "Novembro"
} else if (numeroMes === 12) {
    nomeMes = "Dezembro"
} else {
    nomeMes = "Mês inválido"
}


// SWITCH CASE

switch (numeroMes) {
    case 1:
        nomeMes = "Janeiro"
        break;
        case 2:
        nomeMes = "Fevereiro"
        break;
        case 3:
        nomeMes = "Março"
        break;
        case 4:
        nomeMes = "Abril"
        break;
        case 5:
        nomeMes = "Maio"
        break;
        case 6:
        nomeMes = "Junho"
        break;
        case 7:
        nomeMes = "Julho"
        break;
        case 8:
        nomeMes = "Agosto"
        break;
        case 9:
        nomeMes = "Setembro"
        break;
        case 10:
        nomeMes = "Outubro"
        break;
        case 11:
        nomeMes = "Novembro"
        break;
        case 12:
        nomeMes = "Dezembro"
        break;
            default:
        nomeMes = "Mês inválido"
        break;
}


document.body.appendChild(document.createTextNode(nomeMes))