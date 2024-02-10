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

function main() {
    // next bigger number test case
    console.log(nextNumber(12));
    console.log(nextNumber(513));
    console.log(nextNumber(2017));
    console.log(nextNumber(9));
    console.log(nextNumber(111));
    console.log(nextNumber(531));
}

main();