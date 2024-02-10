# Code Challenge

Note: The solution is written using javascript.

Prerequisite: <br/>
[install Node.js](https://nodejs.org/en)

Run the code with:
> node index.js

## Crispy Dollop

### Problem: 
> Get the **next bigger** value by rearranging the digits of current integer.

### Solution:
> 1. Get the digits of the current integer.
> 2. Start from right, compare the digits two in a pair, find the targeted index that LHS value is smaller than RHS, which will be the digit needs to be swapped to make the number bigger.
> 3. If no targeted index found that can be swapped to create bigger value, return -1.
> 4. Find the smallest digit from the right of the targeted digit to create **next bigger** value.
> 5. Swap the two digits.
> 6. Sort all digits to the right of the target index in ascending order to make sure it will be the smallest increase to create **next bigger** value.

### Comment and Suggestion
Try on a solution without applying sorting to have a better performance for larger inputs.

<br/>

## Scaling Umbrella

### Problem: 
> Travel 2D-array in clockwise from outer to inner layer.

### Solution:
> 1. Initialize empty array to store result.
> 2. Use while loop to loop through outer layer to inner layer of the 2D-array.
> 3. In the while loop, create four loop to travel top, right, bottom, and left element in sequence, push the element into result array.
> 4. After each loop completed, update the row or col to next inner layer.

### Comment and Suggestion
Try on a solution with recursive function instead of looping, but resursive solution might be harder for other developer to understand.