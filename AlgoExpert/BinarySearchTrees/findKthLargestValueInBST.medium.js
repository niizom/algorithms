// First Solution

function findKthLargestValueInBst1(tree, k) {
    let res = Array(k - 1);

    const helper = (node) => {
        if (!node) return;

        helper(node.left);

        if (res[res.length-1]) {
            res.shift();
            res.push(node.value)
        } else {
            res.push(node.value)
        }

        helper(node.right);
    }

    helper(tree);

    return res[0];
}


// Second solution
// Complexity Time: O(h + k) || Space: O(h)

function findKthLargestValueInBst2(tree, k) {
    let counter = 1;
    let res;

    const helper = (node) => {
        if (!node) return;

        helper(node.right);

        if (counter === k) {
            res = node.value;
            counter += 1;
            return;
        }
        if (counter > k) return;
        counter += 1;

        helper(node.left);
    }

    helper(tree)

    return res;
}
