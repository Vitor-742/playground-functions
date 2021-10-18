// Desafio 10
function techList(arrTec, name) {
  if (arrTec.length == 0) {
    return 'Vazio!';
  };
  arrTec.sort();
  let arr2 = []
  for (let i in arrTec) {
    arr2[i] = {tech: arrTec[i], 'name': name}
  };
  return arr2;
}

// Desafio 11
function generatePhoneNumber(p1) {
  
  if (p1.length != 11) {
    return "Array com tamanho incorreto."
  }
  for (let i in p1) {
    let cont = 0;
    for (let i2 in p1) {
      if (p1[i] == p1[i2]) {
        cont += 1
      };
    };
  if (p1[i] < 0 || p1[i] > 9 || cont >= 3) {
    return "não é possível gerar um número de telefone com esses valores"
  };
  }
  let num = '(' + p1[0] + p1[1] + ') ' + p1[2] + p1[3] + p1[4] + p1[5] + p1[6]+ '-' + p1[7] + p1[8] + p1[9] + p1[10]
  return num
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true
  } else {
    return false
  };
};

// Desafio 13
function hydrate(p1) {
  arr = p1.split(' ')
  let soma = 0;
  for (let i in arr) {
    if (!isNaN(arr[i])){
      soma += parseInt(arr[i])
    };
  };
  if (soma == 1) {
    return soma + ' copo de água';
  } else {
    return soma + ' copos de água';
};
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
