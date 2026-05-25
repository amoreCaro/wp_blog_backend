export function multiSelect() {

    const container = document.querySelector('.api__multiselect');
    if (!container) return;

    const trigger = container.querySelector('.api__multiselect-trigger');
    const chips = container.querySelector('.api__multiselect-chips');
    const dropdown = container.querySelector('.api__multiselect-dropdown');
    const select = document.getElementById('api__category');
    const placeholder = container.querySelector('.api__multiselect-placeholder');
    const arrow = container.querySelector('.api__multiselect-arrow');

    const template = document.querySelector('#chip-template');

    let selected = [];

    function open() {
        dropdown.classList.add('open');
        trigger.classList.add('open');
        arrow.classList.add('open');
    }

    function close() {
        dropdown.classList.remove('open');
        trigger.classList.remove('open');
        arrow.classList.remove('open');
    }

    function toggle() {
        dropdown.classList.contains('open') ? close() : open();
    }

    function syncSelect() {
        if (!select) return;

        select.querySelectorAll('option').forEach(opt => {
            opt.selected = selected.includes(opt.value);
        });
    }

    function updateOptions() {
        container.querySelectorAll('.api__multiselect-option').forEach(option => {
            option.classList.toggle('selected', selected.includes(option.dataset.slug));
        });
    }

    function render() {
        chips.innerHTML = '';

        if (selected.length === 0) {
            chips.appendChild(placeholder);
            return;
        }

        selected.forEach(slug => {
            const option = container.querySelector(`[data-slug="${slug}"]`);
            const name = option?.dataset.name || slug;

            const chipNode = template
                .querySelector('.api__multiselect-chip')
                .cloneNode(true);

            const text = chipNode.querySelector('.api__multiselect-chip-name');
            const removeBtn = chipNode.querySelector('.api__multiselect-chip-remove');

            text.textContent = name;
            removeBtn.dataset.slug = slug;

            chips.appendChild(chipNode);
        });
    }

    function toggleItem(slug) {
        if (selected.includes(slug)) {
            selected = selected.filter(i => i !== slug);
        } else {
            selected.push(slug);
        }

        syncSelect();
        updateOptions();
        render();
    }

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle();
    });

    dropdown.addEventListener('click', (e) => {
        const option = e.target.closest('.api__multiselect-option');
        if (!option) return;

        toggleItem(option.dataset.slug);
    });

    chips.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        e.stopPropagation();
        toggleItem(btn.dataset.slug);
    });

    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) close();
    });

    render();
}