export function postVideo() {
    const postCards = document.querySelectorAll(".post-card");

    postCards.forEach((postCard) => {
        const video = postCard.querySelector(".post-card__video");
        const videoIcon = postCard.querySelector(".post-card__video-icon");
        const loading = postCard.querySelector(".post-card__loading");

        if (!video) return;

        let loadingTimeout;
        let playTimeout;

        postCard.addEventListener("mouseenter", () => {
            // reset state
            video.pause();
            video.currentTime = 0;

            // hide icon
            videoIcon?.classList.add("hidden");

            // show loading
            loading?.classList.remove("hidden");

            // after 2 sec → start video
            playTimeout = setTimeout(() => {
                loading?.classList.add("hidden");

                video.play();
            }, 2000);
        });

        postCard.addEventListener("mouseleave", () => {
            // stop everything
            clearTimeout(playTimeout);

            video.pause();
            video.currentTime = 0;

            // reset UI
            videoIcon?.classList.remove("hidden");
            loading?.classList.add("hidden");
        });
    });
}