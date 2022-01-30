/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    const sortInterval = intervals.sort((a,b) => a[1] - b[1]);
    // console.log(sortInterval);
    let prev_max_end = sortInterval[0][1];
    let count = 0;
    for(let i = 1; i < intervals.length;i++){
        const curStart = sortInterval[i][0];
        if(curStart < prev_max_end){
            count++;
        }else{
            prev_max_end = sortInterval[i][1]
        }
    }

    return count;
};