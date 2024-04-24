let peso = 70;
let altura = 1.70;

let IMC = (peso / (altura^2)).toFixed(2);
if (IMC > 18.5 || IMC < 24) {
    console.log(`Você está com IMC Normal: ${IMC}`);
}else if (IMC > 24) {
    console.log(`Você está com Sobrepeso: ${IMC}`);
}else {
    console.log(`Você está com Magreza: ${IMC}`);
}

