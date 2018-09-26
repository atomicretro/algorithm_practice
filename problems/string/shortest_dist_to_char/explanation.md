# Shortest Distance to a Character
### Reasoning
To solve this problem I first find the indices of each instance of `char` in `str`, pushing them on array `charIndices`. After I know where each instance of `char` is, I then step through `str` again. In this second loop, I define a variable `shortest` to be equal to the length of the string, as that's the farther possible distance any two characters can be from each other. I then step through `charIndices`, comparing the absolute value of the current character's index ( `i` from the outer loop) subtracted from each index in `charIndices`. If the difference is smaller than the value of `shortest`, I replace `shortest` with it, as it will be closer to the shortest possible distance to `char` than the previous value. After I've looked at every index in `charIndices`, I push `shortest` onto a results array. Because the outer loop is run exactly one time for each character in `str`, and because the loop pushes onto the results array every time, the shortest distance value that is pushed onto the results array will always match up to the position of it's respective character in `str`.

### Analysis
Time Complexity: `O(n^2)`
* In the worst-case scenario, `str` would simply be the character `char` repeated over and over again. In that scenario, `charIndices` would be the same length as `str`, causing the double loop to run `n^2` times.

Space Complexity: `O(n)`
* In the same worst-case scenario described above, both `charIndices` and the results array would balloon out to be the same length as `str`. This would create a space complexity of `O(2n)`, which reduces to `O(n)`.
