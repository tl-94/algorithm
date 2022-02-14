/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    const res = [];

    let leftToRightMap = new Map();
    for(let i = 0; i < intervals.length; i++){

        if(leftToRightMap.has(intervals[i][0])){
            if(leftToRightMap.get(intervals[i][0]) < intervals[i][1] )
                leftToRightMap.set(intervals[i][0], intervals[i][1]);
        }else{
            leftToRightMap.set(intervals[i][0], intervals[i][1]);
        }
    }

    intervals = intervals.sort((a,b) => a[0] - b[0])

    // return;

    let prevleft = intervals[0][0];

    // res.push([prevleft, leftToRightMap.get(prevleft)])

    for(let i = 1; i < intervals.length; i++){
        //如果当前区间左端点小于待添加区间右端点  
        if(intervals[i][0] <= leftToRightMap.get(prevleft)){

            //并且 当前区间右端点大于待添加区间右端点，则更新待添加区间右端点
            if(intervals[i][1] > leftToRightMap.get(prevleft)){
                leftToRightMap.set(prevleft, intervals[i][1])
            }

            continue
        }




        res.push([prevleft, leftToRightMap.get(prevleft)]);
        prevleft = intervals[i][0];
        
    }

    if(res.length == 0){
        res.push([prevleft, leftToRightMap.get(prevleft)]);
    }else{
        prevleft > res[res.length - 1][1] && res.push([prevleft, leftToRightMap.get(prevleft)]);
    }



    return res;
};