
let vitorias = saldoVitorias(150,23)
let nivel = classificacaoHeroi(vitorias)
console.log("O herói possui saldo de " + vitorias + " e está no nível " + nivel)

function saldoVitorias(numVitorias,numDerrotas) {
    return numVitorias-numDerrotas
}

function classificacaoHeroi (saldoVitorias) {
    if (saldoVitorias <=10) return "Ferro"
    if (saldoVitorias <=20) return "Bronze"
    if (saldoVitorias <=50) return "Prata"
    if (saldoVitorias <=80) return "Ouro"
    if (saldoVitorias <=90) return "Diamante"
    if (saldoVitorias <=100) return "Lendário"
    return "Imortal"

}