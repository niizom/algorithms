// Complexity Time: O(nlog(n) + mlog(m)) || Space: O(1)

const absDistance = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    return Math.abs(max - min);
}

function smallestDifference(arr1, arr2) {
    arr1.sort((a,b) => a - b);
    arr2.sort((a,b) => a - b);

    let output = [];
    let min = +Infinity;

    let p1 = 0;
    let p2 = 0;

    while (p1 < arr1.length && p2 < arr2.length) {
        const distance = absDistance(arr1[p1], arr2[p2]);

        if (min > distance) {
            min = distance;
            output = [arr1[p1], arr2[p2]]
        }

        if (arr1[p1] <= arr2[p2]) {
            p1++;
        } else {
            p2++;
        }

    }

    return output;

}
