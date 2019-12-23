let {

  matrix_Transpose,
  sub_matrix,
  Read_Matrix,
  matrix_print,
  matrixMultiply,
  insertion,
  insertionArray,
  towD_to_oneD

} = require(`./funs.js`)     //importing  function file 

///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////                                                            \\\\\\\\\\\\\\\
/////////                                                             \\\\\\\\\\\\\\\\
///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let type = process.argv[2];
if (type === "matrix") {

  let operationType = process.argv[3];

  if (operationType === "transpose")     //trsnpose matrix
  {

    let martixFilePath = process.argv[4]
    let matrix = Read_Matrix(martixFilePath)

    let transposed_matrix = matrix_Transpose(matrix)
    console.log("The transposed matrix :")
    matrix_print(transposed_matrix)
  
  }
  else if (operationType === "multiply") {
    let matrixApath = process.argv[4]
    let matrixA = Read_Matrix(matrixApath)
    let matrixBpath = process.argv[5]
    let matrixB = Read_Matrix(matrixBpath)
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
    let matrixA = Read_Matrix(matrixApath) //
    let matrixBpath = process.argv[5]
    let matrixB = Read_Matrix(matrixBpath)
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
    let matrixs = Read_Matrix(matrixApath)
    let unsorted_matrixs = Read_Matrix(matrixApath)
    
  let fin=towD_to_oneD(matrixs)

    
    let converted_twoD = [];      // take the converted One dimensionalarr and pass the elements here 
    while (fin.length) converted_twoD.push(fin.splice(0, unsorted_matrixs[0].length));
    console.log("Frst matrix :")
   matrix_print(converted_twoD)
   console.log("  ")
   let secondmatrix=process.argv[5]

   if(secondmatrix==="./matrix2.json"){   //'if' function inside 'else if ' to add another position for ./matrix2.json
   let matrixBpath = process.argv[5]
    matrixs = Read_Matrix(matrixBpath)
    unsorted_matrixs = Read_Matrix(matrixBpath)
   
 let fin2=towD_to_oneD(matrixs)

   
    converted_twoD = [];      // take the converted One dimensionalarr and pass the elements here 
   while (fin2.length) converted_twoD.push(fin2.splice(0, unsorted_matrixs[0].length));
   console.log("Second matrix :")

  matrix_print(converted_twoD)
    }
    
       
  }else {
    console.log("Error: unknown task!")
  }

 
}else if(type==='sort'){
  let matrixPath = process.argv[3];
    let matrix = Read_Matrix(matrixPath)
    for (let i = 0; i < matrix.length; i++) {     //find the minimum index from the 1d array
      insertion(matrix)
    }
  
    console.log(matrix)
    

}
else {
  console.log("Error : unkown command!")
}

