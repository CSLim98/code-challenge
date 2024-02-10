# Code Challenge

Note: The solution is written using javascript.

Prerequisite: <br/>
[install Node.js](https://nodejs.org/en)

Run the code with:
> node index.js

## Crispy Dollop

Get the **next bigger** value by rearranging the digits of current integer.

### Problem: 
> Most of the solution will get the problem wrong by creating the **biggest value** instead of **next bigger value**.

### Solution:
> 1. Get the digits of the current integer.
> 2. Start from right, compare the digits two in a pair, find the targeted index that LHS value is smaller than RHS, which will be the digit needs to be swapped to make the number bigger.
> 3. If no targeted index found that can be swapped to create bigger value, return -1.
> 4. Find the smallest digit from the right of the targeted digit to create **next bigger** value.
> 5. Swap the two digits.
> 6. Sort all digits to the right of the target index in ascending order to make sure it will be the smallest increase to create **next bigger** value.

### Comment and Suggestion
Try on a solution without applying sorting to have a better performance for larger inputs.