const umuminav = document.querySelectorAll('#nav-categ>div')
let buttons = document.querySelectorAll('.accordion-item>button:first-of-type')
function mover(x) {
let kart = document.querySelector(`#${x}`) 
for (let i = 0; i < umuminav.length; i++) {
    umuminav[i].style.visibility = 'hidden'
    if (x == 'none') {
        umuminav[i].style.visibility = 'hidden'
    }
    else if(x!='none'){
        kart.style.visibility = 'visible'
        kart.onmouseleave = () => {
        kart.style.visibility= 'hidden' ;}
    } 
        }
    }


document.querySelector('.mobil-button').onclick = () => {
document.querySelector('.nav-categ-mobil').style.display = 'inherit'
document.querySelector('.row').style = 'display:none'
document.querySelector('main').style.display = 'none'
}
document.querySelector('.mobil-opt:nth-last-of-type(1)').onclick = () => {
document.querySelector('.row').style.display = 'flex'
document.querySelector('.nav-categ-mobil').style.display = 'none'
document.querySelector('main').style.display = 'inherit'

}

for (let i = 0; i < buttons.length; i++) {
buttons[i].onclick = () => {
for (let j = 0; j < buttons.length; j++) {
if (buttons[j].classList.value == 'collapsed') buttons[j].innerHTML = '<i class="fas fa-plus" ></i>'
}
if (buttons[i].classList.value != 'collapsed') {
buttons[i].innerHTML = '<i class="fas fa-minus txt-light-red" ></i>'
} else {
buttons[i].innerHTML = '<i class="fas fa-plus" ></i>'
}
}
}       

document.querySelector('.fa-question-circle').onclick = ()=>{
document.querySelector('.popov').style.visibility = 'visible'
document.querySelector('.popov').style.opacity = '1'
document.querySelector('.popov').style.transition = 'all .5s'
} 
document.getElementById('pop-x').onclick = ()=>{
document.querySelector('.popov').style.visibility = 'hidden' 
document.querySelector('.popov').style.opacity = '0'

}
document.addEventListener('click',(event)=>{
let inside = document.querySelector('.fin-inp input').contains(event.target);
if(inside){
document.querySelector('.fin-inp >label > span').classList.add('inp-active')
}
if(!inside) {
document.querySelector('label > span').classList.remove('inp-active')
}
})
let kod = ''
let telnum = ['077','070','051','050','010','055','099','060']
let ul = document.querySelector('.tel-inp-number')
for(let i = 0; i<telnum.length;i++){
kod+= `<li>${telnum[i]}</li>`
}
ul.innerHTML = kod
function deyish(){
document.querySelector('.fa-angle-down').classList.toggle('tel-rotate')
ul.classList.toggle('d-block')
}
let li = document.querySelectorAll('.tel-inp-number > li')
Array.from(li).forEach(li =>{
li.onclick = ()=>{
document.querySelector('.tel-inp > label > div > span').innerHTML = li.innerHTML 
}
}) 
let searchbtn = document.querySelector('.header-ul .fa-search')
searchbtn.onclick = ()=>{
document.querySelector('.search').classList.toggle('searchisopen')
document.querySelector('header > div:nth-of-type(2)').classList.toggle('invisible')
document.querySelector('.search-bottom').classList.toggle('movedown') 
}
document.querySelector('header .fa-times').onclick= ()=>{
document.querySelector('.search').classList.toggle('searchisopen')
document.querySelector('header > div:nth-of-type(2)').classList.toggle('invisible')
document.querySelector('.search-bottom').classList.toggle('movedown') 
}

document.querySelector('header .fa-search').onclick= ()=>{
    document.querySelector('.search').classList.toggle('searchisopen')
    document.querySelector('header > div:nth-of-type(2)').classList.toggle('invisible')
    document.querySelector('.search-bottom').classList.toggle('movedown') 
    }

// VALYUTA KONVERTER 
let text_inp_curr = document.querySelector('.text_inp_curr')
let result_currency = document.querySelector('.result_currency')
let fa_angle_down = document.querySelector('.text_inp_curr  .fa-angle-down') 
let currency = ['AZN','USD','EUR']
text_inp_curr.onclick = ()=>{
    result_currency.innerHTML = ''
    let text_inp_curr_result = document.querySelector('.text_inp_curr_result')
    result_currency.classList.toggle('d-flex')
    fa_angle_down.classList.toggle('tel-rotate')
    for (let i = 0; i < currency.length; i++) {
        currency[i] != text_inp_curr_result.innerHTML ? result_currency.innerHTML += `<li>${currency[i]}</li>` : ''
    }
    let lis = document.querySelectorAll('.result_currency > li')
    Array.from(lis).forEach(item=>{
    item.onclick= ()=>{
        let text_inp_curr_result = document.querySelector('.text_inp_curr_result')
        text_inp_curr_result.innerHTML = item.innerHTML
        document.querySelector('.result_table_usd > td:nth-of-type(2)').innerHTML = item.innerHTML
        exchange()
    }
})
}
let usd = document.querySelector('.result_table_usd > td:first-of-type')
let sell = document.querySelector('.buy_sell > p:first-of-type')
let buy = document.querySelector('.buy_sell > p:nth-of-type(2)')
let eur = document.querySelector('.result_table_eur > td:first-of-type')
let currency_input = document.querySelector('.text-inp > input')
let values = []
currency_input.oninput = ()=>{
    buy.className == 'buy_sell_clicked' ? exchange('buy') : exchange('sell')
}
document.querySelector('.buy_sell').onclick = function buy_sell(){
    if(buy.className != 'buy_sell_clicked'){
        sell.classList.remove('buy_sell_clicked')
        buy.classList.add('buy_sell_clicked')
        exchange('buy')
    }
    else if(sell.className != 'buy_sell_clicked'){
        buy.classList.remove('buy_sell_clicked')
        sell.classList.add('buy_sell_clicked')
        exchange('sell')
    }
}
function exchange(k){
    values[0] = 1.702;
    values[1] = 1.729;
    if (k == 'buy') {
        let usd_emsal = 1.697;
        let eur_emsal = 1.6795;
        values = [usd_emsal,eur_emsal]
    }
    if(k == 'sell'){
        let usd_emsal = 1.702;
        let eur_emsal = 1.729;
        values = [usd_emsal,eur_emsal]
        } 
    let text_inp_curr_result = document.querySelector('.text_inp_curr_result')
    if(text_inp_curr_result.innerHTML == 'AZN'){
        usd.innerHTML =  Math.round((currency_input.value / values[0]) * 100) /100 
        document.querySelector('.result_table_usd > td:nth-of-type(2)').innerHTML = 'USD'
        eur.innerHTML =  Math.round((currency_input.value / values[1]) * 100) /100 
        document.querySelector('.result_table_eur > td:nth-of-type(2)').innerHTML = 'EUR'
}
     if(text_inp_curr_result.innerHTML == 'USD'){
        usd.innerHTML =  Math.round((currency_input.value * values[0]) * 100) /100 
        document.querySelector('.result_table_usd > td:nth-of-type(2)').innerHTML = 'AZN'
        eur.innerHTML =  Math.round((currency_input.value * values[1]) * 100) /100 
        document.querySelector('.result_table_eur > td:nth-of-type(2)').innerHTML = 'EUR'
    }
     if(text_inp_curr_result.innerHTML == 'EUR'){
        usd.innerHTML =  Math.round((currency_input.value * values[1]) * 100) /100 
        document.querySelector('.result_table_usd > td:nth-of-type(2)').innerHTML = 'AZN'
        eur.innerHTML =  Math.round((currency_input.value * 0.997) * 100) /100 
        document.querySelector('.result_table_eur > td:nth-of-type(2)').innerHTML = 'USD'
    }
}