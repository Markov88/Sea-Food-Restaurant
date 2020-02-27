
const divSlides = document.querySelectorAll('.slide');
const viewGallery = document.querySelector('.viewGallery');
let track = document.querySelector('.track_carousel');
let arrr = [];
let indexTr
function arrDivSlidesForEach (func) {
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
arrDivSlidesForEach(imagesHover);

function addBtns (img, btns) {
    btns = document.createElement('p')
    btns.textContent = 'View'
    img.appendChild(btns).classList.add('imgButton')

    btns.addEventListener('click', (e) => {
        viewGallery.style.zIndex = '99999'
        viewGallery.style.opacity = '1'
        e.target.parentElement.children[0].classList.add('currentSlide');

        arrr.forEach((e) => {
            if (e.classList.contains('currentSlide')) {
                indexTr = arrr.indexOf(e)

            }
        });

        slidersFunc()

        e.target.parentElement.children[0].classList.remove('currentSlide');
    });

}
arrDivSlidesForEach(addBtns);


viewGallery.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        viewGallery.style.zIndex = '-99999';
        viewGallery.style.opacity = '0';

        const p = Array.from(track.children);
        p.forEach((slide) => {
            if (slide.classList.contains('currentSlide')) {
                slide.classList.remove('currentSlide');
            }
            slide.removeAttribute('style');
        })
        track.removeAttribute('style');

    }
})



function cloneImages (img, createLi) {
    arrr.push(img.children[0]);

    createLi = document.createElement('li');
    if (img.children[0].classList.contains('currentSlide')) {
        createLi.classList.add('currentSlide');
        img.children[0].classList.remove('currentSlide');
    }

    if (track.childNodes.length < 16) {
        const cloneImg = img.children[0].cloneNode(true);
        createLi.appendChild(cloneImg);
        track.appendChild(createLi).classList.add('carousel_slide');
    }
}
arrDivSlidesForEach(cloneImages)

// ----SLIDERS---

function slidersFunc () {
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.right');
    const prevBtn = document.querySelector('.left');
    const slideWidth = slides[0].getBoundingClientRect().width

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
        if (index === indexTr) {
            slide.classList.add('currentSlide')
        }
    };
    slides.forEach(setSlidePosition);

    track.style.transform = 'translateX(-' + slideWidth * indexTr + 'px' + ')';

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('currentSlide');
        targetSlide.classList.add('currentSlide');
    };

    prevBtn.addEventListener('click', e => {
        const currentSlide = track.querySelector('.currentSlide');
        const prevSlide = currentSlide.previousElementSibling;
        if (prevSlide){
            moveToSlide(track, currentSlide, prevSlide)
    }
    });

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
  
});
}