app.controller('labController', [
    '$scope', '$timeout', '$q', '$http', 'gitHub',
    function ($scope, $timeout, $q, $http, github) {
        $scope.model = {
            number: 0,
            result: 'Ready',
            search: null,
            githubFetchFail: false
        };

        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;
        
        function checkOddNumber(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler(input).then(function (result) {
                $scope.model.result = 'Success: ' + result;
            }, function (result) {
                $scope.model.result = 'Error: ' + result;
            })
        }

        function loadDetail(name) {
            $scope.model.detail = null;
            github.getDetail({ search: $scope.model.currentOrg, id: name }).$promise.then(function(result){
                $scope.model.detail = result;
            });

        }

        function getRepos() { 
            $scope.model.githubFetchFail = false;
            $scope.model.detail = null;
            $scope.model.repos = null;
            $scope.model.currentOrg = $scope.model.search;
            github.getAll({search: $scope.model.search})
                .$promise.then(function(result){
                            $scope.model.repos = result;
                        }).catch(function(result){
                            $scope.model.githubFetchFail = true;
                            $scope.model.repos = null;
                        })
        }

        function checkOddNumberHandler(input){
            var defer = $q.defer();

            $timeout(function () {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }
    }
]);