function createMatrix<T>(rows: number, cols: number, defaultValue: T): T[][] {
    return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => defaultValue)
    );
}

function template<T>(rows:number, cols:number, defaultVal:number): T[][]{
    return Array.from({ length: rows }, () => Array(cols).fill(defaultVal));
}

const matrix = createMatrix<number>(3, 4, 0);
const matrix1 = template<number>(3, 4, 0);
console.log(matrix);
console.log(matrix);