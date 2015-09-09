angular.module("JHO").controller('BoardController',function(){
    this.board = board1;
    this.list1_items = board1.lists[0];
    // console.log("board1")
  });

// var board1 = {
//     name: "Test Board Title",
//     description: '...'
// }

// var list1_items = [{
//     title: "Google"
// }, {
//     title: "Wired"
// }, {
//     title: "TheGreatBlue"
// }, ]


// angular.module("JHO", [])
//     .controller('BoardController', function() {
//         this.board = board1;
//         this.list1_items = list1_items;
//     })


// angular.module('JHO', ['dndLists'])

//     // start boardController
//     .controller('BoardController', function() {
//         var board = this;
//         // should we do board.models.lists or boards.lists.cards etc.?
//         board.lists = [{
//             title: "Interested In"
//             // name: "Interested In"
//         }, {
//             title: "Applied"
//             // title: "Applied"
//         }, {
//             name: "Interviewed"
//             // title: "Interviewed"
//         }]
//     }) // End of boardController
