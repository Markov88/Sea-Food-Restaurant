
const divSlides = document.querySelectorAll('.slide')
const viewGallery = document.querySelector('.viewGallery')


const addBtns = function (img, btns) {
    btns = document.createElement('p')
    btns.textContent = 'View'
    img.appendChild(btns).classList.add('imgButton')
    btns.addEventListener('click', onViewClick)
}

function onViewClick (e) {
    viewGallery.style.zIndex = '99999'
    viewGallery.style.opacity = '.97'

    e.target.parentElement.children[0].classList.add('currentSlide')
    if (e.target.parentElement.children[0].classList.contains('currentSlide')) {
        console.log('xx')
    }
    // e.target.parentElement.children[0].classList.remove('currentSlide')
    x(cloneImages)
    slidersss()
};

const imagesHover = function (imgs) {
    imgs.addEventListener('mouseenter', function () {
        this.children[1].style.opacity = '1'
        this.children[0].style.opacity = '.7'
    })
    imgs.addEventListener('mouseleave', function () {
        this.children[1].style.opacity = '0'
        this.children[0].style.opacity = '1'
    })
};

// Array.from(divSlides).forEach(addBtns);
// Array.from(divSlides).forEach(imagesHover);
// Array.from(divSlides).forEach(imagesHover);
function x (func) {
    Array.from(divSlides).forEach(func)
}
x(addBtns)
x(imagesHover)

function cloneImages (img, createLi) {
    createLi = document.createElement('li')
    if (img.children[0].classList.contains('currentSlide')) {
        img.children[0].classList.remove('currentSlide')
        createLi.classList.add('currentSlide')
    }
    let cloneImg = img.children[0].cloneNode(true)
    createLi.appendChild(cloneImg)

    document.querySelector('.track_carousel').appendChild(createLi).classList.add('carousel_slide')

    console.log(createLi)
}

// ----SLIDERS---
function slidersss () {
    if (Array.from(document.querySelector('.track_carousel').children).length > 0) {

        const track = document.querySelector('.track_carousel')
        const slides = Array.from(track.children)
        const nextBtn = document.querySelector('.carousel_btn.btn_right')
        const prevBtn = document.querySelector('.carousel_btn.btn_left')
        let slideWidth = slides[0].getBoundingClientRect().width

        let setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px'
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left
            currentSlide.classLis.remove('currentSlide');
            targetSlide.classLis.add('currentSlide');
        };

        nextBtn.addEventListener('click', e => {
            const currentSlide = track.querySelector('.currentSlide')
            const nextSlide = currentSlide.nextElementSibling
            moveToSlide(track, current, nextSlide)
        };

        prevBtn.addEventListener('click', e => {
            const currentSlide = track.querySelector('.currentSlide')
            const prevSlide = currentSlide.previousElementSibling
            moveToSlide(track, current, prevSlide)
        });
    }
}

 
