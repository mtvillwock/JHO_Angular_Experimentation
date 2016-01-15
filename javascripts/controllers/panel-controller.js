angular.module("JHO")
    .controller("PanelController", function() {
        this.tab = 1;

        this.selectTab = function(newActiveTab) {
            this.tab = newActiveTab;
        };

        this.isSelected = function(tabToCheck) {
            return this.tab === tabToCheck;
        };
    });