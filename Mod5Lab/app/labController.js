app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;

        reset();

        function submit(model) {
            console.log(model);
            registration.submit(model).$promise
                .then(function (response) {
                    alert('success');
                    reset();
                    $scope.model.token = response.token;
                },
                function (response) {
                    alert('error');
                });
        }

        function reset() {
            $scope.model = {};
        }
    }
]);