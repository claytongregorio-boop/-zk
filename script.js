document.addEventListener('DOMContentLoaded', () => { 
  const btnTema = document.getElementById('btnTema');
  const btnAumentar = document.getElementById('btnAumentarFonte'); 
  const btnDiminuir = document.getElementById('btnDiminuirFonte'); 
  let tamanhoFonte = 16;

  // Aumentar / Diminuir Fonte (Acessibilidade)
  if (btnAumentar && btnDiminuir) { 
    btnAumentar.addEventListener('click', () => { 
      if (tamanhoFonte < 26) {
        tamanhoFonte += 2;
        document.documentElement.style.fontSize = `${tamanhoFonte}px`;
      }
    });

    btnDiminuir.addEventListener('click', () => { 
      if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.documentElement.style.fontSize = `${tamanhoFonte}px`;
      }
    });
  }

  // Alternar Modo Claro / Escuro 
  if (btnTema) {
    btnTema.addEventListener('click', () => { 
      document.body.classList.toggle('light-mode');
      btnTema.textContent = document.body.classList.contains('light-mode')
        ? '☀ Modo Claro'
        : '🌙 Modo Escuro';
    });
  }
});