const slides = document.querySelectorAll(".slide")
let currentSlide = 0

function visibleSlide(index){
    slides.forEach((slide, i) => {
        if (i === index){
            slide.style.opacity = 1
        } else {
            slide.style.opacity = 0
        }
    })
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    visibleSlide(currentSlide)
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    visibleSlide(currentSlide)
}

visibleSlide(currentSlide)