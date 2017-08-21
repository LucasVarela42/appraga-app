// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'appraga' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module("appraga", ['ionic','appraga.controllers', 'appraga.filters', 'appraga.services', 'ngCordova'])

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(window.Connection) {
        if(navigator.connection.type == Connection.NONE) {
            $ionicPopup.confirm({
                title: "Internet Desconectada",
                content: "Para baixar as ultimas atualizações ative sua internet."
            })
            .then(function(result) {
                if(!result) {
                  var confirmPopup = $ionicPopup.confirm({
                      title: 'Popup title',
                      template: 'Popup text',
                      cancelText: 'Custom cancel',
                      okText: 'Custom ok'
                  }).then(function(res) {
                      if (res) {
                          window.alert('confirmed');
                          ionic.Platform.exitApp();
                      }
                  });
                    // ionic.Platform.exitApp();
                }
            });
        }
    }
  });
})

// Obrigando o aplicativo a rodar com a tab embaixo
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})
//Estabelecimento de rotas
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('tab',{
    url:'/tab',
    abstract: true,
    templateUrl: 'templates/tabs/tabs.html'
  })
  .state('tab.home',{
    url:'/home',
    views: {
      'tab-home':{
        templateUrl: 'templates/tabs/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('tab.plantas',{
    url:'/plantas',
    views:{
      'tab-plantas':{
        templateUrl: 'templates/tabs/tab-plantas.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  .state('tab.pragas',{
    url:'/pragas',
    views:{
      'tab-pragas':{
        templateUrl: 'templates/tabs/tab-pragas.html',
        controller: 'PragasCtrl'
      }
    }
  })
  .state('tab.doencas',{
    url:'/doencas',
    views:{
      'tab-doencas':{
        templateUrl: 'templates/tabs/tab-doencas.html',
        controller: 'DoencasCtrl'
      }
    }
  })
  .state('tab.manejos',{
    url:'/manejos',
    views:{
      'tab-manejos':{
        templateUrl: 'templates/tabs/tab-manejos.html',
        controller: 'ManejosCtrl'
      }
    }
  })
  .state('tab.mapa',{
    url:'/mapa',
    views:{
      'tab-mapa':{
        templateUrl: 'templates/tabs/tab-mapa.html',
        controller: 'MapaCtrl'
      }
    }
  })

  .state('detalhes-planta',{
    url:'/detalhes-planta/:plantaId',
    templateUrl: 'templates/planta-detalhes.html',
    controller: 'DetPlantaCtrl'
  })
  .state('detalhes-praga',{
    url:'/detalhes-praga/:pragaId',
    templateUrl: 'templates/praga-detalhes.html',
    controller: 'DetPragaCtrl'
  })
  .state('detalhes-doenca',{
    url:'/detalhes-doenca/:doencaId',
    templateUrl: 'templates/doenca-detalhes.html',
    controller: 'DetDoencaCtrl'
  })

  .state('step1',{
    url:'/steps/step1',
    templateUrl: 'templates/step1-plantas.html',
    controller: 'Step1Ctrl'
  })
  .state('step2',{
    url:'/steps/step2/:plantaSelecionada',
    templateUrl: 'templates/step2-pragas.html',
    controller: 'Step2Ctrl'
  })

  .state('easteregg',{
    url:'/easteregg',
    templateUrl: 'templates/side-menu/page-easteregg.html',
    // controller: 'HomeCtrl'
  })
  .state('configuracoes',{
    url:'/configuracoes',
    templateUrl: 'templates/side-menu/page-configuracoes.html',
    // controller: 'HomeCtrl'
  })
  .state('contato',{
    url:'/contato',
    templateUrl: 'templates/side-menu/page-contato.html',
    // controller: 'HomeCtrl'
  })
  .state('sobre',{
    url:'/sobre',
    templateUrl: 'templates/side-menu/page-sobre.html',
    // controller: 'HomeCtrl'
  })
  .state('tutorial',{
    url:'/como-usar',
    templateUrl: 'templates/tutorial.html',
    controller: 'TutorialCtrl'
  })
  .state('fullscreen-image',{
    url:'/fullscreen-image',
    templateUrl: 'templates/fullscreen-image.html'
  })
  .state('conceitos-definicoes',{
    url:'/conceitos',
    templateUrl: 'templates/conceitos-definicoes.html',
    controller: 'ConceitosCtrl'
  })

  .state('caldas-e-defensivos',{
    url:'/caldas-e-defensivos',
    templateUrl: 'templates/caldas-e-defensivos.html',
    controller: 'CaldasDefensivosCtrl'
  })
  .state('calda-bordolesa',{
    url:'/caldas-e-defensivos/calda-bordalesa',
    templateUrl: 'templates/caldas-e-defensivos/calda-bordalesa.html',
    controller: 'CaldasDefensivosCtrl'
  })
  .state('calda-sulfocalcica',{
    url:'/caldas-e-defensivos/calda-sulfocalcica',
    templateUrl: 'templates/caldas-e-defensivos/calda-sulfocalcica.html',
    controller: 'CaldasDefensivosCtrl'
  })
  .state('calda-vicosa',{
    url:'/caldas-e-defensivos/calda-vicosa',
    templateUrl: 'templates/caldas-e-defensivos/calda-vicosa.html',
    controller: 'CaldasDefensivosCtrl'
  })
  .state('leite-de-vaca-controle-de-oidio',{
    url:'/caldas-e-defensivos/leite-de-vaca-controle-de-oidio',
    templateUrl: 'templates/caldas-e-defensivos/leite-de-vaca-controle-de-oidio.html',
    controller: 'CaldasDefensivosCtrl'
  })
  .state('plantas-repelentes-a-insetos',{
    url:'/caldas-e-defensivos/plantas-repelentes-a-insetos',
    templateUrl: 'templates/caldas-e-defensivos/plantas-repelentes-a-insetos.html',
    controller: 'CaldasDefensivosCtrl'
  })

  $urlRouterProvider.otherwise('/tab/home');
});
