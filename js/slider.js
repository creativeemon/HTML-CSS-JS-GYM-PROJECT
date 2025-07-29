// slider functionality

const sliderWrapper = document.getElementById('sliderWrapper')
const indicatorsContainer = document.getElementById('sliderIndicators')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

const sliderImages = [
    './images/gym-1.png',
    './images/gym-2.png',
    './images/gym-3.png',
    './images/gym-4.png',
]

// create a slider function

function initializeSlider() {
    let currentIndex = 0

    // create slider image
    sliderImages.forEach((image, index) => {
        const img = document.createElement('img')
        img.src = image;
        img.alt = `Gym img ${index + 1}`
        sliderWrapper.appendChild(img)

        const indicator = document.createElement('div');
        indicator.className = `indicators ${index === 0 ? 'active' : ' '}`
        indicator.addEventListener('click', () => goToSlide(index))
        indicatorsContainer.appendChild(indicator)

    })

    // update slider function
    const updateSlider = () => {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`
        // update indicators
        document.querySelectorAll('.indicators').forEach((indicators, index) => {
            indicators.classList.toggle('active', index === currentIndex)
        })
    }

    // go to specific slide
    const goToSlide = (index) => {
        currentIndex = index
        updateSlider()
    }
   
    // next btn
    const nextSlid = () => {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        updateSlider()
    }

    nextBtn.addEventListener('click', nextSlid)

    // previous btn click

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        updateSlider()
    }
    
    prevBtn.addEventListener('click', prevSlide)
    
    // auto play using interval
    let autoplayInterval = setInterval(nextSlid, 5000)
    
    // pause auto play an hover
    sliderWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval)
    })
    sliderWrapper.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlid, 3000)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
})


