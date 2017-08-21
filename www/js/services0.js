(function () {

  var app = angular.module('appraga.services', []);

app.service('pragasServices', function($q, $http){
  var pragas = this;
  pragas.listaPragas = [];
  pragas.pragaDetalhada = {};
  pragas.pragaSelecionada = [];

  pragas.getTodasPragas = function(){
    var defer = $q.defer();
    // $http.get('https://api.mlab.com/api/1/databases/appraga/collections/pragas?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/pragas?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
      if (Object.keys(response.data).length == 0 ) {
        defer.reject(response.data);
      } else {
        angular.forEach(response.data, function(carregar){
          pragas.listaPragas.push(carregar);
          defer.resolve(carregar);
        });
      }
    }, function(error) {
      // alert("Server returns response with an error status.");
      // console.log('error:', error);
      defer.reject(error);
    });
    return defer.promise;
  }

  pragas.getPragaDetalhada = function(pragaId){
    var defer = $q.defer();
    var pragaIdJson = angular.toJson(pragas.listaPragas[pragaId]._id);
    // $http.get('https://api.mlab.com/api/1/databases/appraga/collections/pragas?q={%22id%22:%20%22'+ pragaId +'%22}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/pragas?q={_id:'+pragaIdJson+'}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
        pragas.pragaDetalhada = response.data;
        defer.resolve(response);
    }, function(response) {
      alert("Server returns response with an error status.");
      defer.reject(response);
    });
    return defer.promise;
  }

  pragas.getPlantasOfPraga = function(pragaId){
    var defer = $q.defer();
    var plantaIdJson;
    angular.forEach(pragas.listaPragas[pragaId].plantas, function(planta){
      plantaIdJson = angular.toJson(planta);

      $http.get('https://api.mlab.com/api/1/databases/appraga/collections/plantas?q={_id:'+plantaIdJson+'}&s={"_id": 1}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
      .then(function(response){
        angular.forEach(response.data, function(carregar){
          pragas.pragaSelecionada.push(carregar);
          defer.resolve(response);
        });
      }, function(response) {
        alert("Server returns response with an error status.");
        defer.reject(response);
      });
    });
    return defer.promise;
  }

  // console.log("Chegou pragasServices",pragas);
  return pragas;
});

app.service('doencasServices', function($q, $http){
  var doencas = this;
  doencas.listaDoencas = [];
  doencas.doencaDetalhada = {};
  doencas.doencaSelecionada = [];

  doencas.getTodasDoencas = function(){
    var defer = $q.defer();
    // $http.get('https://api.mlab.com/api/1/databases/appraga/collections/doencas?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/doencas?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
      if (Object.keys(response.data).length == 0 ) {
        defer.reject(response.data);
      } else {
        angular.forEach(response.data, function(carregar){
          doencas.listaDoencas.push(carregar);
          defer.resolve(carregar);
        });
      }
    }, function(error) {
      // alert("Server returns response with an error status.");
      // console.log('error:', error);
      defer.reject(error);
    });
    return defer.promise;
  }

  doencas.getDoencaDetalhada = function(doencaId){
    var defer = $q.defer();
    var doencaIdJson = angular.toJson(doencas.listaDoencas[doencaId]._id);
    // $http.get('https://api.mlab.com/api/1/databases/appraga/collections/doencas?q={%22id%22:%20%22'+ doencaId +'%22}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/doencas?q={_id:'+doencaIdJson+'}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
        doencas.doencaDetalhada = response.data;
        defer.resolve(response);
    }, function(response) {
      alert("Server returns response with an error status.");
      defer.reject(response);
    });
    return defer.promise;
  }

  doencas.getPlantasOfDoenca = function(doencaId){
    var defer = $q.defer();
    var plantaIdJson;
    angular.forEach(doencas.listaDoencas[doencaId].plantas, function(planta){
      plantaIdJson = angular.toJson(planta);

      $http.get('https://api.mlab.com/api/1/databases/appraga/collections/plantas?q={_id:'+plantaIdJson+'}&s={"_id": 1}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
      .then(function(response){
        angular.forEach(response.data, function(carregar){
          doencas.doencaSelecionada.push(carregar);
          defer.resolve(response);
        });
      }, function(response) {
        alert("Server returns response with an error status.");
        defer.reject(response);
      });
    });
    return defer.promise;
  }

  // console.log("Chegou doencasServices",doencas);
  return doencas;
});

app.service('plantasServices', function($q, $http){
  var plantas = this;
  plantas.listaPlantas = [];
  plantas.plantaDetalhada = {};
  plantas.plantaSelecionada = [];

  plantas.getTodasPlantas = function(){
    var defer = $q.defer();
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/plantas?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
      if (Object.keys(response.data).length == 0 ) {
        defer.reject(response.data);
      } else {
        angular.forEach(response.data, function(carregar){
          plantas.listaPlantas.push(carregar);
          defer.resolve(carregar);
        });
      }
    }, function(error) {
      // console.log(error);
      // alert("Server returns response with an error status.");
      defer.reject(error);
    });
    // console.log('promise:',defer.promise);
    return defer.promise;
  }

  plantas.getPlantaDetalhada = function(plantaId){
    var defer = $q.defer();
    var plantaIdJson = angular.toJson(plantas.listaPlantas[plantaId]._id);
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/plantas?q={_id:'+plantaIdJson+'}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
      plantas.plantaDetalhada = response.data;
      defer.resolve(response);
    }, function(response) {
      alert("Server returns response with an error status.");
      defer.reject(response);
    });
    return defer.promise;
  }

  plantas.getPragasOfPlanta = function(plantaId){
    var defer = $q.defer();
    // var plantaIdJson = angular.toJson(plantas.listaPlantas[plantaId-1].pragas);
    var pragaIdJson;
    angular.forEach(plantas.listaPlantas[plantaId].pragas, function(praga){
      pragaIdJson = angular.toJson(praga);
      // console.log(pragaIdJson);

      $http.get('https://api.mlab.com/api/1/databases/appraga/collections/pragas?q={_id:'+pragaIdJson+'}&s={"_id": 1}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
      .then(function(response){
        angular.forEach(response.data, function(carregar){
          plantas.plantaSelecionada.push(carregar);
          defer.resolve(carregar);
        });
      }, function(response) {
        alert("Server returns response with an error status.");
        defer.reject(response);
      });
    });
    return defer.promise;
  }
  // console.log("Chegou plantasServices",plantas);
  return plantas;
});

app.service('manejosServices', function($q, $http){
  var manejos = this;
  manejos.listaManejos = [];
  manejos.manejoDetalhado = {};
  manejos.pragaSelecionada = [];
  manejos.plantaSelecionada = [];

  manejos.getTodosManejos = function(){
    var defer = $q.defer();
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/manejos?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
      if (Object.keys(response.data).length == 0 ) {
        defer.reject(response.data);
      } else {
        angular.forEach(response.data, function(carregar){
          manejos.listaManejos.push(carregar);
          defer.resolve(carregar);
        });
      }
    }, function(error) {
      // alert("Server returns response with an error status.");
      defer.reject(error);
    });
    return defer.promise;
  }

  manejos.getManejoDetalhado = function(manejoId){
    var defer = $q.defer();
    var manejoIdJson = angular.toJson(manejos.listaManejos[manejoId]._id);
    $http.get('https://api.mlab.com/api/1/databases/appraga/collections/manejos?q={_id:'+manejoIdJson+'}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
    .then(function(response){
        manejos.manejoDetalhado = response.data;
        defer.resolve(response);
    }, function(response) {
      alert("Server returns response with an error status.");
      defer.reject(response);
    });
    return defer.promise;
  }

  manejos.getPlantasOfManejo = function(pragaId){
    var defer = $q.defer();
    var plantaIdJson;
    angular.forEach(manejos.listaManejos[pragaId].plantas, function(planta){
      plantaIdJson = angular.toJson(planta);

      $http.get('https://api.mlab.com/api/1/databases/appraga/collections/plantas?q={_id:'+plantaIdJson+'}&s={"_id": 1}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
      .then(function(response){
        angular.forEach(response.data, function(carregar){
          manejos.pragaSelecionada.push(carregar);
          defer.resolve(response);
        });
      }, function(response) {
        alert("Server returns response with an error status.");
        defer.reject(response);
      });
    });
    return defer.promise;
  }

  manejos.getPragasOfManejo = function(plantaId){
    var defer = $q.defer();
    // var plantaIdJson = angular.toJson(plantas.listaPlantas[plantaId-1].pragas);
    var pragaIdJson;
    angular.forEach(manejos.listaManejos[plantaId].pragas, function(praga){
      pragaIdJson = angular.toJson(praga);
      // console.log(pragaIdJson);

      $http.get('https://api.mlab.com/api/1/databases/appraga/collections/pragas?q={_id:'+pragaIdJson+'}&s={"_id": 1}&apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff')
      .then(function(response){
        angular.forEach(response.data, function(carregar){
          manejos.plantaSelecionada.push(carregar);
          defer.resolve(carregar);
        });
      }, function(response) {
        alert("Server returns response with an error status.");
        defer.reject(response);
      });
    });
    return defer.promise;
  }

  // console.log("Chegou manejosServices",manejos);
  return manejos;
});

}());
