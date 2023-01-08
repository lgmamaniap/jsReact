
const lastName = 4

/**
 * primitive type variables (inmutable)
 * string
 * boolean
 * number
 * undefined
 * null
 * Bigint
 * Symbol
*/

// Las variables de tipo string son inmutables (no se puede cambiar su contenido)
// const firstName = 'Gustavo'
// const firstNameWithUpperCase = firstName.toUpperCase()
// console.log(firstNameWithUpperCase)

const list = []
list.push(1)
const anotherList = list.concat([1,2,3,4,5,6])
console.log(list)
console.log(anotherList)

/**
 * formas de acceder a elementos de objetos
 * persona.name
 * persona['name']
 * 
 */

const persona = {
  name: 'gustavo',
  twitter: 'none',
  age: 28,
  isDeveloper: true,
  links: [
    'https://red.social.com',
    'https://facebook.com'
  ]
}

/**
 * Funciones en javascript
 * 
 * 
 */

// function expression
const sumar = (operando1, operando2) => {
  console.log(operando1)
  console.log(operando2)
  return operando1 + operando2
}

// funcion normal
function restar(a, b) {
  return a - b
}

const resultado = sumar(2, 2)
console.log(resultado)

const op1 = 1
const op2 = 2
console.log(sumar(op1, op2))


