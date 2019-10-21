
const divSlides = document.querySelectorAll('.slide');
const viewGallery = document.querySelector('.viewGallery');
const track = document.querySelector('.track_carousel');

function x (func) {
    Array.from(divSlides).forEach(func);
};

// Array.from(divSlides).forEach(addBtns);
// Array.from(divSlides).forEach(imagesHover);

const imagesHover = function (imgs) {
    imgs.addEventListener('mouseenter', function () {
        this.children[1].style.opacity = '1';
        this.children[0].style.opacity = '.7';
    });
    imgs.addEventListener('mouseleave', function () {
        this.children[1].style.opacity = '0';
        this.children[0].style.opacity = '1';
    });
};
x(imagesHover);

function addBtns (img, btns) {
    btns = document.createElement('p')
    btns.textContent = 'View'
    img.appendChild(btns).classList.add('imgButton')

    btns.addEventListener('click', (e) => {
        viewGallery.style.zIndex = '99999'
        viewGallery.style.opacity = '1'
        e.target.parentElement.children[0].classList.add('currentSlide');
        x(cloneImages)
        e.target.parentElement.children[0].classList.remove('currentSlide');
      
        
        slidersFunc()
    });
};
x(addBtns);


viewGallery.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        viewGallery.style.zIndex = '-99999';
        viewGallery.style.opacity = '0';
        deleteChild();
        track.removeAttribute("style")
    }
     
})

function deleteChild () {

    while (track.firstChild) {
        track.removeChild(track.firstChild);
    }
}


function cloneImages (img, createLi) {
    createLi = document.createElement('li');
    if (img.children[0].classList.contains('currentSlide')) {
        createLi.classList.add('currentSlide');
        img.children[0].classList.remove('currentSlide');
    }
    let cloneImg = img.children[0].cloneNode(true);
    createLi.appendChild(cloneImg);
    track.appendChild(createLi).classList.add('carousel_slide');
};

// ----SLIDERS---
function slidersFunc () {

    if (Array.from(track.children).length === 15) {

        const slides = Array.from(track.children);
        const nextBtn = document.querySelector('.right');
        const prevBtn = document.querySelector('.left');
        const slideWidth = slides[0].getBoundingClientRect().width

        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';

        };
        slides.forEach(setSlidePosition);

        let indexCurrent = slides.indexOf(track.querySelector('.currentSlide'));
        track.style.transform = 'translateX(-' + slideWidth * indexCurrent + 'px' + ')';

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('currentSlide');
            targetSlide.classList.add('currentSlide');
        };

        prevBtn.addEventListener('click', e => {
            const currentSlide = track.querySelector('.currentSlide');
            const prevSlide = currentSlide.previousElementSibling;
            moveToSlide(track, currentSlide, prevSlide);

        });

        nextBtn.addEventListener('click', e => {
            const currentSlide = track.querySelector('.currentSlide');
            const nextSlide = currentSlide.nextElementSibling;
            moveToSlide(track, currentSlide, nextSlide);

        });
    }
};
