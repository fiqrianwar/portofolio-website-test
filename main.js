function handleClick(){
    document.querySelector('.card-notification-panel').classList.add('card-animation-panel')
    document.querySelector('.header-hero-shot').classList.add('animation-header')
}

function closeHandle(){

    const data =  document.querySelector('.card-newletter-panel')
    
    data.classList.add('card-letter-panel');
    setTimeout(() => {
        data.classList.remove('card-letter-panel')
    },100000)
    
    
}

