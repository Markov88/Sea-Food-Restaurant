
const divDisplay = document.createElement('div');
divDisplay.setAttribute('class', 'display_contacts');

document.body.appendChild(divDisplay);
contacts.addEventListener('click', () => {
     
    divDisplay.classList.add('displayy_contacts');
    const formDisplay = document.querySelector('.contacts_form')
    formDisplay.style.display = 'block';
})

displayOut.addEventListener('click', () => {
         display.classList.remove('displayy_contacts');
    formDisplay.style.display = 'none';
})




........