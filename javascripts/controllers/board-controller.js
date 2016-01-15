angular.module("JHO")
  .controller('BoardController', ['$http', '$scope', 'API', 'Board',
        function($http, $scope, API, Board) {
            var _this = this;
            _this.board = {};
            _this.list1_items = [];
            _this.allCards = [];

            function getBoard() {
                console.log("in getBoard")
                Board.dashboard()
                    .then(function(response) {
                        console.log("Entire dashboard: ", response)
                        _this.board = response.data.board;
                        _this.list1_items = _this.board.lists[0]
                        _this.allCards = response.cards;
                    }, function(err) {
                        console.log("error fetching dashboard", err);
                    });
            }

            getBoard();

            this.updateCardPosition = function(event, index, card, list_id) {
                console.log("in updateCardPosition")
                console.log("event,index,card, list_id", event, index, card, list_id);

                card.list_id = list_id; // update Card in DOM
                console.log("card passed to movement creation", card)
                Movement.create(card)
                    .then(function(response) {
                        // response.movement and response.card
                        console.log("moved card: ", response);
                        card = response.card;
                        console.log("card with new priority and position is: ", card);
                    }, function(err) {
                        console.log("error creating movement", err);
                    });
            };
        }
    ])