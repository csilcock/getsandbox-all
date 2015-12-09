var consts = require('../Common/consts.js').consts,
    getRandomLogins = require('../Common/utils.js').getRandomLogins;

var generate = function generate(orgUnit, roleId, start, end) {
    var results = {},
        startDate = new Date(start).setUTCHours(5,0,0,0),
        endDate = new Date(end).setUTCHours(5,0,0,0),
        dateDiff = endDate - startDate,
        roleIds = consts.ROLE_IDS;
        
    if (roleId){
        roleIds.push(roleId);
    }

    results[orgUnit] = {
        "Course Offering": {}
    };
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j < roleIds.length; j++){
        var role = roleIds[j];
        results[orgUnit]["Course Offering"][role.id] = {};
        
        for(var k = numVals; k >= 0; k--){
            var currTimestamp = endDate - consts.MS_PER_DAY * k;
            
            var day = new Date(currTimestamp).getDay();
            
            //todo: update this to use weighting based on role once role filtering is implimented in the FRA
            results[orgUnit]["Course Offering"][role.id][currTimestamp] = getRandomLogins(100, 0.01, consts.DAY_WEIGHTS[day]);
        }
    }
    
    return results;
};

module.exports = {
    'generate': generate
};