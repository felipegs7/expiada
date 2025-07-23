
document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("visited")) {
    const loader = document.getElementById("tela-carregamento");
    const bar = document.getElementById("barra");
    let width = 0;
    let interval = setInterval(() => {
      width += 1;
      bar.style.width = width + "%";
      if (width >= 100) {
        clearInterval(interval);
        loader.innerHTML = "<h2>Bem-vindo à Expiada!</h2>";
        setTimeout(() => {
          loader.style.display = "none";
          sessionStorage.setItem("visited", "true");
        }, 1200);
      }
    }, 15);
  } else {
    const loader = document.getElementById("tela-carregamento");
    if (loader) loader.style.display = "none";
  }
});
