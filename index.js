function nextNumber(number) {
    // get each digits from input number
    let digits = number.toString().split('').map(Number);
    
    // get the target digit to swap, look for number that smaller than RHS number, starting from right
    let targetIndex = digits.length - 2;
    while(targetIndex >= 0 && digits[targetIndex] >= digits[targetIndex + 1]) {
        targetIndex--;
    }

    // if not found a pair of digit that LHS is smaller than RHS means cannot form next bigger number
    if(targetIndex === -1) 
        return -1;

    // get the smallest bigger number to swap with the digit
    let biggerDigitIndex = digits.length - 1;
    while(digits[biggerDigitIndex] <= digits[targetIndex]) {
        biggerDigitIndex--;
    }

    // swap the digits
    [digits[targetIndex], digits[biggerDigitIndex]] = [digits[biggerDigitIndex], digits[targetIndex]];

    // sort all digits to the right of targeted position in ascending order, so that it's smallest bigger value
    let sortedDigits = digits.splice(targetIndex + 1).sort((a, b) => a - b);

    // combine and convert back to integer
    let nextBiggerNumber = parseInt(digits.concat(sortedDigits).join(''));

    return nextBiggerNumber;
}

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
    // next bigger number test case
    console.log('--- Crispy Dollop - Test Case ---');
    let input1 = 12;
    console.log(`input: ${input1}, result: ${nextNumber(input1)}`);
    let input2 = 513;
    console.log(`input: ${input2}, result: ${nextNumber(input2)}`);
    let input3 = 2017;
    console.log(`input: ${input3}, result: ${nextNumber(input3)}`);
    let input4 = 9;
    console.log(`input: ${input4}, result: ${nextNumber(input4)}`);
    let input5 = 111;
    console.log(`input: ${input5}, result: ${nextNumber(input5)}`);
    let input6 = 531;
    console.log(`input: ${input6}, result: ${nextNumber(input6)}`);

    // 2d array clockwise travelling test case
    console.log('\n--- Scaling Umbrella - Test Case ---');
    let array1 = [[1,2,3],
                [4,5,6],
                [7,8,9]]
    console.log(`result: ${clockwiseTravelling(array1)}\n`);

    let array2 = [[1,2,3],
                [8,9,4],
                [7,6,5]]
    console.log(`result: ${clockwiseTravelling(array2)}\n`);

    let array3 = [[1,2,3,1],
                [4,5,6,4],
                [7,8,9,7],
                [7,8,9,7]]
    console.log(`result: ${clockwiseTravelling(array3)}\n`);
}

main();