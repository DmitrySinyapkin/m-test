const requestButtons = document.querySelectorAll('.button_request')
const modal = document.querySelector('.modal')
const cancelButton = document.querySelector('.request__button_exit')

const nameField = document.querySelector('.form__input_name')
const nameMessage = document.querySelector('.field__message_name')
nameField.addEventListener('change', () => nameMessage.innerHTML = '')

const emailField = document.querySelector('.form__input_email')
const emailMessage = document.querySelector('.field__message_email')
emailField.addEventListener('change', () => emailMessage.innerHTML = '')

const phoneField = document.querySelector('.form__input_phone')
const phoneMessage = document.querySelector('.field__message_phone')
phoneField.addEventListener('change', () => phoneMessage.innerHTML = '')

const questionField = document.querySelector('.form__input_question')
const questionMessage = document.querySelector('.field__message_question')
questionField.addEventListener('change', () => questionMessage.innerHTML = '')

const phoneMaskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}

const phoneMask = new IMask(phoneField, phoneMaskOptions)

const submitButton = document.querySelector('.request__button_submit')

const openModal = () => {
    document.querySelectorAll('.form__input').forEach(item => item === phoneField ? phoneMask.value = '' : item.value = '')
    document.querySelectorAll('.field__message').forEach(item => item.innerHTML = '')
    modal.classList.add('modal_opened')
}

const closeModal = () => {
    modal.classList.remove('modal_opened')
}

const validateName = () => {
    const username = nameField.value
    if (!username) {
        nameMessage.innerHTML = 'Пожалуйста, введите свое имя!'
        return false
    } else if (/^[a-zA-Zа-яА-Я]+$/.test(username)) {
        return true
    } else {
        nameMessage.innerHTML = 'Недопустимые символы!'
        return false
    }
}

const validateEmail = () => {
    const email = emailField.value
    if (!email) {
        emailMessage.innerHTML = 'Пожалуйста, введите свой e-mail!'
        return false
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email)) {
        return true
    } else {
        emailMessage.innerHTML = 'Некорректный e-mail!'
        return false
    }
}

const validateQuestion = () => {
    const question = questionField.value
    if (!question) {
        questionMessage.innerHTML = 'Пожалуйста, введите свой вопрос!'
        return false
    } else {
        return true
    }
}

const handleSubmit = () => {
    const nameSuccess = validateName()
    const emailSuccess = validateEmail()
    const questionSuccess = validateQuestion()
    if (nameSuccess && emailSuccess && questionSuccess) {
        // Здесь может быть ваша реклама(зачеркнуто) отправляем данные
        // -----------------------------------------------------------
        closeModal()
        setTimeout(() => alert('Ваш вопрос успешно отправлен!'), 500)
    }
}

requestButtons.forEach(btn => btn.addEventListener('click', openModal))
cancelButton.addEventListener('click', closeModal)

submitButton.addEventListener('click', handleSubmit)
