

function xadrez(peca){
peca=peca.toUpperCase();

switch(peca){
    case "RAINHA":console.log("Diagonal,Vertical e Horizontal");
        break;
    case "TORRE":console.log("Horizontal e vertical");
        break;
    case "PEAO":console.log("Apenas horizontal pra frente, apenas uma casa por vez e duas se for o primeiro ovimento dele.");
        break;
    case "BISPO":console.log("Apenas Diagonais");
        break;
    case "CAVALO":console.log("Sempre em L");
        break;  
    case "REI":console.log("Todas as direçoes mas apenas uma casa");
        break;
    default : console.log("DIgite um valor valido");
        break;         
}
}