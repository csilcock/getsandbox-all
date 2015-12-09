var consts = {
    MS_PER_DAY: 86400000,
    MS_PER_YEAR: 31536000000,
    MAX_RESULTS: 90,
    VARIANCE: 5,
    VOLUME: 5,
    ROLE_IDS:[
        {
            'id':578, // EndUser
            'useLevel':200,
            'tools':[
                {
                    'id':51000, // Quizzing
                    'useLevel':6
                },
                {
                    'id':37000, // Content
                    'useLevel':4.8
                },
                {
                    'id':2000, // Dropbox
                    'useLevel':4.5
                },
                {
                    'id':13000, // Grades
                    'useLevel':3.75
                },
                {
                    'id':437000, // Kaltura
                    'useLevel':3.5
                },
                {
                    'id':3000, // Discussions
                    'useLevel':3
                },
                {
                    'id':4000, // News
                    'useLevel':2
                },
                {
                    'id':11000, // Classlist
                    'useLevel':2
                },
                {
                    'id':32000, // Survey
                    'useLevel':1
                }
            ] 
        },
        {
            'id':579, // Instructor
            'useLevel':5,
            'tools':[
                {
                    'id':51000, // Quizzing
                    'useLevel':5
                },
                {
                    'id':37000, // Content
                    'useLevel':4
                },
                {
                    'id':2000, // Dropbox
                    'useLevel':4.25
                },
                {
                    'id':13000, // Grades
                    'useLevel':3.75
                },
                {
                    'id':437000, // Kaltura
                    'useLevel':3.5
                },
                {
                    'id':3000, // Discussions
                    'useLevel':3
                },
                {
                    'id':4000, // News
                    'useLevel':2
                },
                {
                    'id':11000, // Classlist
                    'useLevel':2
                },
                {
                    'id':32000, // Survey
                    'useLevel':1
                }
            ]
        },
        {
            'id':580, // Administrator
            'useLevel':1,
            'tools':[
                {
                    'id':51000, // Quizzing
                    'useLevel':3
                },
                {
                    'id':37000, // Content
                    'useLevel':3
                },
                {
                    'id':2000, // Dropbox
                    'useLevel':1
                },
                {
                    'id':13000, // Grades
                    'useLevel':2
                },
                {
                    'id':4000, // News
                    'useLevel':2
                },
                {
                    'id':11000, // Classlist
                    'useLevel':3
                },
                {
                    'id':32000, // Survey
                    'useLevel':1
                }
            ]
        },
        {
            'id':581, // Alumni
            'useLevel':1,
            'tools':[
                {
                    'id':37000, // Content
                    'useLevel':5
                },
                {
                    'id':437000, // Kaltura
                    'useLevel':3.5
                },
                {
                    'id':3000, // Discussions
                    'useLevel':2
                },
                {
                    'id':4000, // News
                    'useLevel':3
                }
            ]
        },
        {
            'id':582, // Teaching Assistant
            'useLevel':10,
            'tools':[
                {
                    'id':51000, // Quizzing
                    'useLevel':2
                },
                {
                    'id':37000, // Content
                    'useLevel':3
                },
                {
                    'id':2000, // Dropbox
                    'useLevel':4.5
                },
                {
                    'id':13000, // Grades
                    'useLevel':4
                },
                {
                    'id':437000, // Kaltura
                    'useLevel':1
                },
                {
                    'id':3000, // Discussions
                    'useLevel':4.3
                },
                {
                    'id':4000, // News
                    'useLevel':2
                },
                {
                    'id':32000, // Survey
                    'useLevel':2
                }
            ]
        }
    ],
    DAY_WEIGHTS:[
        1, // Monday
        1, // Tuesday
        0.9,  // Wednesday
        0.8,  // Thursday
        0.6,  // Friday
        0.3,  // Saturday
        0.5  // Sunday
    ]
};

module.exports = {
    'consts': consts
}; 