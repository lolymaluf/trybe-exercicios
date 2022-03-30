let lista = document.createElement('ul');
let numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];


for(let index in numeros){
    let itensLista = document.createElement('li')
    itensLista.innerText = numeros[index]
    lista.appendChild(itensLista)
}
    
sectionR.appendChild(lista)