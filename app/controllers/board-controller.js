angular.module("JHO", [])
    .controller('BoardController', function() {
        this.board = board1;
        this.list1_items = list1_items;
    })


.controller("AddOrganizationController", function() {
    this.organization = {};
    this.list1_items = list1_items;

    this.addOrganization = function(list1_items) {
        this.list1_items.push(this.organization);
        this.organization = {};
    };
})

var board1 = {
    name: "Test Board Title",
    description: '...'
}

var list1_items = [{
    title: "Google"
}, {
    title: "Wired"
}, {
    title: "TheGreatBlue"
}, ]