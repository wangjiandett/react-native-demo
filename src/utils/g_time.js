/**
 * Created by Administrator on 2018/3/22.
 */


const TimeUtils = []

TimeUtils.formatFullTime = function(timeMills){
    var time = new Date(timeMills).format("yyyy-MM-dd hh:mm:ss");
    return time
}

export default TimeUtils;






