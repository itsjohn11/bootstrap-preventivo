console.log("ciao");


/*
esecuzione logica

1. Assegnare l'importo base di 1h al servizio 
2. trovare l'importo totale in base al servizio richiesto delle ore lavorative
3. 
*/


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

//Prezzo servizio 1h
const oneHourBd = 20.50;
const oneHoursFd = 15.30;
const oneHoursPa = 33.60; 

//calcolo prezzo servizio 10h
const tenHourBd = oneHourBd * 10;
const tenHoursFd = oneHoursFd * 10;
const tenHourPa = oneHoursPa * 10;

// //codici sconto con const
// const codeDiscountOne =`YHDNU32`;
// console.log(codeDiscountOne);

//codici sconto con let
let codeDiscount;
codeDiscount = `YHDNU32`;
codeDiscount = `JANJC63`;
codeDiscount = `PWKCN25`;
console.log(codeDiscount);



// let finalPride;
 const serviceOne = backendDevelopment = tenHourBd;
 const serviceTwo = frontendDevelopment = tenHoursFd;
 const serviceThree = projectAnalysis = tenHourPa;
 console.log(tenHourPa);
 
 
 if(backendDevelopment === ){
    console.log(`serviceOne`);
 }else if(frontendDevelopment === serviceTwo){
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

// requestQuote.addEventListener("submit", handleresquestQuote);
// console.log(requestQuote);

// function handleresquestQuote(event){
//     event.preventDefault();
//     const work = workSelect.value;
//     const finalPride = finalPrideSelection.value;
//     console.log(finalPride);

// }
