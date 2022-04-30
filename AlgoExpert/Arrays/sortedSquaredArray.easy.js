// First solution
// first square all numbers and sort them
// Complexity Time: O(log(n)) || Space: O(1)


function sortedSquaredArray1(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i], 2)
    }

    array.sort((a,b) => a - b)

    return array;
}

// Second solution
// Compare numbers absolute values and push them into output array from the end
// Complexity Time: O(n) || Space: O(n)

function sortedSquaredArray2(array) {
    const length = array.length;
    let l = 0;
    let r = length - 1;
    let k = length - 1;

    let output = Array(length);

    while(l <= r) {
        if(Math.abs(array[l]) > Math.abs(array[r])) {
            output[k] = (array[l] ** 2);
            l++;
        } else {
            output[k] = (array[r] ** 2);
            r--;
        }
        k--;
    }

    return output;
}
