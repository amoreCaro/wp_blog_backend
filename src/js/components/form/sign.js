export function signInit() {
    const registerForm = document.querySelector('.form-register');
    if (!registerForm) return;

    const submit = registerForm.querySelector('button[type="submit"]');

    registerForm.addEventListener('input', (e) => {
        if (e.target.matches('.form__input, .form__input-checkbox')) {
            e.target.classList.remove('invalid');
        }
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = registerForm.querySelectorAll(
            '.form__input, .form__input-checkbox'
        );

        let valid = true;

        inputs.forEach(input => {
            if (input.classList.contains('form__input-checkbox')) {
                if (!input.checked) {
                    input.classList.add('invalid');
                    valid = false;
                } else {
                    input.classList.remove('invalid');
                }
            } else {
                const value = input.value.trim();

                if (!value) {
                    input.classList.add('invalid');
                    valid = false;

                } else if (
                    input.classList.contains('form__input-password') &&
                    value.length < 6
                ) {
                    input.classList.add('invalid');
                    valid = false;

                } else if (
                    input.classList.contains('form__input-email') &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ) {
                    input.classList.add('invalid');
                    valid = false;

                } else {
                    input.classList.remove('invalid');
                }
            }
        });

        if (!valid) return;

        submit.disabled = true;

        fetch('/wp-admin/admin-ajax.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                action: 'register_user',
                username: registerForm.querySelector('.form__input-username')?.value || '',
                email: registerForm.querySelector('.form__input-email')?.value || '',
                password: registerForm.querySelector('.form__input-password')?.value || '',
                agree: registerForm.querySelector('.form__input-checkbox')?.checked ? '1' : '0',
                nonce: theme.nonce_register || ''
            })
        })
        .then(res => res.json())
        .then(data => {
            const successMsg = registerForm.querySelector('.popup-success');
            const errorMsg = registerForm.querySelector('.popup-error');
            const errorText = registerForm.querySelector('.popup-error__text');

            if (data.success) {
                successMsg.classList.remove('hidden');
                errorMsg.classList.add('hidden');

                submit.disabled = true; 
            } else {
                const { message } = data.data;

                errorMsg.classList.remove('hidden');
                successMsg.classList.add('hidden');

                errorText.textContent = message;

                submit.disabled = false;
            }
        })
        .catch(err => {
            console.error(err);
            submit.disabled = false;
        });
    });
}