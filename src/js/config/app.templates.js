angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/home.html","<div class=\"col-xs-12\">\r\n    <h2 class=\"col-xs-12\">Stack Overflow Questions</h2>\r\n    <div class=\"col-xs-12 col-sm-6 offset-0 \">\r\n    		<div class=\"col-xs-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"$ctrl.inputQuery\" /></div>\r\n    		<button type=\"button\" ng-click=\"$ctrl.searchQuestions()\" class=\"btn btn-default\">Search</button>\r\n    </div>\r\n    <div class=\"col-xs-12\" ng-if=\"$ctrl.questions.length > 0\">\r\n        <h1>Results</h1>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item col-xs-12 col-sm-6 \" ng-repeat=\"question in $ctrl.questions\">\r\n                <div class=\"col-xs-12\">\r\n                    <h3 class=\"title text-center\" title=\"{{question.title}}\">{{question.title}}</h3>\r\n                    <ul class=\"col-xs-12 question-details\">\r\n                        <li><label>Question Score:</label> <span>{{question.score}}</span></li>\r\n                        <li ng-if=\"question.is_answered\"><label>Answer:</label> <a href=\"http://stackoverflow.com/a/{{question.accepted_answer_id}}\" class=\"console-link\" target=\"_blank\" title=\"link to answer\">{{question.accepted_answer_id}}</a></li>\r\n                        <li><label>Number of Views:</label> <span>{{question.view_count}}</span></li>\r\n                        <li><label>Tags:</label> <span ng-repeat=\"tag in question.tags\">&nbsp;{{tag}}&nbsp</span></li>\r\n                        <li><label>Asked Time:</label> <span>{{question.creation_date | date:\'short\'}}</span></li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n    </div>\r\n");
$templateCache.put("layout/app-view.html","<div class=\"row\">\r\n    <div class=\"col-xs-12\" ui-view=\"\">\r\n\r\n    </div>\r\n</div>");}]);