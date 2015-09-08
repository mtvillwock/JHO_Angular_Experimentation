angular.module("JHO",[])
.controller("AddOrganizationController", function() {
    this.organization = {};
    this.list1_items = list1_items;

    this.addOrganization = function(list1_items) {
        this.list1_items.push(this.organization);
        this.organization = {};
    };
})