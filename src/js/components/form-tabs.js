export function formTabs() {
  const links = document.querySelectorAll('.tab__link');
  const tabs = document.querySelectorAll('.tab');

  if (!links.length || !tabs.length) return;

  function setActive(tabName) {
    tabs.forEach(tab => {
      const isTarget = tab.classList.contains(`tab--${tabName}`);

      tab.classList.toggle('hidden', !isTarget);
    });

    links.forEach(link => {
      const isActive = link.dataset.tab === tabName;
      link.classList.toggle('tab__link--active', isActive);
    });
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setActive(link.dataset.tab);
    });
  });

  // default
  setActive('login');
}