document.addEventListener('DOMContentLoaded', () => {
  // —————— Contact Modal ——————
  const contactModal      = document.getElementById('contactModal');
  const contactOpenBtns   = document.querySelectorAll('.nav-contact');
  const contactCloseBtn   = contactModal.querySelector('.modal-close');
  const tipoSelect        = document.getElementById('tipoSelect');
  const cvUpload          = document.getElementById('cvUpload');
  const contactForm       = contactModal.querySelector('form');

  // abrir Contact modal desde cualquier .nav-contact
  contactOpenBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      contactModal.classList.add('active');
    });
  });

  // cerrar Contact modal
  contactCloseBtn.addEventListener('click', () => {
    contactModal.classList.remove('active');
  });
  contactModal.addEventListener('click', e => {
    if (e.target === contactModal) contactModal.classList.remove('active');
  });

  // mostrar/ocultar CV upload
  tipoSelect.addEventListener('change', () => {
    cvUpload.style.display = (tipoSelect.value === 'trabajo') ? 'block' : 'none';
  });

  // form submit → mensaje de éxito
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const modalBox = contactModal.querySelector('.modal');
    modalBox.innerHTML = `
      <p style="
        font-family: 'MedievalSharp', cursive;
        font-size: 1.25rem;
        color: var(--color-dark);
        text-align: center;
        margin-bottom: 1.5rem;
      ">
        ¡Mensaje enviado satisfactoriamente!
      </p>
      <button id="successClose" class="btn-submit">Cerrar</button>
    `;
    document.getElementById('successClose')
      .addEventListener('click', () => contactModal.classList.remove('active'));
  });

  // —————— Legal Modal ——————
  const legalModal      = document.getElementById('legalModal');
  const legalOpenBtns   = document.querySelectorAll('.nav-legal');
  const legalCloseBtn   = legalModal.querySelector('#legalClose');

  // abrir Legal modal desde cualquier .nav-legal
  legalOpenBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      legalModal.classList.add('active');
    });
  });

  // cerrar Legal modal
  legalCloseBtn.addEventListener('click', () => {
    legalModal.classList.remove('active');
  });
  legalModal.addEventListener('click', e => {
    if (e.target === legalModal) legalModal.classList.remove('active');
  });
});


  