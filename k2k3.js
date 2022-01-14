const test = (n) => {
    let arr = [1];

    let a = 0, b = 0;

    for(let i = 1; i <= n; i++){
        let dp_3k = arr[a] * 3 + 1, dp_2k = arr[b] * 2 + 1;

        arr[i] = Math.min(dp_3k, dp_2k);

        if(arr[i] == dp_2k)b++
        if(arr[i] == dp_3k)a++
    }

    return arr[n]
}

test(10); //22