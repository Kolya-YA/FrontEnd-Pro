const tabsList = document.querySelector('.tabs__list')
const tabs = document.querySelectorAll('.tabs__item')
const articles = document.querySelectorAll('.content__item')

const showArticle = (articleName) => {
    articles.forEach(article => {
        if (article.dataset.article === articleName) article.classList.add('content__item--active')
        else article.classList.remove('content__item--active')
    })
}

tabsList.addEventListener('click', e => {
    tabs.forEach(item => {
        item.firstElementChild.classList.remove('active')
    })
    e.target.classList.add('active')
    showArticle(e.target.dataset.article)
    e.preventDefault();
})

