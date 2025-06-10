function reShapeMatrix<T>(matrix: T[][], row:number, col:number): T[][] {
    // const flat:T[]=matrix.reduce((acc, row) => acc.concat(row), []);
    const flat:T[][] = matrix.flat();
    const reShaped:T[][] = [];
    const total:number = flat.length;

    if(row * col !== total){
        throw new Error("Reshape matrix can't be possible for this dimension");
    }
    for(let i=0; i<row; i++){
        const row:T[] = flat.slice(i*col, i*col+col)
        reShaped.push(row)
    }
    return reShaped;
}

console.log(reShapeMatrix([[1,2,3],[4,5,6]], 6,1));