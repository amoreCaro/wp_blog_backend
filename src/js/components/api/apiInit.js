export function apiInit() {
    const form = document.querySelector('.api__form');
    if (!form) return;

    const submit = form.querySelector('.api__btn');
    const limitInput = form.querySelector('.api__posts-per-category');
    const select = form.querySelector('#api__category');

    const fill = document.querySelector('.api__progress-fill');
    const percent = document.querySelector('.api__progress-percent');
    const status = document.querySelector('.api__progress-status');

    const plus = form.querySelector('.api__button--increment');
    const minus = form.querySelector('.api__button--decrement');

    const MAX_POSTS = 100;

    // =========================
    // NOTICES (як signInit стиль)
    // =========================
    const stack = document.querySelector('.notice-stack');

    const errorTpl = stack?.querySelector('.notice__item--error');
    const warningTpl = stack?.querySelector('.notice__item--warning');
    const successTpl = stack?.querySelector('.notice__item--success');

    function showNotice(type, message) {
        let tpl;

        if (type === 'error') tpl = errorTpl;
        if (type === 'warning') tpl = warningTpl;
        if (type === 'success') tpl = successTpl;

        if (!tpl) return;

        const notice = tpl.cloneNode(true);
        notice.classList.remove('is-hidden');

        const text = notice.querySelector('.notice__text');
        if (text) text.innerHTML = message;

        const closeBtn = notice.querySelector('.notice__btn-close');
        closeBtn?.addEventListener('click', () => notice.remove());

        stack.appendChild(notice);

        setTimeout(() => {
            notice.remove();
        }, 4000);
    }

    // =========================
    // PROGRESS UI
    // =========================
    function resetUI() {
        fill.style.width = '0%';
        percent.textContent = '0%';
        status.textContent = 'Ready';
    }

    function setLoading() {
        fill.style.width = '40%';
        status.textContent = 'Loading...';
    }

    function setDone(count) {
        fill.style.width = '100%';
        percent.textContent = '100%';
        status.textContent = `${count} items loaded`;
    }

    function setError(message) {
        status.textContent = message;
        fill.style.width = '0%';
    }

    // =========================
    // HELPERS
    // =========================
    function getSelectedCategories() {
        return [...select.selectedOptions].map(opt => opt.value);
    }

    function getLimit() {
        return parseInt(limitInput.value, 10) || 1;
    }

    function validate() {
        const categories = getSelectedCategories();
        const total = categories.length * getLimit();

        let valid = true;

        if (!categories.length) {
            showNotice('error', 'Select at least one category');
            valid = false;
        }

        if (total > MAX_POSTS) {
            showNotice('warning', `Limit exceeded: ${total}/${MAX_POSTS}`);
            valid = false;
        }

        submit.disabled = !valid;

        if (valid) {
            status.textContent = 'Ready';
        }

        return valid;
    }

    function runValidation() {
        return validate();
    }

    // =========================
    // EVENTS
    // =========================
    plus?.addEventListener('click', () => {
        const next = getLimit() + 1;
        limitInput.value = next;

        const total = getSelectedCategories().length * next;

        if (total > MAX_POSTS) {
            showNotice('warning', `Max limit reached (${MAX_POSTS})`);
        }

        runValidation();
    });

    minus?.addEventListener('click', () => {
        limitInput.value = Math.max(1, getLimit() - 1);
        runValidation();
    });

    select.addEventListener('change', runValidation);
    limitInput.addEventListener('input', runValidation);

    // =========================
    // SUBMIT (MAIN FLOW)
    // =========================
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!runValidation()) return;

        const categories = getSelectedCategories();
        const limit = getLimit();

        const body = new URLSearchParams({
            action: 'theme_get_posts_by_category',
            nonce: apiSyncData.nonce,
            limit,
            page: 1,
            lang: 'en'
        });

        categories.forEach(cat => {
            body.append('categories[]', cat);
        });

        submit.disabled = true;

        resetUI();
        setLoading();

        try {
            const res = await fetch(apiSyncData.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body
            });

            const data = await res.json();

            if (!data.success) {
                const msg = data?.data?.message || 'Error occurred';

                setError(msg);
                showNotice('error', msg);

                return;
            }

            const articles = data?.data?.articles || [];

            setDone(articles.length);
            showNotice('success', `Imported ${articles.length} items`);

        } catch (err) {
            console.error(err);

            setError('Request failed');
            showNotice('error', 'Request failed');

        } finally {
            submit.disabled = false;
        }
    });
}