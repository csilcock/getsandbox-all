var consts = require('consts.js').consts;

var parseDates = function(startDate, endDate){
    var startTime = startDate === undefined || startDate === null ? 
            Math.max(0, new Date().getTime() - consts.MS_PER_DAY * consts.MAX_RESULTS) : 
            parseInt(startDate),
            
        endTime = endDate === undefined ? 
            new Date().getTime() : 
            parseInt(endDate);
            
    return {
        "startTime":startTime, 
        "endTime":endTime
    };
};

var getRandomLogins = function getRandomLogins(baseRange, useLevel, modifier) {
    modifier = modifier || 1;
    
    return (Math.round(((Math.random() * consts.VOLUME + consts.VARIANCE) * baseRange * useLevel) * modifier)).toString();
};

module.exports = {
    'parseDates': parseDates,
    'getRandomLogins': getRandomLogins
};