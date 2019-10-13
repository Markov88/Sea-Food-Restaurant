const contacts = document.getElementById('heading_footer_contacts');
const display = document.querySelector('.display_contacts');
const displayOut = document.querySelector('.display_heading');
const formDisplay = document.querySelector('.contacts_form');

contacts.addEventListener('click', () => {
    display.classList.add('displayy_contacts');
    displayOut.style.visibility = 'visible';
    formDisplay.style.display = 'block';
})
displayOut.addEventListener('click', () => {
    display.classList.remove('displayy_contacts');
    formDisplay.style.display = 'none';
})