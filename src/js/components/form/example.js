function resendForm() {
  const form = document.querySelector('.form-resend');
  const preloader = document.querySelector('.preloader');

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const resend = form.querySelector('button[type="submit"]');
    const redirect = form.querySelector('.form-control-redirect')?.value  '/';
    const back = form.querySelector('.form-control-back')?.value  '/';
    const messageEl = form.querySelector('.form-message');
    const email = form.querySelector('.form-control-email')?.value  '';
    preloader.classList.add('show');

    resend.disabled = true;

    fetch(theme.ajax_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            action: "register_user",
            username: form.querySelector('.form__input-username')?.value || '',
            email: form.querySelector('.form__input-email')?.value || '',
            password: form.querySelector('.form__input-password')?.value || '',
            nonce: theme.nonce
        })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {

          setTimeout(() => {
            if (redirect) {
              preloader.classList.remove('show');
              window.location.href = redirect;
            }
          }, 1000);

        } else {
          messageEl.style.color = 'red';
          messageEl.textContent = data.data.message  'An error occurred.';
          resend.disabled = false;
        }
      })
      .catch(err => {
        console.error(err);
        messageEl.style.color = 'red';
        messageEl.textContent = 'Network error. Please try again.';
        resend.disabled = false;
      });
  });
}

function signForm() {
  const forms = document.querySelectorAll('.custom-insurer-form, .custom-insurtech-form');

  forms.forEach(form => {
    const submit = form.querySelector('button[type="submit"]');

    // знімати помилку під час вводу
    form.addEventListener('input', (e) => {
      if (e.target.matches('.form-control, .form-control-checkbox')) {
        e.target.classList.remove('invalid');
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll('.form-control, .form-control-checkbox');
      let valid = true;

      inputs.forEach(input => {
        if (input.classList.contains('form-control-checkbox')) {
          // ✅ перевірка для чекбоксів
          if (!input.checked) {
            input.classList.add('invalid');
            valid = false;
          } else {
            input.classList.remove('invalid');
          }
        } else {
          // ✅ перевірка для звичайних інпутів
          const value = input.value.trim();
          if (!value) {
            input.classList.add('invalid');
            valid = false;
          } else {
            input.classList.remove('invalid');
          }
        }
      });

      if (!valid) return;

      submit.disabled = true; 
      // Використовуємо безпечний виклик на випадок, якщо є name="submit"
      form.submit();
    });
  });
}

export async function sign() {
  resendForm();
  signForm();
}