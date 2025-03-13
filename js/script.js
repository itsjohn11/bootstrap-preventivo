console.log("ciao");


/*
esecuzione logica

1. Assegnare l'importo base di 1h al servizio 
2. trovare l'importo totale in base al servizio richiesto delle ore lavorative
3. 
*/

// let discount = 0;
// if(YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24) {
//     discount = 35;
// }




// let codeDiscount;
//  YHDNU32;
// console.log(codeDiscount);


// const codeDiscount2 = JANJC63;
// const codeDiscount3 = PWKCN25;
// const codeDiscount4 = SJDPO96;
// const codeDiscount5 = POCIE24;

// let
// if(YHDNU32){
//     discount = 35;
// }else if(JANJC63){
//     discount = 35;
// }else if(PWKCN25){
//     discount = 35;
// }else if(SJDPO96){
//     discount = 35;
// }else if(POCIE24){
//     discount = 35;
// }else if(invalid){
//     discount = 0;
// }

const oneHourBd = 20.50;
const oneHoursFd = 15.30;
const oneHoursPa = 33.60; 


const tenHourBd = oneHourBd * 10;
const tenHoursFd = oneHoursFd * 10;
const tenHourPa = oneHoursPa * 10;

// let finalPride;
 const serviceOne = backendDevelopment = tenHourBd;
 const serviceTwo = frontendDevelopment = tenHoursFd;
 const serviceThree = projectAnalysis = tenHourPa;
 console.log(tenHourPa);
 
 let finalPride;
 if(backendDevelopment === serviceOne){
    finalPride = `serviceOne`;
 }else if(frontendDevelopment === serviceTwo){
    console.log(frontendDevelopmen);
 }else if(projectAnalysis === serviceThree){

 }

// if(moltiplyOne){
//     console.log("moltiplyOne");
// }else if(workingHoursFd){
//     console.log("workingHoursFd");
// }else if(workingHoursPa){

// }

const requestQuote = document.getElementById("request-quote");
const workSelect = document.getElementById("work");
const finalPrideSelection = document.getElementById("finalPride")
// console.log(finalPride);

requestQuote.addEventListener("submit", handleresquestQuote);
console.log(requestQuote);

function handleresquestQuote(event){
    event.preventDefault();
    const work = workSelect.value;
    const finalPride = finalPrideSelection.value;
    console.log(finalPride);

}