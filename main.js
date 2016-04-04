var generateCourseAccessData = require('CourseAccess/course-access-data.js').generate,
    generateToolAccessData = require('ToolAccess/tool-access-data.js').generate,
    generateToolAccessDataOrgUnit = require('ToolAccess/tool-access-data.js').generateOrgUnit,
    generateTotalLoginsData = require('TotalLogins/total-logins-data.js').generate,
    generateQuizData = require('Engagement/quizzing-data.js').generate,
    utils = require('Common/utils.js');

Sandbox.define('/v1/aggregates/90000/data','GET', function(req, res) {
    var result = generateToolAccessData();

    res.type('application/json');
    res.status(200);
    res.json(result);
});

Sandbox.define('/v1/aggregates/80000/data','GET', function(req, res) {
    var result = generateTotalLoginsData();

    res.type('application/json');
    res.status(200);
    res.json(result);
});

Sandbox.define('/v1/aggregates/{id}/data/{courseId}/Course Offering','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateCourseAccessData(req.params.courseId, undefined, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

Sandbox.define('/v1/aggregates/{id}/data/{courseId}','GET', function(req, res) {
    var result = generateToolAccessDataOrgUnit(req.params.courseId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

Sandbox.define('/v1/aggregates/{id}/data/{orgUnitId}/Quiz','GET', function(req, res) {
    var result = generateQuizData(req.params.orgUnitId);
    
    res.type('application/json');
    res.status(200);
    res.json(result);
});