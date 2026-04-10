export function togglePassword() {
    const buttons = document.querySelectorAll(".toggle-password");

    if (!buttons.length) return;

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const field = btn.closest(".password-field");
            if (!field) return;

            const input = field.querySelector(".form__input-password");
            const showIcon = field.querySelector(".show-icon");
            const hideIcon = field.querySelector(".hide-icon");

            if (!input || !showIcon || !hideIcon) return;

            const isHidden = input.type === "password";

            input.type = isHidden ? "text" : "password";

            showIcon.classList.toggle("hidden", isHidden);
            hideIcon.classList.toggle("hidden", !isHidden);
        });
    });
}