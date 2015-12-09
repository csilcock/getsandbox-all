var consts = require('../Common/consts.js').consts,
    getRandomLogins = require('../Common/utils.js').getRandomLogins;

var generate = function generate() {
    var results = {},
        endDate = new Date(Date.now()).setUTCHours(0,0,0,0),
        startDate = new Date(endDate - consts.MS_PER_YEAR).setUTCHours(0,0,0,0),
        dateDiff = endDate - startDate,
        roleIds = consts.ROLE_IDS;
        
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j < roleIds.length; j++){
        var role = roleIds[j];
        results[role.id] = {};
        for(var k = numVals; k >= 0; k--){
            var currTimestamp = endDate - consts.MS_PER_DAY * k;
            
            var day = new Date(currTimestamp).getDay();
            
            
            if (k == 360 || (k > 15 && k < 19)) //continue;
            results[role.id][currTimestamp] = getRandomLogins(100, role.useLevel, consts.DAY_WEIGHTS[day]);
        }
    }
    
    return results;
};

module.exports = {
    'generate': generate
};