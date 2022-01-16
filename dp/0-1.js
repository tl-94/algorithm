function test(N, Wt, wts, vals){
    const dp = [];
    for(let i = 0; i <= N;i++){
        dp.push(new Array(Wt + 1).fill(0))
    }

    for(let i = 1; i <= N;i++){
        for(let w = 1; w <= W;w++){
            if(w - wts[i] < 0){
                dp[i][w] =  dp[i - 1][w];
            }
            else dp[i][w] = Math.max(dp[i-1][w], dp[i-1][w - wts[i - 1]] + vals[i - 1]);
        }
    }

    return dp[N][W];
}