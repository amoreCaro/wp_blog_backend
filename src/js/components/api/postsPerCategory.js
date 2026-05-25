export function postsPerCategory() {
    const input = document.querySelector(".api__posts-per-category");
    const incrementBtn = document.querySelector(".api__button--increment");
    const decrementBtn = document.querySelector(".api__button--decrement");

    if (!input || !incrementBtn || !decrementBtn) return;

    const MIN = Number(input.min ?? 1);

    function getValue() {
        const v = parseInt(input.value, 10);
        return Number.isNaN(v) ? MIN : v;
    }

    function setValue(value) {
        input.value = value;

        // 🔥 тільки повідомляємо систему що значення змінилось
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    incrementBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setValue(getValue() + 1);
    });

    decrementBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setValue(Math.max(MIN, getValue() - 1));
    });
}