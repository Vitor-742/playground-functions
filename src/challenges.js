// Desafio 1
function compareTrue(p1, p2) {
  if (p1 == true && p2 == true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(p1) {
  let arrSplit = p1.split(' ')
  return arrSplit
}

// Desafio 4
function concatName(p1) {
  let res = [p1[p1.length-1], p1[0]]
  return res.join(', ')
}
console.log(concatName(['foguete','tem', 'ré']))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
