app.controller('menuController',[
    '$scope',
    function($scope){
        $scope.model = {title: 'Our Menu'};
        $scope.dishes = [
            {name: 'Cheese Pizza ', price: 15.99},
            {name: 'Pepperoni Pizza ', price: 16.99},
            {name: 'Margherita Pizza ', price: 25.99},
            {name: 'BBQ Chicken Pizza ', price: 65.99},
            {name: 'Combo Pizza ', price: 12.99}, 
        ];
        
        $scope.changeMainDish = function(item){
            $scope.model.mainDish = item;
        }
        $scope.$watch('model.mainDish', function(newValue, oldValue){
            if (newValue == 'BBQ Chicken Pizza'){
                alert('You have selected ' + newValue);
            }
        })
        
    }
]);