const anchorTags = document.querySelectorAll('a')

anchorTags.forEach((e) => e.addEventListener('click', scroll))

function scroll (event) {
    event.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}
const sliders = document.querySelectorAll(".offer_boxes");


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
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
