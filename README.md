# code-challenge

## Scaling Umbrella

### Problem: 
> Travel 2D-array in clockwise from outer to inner elements.

### Solution:
> 1. Initialize empty array to store result.
> 2. Use while loop to loop through outer layer to inner layer of the 2D-array.
> 3. In the while loop, create four loop to travel top, right, bottom, and left element in sequence and push the element to the result array. After each loop completed, update the row or col position to point to next inner layer.

### Comment and Suggestion
Try on a solution with recursive function instead of looping.