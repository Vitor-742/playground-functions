// Desafio 1
function compareTrue(p1, p2) {
  if (p1 && p2) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;  
}

// Desafio 3
function splitSentence(p1) {
  let arrSplit = p1.split(' ');
  return arrSplit;
}

// Desafio 4
function concatName(p1) {
  let res = [p1[p1.length - 1], p1[0]];
  return res.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(p1) {
  let maior = 0;
  let cont = 0;
  for (let i in p1) {
    if (i === 0) {
      maior = i
      cont = 1
    } else if (p1[i] > p1[maior]) {
      maior = i;
      cont = 1;
    } else if (p1[i] == p1[maior]) {
      cont += 1
    }
  }
  return cont
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = (mouse - cat1) ** 2;
  let dist2 = (mouse - cat2) ** 2;
  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1){
    return 'cat2';
  }
  return "os gatos trombam e o rato foge";

}
// Desafio 8
function fizzBuzz(p1) {
let res = []
  for (let i in p1) {
    if (p1[i] % 3 == 0 && p1[i] % 5 == 0) {
      res[i] = 'fizzBuzz';
    } else if (p1[i] % 3 === 0) {
      res[i] = 'fizz';
    } else if(p1[i] % 5 === 0) {
      res[i] = 'buzz';
    } else {
      res[i] = 'bug!';
    }
  }
  return res;
};

// Desafio 9
function encode(p1) {
  let cod = p1.split('')
  for (i in cod) {
    switch (cod[i]) {
      case 'a':
        cod[i] = '1'
        break
      case 'e':
        cod[i] = '2'
        break
      case 'i':
        cod[i] = '3'
        break
      case 'o':
        cod[i] = '4'
        break
      case 'u':
        cod[i] = '5'
        break
    }
  }
  return cod.join('')
}
function decode(p1) {
  let cod = p1.split('')
  for (let i in cod) {
    switch (cod[i]) {
      case '1':
        cod[i] = 'a'
        break
      case '2':
        cod[i] = 'e'
        break
      case '3':
        cod[i] = 'i'
        break
      case '4':
        cod[i] = 'o'
        break
      case '5':
        cod[i] = 'u'
        break
    }
  }
  return cod.join('')
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
