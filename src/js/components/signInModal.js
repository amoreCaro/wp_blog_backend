export function signInModal() {
  const signInModal = document.getElementById('signInModal');
  const openBtn = document.getElementById('openSignInBtn');
  const closeBtn = document.getElementById('closeSignInModal');

  if (!signInModal || !openBtn || !closeBtn) return;

  /** Відкриття меню */
  function openMenu() {
    console.log("click");
    signInModal.classList.add('showSlide');
    document.body.classList.add('overflow-y-hidden');
    
  }

  /** Закриття меню */
  function closeMenu() {
    signInModal.classList.remove('showSlide');
    document.body.classList.remove('overflow-y-hidden');
  }

  /** Клік по кнопці відкриття */
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
  });

  /** Клік по кнопці закриття */
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });

  /** Закриття при кліку поза меню */
  signInModal.addEventListener('click', (e) => {
    if (e.target === signInModal) closeMenu();
  });
}
