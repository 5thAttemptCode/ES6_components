const slides = document.querySelectorAll(".slide")
let currentSlide = 0

function visibleSlide(index){
    slides.forEach((slide, i) => {
        const slideWidth = slide.clientWidth
        slide.style.transform = `translateX(-${index * slideWidth}px)`
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