app.constant( 'toppingBgs', ['#E57373', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5']);
app.constant( 'availableToppings', ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 
                                    'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 
                                    'Olives', 'Green Peppers'] 
            )
app.factory('toppingFactory', [
    'toppingBgs', 'availableToppings', 
    function (toppingBgs, availableToppings){
        var getToppingBg = function(){
            col = toppingBgs[Math.floor(Math.random()*toppingBgs.length)];
            return col;
        }

        var result = [];
        for(var i = 0; i < availableToppings.length; i++){
            result.push({name: availableToppings[i], color: getToppingBg()});
        }
        return result;
    }
])
app.controller('pizzaController', [
    '$scope', 'toppingFactory',
    function ($scope, toppingFactory) {
        $scope.model = { 
            title: 'Pizza Builder',
            availableToppings: toppingFactory,
            selectedToppings: [],
            search: null,
            addedMessage: false,
            addedTopping: false
            };
        
        $scope.addTopping = function(t){
            $scope.model.selectedToppings.push(t);
            $scope.model.search = null;
            $scope.model.addedTopping = true
        }
        
    }
]);
