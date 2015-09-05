Note 1:

    <div ng-repeat="list in boardCtrl.board.lists" id="{{list.name}}" >
    <h3>{{list.name}}</h3>
    <div dnd-list="list.cards" >
      <ul dnd-allowed-types="['card']">
        <li ng-repeat="card in list.cards" dnd-draggable="card"
            dnd-effect-allowed="move"
            dnd-type="card"
            dnd-moved="list.cards.splice($index, 1)"
        >{{card.title}}</li>
      </ul>
    </div>