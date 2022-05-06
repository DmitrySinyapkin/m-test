const title = document.querySelector('.text__title')
const subtitle = document.querySelector('.text__subtitle')
const slides = document.querySelectorAll('.slider__slide')
const controls = document.querySelectorAll('.controls__switch')

const sliderData = [
    {
        id: 1,
        title: 'ПОЛЕТ ИЛОНА МАСКА И DOGIE COIN',
        subtitle: 'В прошлый четверг все офигели от полета DOGIE COIN на Марс'
    },
    {
        id: 2,
        title: 'DOGIE COIN УПАЛ',
        subtitle: 'Все в шоке, я потерял все деньги'
    },
    {
        id: 3,
        title: 'ЭПИЧЕСКОЕ ВОЗВРАЩЕНИЕ НА ХАИ',
        subtitle: 'Все в шоке, я снова богат'
    },
]

function changeSlide(index) {
    slides.forEach(slide => slide.dataset.slide == index ? slide.classList.add('slider__slide_active') : slide.classList.remove('slider__slide_active'))
    const data = sliderData.find(item => item.id == index)
    title.innerHTML = data.title
    subtitle.innerHTML = data.subtitle
}

function handleClick(e) {
    const index = e.target.dataset.slide
    changeSlide(index)
    controls.forEach(item => item.dataset.slide == index ? item.classList.add('controls__switch_active') : item.classList.remove('controls__switch_active'))
}

function handleFirstLoad() {
    title.innerHTML = sliderData[0].title
    subtitle.innerHTML = sliderData[0].subtitle
}

controls.forEach(btn => btn.addEventListener('click', handleClick))

window.addEventListener('load', handleFirstLoad)
