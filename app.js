// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// Esta funcion convierte de Euros a dolar
const fromEuroToDollar= (euro) =>{
    return euro * oneEuroIs.USD;
}

console.log("Esto convierte de Euro a Dollar",fromEuroToDollar(1))


// Esta funcion convierte de dolares a yenes
const fromDollarToYen= (dollar) =>{
    return parseFloat((dollar * oneEuroIs.JPY / oneEuroIs.USD).toFixed(4));
}
console.log("Esto convierte de Dollar a Yen",fromDollarToYen(1))


// Esta funcion convierte de yenes a libras esterlinas
const fromYentoPound= (yen) =>{
    return parseFloat((yen * oneEuroIs.GBP / oneEuroIs.JPY).toFixed(4));
}
console.log("Esto convierte de yen a libras", fromYentoPound(1))

module.exports = {sum, fromEuroToDollar, fromDollarToYen,fromYentoPound};