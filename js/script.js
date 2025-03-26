/*
esecuzione logica

1. Assegnare l'importo base di 1h al servizio 
2. trovare l'importo totale in base al servizio richiesto delle ore lavorative
3. definire il codice sconto
4. inserire tutti i dati nel form
5. stampare il prezzo finale 
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

let discount;
discount = `YHDNU32`;
discount = `JANJC63`;


//  YHDNU32 = 205 - (153 * 25 / 100) ;
//  YHDNU32 = 205 * 25 / 100;

const requestQuote = document.getElementById("request-quote");
const nameInput = document.getElementById("name");
const serviceSelect = document.getElementById("service");
const messageElement = document.getElementById("message");


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
    }else if(code === `JANJC63`){
        codeClass = 25;
    }
    const YHDNU32 = messageClass - (messageClass * 25 / 100);
    console.log(YHDNU32);
    
    const finalPrice = messageClass - (messageClass * 25 / 100);
    console.log(finalPrice);


    messageElement.innerText = `€ ${messageClass}`;
}
