//3. Traverse a Matrix

function traverseMatrix<T>(matrix: T[][]): void{
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            console.log(matrix[row][col]);
        }
    }
}

console.log(traverseMatrix([[1,2],[3,4]]));