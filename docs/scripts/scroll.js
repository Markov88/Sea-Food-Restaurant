const anchorTags = document.querySelectorAll('a')

anchorTags.forEach((e) => { e.addEventListener('click', scroll) })

function scroll (event) {
  event.preventDefault()
  if (this.className !== 'menu_a') {
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }
};

const makeReservation = document.querySelector('#makeReservetion');
const reservationHref = document.querySelector('#visit');
makeReservation.addEventListener('click', () => {
  reservationHref.setAttribute('href', '#visit')
  reservationHref.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
  });
});

const sliders = document.querySelectorAll(".offer_boxes");
const homeDiscription = document.querySelector('.discripion_home');
const homeImg = document.querySelector('.discripiton_img');
const tuesdayImg = document.querySelector('.tuesday_img');
const tuesdayContent = document.querySelector('.tuesday_content');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
  appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

appearOnScroll.observe(homeDiscription);
appearOnScroll.observe(homeImg);
appearOnScroll.observe(tuesdayImg);
appearOnScroll.observe(tuesdayContent);

const makeReservationTable = document.querySelector('.open_table');
const menuBoxes = document.querySelectorAll('.conteiner_box')

const appearVerticalOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearVertical = new IntersectionObserver(function (
  entries,
  appearVertical
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appearY");
      appearVertical.unobserve(entry.target);
    }
  });
},
  appearVerticalOptions);

appearVertical.observe(makeReservationTable);
menuBoxes.forEach(boxes => {
  appearVertical.observe(boxes);
});


