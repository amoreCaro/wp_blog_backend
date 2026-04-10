export function loginInit() {

    const loginForm = document.querySelector('.form-login');
    if (!loginForm) return;

    const submit = loginForm.querySelector('button[type="submit"]');

    const successMsg = loginForm.querySelector('.popup-success');
    const errorMsg = loginForm.querySelector('.popup-error');
    const errorText = loginForm.querySelector('.popup-error__text');

    loginForm.addEventListener('input', (e) => {
        if (e.target.matches('.form__input, .form__input-checkbox')) {
            e.target.classList.remove('invalid');
        }
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = loginForm.querySelectorAll(
            '.form__input, .form__input-checkbox'
        );

        let valid = true;

        inputs.forEach(input => {

            if (input.classList.contains('form__input-checkbox')) {
                input.classList.remove('invalid');

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
                action: 'login_user',

                username: loginForm.querySelector('.form__input-username')?.value || '',
                password: loginForm.querySelector('.form__input-password')?.value || '',
                remember: loginForm.querySelector('.form__input-checkbox')?.checked ? '1' : '0',

                nonce: theme.nonce_login || ''
            })
        })
        .then(res => res.json())
        .then(data => {

            if (data.success) {

                successMsg.classList.remove('hidden');
                errorMsg.classList.add('hidden');

                setTimeout(() => {
                    window.location.reload();
                }, 800);

            } else {

                successMsg.classList.add('hidden');
                errorMsg.classList.remove('hidden');

                errorText.textContent = data?.data?.message || 'Login failed';

                submit.disabled = false;
            }
        })
        .catch(err => {
            console.error(err);

            successMsg.classList.add('hidden');
            errorMsg.classList.remove('hidden');
            errorText.textContent = 'Server error';

            submit.disabled = false;
        });
    });
}