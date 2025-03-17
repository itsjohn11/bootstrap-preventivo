console.log("ciao");


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

const requestQuote = document.getElementById("request-quote");
const workSelect = document.getElementById("work");
const finalPrideSelection = document.getElementById("finalPride")

requestQuote.addEventListener("submit", handleresquestQuote);
console.log(requestQuote);

function handleresquestQuote(event){
    event.preventDefault();
    const work = workSelect.value;
    /* 
    Se il cliente sceglie il (backend), il prezzo sarà di 20.50/h * 10/h = € 205 
    altrimenti
    Se il cliente sceglie il frontend, il prezzo sarà di 15.30/h * 10/h = € 153 
    altrimenti
    Se il cliente sceglie il analisi progettuale, il prezzo sarà di 33.60/h * 10/h = € 336
    se utilizza 1 dei 5 codici sconto validi viene applicato uno sconto del 25% sul prezzo finale
    altrimenti
    se inserisce dei codici sconti non validi non verrà calcolato nessuno sconto
    */

    if(work === `backendDevelopment`){
        console.log(servicePriceBack);
    }else if(work === `frontendDevelopment`){
        console.log(servicePriceFront);
    }else if(work === `AnalysisProjec`){
        console.log(servicePriceAnalysisProject);
    }

    let discount = 0;
    if(code === "YHDNU32"){
        discount = 25;
    }
    
   let finalPride;
   finalPride = work - (servicePriceBack * discount / 100);
    
}
console.log(finalPride);
console.log(code);
