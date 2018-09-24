# Sort By Parity
### Reasoning
Because ordering does not matter for this problem, I knew the only real computation would be figuring whether a given element of `arr` was even or odd. That is simply done by checking the remainder of `element % 2`; if the remainder is 0 then the element is even. I stepped through the input array checking each element's parity, and then either unshifted the element to a results array if it was even to put it at the beginning, or pushed it to the results array if it was odd to put it at the end.

### Alternative Approach
If ordering mattered I could control it by creating two separate results arrays, `sorted_even` and `sorted_odd`. I would then step through the input array in the same manner, adding each element to a sorted array based on whether they were even or odd, and whatever further ordering constraint was added. Concatenating and returning `sorted_odd` to `sorted_even` would finish the problem up.

### Analysis
Time Complexity: `O(n)`
* I have to step through each element of the input array exactly once to determine if it's even or odd, giving this solution a time complexity of `O(n)`.

Space Complexity: `O(n)`
* The results array will be exactly as long as the input array, giving this solution a space complexity of `O(n)`.
