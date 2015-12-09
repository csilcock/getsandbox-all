var generateCourseAccessData = require('CourseAccess/course-access-data.js').generate,
    generateToolAccessData = require('ToolAccess/tool-access-data.js').generate,
    generateTotalLoginsData = require('TotalLogins/total-logins-data.js').generate,
    utils = require('Common/utils.js');

/**
 *  Course Access Report Route
 */

Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/{id}','GET', function(req, res) {
    var result = generateTotalLoginsData();

    res.type('application/json');
    res.status(200);
    res.json(result);
});

Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/{id}/{courseId}/Course Offering','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateCourseAccessData(req.params.id, req.params.courseId, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});