console.log("ciao");

const oneHourBd = 20.50;
const oneHoursFd = 15.30;
const oneHoursPa = 33.60;


// const backendDevelopment = 20.50;
// const frontendDevelopment = 15.30;
// const projectAnalysis = 33.60;

// const backendDevelopment = parseInt(backendDevelopmentStr);
// const frontendDevelopment = parseInt(frontendDevelopmentStr);
// const projectAnalysis = parse(projectAnalysisStr)

// let discount = 0;
// if(YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24) {
//     discount = 35;
// }

const codeDiscount1 = YHDNU32;
const codeDiscount2 = JANJC63;
const codeDiscount3 = PWKCN25;
const codeDiscount4 = SJDPO96;
const codeDiscount5 = POCIE24;

let discount = 0;
if(YHDNU32){
    discount = 35;
}else if(JANJC63){
    discount = 35;
}else if(PWKCN25){
    discount = 35;
}else if(SJDPO96){
    discount = 35;
}else if(POCIE24){
    discount = 35;
}else (invalid){
    disocunt = 0;
}



const requestQuote = document.getElementById("request-quote");
const workSelect = document.getElementById("work");

requestQuote.addEventListener("submit", handleresquestQuote);

function handleresquestQuote(event){
    event.preventDefault();
    const work = workSelect.value;
    
}