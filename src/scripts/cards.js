const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const IMG_URL = 'https://loremflickr.com/320/185'

const cardsContainer = document.querySelector('.cards__container')
const moreButton = document.querySelector('.button_load')

const getPosts = async (startIndex, limit) => {
    const url = new URL(POST_URL)
    url.searchParams.set('_start', startIndex)
    url.searchParams.set('_limit', limit)
    const res = await fetch(url)
    const data = await res.json()
    return data
}

const makeCard = (postData) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const picture = document.createElement('figure')
    picture.classList.add('card__picture')
    const img = document.createElement('img')
    img.src = IMG_URL + `?random=${postData.id}`
    img.alt = 'card picture'
    picture.append(img)
    card.append(picture)

    const post = document.createElement('div')
    post.classList.add('card__post')

    const topic = document.createElement('div')
    topic.classList.add('post__topic')
    topic.innerText = 'NEWS' // т.к. посты с jsonplaceholder содержат не всю инфу, требуемую для макета карточки, в некоторых местах буду вставлять одинаковые текстовые заглушки
    post.append(topic)

    const title = document.createElement('h3')
    title.classList.add('post__title')
    title.innerText = postData.title
    post.append(title)

    const text = document.createElement('p')
    text.classList.add('post__text')
    text.innerText = postData.body
    post.append(text)

    const info = document.createElement('p')
    info.classList.add('post__info')
    info.innerHTML = 'Posted by <span class="post__info_700">Eugenia</span> on July 24, 2019'
    post.append(info)

    card.append(post)

    const button = document.createElement('button')
    button.classList.add('button__card')
    button.innerHTML = 'Continue reading'
    card.append(button)

    cardsContainer.append(card)
}

const handleFirstCardLoad = () => {
    getPosts(0, 10)
        .then(resp => resp.forEach(post => makeCard(post)))
        .catch(err => alert('Fetch error!'))
}

const handleLoadMoreClick = () => {
    const start = document.querySelectorAll('.card').length
    getPosts(start, 6)
        .then(resp => resp.forEach(post => makeCard(post)))
        .catch(err => alert('Fetch error!'))
}

moreButton.addEventListener('click', handleLoadMoreClick)

window.addEventListener('load', handleFirstCardLoad)
