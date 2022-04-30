// Complexity Time: O(n) || Space: O(1)

function isValidSubsequence(a, s) {

    let j = 0;
    for (let i = 0; i < a.length; i++) {
        if (s[j] === a[i]) {
            j++;
        }
    }

    return j === s.length;
}
