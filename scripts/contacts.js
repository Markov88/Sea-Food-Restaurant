const contacts = document.getElementById('heading_footer_contacts');
const display = document.querySelector('.display_contacts');
const formVisit = document.querySelector('.form_anchor');

contacts.addEventListener('click', () => {
    display.style.zIndex = '99999';
    display.style.opacity = '.97';
})

display.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        display.style.zIndex = '-99999';
        display.style.opacity = '0';
    }
})

formVisit.addEventListener('click', () => {
    display.style.zIndex = '-99999';
    display.style.opacity = '0';
})
