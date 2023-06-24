const form = document.getElementById('formC');
const numeros = [];
const nomes = [];


let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinhas();
})
function adicionalinhas(){
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');

    if(numeros.includes(numero.value)){
        alert(`o numero: ${numero.value} ja foi inserido.`)
    }
    else{
        numeros.push(numero.value);
        nomes.push(nome.value);

    let linha = '<tr>';
    linha+=`<td> ${nome.value}</td>`;
    linha+=`<td> ${numero.value}</td>`;
    linha+='</tr>';

    linhas+=linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;

}}

