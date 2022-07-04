const faq = document.querySelectorAll('.faq__item');

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', () => {
    faq[i].classList.toggle('faq__item_active');
  });
};