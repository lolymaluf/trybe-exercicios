/* Exercicio 01 */
let novoH1 = document.createElement('h1');
novoH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(novoH1);

/* exercicio 02 */
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

/* Exercicio 03 */
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

/* Exercicio 04 */
let p1 = document.createElement('p');
p1.innerText = 'Paragrafo escrito alguma coisa';
section.appendChild(p1);

/* Exercicio 05 */
let sectionL = document.createElement('section');
section.className = 'left-content';
main.appendChild(sectionL);

/* Exercicio 06 */
let sectionR = document.createElement('section');
section.className = 'right-content';
main.appendChild(sectionR);

/* Exercicio 07 */
let image = document.createElement('img');
section.className = 'small-image';
image.src = 'https://picsum.photos/200'
sectionL.appendChild(image);

/* Exercicio 08 */
let lista = document.createElement('ul');
sectionR.appendChild(lista)
let itensLista = document.createElement('li')
itensLista.innerText ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'] ;
lista.appendChild(itensLista)

/* Exercicio 09 */
function createElement(titulos) {
    let tituloh3 = document.createElement('h3')
    tituloh3.classList = titulos
}
main.appendChild(createElement('h3-1'))
main.appendChild(createElement('h3-2'))
main.appendChild(createElement('h3-3'))
/* 
let h31 = document.createElement('h3');
h31.innerText = 'h3 - 1';
main.appendChild(h31);

let h32 = document.createElement('h3');
h32.innerText = 'h3 - 2';
main.appendChild(h32);

let h33 = document.createElement('h3');
h33.innerText = 'h3 - 3';
main.appendChild(h33); */