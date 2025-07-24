// cokies

document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('cookie-popup');
  const btnAceptar = document.getElementById('accept-cookies');

  // Solo mostrar si no se ha aceptado
  if (!localStorage.getItem('cookies-aceptadas')) {
    popup.style.display = 'block';
  }

  btnAceptar.addEventListener('click', () => {
    localStorage.setItem('cookies-aceptadas', 'true');
    popup.style.display = 'none';
  });
});


// menu hamburguesa
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en un enlace (opcional)
    const enlaces = menu.querySelectorAll('a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  } else {
    console.warn('No se encontró el menú o el botón hamburguesa.');
  }
});
