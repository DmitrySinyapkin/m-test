const requestButtons = document.querySelectorAll('.button_request')
const modal = document.querySelector('.modal')
const cancelButton = document.querySelector('.request__button_exit')

const openModal = () => {
    modal.classList.add('modal_opened')
}

const closeModal = () => {
    modal.classList.remove('modal_opened')
}


requestButtons.forEach(btn => btn.addEventListener('click', openModal))
cancelButton.addEventListener('click', closeModal)
