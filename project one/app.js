
let {

    matrix_transpose,
    matrix_print,
    matrix_Imprt,
    matrix_multiply,
    findMinIndex,
    seletion
 } = require('./functions.js')



let type = process.argv[2];
if (type === "matrix") {
   
    let operationType = process.argv[3];
    console.log(type, operationType);
    if (operationType === "transpose") {

        let matrixPath = process.argv[4];
        let matrix = matrix_Imprt(matrixPath)
        let transposed_matrix = matrix_transpose(matrix)
        matrix_print(transposed_matrix)
      
    } else if (operationType === "multiply") {
    
        let matApath = process.argv[4];
        let matrixA = matrix_Imprt(matApath)
        let matBpath = process.argv[5];
        let matrixB = matrix_Imprt(matBpath)
        console.log("A")
        matrix_print(matrixA)
        console.log("B")
        matrix_print(matrixB)
        let matrixC = matrix_multiply(matrixA, matrixB)
        console.log("C")
        matrix_print(matrixC)
    } else {
        console.log("Unknown operation type");
    }
} else if (type === "sort") {
    let matrixPath = process.argv[3];
    let matrix = matrix_Imprt(matrixPath)
    
 
    for (let i = 0; i < matrix.length; i++) {    
        let secondIndex = findMinIndex(matrix, i) 
        seletion(matrix, i, secondIndex)
     
    }
    console.log(matrix)
  
    
} else {
    console.log("Unknown task type");
}
