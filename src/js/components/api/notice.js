export function notice() {
  const stack = document.querySelector('.notice-stack');
  if (!stack) return;

  const items = stack.querySelectorAll('.notice__item');

  function show(item, message = '') {
    const text = item.querySelector('.notice__text');

    if (text && message) {
      text.innerHTML = text.innerHTML.replace(/—.*$/, `— ${message}`);
    }

    item.classList.remove('is-hidden'); 

    requestAnimationFrame(() => {

    });

    // автоховання
    setTimeout(() => {
      hide(item);
    }, 4000);
  }

  function hide(item) {
    item.classList.add('is-hidden');
  }

  function bindClose(item) {
    const btn = item.querySelector('.notice__btn');

    btn?.addEventListener('click', () => {
      hide(item);
    });
  }

  function init() {
    items.forEach((item) => {
      bindClose(item);
      item.classList.add('is-hidden');
    });
  }

  init();


  window.noticeShow = function (type, message) {
    const item = document.querySelector(`.notice__item--${type}`);
    if (!item) return;

    show(item, message);
  };
}