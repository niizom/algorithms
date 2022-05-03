function longestPeak(arr) {
    let max = -Infinity;

    let inc = 0;
    let dec = 0;

    for (let i = 1; i < arr.length; i++) {
        let remainder = arr[i] - arr[i - 1];

        if (remainder > 0) {
            if (dec === 0) {
                inc += 1;
            } else {
                max = Math.max(max, inc + dec + 1);

                inc = dec = 0;
            }
        }

        if (remainder < 0 && inc) {
            dec += 1;
        }
    }

    if (inc > 0 && dec > 0) max = Math.max(max, inc + dec + 1);

    return max;
}
