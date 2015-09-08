Note 1: Following is a possible direction for compacting the board code

<div class="col-6 panel board" ng-controller="BoardController as boardCtrl" ng-show="panel.isSelected(1)" >

  <h1>{{boardCtrl.board.name}} </h1>

    <div ng-repeat="list in boardCtrl.board.lists" id="{{list.name}}" >

      <div ng-if="list.numOfSubCols == 0">
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

      <div ng-if="list.numOfSubCols == 2">
        <div>
          <h3> </h3>

        </div>
      </div>


      <div ng-if="list.name == 'interested-col'">
        <form id="board-form" name="addOrganizationForm" ng-controller="AddOrganizationController as addOrgCtrl" ng-submit="addOrganizationForm .$valid && addOrgCtrl.addOrganization(list1_items)" novalidate>
          <input ng-model="addOrgCtrl.organization.title" type="text" placeholder="New Organization" required/>
          <input type="submit" value="Add" />
        </form>
      </div>

    </div>
</div>