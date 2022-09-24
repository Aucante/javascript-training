let bouton = document.querySelector('#mode');
let span = document.querySelector('span');
let body = document.querySelector('body');

if (localStorage.getItem('theme')) {
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
} 
  bouton.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      span.innerHTML = 'Thème sombre';
      localStorage.setItem('theme', 'clair');
    } else {
      modeSombre();
    }
  });
  
  function modeSombre() {
    body.classList.add('dark');
    span.innerHTML = 'Thème clair';
    localStorage.setItem('theme', 'sombre');
  }


