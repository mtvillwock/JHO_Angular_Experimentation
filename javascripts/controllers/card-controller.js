angular.module("JHO")
    .controller('CardController', ['$scope', '$http', 'API',
        function($scope, $http, API) {
            console.log("in CardController")
            $scope.modalShown = false;
            $scope.toggleModal = function() {
                // console.log("Toggle modal!!!")
                $scope.modalShown = !$scope.modalShown;
                // console.log($scope.modalShown);
            };

            this.delete = function(card) {
                console.log("card to delete", card);

                var element = document.getElementById('card' + card.id);
                console.log("card to element", element);
                element.parentNode.removeChild(element);

                for (var i = 0; i < $scope.board.lists.length; i++) {
                    if ($scope.board.lists[i].id == card.list_id) {
                        list = $scope.board.lists[i];
                        // console.log("list !!!", list);
                        for (var j = 0; j < list.cards.length; j++) {
                            if (list.cards[j].id == card.id) {
                                // console.log("found card: ", list.cards[j]);
                                list.cards.splice(j, 1);
                            }
                        };
                    }
                };
                // Need to also implement this for cards

                $scope.toggleModal()
                $http.delete(API + '/cards/' + card.id).success(function(response) {
                    console.log("response ", response);
                });
            }

            this.updateCard = function(card) {
                console.log("In updateCard function:", card)
                // Add in all card attributes, eventually
                $scope.toggleModal()
                $http.put(API + '/cards/' + card.id, {
                    card: {
                        title: card.title,
                        description: card.description,
                        organization_name: card.organization_name,
                        organization_summary: card.organization_summary,
                        position_description: card.position_description,
                        advocate: card.advocate,
                        position_applied_for: card.position_applied_for,
                        tech_stack: card.tech_stack,
                        glassdoor_rating: card.glassdoor_rating,
                        recent_articles: card.recent_articles,
                        priority: card.priority
                    }
                })
                    .success(function(response) {
                        console.log("updated card: ", response);
                    });

            };
            this.updateCardPriority = function(card) {
                // console.log("In updateCardPriority function:", card)

                for (var i = 0; i < $scope.allCards.length; i++) {
                    if ($scope.allCards[i].id == card.id) {
                        $scope.allCards[i].priority = 1;
                    }
                };

                $http.put(API + '/cards/' + card.id, {
                    card: {
                        priority: 1
                    }
                })
                    .success(function(response) {
                        console.log("updated card: ", response);
                    });

            };
        }
    ])