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

// Desafio 5
function footballPoints(wins, ties) {
  let total = wins*3 + ties
  return total
}

// Desafio 6
function highestCount(p1) {
  let maior = 0
  let cont = 0
  for (i in p1) {
    if (i == 0) {
      maior = i
      cont = 1
    }else if (p1[i] > p1[maior]) {
      maior = i
      cont = 1
    } else if (p1[i] == p1[maior]) {
      cont += 1
    }
  }
  return cont
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
