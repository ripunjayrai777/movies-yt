let left_btn = doucument.getElementByClassName('bi-chevron-left')[0];
let right_btn = doucument.getElementByClassName('bi-chevron-right')[0];
let cards = document.getElementByClassName('cards')[0];

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollRight += 140;
})