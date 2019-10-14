const contacts = document.getElementById('heading_footer_contacts');
const display = document.querySelector('.display_contacts');
const displayOut = document.querySelector('.display_heading');
const formDisplay = document.querySelector('.contacts_form');

contacts.addEventListener('click', () => {
    display.style.zIndex = '99999';
    display.style.opacity = '.97'
})
displayOut.addEventListener('click', () => {
    display.style.zIndex = '-99999';
    display.style.opacity = '0'
})