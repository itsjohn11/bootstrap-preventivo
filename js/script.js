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

//Array servizio e sconto
const service = ["frontend development","backend development","project analysis"];
const discount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


for (let i = 0; i < service.length; i++){
    const curService = service[i];
     console.log(curService);
     
 }

const requestQuote = document.getElementById("request-quote");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const serviceSelect = document.getElementById("service");
const messageElement = document.getElementById("message");
const prideElement = document.getElementById("pride");


requestQuote.addEventListener("submit", handlerequestQuote);

function handlerequestQuote(event){
    event.preventDefault();
    console.log("request-quote");
    const name = nameInput.value;
    const surname = surnameInput.value;
    const email = emailInput.value;
    const service = serviceSelect.value;

    
    let messageClass;
    if(service === `frontend development`){
         messageClass= "205";
    }else if(service === `backend development`){
         messageClass = "153";
    }else if(service === `project analysis`){
        messageClass = "336";
    }

    // let discountClass;
    // if(discount === `YHDNU32`){
    //     discountClass = 25; 
    // }else if(discount === `JANJC63`){
    //     discountClass = 25;
    // }else if(discount === `PWKCN25`){
    //     discountClass = 25; 
    // }else if(discount === `SJDPO96`){
    //     discountClass = 25; 
    // }else if(discount === `POCIE24`){
    //     discountClass = 25;
    // }else if(discount === ``){
    //     discountClass = "";
    // }


    // const discount = messageClass - (messageClass * 25 / 100);
    
    // const finalPrice = messageClass - discountClass;
    // console.log(finalPrice);

    //stampa prezzo su pagina
    messageElement.innerText = `€ ${messageClass}`;
}
