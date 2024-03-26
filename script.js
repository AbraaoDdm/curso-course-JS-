//caso var
// js é uma linguagem dinamica, signifca q n precisa declarar o tipo de variavel ex: num 3234

//var altura =5;
//var comprimento=6;

//area = altura * comprimento; // você n precisa declarar a varivel, mas por organização é bom, tbm pode declarar ela mais tarde
//ex:var area


//caso let


//let forma = 'retangulo';
//let comprimento = 7;
//let altura = 6;
//let area 

//if (forma === 'retangulo' ) {
    //area = altura * comprimento;  // let é mais frexivel 
//} else {
//    area = (altura * comprimento) / 2; 
//}


// caso const
// a const é permanente 

const forma = 'triangulo';
const altura = 4;
const comprimento = 2;
let area;   //diferente da const let tem valores flexiveis // a var n tem sido tão ultilizada por ser muito flexivel e é muito propensa a bugs
//const area; //uma const tem que ter valor  

if (forma === 'quadrado ') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) /2
}
console.log(area)