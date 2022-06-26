// Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
    contentInner = document.querySelector('.promo__inner'),
    overlay = document.querySelector('.overlay');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function openModal() {
    overlay.classList.add('show');
    overlay.classList.remove('hide');
    overlay.style.overflow = 'auto';
    contentInner.style.display = 'none';
    document.body.style.overflow = 'hidden';
}


function closeModal() {
    overlay.classList.add('hide');
    overlay.classList.remove('show');
    contentInner.style.display = 'flex';
    document.body.style.overflow = '';
}

overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.getAttribute('data-close') == "") {
        closeModal();
    }
});