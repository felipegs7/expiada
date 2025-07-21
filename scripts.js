document.addEventListener("DOMContentLoaded", function () {
  const barra = document.getElementById("barra");
  const porcentagem = document.getElementById("porcentagem");
  const tela = document.getElementById("tela-carregamento");
  const conteudo = document.getElementById("conteudo-site");

  // Verifica se já carregou nesta sessão
  const jaCarregado = sessionStorage.getItem("jaCarregado");

  if (jaCarregado) {
    // Já carregou, mostra conteúdo direto
    tela.style.display = "none";
    conteudo.style.display = "block";
  } else {
    // Mostra barra de carregamento normalmente
    let progresso = 0;
    const intervalo = setInterval(() => {
      progresso++;
      barra.style.width = progresso + "%";
      porcentagem.textContent = progresso + "%";

      if (progresso === 100) {
        clearInterval(intervalo);
        porcentagem.textContent = "Bem-vindo(a)!";
        sessionStorage.setItem("jaCarregado", "true");
        setTimeout(() => {
          tela.style.display = "none";
          conteudo.style.display = "block";
        }, 1500);
      }
    }, 30);
  }
});
