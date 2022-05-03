// Complexity Time: O(n) || Space: O(n)

function minHeightBst(array) {
    let bst = null;

    const func = (arr) => {
        if (arr.length < 1) return;

        let mid = Math.round(arr.length / 2) - 1;

        if(!bst) {
            bst = new BST(arr[mid])
        } else {
            bst.insert(arr[mid])
        }

        func(arr.slice(0, mid));
        func(arr.slice(mid + 1));
    }

    func(array);

    return bst;
}
