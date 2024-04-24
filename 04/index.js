let capitalIni = 1000;
let jurosCompostos = 0.125;
let tempoMeses = 5;
let taxaFixa 
let Montante 

taxaFixa = Math.pow(1 + jurosCompostos, tempoMeses);
Montante = (taxaFixa * capitalIni.toFixed(2));

console.log(`O valor total do montante será de ${Montante.toFixed(2)}`);