function iniciarCarregamento() {
  const barra = document.getElementById("barra");
  const porcentagem = document.getElementById("porcentagem");
  const tela = document.getElementById("tela-carregamento");
  const conteudo = document.getElementById("conteudo-site");

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

window.addEventListener("pageshow", function (event) {
  const tela = document.getElementById("tela-carregamento");
  const conteudo = document.getElementById("conteudo-site");
  const jaCarregado = sessionStorage.getItem("jaCarregado");

  if (event.persisted || jaCarregado) {
    // Página veio do cache (navegador voltou)
    // Exibe o conteúdo direto, sem carregamento
    if (tela && conteudo) {
      tela.style.display = "none";
      conteudo.style.display = "block";
    }
  } else {
    // Página carregada normalmente pela primeira vez
    iniciarCarregamento();
  }
});
