document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs
    const nome = document.querySelector("#nome").value;
    const time = document.querySelector("#time").value;
    const gols = parseInt(document.querySelector("#gols").value);
    const assistencias = parseInt(document.querySelector("#assistencias").value);
    const foto = document.querySelector("#foto").value;
    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(), 
            nome: nome,
            time: time,
            gols: gols,
            assistencias: assistencias,
            foto: foto
        } 
         // Recuperar o array de jogadores do localStorage (ou criar um novo array se estiver vazio)
         const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

         // Adicionar o novo jogador ao array
         jogadores.push(jogador);
 
         // Salvar o array atualizado no localStorage usando a chave "jogadores"
         localStorage.setItem("jogadores", JSON.stringify(jogadores));
 
         // Redirecionar o usuário para a página inicial
         window.location.href = "index.html";
     });


