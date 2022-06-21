const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(elemento => {
    console.log(elemento.nome, elemento.quantidade)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    //Crie variáveis para acessar os valores enviados:
    const nome = evento.target.elements["nome"]
    const quantidade = evento.target.elements["quantidade"]
    
    criaElemento(nome.value, quantidade.value);//função chamando os eventos "nome ,quantidade"
    
    //Refatoração do código para que após o envio de itens, o formulário fique vazio:
    nome.value = ""
    quantidade.value = ""
});
//função cria elemento
function criaElemento(nome, quantidade) {
    // <li class="item"><strong>7</strong>Camisa</li>
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    //criando novo item para Numero strong....
    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = quantidade

    //appendChild manipulando os dados para mostrar a tela..
    novoItem.appendChild(numeroItem)//mandando item camisa branca para html
    novoItem.innerHTML += nome //recebendo item da camisa branca no html
    lista.appendChild(novoItem);

    /*Transforme a variável já criada, itemAtual, em um objeto object que receba os valores de nome e quantidade,
     e transforme os valores estes valores em string:*/
    const itemAtual = {
        "nome": nome, 
        "quantidade": quantidade
    }

    itens.push(itemAtual)//Insira a variável itemAtual nesse array itens, utilizando o método push:

    localStorage.setItem("itens", JSON.stringify(itens));//transformando objeto para uma string no localStorage
}