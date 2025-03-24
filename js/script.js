console.log("ciao");
205

/*
esecuzione logica

1. Assegnare l'importo base di 1h al servizio 
2. trovare l'importo totale in base al servizio richiesto delle ore lavorative
3. 
*/


//Prezzo servizio 1h
const oneHourBd = 20.50;
const oneHoursFd = 15.30;
const oneHoursPa = 33.60; 

//calcolo prezzo servizio 10h
const servicePriceBack = oneHourBd * 10;
console.log(servicePriceBack);
const servicePriceFront = oneHoursFd * 10;
console.log(servicePriceFront);
const servicePriceAnalysisProject = oneHoursPa * 10;
console.log(servicePriceAnalysisProject);

let YHDNU32;
 YHDNU32 = 153 - (153 * 25 / 100) ;
 YHDNU32 = 205 * 25 / 100;
// const preventiveButton = document.getElementById("preventive-button");
// console.log("preventiveButton");

const requestQuote = document.getElementById("request-quote");
console.log("requestQuote");
const nameInput = document.getElementById("name");
console.log(nameInput);
const serviceSelect = document.getElementById("service");
console.log(serviceSelect);

const messageElement = document.getElementById("message");
console.log(message);


const prideElement = document.getElementById("pride");
console.log(prideElement);

requestQuote.addEventListener("submit", handlerequestQuote);

function handlerequestQuote(event){
    event.preventDefault();
    console.log("request-quote");
    const name = nameInput.value;
    const service = serviceSelect.value;
    console.log(service);

    let messageClass;
    if(service === `frontend development`){
        messageClass = "205";
    }else if(service === `backend development`){
        messageClass = "153";
    }else if(service === `project analysis`){
        messageClass = "336";
    }

    let codeClass;
    if(code === `YHDNU32`){
        codeClass = 25;
    }else if(code === `0`){

    }
    console.log(codeClass);
    
    console.log(messageClass);
    const YHDNU32 = messageClass - (messageClass * 25 / 100);
    console.log(YHDNU32);
    
    
    const finalPrice = messageClass - (messageClass * 25 / 100);
    console.log(finalPrice);
    

    messageElement.classList.add(messageClass);
    messageElement.innerText = `€ ${messageClass} ${finalPrice}`;

    
}
