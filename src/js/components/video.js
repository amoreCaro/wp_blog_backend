const modal = document.getElementById('video-modal');
const videoElement = document.getElementById('modal-video');

/** Відкриття модала з відео */
function openModal(videoSrc) {
    if (!modal || !videoElement) return;
    videoElement.querySelector('source').src = videoSrc;
    videoElement.load();
    modal.classList.add('isOpen');
}

/** Закриття модала */
function closeModal() {
    if (!modal || !videoElement) return;
    modal.classList.remove('isOpen');
    videoElement.pause();
    videoElement.currentTime = 0;
}

/** Ініціалізація кнопок відтворення відео */
function initVideoButtons() {
    const buttons = document.querySelectorAll('.post__video-play-button');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        if (btn.dataset.init) return;
        btn.dataset.init = 'true';

        btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            const src = btn.closest('.post-main-video')?.querySelector('video source')?.src;
            if (!src) return;
            openModal(src);
        });
    });
}

/** Ініціалізація закриття модала */
function initModalClose() {
    if (!modal) return;

    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
}

/** Експортована функція для старту відео-модала */
export function video() {
    initVideoButtons();
    initModalClose();
}