angular.module('appraga.services', [])


// TODO usar esses services ao invés de usar o http.get em cada controller
// TESTING AREA - please be carefull
.service('plantasjson', function($http) {
    $http.get('/js/plantas.json')
    .then(function(response) {
        var plantas =  response.data
        return plantas;
    });
})

.service('pragasjson', function($http) {
    $http.get('/js/pragas.json')
    .then(function(response) {
        return response.data;
    });
})

.service('manejosjson', function($http) {
    $http.get('/js/manejos.json')
    .then(function(response) {
        return response.data;
    });
})

