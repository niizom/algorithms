// Complexity Time: O(n) || Space: O(n)

function isMonotonic(array) {
    let inc = 0;
    let dec = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            dec += 1;
        }
        if (array[i - 1] < array[i]) {
            inc += 1;
        }
    }

    if (inc === 0 && dec === 0) return true;
    if (inc === 0 && dec > 0) return true;
    if (dec === 0 && inc > 0) return true;

    return false
}
