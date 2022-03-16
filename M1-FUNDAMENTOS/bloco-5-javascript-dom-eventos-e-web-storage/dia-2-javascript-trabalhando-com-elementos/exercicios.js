/* Exercicio 01 */
let novoH1 = document.createElement('h1');
novoH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(novoH1);

/* exercicio 02 */
let main1 = document.createElement('main');
main1.className = 'main-content';
document.body.appendChild(main1);

/* Exercicio 03 */
let section1 = document.createElement('section');
section1.className = 'center-content';
main1.appendChild(section1);

/* Exercicio 04 */
let p1 = document.createElement('p');
p1.innerText = 'Paragrafo escrito alguma coisa';
section1.appendChild(p1);

/* Exercicio 05 */
let sectionL = document.createElement('section');
sectionL.className = 'left-content';
main1.appendChild(sectionL);

/* Exercicio 06 */
let sectionR = document.createElement('section');
sectionR.className = 'right-content';
main1.appendChild(sectionR);

/* Exercicio 07 */
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200'
sectionL.appendChild(image);

/* Exercicio 08 */
let lista = document.createElement('ul');
let numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for(let index in numeros){
    let itensLista = document.createElement('li')
    itensLista.innerText = numeros[index]
    lista.appendChild(itensLista)}
    
sectionR.appendChild(lista)

/* Exercicio 09 */
function createElement(titulos) {
    let tituloh3 = document.createElement('h3')
    tituloh3.classList = 'titulos'
    return tituloh3
}
main1.appendChild(createElement('h3-1'))
main1.appendChild(createElement('h3-2'))
main1.appendChild(createElement('h3-3'))
