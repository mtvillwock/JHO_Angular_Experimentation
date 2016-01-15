angular.module("JHO")
  .controller("AddOrganizationController", ['$scope', '$http', 'API', 'Card',
        function($scope, $http, API, Card) {
            this.organization = {};
            // this.list1_items = board1.lists[0];
            var newCard = function(card, list_id) {
                var cardOptions = {
                    title: card.title,
                    list_id: list_id
                }
                Card.create(cardOptions)
                    .success(function(card) {
                        // This needs to set the ID of the Card so that we can use the dropCallback that needs the card ID
                        console.log("Cards#create returns: ", card);

                        $scope.list1_items.cards.pop();
                        $scope.list1_items.cards.push(card);
                    })
                    .fail(function(err) {
                        console.log("failed to add organization", err);
                    })
            };

            this.addOrganization = function(list1_items) {
                console.log("adding Organization in addOrgCtrl")
                // reset addOrgCtrl.organization ng-model
                $scope.list1_items.cards.push(this.organization);
                this.organization = {};

                var card = $scope.list1_items.cards[$scope.list1_items.cards.length - 1];
                console.log("card to send to DB:", card);
                var list_id = $scope.list1_items.id

                newCard(card, list_id);
            };

        }
    ])