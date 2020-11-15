
const refs={
    menuEl: document.querySelector('.site-nav'),
    openBtnEl: document.querySelector('.open-button'),
    closeBtnEl: document.querySelector('.menu-close-btn')
}


refs.menuEl.classList.add('is-hidden')
// refs.closeBtnEl.classList.add('is-hidden')

refs.openBtnEl.addEventListener('click', onClickBtnOpen)
refs.closeBtnEl.addEventListener('click', onClickBtnClose)
// refs.openBtnEl.addEventListener('click', closeMenuHeandler)

// function closeMenuHeandler(e){
//    if(refs.menuEl.classList.contains('is-open')){
//     // refs.openBtnEl.classList.remove('is-hidden')
//     // refs.closeBtnEl.classList.replace('is-open', 'is-hidden')
//     // refs.menuEl.classList.replace('is-open', 'is-hidden')

//    }
   

// }

function onClickBtnOpen(evt){
    // refs.openBtnEl.classList.add('is-hidden')
    
    refs.openBtnEl.classList.toggle('is-hidden')
    // refs.closeBtnEl.classList.toggle( 'is-hidden')
    refs.menuEl.classList.toggle('is-hidden' )



    console.log(evt);

    // if(refs.menuEl.classList.contains('is-open')){
    //     refs.openBtnEl.classList.toggle('is-hidden')
    //     refs.closeBtnEl.classList.add( 'is-hidden')
    //     refs.menuEl.classList.replace('is-open' ,'is-hidden')
    // }

    // if(refs.openBtnEl.classList.add('is-hidden')){
    //     closeMenuHeandler()
    // }
   
} 
function onClickBtnClose(e){
    refs.openBtnEl.classList.toggle('is-hidden')
    // refs.closeBtnEl.classList.toggle( 'is-hidden')
    refs.menuEl.classList.toggle('is-hidden' )
}



// function onClickBtnClose(evt){
//     refs.openBtnEl.classList.remove('is-hidden')
//     refs.closeBtnEl.classList.toggle('is-hidden')
//     refs.menuEl.classList.toggle('is-hidden')

// }



console.log('Hello');