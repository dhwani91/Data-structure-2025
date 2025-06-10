function transpose(matrix: number[][]): number[][] {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    if (matrix.length === 0) return [];
    const transposeMatrix = createMatrix<number>(colLen, rowLen, 0);
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            [transposeMatrix[col][row]] = [matrix[row][col]];
        }
    }
    return transposeMatrix;
}

function createMatrix<T>(rows: number, cols: number, defaultValue: T): T[][] {
    return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => defaultValue)
    );
}
// console.log(transpose([[1,2],[3,4]]));
// console.log(transpose([[1,2, 3],[4,5,6]]));
console.log(transpose( [
    [1, 2, 3],
    [4, 5, 6]
]));

// console.log(transpose( [[1,2,3],[4,5,6],[7,8,9]]))