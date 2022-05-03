// First solution
// Complexity Time: O(n) || Space: O(n)     (always)

function findClosestValueInBst1(tree, target) {
    let min = Infinity;
    let res;

    const foo = (node) => {
        if (!node) return;

        if (min > Math.abs(node.value - target)) {
            min = Math.abs(node.value - target)
            res = node.value;
        }

        foo(node.left);
        foo(node.right);
    }
    foo(tree);

    return res
}


// Second solution
// Complexity: Time O(log(n)) || Space: O(log(n))     (average)

function findClosestValueInBst2(tree, target) {
    return helper(tree, target, tree.value);
}

function helper(node, target, closest) {
    if (!node) return closest;

    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
        closest = node.value;
    }

    if (target > node.value) return helper(node.right, target, closest);
    else if (target < node.value) return helper(node.left, target, closest);
    else return closest;
}


