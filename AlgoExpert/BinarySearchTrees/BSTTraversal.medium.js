// Recursive solution
// Complexity Time: O(n) || Space: O(d)     (for all functions) (d is height tree)

function inOrderTraverse(tree, array) {
    const foo = (root) => {
        if (!root) return;
        foo(root.left);
        array.push(root.value);
        foo(root.right)
    }
    foo(tree);

    return array;
}

function preOrderTraverse(tree, array) {
    const foo = (root) => {
        if (!root) return;
        array.push(root.value);
        foo(root.left);
        foo(root.right)
    }
    foo(tree);

    return array;
}

function postOrderTraverse(tree, array) {
    const foo = (root) => {
        if (!root) return;
        foo(root.left);
        foo(root.right)
        array.push(root.value);
    }
    foo(tree);

    return array;
}

// Iterative solution will be later
