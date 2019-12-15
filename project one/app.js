let fs = require(`fs`)

let {

  matrix_Transpose,
  sub_matrix,
  matrix_from_file,
  matrix_print,
  matrixMultiply,
  towD_to_oneD

} = require(`./funs.js`)     //importing the function file 


let val = process.argv.slice(2);

// let sum =val.reduce((acc, val)=> acc + parseInt(val),0)
// console.log(sum)

let type = process.argv[2];
if (type === "matrix") {

  let operationType = process.argv[3];

  if (operationType === "transpose")     //trsnpose matrix
  {

    let martixFilePath = process.argv[4]
    let matrix = matrix_from_file(martixFilePath)

    let transposed_matrix = matrix_Transpose(matrix)
    console.log("The transposed matrix :")
    matrix_print(transposed_matrix)
  
  }
  else if (operationType === "multiply") {
    let matrixApath = process.argv[4]
    let matrixA = matrix_from_file(matrixApath)
    let matrixBpath = process.argv[5]
    let matrixB = matrix_from_file(matrixBpath)
    console.log("A")
    matrix_print(matrixA)
    console.log("B")
    matrix_print(matrixB)
    //two matrix
    console.log("the product of the two matrices is: ")
    let matrixC = matrixMultiply(matrixA, matrixB)
    console.log("C")
     matrix_print(matrixC)
 
  } else if (operationType === "sub") {
    let matrixApath = process.argv[4]
    let matrixA = matrix_from_file(matrixApath)
    let matrixBpath = process.argv[5]
    let matrixB = matrix_from_file(matrixBpath)
    console.log("A")
    matrix_print(matrixA)
    console.log("B")
    matrix_print(matrixB)
    //two matrix
    let matrixC = sub_matrix(matrixA, matrixB)
    console.log("C")
  matrix_print(matrixC)
  }else if (operationType ==="insertion")
  {
    let matrixApath = process.argv[4]
    let matrixs = matrix_from_file(matrixApath)
    let unsorted_matrixs = matrix_from_file(matrixApath)
    
  let fin=towD_to_oneD(matrixs)

    
    let converted_twoD = [];      // take the converted One dimensionalarr and pass the elements here 
    while (fin.length) converted_twoD.push(fin.splice(0, unsorted_matrixs[0].length));
    console.log("Frst matrix :")
   matrix_print(converted_twoD)
   console.log("  ")
   let secondmatrix=process.argv[5]
   if(secondmatrix==="./matrix2.json"){
   let matrixBpath = process.argv[5]
    matrixs = matrix_from_file(matrixBpath)
    unsorted_matrixs = matrix_from_file(matrixBpath)
   
 let fin2=towD_to_oneD(matrixs)

   
    converted_twoD = [];      // take the converted One dimensionalarr and pass the elements here 
   while (fin2.length) converted_twoD.push(fin2.splice(0, unsorted_matrixs[0].length));
   console.log("Second matrix :")

  matrix_print(converted_twoD)
    }
    
       
  }else {
    console.log("Error: unknown task!")
  }

} else if (type === "sort") {
  console.log("here the matrix will be sorted accordingly")
}else {
  console.log("Error : unkown command!")
}

