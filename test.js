// importar la funciones del archivo app.js
const { fromEuroToDollar,fromDollarToYen,fromYentoPound} = require('./app.js');

//Estos son los test para cambiar de Euros a Dolares
test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("0 euro son 0 dollar", function(){
    expect(fromEuroToDollar(0)).toBe(0); 
})

test("10000 euro son 12000 dollar", function(){
    expect(fromEuroToDollar(10000)).toBe(12000); 
})

//Estos son los test para cambiar de Dolares a Yenes 
test ("2.5 dollar son 106.58 yenes",()=>{
    expect (fromDollarToYen(2.5)).toBe(266.4583);
})

test ("0 dollar son 0 yenes",()=>{
    expect (fromDollarToYen(0)).toBe(0);
})

test ("10000 dollar son 1065833.3333 yenes",()=>{
    expect (fromDollarToYen(10000)).toBe(1065833.3333);
})

//Estos son los test para cambiar de Yenes a Libras esterlinas
test ("Un yen son 0.0063 libras esterlinas",()=>{
    expect (fromYentoPound(1)).toBe(0.0063);
})

test ("0 yen son 0 libras esterlinas",()=>{
    expect (fromYentoPound(0)).toBe(0);
})

test ("10000 yen son 62.5489 libras esterlinas",()=>{
    expect (fromYentoPound(10000)).toBe(62.5489);
})
