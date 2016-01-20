angular.module("JHO")
  .controller("AddOrganizationController", ['$scope', '$http', 'API', 'Card', 'List',
        function($scope, $http, API, Card, List) {
            var _this = this;
            _this.list1;
            _this.organization = {};

            function getFirstList() {
                var firstListId = document.getElementsByClassName('list')[0].getAttribute("data-id");
                List.get(firstListId)
                .then(function(response){
                    _this.list1 = response.data.list
                    _this.list1.cards = response.data.cards
                }, function(err) {
                    if (err) { console.log(err); }
                })
            }
            // on controller load
            getFirstList();

            _this.createCard = function(card, list_id) {
                var cardOptions = {
                    title: card.title,
                    list_id: list_id
                }

                Card.create(cardOptions)
                    .then(function(response) {
                        console.log("Cards#create returns card: ", response.data);
                        _this.list1.cards.pop();
                        _this.list1.cards.push(response.data);
                    },
                    function(err) {
                        console.log("failed to add organization", err);
                    })
            };

            _this.renderOrg = function(organization) {
                _this.list1.cards.push(organization);
                _this.organization = {}; // reset addOrgCtrl.organization ng-model

                var card = _this.list1.cards[_this.list1.cards.length - 1];
                console.log("in renderOrg, card to send to DB:", card);

                _this.createCard(card, _this.list1.id);
            };
        }
    ])