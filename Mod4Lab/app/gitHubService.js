angular.module('gitHubService', ['ngResource'])
    .factory('gitHub',[
        '$resource',
        function($resource){
            return $resource('https://api.github.com/:action/:search/:id',
                            {
                                action: '@action',
                                id: '@id',
                                search: '@search'
                            },
                            {
                                getAll: {
                                    method: 'GET',
                                    isArray: true,
                                    params: { action: 'orgs', id: 'repos' }
                                },
                                getDetail: {
                                    method: 'GET',
                                    params: { action: 'repos' }
                                },
                            });
        }
    ]);