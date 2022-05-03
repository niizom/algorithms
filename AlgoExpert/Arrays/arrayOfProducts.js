// First solution
// Complexity: Time: O(n^2) || Space: O(n)

function arrayOfProducts1(array) {
    const output = [];
    let prod = 1;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (i === j) continue;
            prod *= array[j];
        }
        output.push(prod);
        prod = 1;
    }

    return output;
}

// Second solution
// Complexity Time: O(n) || Space: O(n)  (remove constants)
/*
    An approach that I am using here is like this: I take a number from a given array
    and multiply the products of the left and right sides of this number. But to do so
    I need to somehow calculate left and right products. Therefore, I have created two arrays
    for left and right products.

    Note: Left product for a number at index [0] if 1
          Right product for a number at last index is also 1
*/

function arrayOfProducts2(array) {
    const output = [];
    const left = [];
    const right = [];

    let leftProduct = 1;
    for (let i = 0; i < array.length; i++) {
        left[i] = leftProduct;
        leftProduct *= array[i];
    }

    let rightProduct = 1;
    for (let i = array.length - 1; i > -1; i--) {
        right[i] = rightProduct;
        rightProduct *= array[i];
    }

    for (let i = 0; i < array.length; i++) {
        output[i] = left[i] * right[i]
    }

    return output
}
