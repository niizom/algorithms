// Complexity Time: O(n) || Space: (d)      (d is height of tree)

function validateBst(node, min = -Infinity, max = Infinity) {
    if (!node) return true;

    if (node.value >= max || node.value < min) return false;

    return validateBst(node.left, min, node.value) && validateBst(node.right, node.value, max)
}
