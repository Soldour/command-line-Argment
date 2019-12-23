let fs = require(`fs`)

function swap(a, fI, sI) {
  let tmp = a[fI]
  a[fI] = a[sI]

  a[sI] = tmp
}
function matrix_Transpose(m) {  // Transpose matrix
  let height = m.length
  let width = m[0].length
  //console.log(height, width, m)
  if (height != width) throw Error("invalid matrix: it should be square matrix")
  let temp = matrix_create(height, width)
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      temp[i][j] = m[j][i]
    }
  }

  return temp
}

function Read_Matrix(filename) {
  let matrixBuffer = fs.readFileSync(filename)
  let martixStr = matrixBuffer.toString()
  let matrix = JSON.parse(martixStr)
  return matrix
}

function matrix_print(m)   //print matrix 
{
  for (let i = 0; i < m.length; i++) {
    console.log(m[i])
  }

  return m
}

function matrix_create(height, width) {  // creat matrix 
  let m = new Array(height)
  for (let i = 0; i < height; i++) {
    m[i] = new Array(width)
    for (let j = 0; j < width; j++)
      m[i][j] = 0
  }
  return m
}

function sub_matrix(a, b) {

 let k = []
  k = new Array(a.length);
  for (let i = 0; i < k.length; i++) {
    if( a[i].length!= b[i].length ) throw Error (" Error: each matrix must be square with equal size in between => n X n and m X m  n=m ")
    if(a.length!=b[i].length) throw Error (" Error: each matrix must be square with equal size in between => n X n and m X m  n=m ")
    if(b.length!=b[i].length) throw Error (" Error: each matrix must be square with equal size in between => n X n and m X m  n=m ")

    k[i] = new Array(a[0].length)
    for (let j = 0; j < a[i].length; j++) {
     
      k[i][j] = a[i][j] - b[i][j]
    }

  }
  return k
}

function insertion(a) {

  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j = j - 1;
    }
    a[j + 1] = key;
  }
}

function towD_to_oneD(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) { //the .concat(a[i]) function will convert
    temp = temp.concat(arr[i]);
  }       // the two dimensional arry to one dimensional
  for (let i = 0; i < temp.length; i++) {     //find the minimum index from the 1d array
    insertion(temp)
  }
  return temp
}

function matrixMultiply(a, b) {

  let widthA = a[0].length
  let heightB = b.length

  if (heightB !== widthA) throw new Error(`can not multiply this matrices`)

  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    
    newArr[i] = [];
    for (let j = 0; j < b[0].length; j++) {
      if( a[i].length!= b[i].length ) throw Error (" Error: Invalid matrix ") 

      let sum = 0;
      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      newArr[i][j] = sum;
    }
  }
  return newArr;
}





module.exports =         //expoting this file ( fucntions )
  {
    swap,
    matrix_Transpose,
    sub_matrix,
    Read_Matrix,
    matrix_print,
    matrix_create,
    insertion,
    matrixMultiply,
    towD_to_oneD


  }

