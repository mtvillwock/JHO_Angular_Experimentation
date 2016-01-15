## Todo

1. Extract controller functions into services.
1. Revise controllers ala this [article](http://www.technofattie.com/2014/03/21/five-guidelines-for-avoiding-scope-soup-in-angular.html)
1. Extract HTML chunks into custom directives.
1. Write unit tests for custom directives.
1. Revise `a href` tags to `ui-sref` tags.
1. Fix header nav – `ng-if` and scope/state issues.
1. Funnel controllers and services into `services.js` and `controllers.js` to reduce number of scripts called when `index.html` loads.
1. Fix `/dashboard` route in API to use `.includes` to fix N+1 queries.
1. Rewrite Rails API using /api/v1 namespacing.