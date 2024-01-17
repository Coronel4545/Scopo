

  const Dinamico = document.getElementById('Apresent');

  setInterval(function() {
    
    const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);

    
    Dinamico.style.color = corAleatoria;
  }, 1); 

