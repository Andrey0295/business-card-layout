
const refs={
    menuEl: document.querySelector('.site-nav'),
    openBtnEl: document.querySelector('.open-button'),
    closeBtnEl: document.querySelector('.menu-close-btn')
}

refs.menuEl.classList.add('is-hidden')
refs.openBtnEl.addEventListener('click', onClickBtnOpen)
refs.closeBtnEl.addEventListener('click', onClickBtnClose)

function onClickBtnOpen(evt){
    refs.openBtnEl.classList.toggle('is-hidden')
    refs.menuEl.classList.toggle('is-hidden' )
} 

function onClickBtnClose(e){
    refs.openBtnEl.classList.toggle('is-hidden')
    refs.menuEl.classList.toggle('is-hidden' )
}







