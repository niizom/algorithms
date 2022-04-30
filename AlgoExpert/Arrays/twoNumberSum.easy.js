// First solution
// sort array first and by using left and right pointer find solution
// Complexity Time: O(log(n)) || Space: O(1)

function twoNumberSum1(array, targetSum) {
    array.sort((a,b) => a - b);
    let l = 0;
    let r = array.length - 1;

    for(let i = 0; i < array.length; i++) {
        let sum = array[l] + array[r];

        if (sum === targetSum) return [array[l], array[r]];

        if (sum > targetSum) r--;
        if (sum < targetSum) l++;
    }

    return [];
}

// Second solution
// create a set to store remainders
// Complexity Time: O(n) || Space: O(n)

function twoNumberSum2(array, targetSum) {
    let set = new Set();

    for (let i of array) {
        let remainder = targetSum - i;
        if(set.has(remainder)) {
            return [remainder, i]
        } else {
            set.add(i)
        }
    }

    return [];
}
