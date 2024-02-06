const numero1 = document.getElementById('primeiro');
const numero2 = document.getElementById('segundo');
const select = document.getElementById('select')
const resultado = document.getElementById('resultado')
const calc = document.getElementById('calcular')

function calcula(){
    
    let num1 = parseFloat(numero1.value)
   
    let num2 = parseFloat(numero2.value)
    let sel = select.value;
    let res;

    if(sel == '+'){
         res = num1 + num2;
 }
    if(sel == '-'){
        res = num1 - num2;
 }
    if(sel == '/'){
        res = num1 / num2
 }
    if(sel == 'x'){
        res = num1 * num2
}
    resultado.textContent = res
}
calc.addEventListener('click',calcula)
