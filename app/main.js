angular.module("JHO", ['ngRoute', 'jho-routes', 'jho-drag-drop', 'jho-auth'])
.config(function($httpProvider) {
  $httpProvider.defaults.headers.common({
    "Accept": "application/json, text/plain, * / *",
    "Content-Type": "application/json"
  })
})