function pesquisar(){
   
let section = document.getElementById ("resultados-pesquisa");
//console.log(section);

let campoPesquisa = document.getElementById ("campo-pesquisa").value
//console.log(campoPesquisa);

//validar se a pesquisa esta em branco 
if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo para a pesquisa.</p>"
    return
};

//transformando o resultado do campo pesquisa para minisculo
campoPesquisa = campoPesquisa.toLowerCase()

//inicializar uma string vazia 
let resultados = "";
//declarando as variaveis de titulo e descrição
let titulo = ""
let descricao = ""
let tags = ""


// para cada dado dentro da lista de dados 
for (let dado of dados){
    
    //atribuir sempre menusculo as variaveis 
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // || é igual a ou
   if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento 
        resultados += `
        <div class="item-resultado">
             <h2>
                    <a href "#" target="_blank">${dado.titulo}</a>
             </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.Link} target="_blank">Mais informações</a>
           </div>
    
    `   

    }
     
    
}
//se o resultado for vazio nada encontrado
if(!resultados){ resultados = "<p>Nada foi encontrado</p>"} 
//atribui resultados a seção HTMML
section.innerHTML = resultados 
}
//console.log(dados);


