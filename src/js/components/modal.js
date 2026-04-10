export function modal() {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openSignInBtn');
  const closeBtn = document.getElementById('closeSignInModal');

  if (!modal || !openBtn || !closeBtn) return;

  function openMenu() {
    modal.classList.remove('close');
    modal.classList.add('open');
  }

  function closeMenu() {
    modal.classList.remove('open');
    modal.classList.add('close');
  }

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}