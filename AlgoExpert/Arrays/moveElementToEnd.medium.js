// Complexity Time: O(n) || Space: O(1)

function moveElementToEnd(arr, toMove) {
    if (!arr.length) return arr;

    let l = 0;
    let r = 0;

    while (r < arr.length) {
        if (arr[r] !== toMove) {
            arr[l] = arr[r];
            l++;
            r++;
        } else {
            r++;
        }
    }

    while (l < arr.length) {
        arr[l] = toMove;
        l++
    }

    return arr
}
