let swipermain = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
let swipersecond = new Swiper('.swiper-scnd',{
direction: 'horizontal',
effect:'fade',
fadeEffect: {
crossFade: true
},
loop: true,
navigation: {
nextEl: '.swiper1-button-next',
prevEl: '.swiper1-button-prev',
    },
})
let news = new Swiper('.news-swiper',{
    direction: 'horizontal', 
    loop:false,
    // slidesperview: '' 
    effect: 'slide',
    navigation : {
        nextEl: '.news-button-next'
    }
})