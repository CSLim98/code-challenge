function clockwiseTravelling(array) {
    let result = [];
    let startRow = 0, endRow = array.length - 1;
    let startCol = 0, endCol = array[0].length - 1;

    // from outer to inner, follwoing sequence (top -> right -> bottom -> left)
    while(startRow <= endRow && startCol <= endCol) {
        // traverse top row
        for(let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        startRow++;

        // traverse right col
        for(let row = startRow; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        endCol--;

        // traverse bottom row
        if(startRow <= endRow) {
            for(let col = endCol; col >= startCol; col--) {
                result.push(array[endRow][col]);
            }
            endRow--;
        }

        // traverse left col
        if(startCol <= endCol) {
            for(let row = endRow; row >= startRow; row--) {
                result.push(array[row][startCol]);
            }
            startCol++;
        }
    }

    return result;
}

function main() {
    // 2d array clockwise travelling test case
    let array1 = [[1,2,3],
                [4,5,6],
                [7,8,9]]
    console.log(clockwiseTravelling(array1));

    let array2 = [[1,2,3],
                [8,9,4],
                [7,6,5]]
    console.log(clockwiseTravelling(array2));

    let array3 = [[1,2,3,1],
                [4,5,6,4],
                [7,8,9,7],
                [7,8,9,7]]
    console.log(clockwiseTravelling(array3));
}

main();