
  

  const cartelaDiv = document.getElementById('Cartela');

  for (let i = 1; i <= 300; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.className = 'button';
    cartelaDiv.appendChild(button);
  }
