const modal = document.getElementById('video-modal');
const videoElement = document.getElementById('modal-video');

function openModal(videoSrc) {
    if (!modal || !videoElement) return;
    videoElement.querySelector('source').src = videoSrc;
    videoElement.load();
    modal.classList.add('isOpen');
}

function closeModal() {
    if (!modal || !videoElement) return;
    modal.classList.remove('isOpen');
    videoElement.pause();
    videoElement.currentTime = 0;
}

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

function initModalClose() {
    if (!modal) return;

    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
}

export function video() {
    initVideoButtons();
    initModalClose();
}