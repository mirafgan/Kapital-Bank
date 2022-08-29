let range_input_calc = document.querySelectorAll('input[type="range"]')
let number_input_calc = document.querySelectorAll('.calc-inp label input[type="number"]')
let loan_result_calc = document.querySelector('.loan-result')
for (let i = 0; i < range_input_calc.length; i++) {
    range_input_calc[i].oninput = ()=>{
        number_input_calc[i].value = range_input_calc[i].value
        loan_result_calc.innerHTML =  Math.round((((number_input_calc[0].value / number_input_calc[1].value) + (number_input_calc[0].value / number_input_calc[1].value) * 0.0338 )  ) * 100) /100 
        range_input_calc[0].style =   `background:linear-gradient(90deg, var(--red--) ${(range_input_calc[0].value / range_input_calc[0].max)*100}% , 
        var(--bright-gray--) ${(range_input_calc[0].value / range_input_calc[0].max)*100}% )` ;
        range_input_calc[1].style =  `background:linear-gradient(90deg, var(--red--) ${((range_input_calc[1].value / range_input_calc[1].max)*100)-7}% ,
        var(--bright-gray--) ${(range_input_calc[1].value / range_input_calc[1].max)*100}% )`
    
    }
    number_input_calc[i].oninput = ()=>{
        range_input_calc[i].value = number_input_calc[i].value
        loan_result_calc.innerHTML =  Math.round((((number_input_calc[0].value / number_input_calc[1].value) + (number_input_calc[0].value / number_input_calc[1].value) * 0.0338 )  ) * 100) /100
        range_input_calc[0].style =  `background:linear-gradient(90deg, var(--red--) ${(range_input_calc[0].value / range_input_calc[0].max)*100}% , var(--bright-gray--) ${(range_input_calc[0].value / range_input_calc[0].max)*100}% )`
        range_input_calc[1].style =  `background:linear-gradient(90deg, var(--red--) ${((range_input_calc[1].value / range_input_calc[1].max)*100)-7}% , var(--bright-gray--) ${(range_input_calc[1].value / range_input_calc[1].max)*100}% )`
    }
} 