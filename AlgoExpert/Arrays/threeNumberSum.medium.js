// Sort array first and serach
// Complexity Time: O(n^2) || Space: O(n)

function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
    let output = [];
    for (let i = 0; i < array.length; i++) {
        let l = i+1;
        let r = array.length - 1;
        while(l < r) {
            let sum = array[i] + array[l] + array[r];
            if (sum === targetSum) {
                output.push([array[i], array[l], array[r]]);
                l++;
                r--;
            }
            if (sum > targetSum) r--;
            if (sum < targetSum) l++;
        }
    }

    return output;
}
