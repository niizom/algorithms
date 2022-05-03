// Complexity Time: O(n) || Space: O(n)

const func = (data, head) => {
    if (data >= head.value) {
        if (head.right) {
            func(data, head.right)
        } else {
            head.right = new BST(data)
        }
    } else {
        if (head.left) {
            func(data, head.left)
        } else {
            head.left = new BST(data)
        }
    }
}

function reconstructBst(arr) {
    let head = new BST(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        func(arr[i], head)
    }


    return head;
}
