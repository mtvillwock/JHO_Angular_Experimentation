(function() {
  var app = angular.module("jho",[]);

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(newActiveTab) {
      this.tab = newActiveTab;
    };

    this.isSelected = function(tabToCheck) {
      return this.tab === tabToCheck;
    };
  });

  app.controller('BoardController',function(){
    this.board = board1;
    this.list1_items = list1_items;
  });

  app.controller("AddOrganizationController", function(){
    this.organization = {};
    this.list1_items = list1_items;

    this.addOrganization = function(list1_items) {
      this.list1_items.push(this.organization);
      this.organization = {};
    };
  });

  var board1 = {
    name: "Test Board Title",
    description: '...'
  }
  var list1_items = [
    { title: "Google"},
    { title: "Wired"},
    { title: "TheGreatBlue"},
  ]

})();



