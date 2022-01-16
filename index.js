

function arrIndex(N){
    let res = [1];

    const queue1 = [3], queue2 = [4];

    const resCache = new Set(res);

    while(res.length <= N){
        let curQueue = null;
        if(queue1[0] < queue2[0]){
            curQueue = queue1
        }else{
            curQueue = queue2
        }
        const resVal = curQueue.shift();
        if(resCache.has(resVal)){
            continue;
        }
        const val1 = resVal * 2 +1, val2 = resVal * 3 +1;
        insertBack(curQueue, val1)
        insertBack(curQueue, val2)
        console.log(...curQueue);
        res.push(resVal);
        resCache.add(resVal)
    }

    return res[N];
}

console.log(arrIndex(100));

function insertBack(arr, val){
    let index = arr.length - 1;
    if(index < 0){
        arr.push(val);
        return
    }
    while(arr[index] > val){
        index--;
    }
    if(arr[index] != val)
        arr.splice(index + 1,0,val)
}



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