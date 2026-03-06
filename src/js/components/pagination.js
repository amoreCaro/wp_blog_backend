let currentPage = 0;

function togglePrevBtn(maxPages) {
    const prevBtn = document.querySelector(".pagination__btn--prev");

    if (!prevBtn) return;

    if (currentPage === 0) {
        prevBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
    }
}

function toggleNextBtn(maxPages) {
    const nextBtn = document.querySelector(".pagination__btn--next");

    if (!nextBtn) return;

    if (currentPage === maxPages - 1) {
        nextBtn.classList.add("hidden");
    } else {
        nextBtn.classList.remove("hidden");
    }
}

function updatePagination() {
    const pages = document.querySelectorAll(".pagination__page");
    const maxPages = pages.length;

    pages.forEach(page => {
        page.classList.remove("pagination__page--active");
    });

    if (pages[currentPage]) {
        pages[currentPage].classList.add("pagination__page--active");
    }

    togglePrevBtn(maxPages);
    toggleNextBtn(maxPages);
}

export function pagination() {
    updatePagination();
}