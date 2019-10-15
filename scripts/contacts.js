const contacts = document.getElementById('heading_footer_contacts');
const display = document.querySelector('.display_contacts');


contacts.addEventListener('click', () => {
    display.style.zIndex = '99999';
    display.style.opacity = '.97'
})

display.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        display.style.zIndex = '-99999';
        display.style.opacity = '0'
    }
})