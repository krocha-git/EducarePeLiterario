// console.log(contos);

function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa") // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let campoPesquisa = document.getElementById("campo-pesquisa").value  

    // Se o campo pesquisa estiver vazio interrompe a função
    if (campoPesquisa == "")
    {
        section.innerHTML = `
            <H3>Esse site não faz Abracadabra. Informe no campo ao menos uma palavra</H3>
            <img src="Figuras/VarinhaCondãoRight.jpg" alt="Imagem de uma varinha" class="imagemvarinha">
            <button type="submit" onclick="nova_pesquisa()" class="Apagar">Nova Pesquisa</button>
        `
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    let pesquisa = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let titulow = "";
    let descrilow = "";
    let autorlow = "";
    let taglow = "";

    // Itera sobre cada conto na lista de contos e constrói o HTML para cada item de resultado
    for (let conto of contos)
    {
        titulow = conto.titulo.toLowerCase()
        descrilow = conto.descricao.toLowerCase()
        autorlow = conto.autoria.toLowerCase()
        taglow = conto.tags.toLowerCase()
        // Se titulo include campoPesquisa então faça...
        if (titulow.includes(campoPesquisa) || descrilow.includes(campoPesquisa)
         || autorlow.includes(campoPesquisa) || taglow.includes(campoPesquisa))
        {
            // cria um novo elemento
            pesquisa += `
            <div class="item-resultado">
                <h2>${conto.titulo}</h2>
                <p class="descricao-meta">${conto.descricao}</p>
                <p class="autor-meta">${conto.autoria}</p>
                <a href=${conto.link} target="_blank"> Mais informações nesse link </a>
                <button type="submit" onclick="nova_pesquisa()" class="ApagarPesquisa">Nova Pesquisa</button>
            </div>
        `
        }
    }

    // Se nada for encontrado
    if (!pesquisa) {
        pesquisa = `
        <H3>Oh meu jovem aprendiz. Esse conto ainda não consta aqui!</H3>
        <img src="Figuras/ChapeuTriste.jpg" alt="Imagem de um chapéu" class="imagemchapeu">
        <button type="submit" onclick="nova_pesquisa()" class="Apagar">Nova Pesquisa</button>
        `
    }

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = pesquisa
}

function nova_pesquisa(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.querySelector('input[type="text"]');
    section.innerHTML = "";
    campoPesquisa.value = "";
}