var localizacao = "";

angular.module('appraga.controllers', ['appraga.services', 'ngCordova'])
//controller da página inicial
.controller('HomeCtrl', function($scope, $cordovaNetwork, $location, $ionicViewSwitcher, $ionicLoading, plantasServices, pragasServices, doencasServices, manejosServices) {
    //Inicializando a função @getAll() ao carregar o app
    // Buscando as plantas num banco de dados
    $scope.init = function(){
        $scope.getPraga();
        $scope.getDoenca();
        $scope.getPlanta();
        // $scope.getManejo();
    }

    $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });

    $scope.getPraga = function(){
        pragasServices.getTodasPragas()
        .then(function(resPraga) {
            $scope.listaPragas = pragasServices.listaPragas;
            localStorage.setItem("pragas", angular.toJson($scope.listaPragas));
            console.log($scope.listaPragas);
            $ionicLoading.hide();
        }, function(error) {
            if (error.status === -1) {
                $ionicLoading.hide();
                console.log('Server returns an error status, Reconnecting.');
            }
        });
    }
    $scope.getDoenca = function(){
        doencasServices.getTodasDoencas()
        .then(function(resDoenca) {
            $scope.listaDoencas = doencasServices.listaDoencas;
            localStorage.setItem("doencas", angular.toJson($scope.listaDoencas));
            console.log($scope.listaDoencas);
            $ionicLoading.hide();
        }, function(error) {
            if (error.status === -1) {
                $ionicLoading.hide();
                console.log('Server returns an error status, Reconnecting.');
            }
        });
    }
    $scope.getPlanta = function(){
        plantasServices.getTodasPlantas()
        .then(function(resPlanta) {
            $scope.listaPlantas = plantasServices.listaPlantas;
            localStorage.setItem("plantas", angular.toJson($scope.listaPlantas));
            console.log($scope.listaPlantas);
            $ionicLoading.hide();
        }, function(error) {
            if (error.status === -1) {
                $ionicLoading.hide();
                console.log('Server returns an error status, Reconnecting.');
            }
        });
    }
    $scope.getManejo = function(){
        manejosServices.getTodosManejos()
        .then(function(resManejos) {
            $scope.listaManejos = manejosServices.listaManejos;
            localStorage.setItem("manejos", angular.toJson($scope.listaManejos));
            console.log($scope.listaManejos);
            $ionicLoading.hide();
        }, function(error) {
            if (error.status === -1) {
                $ionicLoading.hide();
                console.log('Server returns an error status, Reconnecting.');
            }
        });
    }

    // começa o programa (steps)
    $scope.comecar = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/steps/step1');
    };
    // botão de como usar
    $scope.abrirTutorial = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/como-usar');
    };
    // Botão de conceitos
    $scope.abrirConceitos = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/conceitos');
        // alert('hello');
    };
    $scope.abrirCaldasDefensivos = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/caldas-e-defensivos');
        // alert('hello');
    };
    //Função padrão para voltar para página anterior
    $scope.voltar = function() {
        $ionicViewSwitcher.nextDirection('back')
        $location.url('/tab/home');
    };

    plantasServices.listaPlantas = [];
    pragasServices.listaPragas = [];
    doencasServices.listaDoencas = [];
    manejosServices.listaManejos = [];


    $scope.init();
})
//controller do tutorial (controla os slides)
.controller('TutorialCtrl', function($scope, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
    //$ionicNavBarDelegate.showBar(false);
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
        $scope.previousSlide = function() {
            $ionicSlideBoxDelegate.previous();
        };
    }
    $scope.onEnter = function(){
        $ionicSideMenuDelegate.canDragContent(false)
    }
})

.controller('PlantasCtrl', function($scope, $location, $ionicLoading) {
    $scope.init = function(){
        $scope.getLocalStorage();
    }
    $scope.plantas = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("plantas");
        if(lista !== null){
            $scope.plantas = angular.fromJson(lista);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.plantas);
    }
    $scope.voltar = function() {
        $location.url('/tab/home');
    };
    $scope.init();
})

.controller('PragasCtrl', function($scope, $location, $ionicLoading) {
    $scope.init = function(){
        $scope.getLocalStorage();
    }
    $scope.pragas = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("pragas");
        if(lista !== null){
            $scope.pragas = angular.fromJson(lista);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.pragas);
    }
    $scope.voltar = function() {
        $location.url('/tab/home');
    };
    $scope.init();
})

.controller('DoencasCtrl', function($scope, $location, $ionicLoading) {
    $scope.init = function(){
        $scope.getLocalStorage();
    }
    $scope.doencas = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("doencas");
        if(lista !== null){
            $scope.doencas = angular.fromJson(lista);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.doencas);
    }
    $scope.voltar = function() {
        $location.url('/tab/home');
    };
    $scope.init();
})

.controller('ManejosCtrl', function($scope, $location, $ionicLoading) {
    $scope.init = function(){
        $scope.getLocalStorage();
    }
    $scope.manejos = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("manejos");
        if(lista !== null){
            $scope.manejos = angular.fromJson(lista);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.manejos);
    }
    $scope.voltar = function() {
        $location.url('/tab/home');
    };
    $scope.init();
})

.controller('Step1Ctrl', function($scope, $ionicHistory, $ionicLoading, $state, $stateParams, $location, $ionicPopover, $ionicModal, $ionicViewSwitcher) {
    $scope.init = function(){
        $scope.getLocalStorage();
    }
    $scope.plantas = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("plantas");
        if(lista !== null){
            $scope.plantas = angular.fromJson(lista);
        } else {
            alert("LocalStorage vazio");
        }
        // console.log($scope.plantas);
    }

    $scope.voltar = function() {
        $ionicViewSwitcher.nextDirection('back')
        $location.url('/tab/home');
    };
    //Aqui ele pega o id da planta clicada, e direciona para a página seguinte (step 2)
    $scope.toStep2 = function(index) {
        plantaSelecionada = index;
        // plantaSelecionada = planta.id;
        console.log("id da planta:" + plantaSelecionada);
        // console.log("pragas que atingem essa planta:   " + planta.pragas);
        // serve apenas para controle
    };

    // popover things
    $ionicPopover.fromTemplateUrl('templates/popover/popover-step1.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action
    });
    // modal things
    $ionicModal.fromTemplateUrl('templates/modals/relatarerro.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });

    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
    $scope.init();
})

.controller('Step2Ctrl', function($scope, $state, $stateParams, $location, $ionicLoading, $ionicPopover, $ionicModal) {
    $scope.init = function(){
        $scope.getLocalStorage();
        $scope.getPragaOfPlanta();
        $scope.getDoencaOfPlanta();
    }
    // isso aqui pega o id da planta selecionada e aplica ela no filtro da página step2-pragas.html
    $scope.plantaSelecionadaFiltro = $stateParams.plantaSelecionada;
    console.log("filtro", $scope.plantaSelecionadaFiltro);
    $scope.pragas = [];
    $scope.doencas = [];
    $scope.plantas = [];
    $scope.plantaSelecionada = { pragas: [], doencas: [] };
    $scope.pragaIndex = [];
    $scope.doencaIndex = [];

    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var listaPragas = localStorage.getItem("pragas");
        var listaDoencas = localStorage.getItem("doencas");
        var listaPlantas = localStorage.getItem("plantas");
        if(listaPragas !== null || listaDoencas !== null){
            $scope.pragas = angular.fromJson(listaPragas);
            $scope.doencas = angular.fromJson(listaDoencas);
            $scope.plantas = angular.fromJson(listaPlantas);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.doencas);
    }
    $scope.getPragaOfPlanta = function() {
        angular.forEach($scope.plantas[$scope.plantaSelecionadaFiltro].pragas, function(praga){
            for (var i = 0; i < $scope.pragas.length; i++) {
                if(JSON.stringify($scope.pragas[i]._id) === JSON.stringify(praga)){
                    $scope.pragaIndex.push(i);
                    $scope.plantaSelecionada.pragas.push($scope.pragas[i]);
                }
            }
        });
    };
    $scope.getDoencaOfPlanta = function() {
        console.log($scope.plantas[$scope.plantaSelecionadaFiltro].doencas);
        angular.forEach($scope.plantas[$scope.plantaSelecionadaFiltro].doencas, function(doenca){
            for (var i = 0; i < $scope.doencas.length; i++) {
                if(JSON.stringify($scope.doencas[i]._id) === JSON.stringify(doenca)){
                    $scope.doencaIndex.push(i);
                    $scope.plantaSelecionada.doencas.push($scope.doencas[i]);
                }
            }
        });
    };
    console.log($scope.plantaSelecionada);
    // $scope.getPragaOfPlanta = function() {
    //     var _idPragas = [];
    //     angular.forEach($scope.plantas[$scope.plantaSelecionadaFiltro].pragas, function(praga){
    //         _idPragas.push(praga);
    //     });
    //
    //     for (var i = 0; i < $scope.pragas.length; i++) {
    //         console.log('pragas:' + JSON.stringify($scope.pragas[i]._id));
    //         console.log('_idPraga:' + JSON.stringify(_idPragas));
    //         if(JSON.stringify($scope.pragas[i]._id) === JSON.stringify(_idPragas)){
    //             $scope.pragaIndex.push(i);
    //             $scope.plantaSelecionada.push($scope.pragas[i]);
    //         }
    //     }
    //     // console.log(aux);
    //     // console.log($scope.pragaIndex);
    //     console.log($scope.plantaSelecionada);
    // }
    $scope.voltar = function() {
        $location.url('/steps/step1');
    };
    // popover things
    $ionicPopover.fromTemplateUrl('templates/popover/popover-step2.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action
    });
    // modal things
    $ionicModal.fromTemplateUrl('templates/modals/relatarerro.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
    $scope.init();
})

.controller('DetPlantaCtrl', function($scope, $ionicHistory, $ionicLoading, $state, $location, $stateParams, $ionicModal, $ionicSlideBoxDelegate, FullscreenImages) {
    $scope.init = function(){
        $scope.getLocalStorage();
        $scope.loadImages();
    }
    $scope.imageSrc = [];
    $scope.plantas = [];
    $scope.plantaDetalhada = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("plantas");
        if(lista !== null){
            $scope.plantas = angular.fromJson(lista);
            $scope.plantaDetalhada.push($scope.plantas[$stateParams.plantaId]);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.plantaDetalhada);
    }

    $scope.loadImages = function() {
        angular.forEach($scope.plantaDetalhada[0].imagem, function(carregar){
            $scope.imageSrc.push(carregar);
            console.log($scope.imageSrc);
        });
    }

    $scope.modalImage = function() {
    FullscreenImages
      .init('templates/fullscreen-image.html', $scope)
      .then(function(modal) {
        $scope.imageSrc;
        modal.show();
      });
    };

    $scope.voltar = function() {
        $location.url('/tab/plantas');
    };
    $scope.init();
})

.controller('DetPragaCtrl', function($scope, $ionicHistory, $ionicLoading, $state, $location, $cordovaGeolocation, $ionicModal, $ionicSlideBoxDelegate, $stateParams, FullscreenImages, SharedPositions) {
    $scope.init = function(){
        $scope.getLocalStorage();
        $scope.loadImages();
    }
    $scope.imageSrc = [];
    $scope.pragas = [];
    $scope.pragaDetalhada = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("pragas");
        if(lista !== null){
            $scope.pragas = angular.fromJson(lista);
            $scope.pragaDetalhada.push($scope.pragas[$stateParams.pragaId]);
            // $scope.imageSrc.push($scope.pragas[$stateParams.pragaId].imagem);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.pragaDetalhada);
    }

    $scope.loadImages = function() {
        angular.forEach($scope.pragaDetalhada[0].imagem, function(carregar){
            $scope.imageSrc.push(carregar);
            console.log($scope.imageSrc);
        });
    }

    //Aqui pega a geolocalização atual e exibe num alerta
    $scope.ocorrencia = function(){
        var positionAtual = {
            lat: '',
            long: ''
        }
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
            // var lat  = position.coords.latitude
            // var long = position.coords.longitude
            positionAtual.lat = position.coords.latitude;
            positionAtual.long = position.coords.longitude;
            SharedPositions.setPosition(positionAtual);
            var aux = SharedPositions.getPosition();
            console.log(aux);
            alert("Sua localização: (lat long)" + positionAtual.lat + '   ' + positionAtual.long);
            console.log("Sua localização: (lat long)" + positionAtual.lat + '   ' + positionAtual.long);
        }, function(err) {
            console.log(err)
        });

    }

    $scope.modalImage = function() {
    FullscreenImages
      .init('templates/fullscreen-image.html', $scope)
      .then(function(modal) {
          $scope.imageSrc;
        modal.show();
      });

  };

    //TODO escolher entre back buttons manuais ou usar o ionic history (estudar melhor opção)
    $scope.voltar = function() {
        var deondevem = $ionicHistory.backView().url;

        if (deondevem == "/tab/pragas") {
            $location.url('/tab/pragas');
        }else{
            $ionicHistory.goBack();
        }
    };
    $scope.init();
})

.controller('DetDoencaCtrl', function($scope, $ionicHistory, $ionicLoading, $state, $location, $http, $cordovaGeolocation, $ionicModal, $stateParams, FullscreenImages, SharedPositions) {
    $scope.init = function(){
        $scope.getLocalStorage();
        $scope.loadImages();
    }
    $scope.imageSrc = [];
    $scope.doencas = [];
    $scope.doencaDetalhada = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("doencas");
        if(lista !== null){
            $scope.doencas = angular.fromJson(lista);
            $scope.doencaDetalhada.push($scope.doencas[$stateParams.doencaId]);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.doencaDetalhada);
    }


    //Aqui pega a geolocalização atual e exibe num alerta
    $scope.ocorrencia = function(){
        var positionAtual = {
            lat: '',
            long: ''
        }
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
            // var lat  = position.coords.latitude
            // var long = position.coords.longitude
            positionAtual.lat = position.coords.latitude;
            positionAtual.long = position.coords.longitude;
            SharedPositions.setPosition(positionAtual);
            var aux = SharedPositions.getPosition();
            console.log(aux);
            alert("Sua localização: (lat long)" + positionAtual.lat + '   ' + positionAtual.long);
            console.log("Sua localização: (lat long)" + positionAtual.lat + '   ' + positionAtual.long);
        }, function(err) {
            console.log(err)
        });

    }

    $scope.loadImages = function() {
        angular.forEach($scope.doencaDetalhada[0].imagem, function(carregar){
            $scope.imageSrc.push(carregar);
            console.log($scope.imageSrc);
        });
    }

    $scope.modalImage = function() {
    FullscreenImages
      .init('templates/fullscreen-image.html', $scope)
      .then(function(modal) {
        $scope.imageSrc;
        modal.show();
      });
    };

    //TODO escolher entre back buttons manuais ou usar o ionic history (estudar melhor opção)
    $scope.voltar = function() {
        var deondevem = $ionicHistory.backView().url;

        if (deondevem == "/tab/doencas") {
            $location.url('/tab/doencas');
        }else{
            $ionicHistory.goBack();
        }
    };
    $scope.init();
})

.controller('DetManejoCtrl', function($scope, $ionicHistory, $ionicLoading, $state, $location, $stateParams, FullscreenImages) {
    $scope.init = function(){
        $scope.getLocalStorage();
        $scope.loadImages();
    }
    $scope.imageSrc = [];
    $scope.manejos = [];
    $scope.manejoDetalhado = [];
    $scope.getLocalStorage = function() {
        $ionicLoading.hide();
        var lista = localStorage.getItem("manejos");
        if(lista !== null){
            $scope.manejos = angular.fromJson(lista);
            $scope.manejoDetalhado.push($scope.manejos[$stateParams.manejoId]);
        } else {
            alert("LocalStorage vazio");
        }
        console.log($scope.manejoDetalhado);
    }

    $scope.loadImages = function() {
        angular.forEach($scope.manejoDetalhado[0].imagem, function(carregar){
            $scope.imageSrc.push(carregar);
            console.log($scope.imageSrc);
        });
    }

    $scope.modalImage = function() {
    FullscreenImages
      .init('templates/fullscreen-image.html', $scope)
      .then(function(modal) {
        $scope.imageSrc;
        modal.show();
      });
    };

    $scope.voltar = function() {
        $location.url('/tab/manejos');
    };
    $scope.init();
})
// controller do side menu
.controller('SideMenuCtrl', function($scope, $location, $ionicSideMenuDelegate){
    var easteregg = 0;

    // botão de como usar
    $scope.abrirTutorial = function() {
        $location.url('/como-usar');
    };

    $scope.home = function() {
        $location.url('tab/home');
    };

    $scope.abrirConfiguracoes = function() {
        $location.url('/configuracoes');
    };

    $scope.abrirSobre = function() {
        $location.url('/sobre');
    };

    $scope.abrirContato = function() {
        $location.url('/contato');
    };

    $scope.secret = function() {
        easteregg += 1;
        if (easteregg==5) {
            $ionicSideMenuDelegate.toggleLeft();
            $location.url('/easteregg');
            easteregg = 0;
        }
    };

})

.controller('CaldasDefensivosCtrl', function($scope, $ionicHistory, $ionicLoading, $location, $ionicViewSwitcher, $state, $location, $stateParams) {
    $scope.hide = {0: false, 1: false, 2: false, 3: false};
    $scope.isHide = function(index) {

        $scope.hide[index] = !$scope.hide[index];
        console.log("clicou ", $scope.hide[index]);
        console.log($scope.hide);
        // return $scope.hide;
    };
    $scope.abrirCaldaBordalesa = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/caldas-e-defensivos/calda-bordalesa');
    };
    $scope.abrirCaldaSulfocalcica = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/caldas-e-defensivos/calda-sulfocalcica');
    };
    $scope.abrirCaldaVicosa = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/caldas-e-defensivos/calda-vicosa');
    };
    $scope.abrirLeiteDeVacaControleDeOidio = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/caldas-e-defensivos/leite-de-vaca-controle-de-oidio');
    };
    $scope.abrirPlantasRepelentesInsetos = function() {
        $ionicViewSwitcher.nextDirection('forward')
        $location.url('/caldas-e-defensivos/plantas-repelentes-a-insetos');
    };
    $scope.voltar = function() {
        if (!$state.is('caldas-e-defensivos')) {
            $location.url('/caldas-e-defensivos');
        }else{
            $location.url('/tab/home');
        }
    };

})

.controller('ConceitosCtrl', function($scope, $ionicHistory, $ionicLoading, $state, $location, $stateParams) {
    $scope.voltar = function() {
        $location.url('/tab/home');
    };
})

.controller('MapaCtrl', function($scope, $state, $cordovaGeolocation, $ionicScrollDelegate, $timeout, $ionicPopover, $compile, SharedPositions ) {
    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

        //Localização atual
        var localAtual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // Localização das vinícolas
        var locais = [];

        locais = new google.maps.LatLng(-28, -50);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

        var mapOptions = {
            center: localAtual,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        };

        // Criação do mapa itself
        var mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
        map = mapa;
        directionsDisplay.setMap(mapa);

        //array de marcadores (pins)
        var marcadores = {};

        //setando o mapa (não a localização) dos pins
        function setMapOnAll(mapa) {
            marcadores.setMap(mapa);
        }

        //setando o mapa dos pins como null (tirando eles do mapa)
        function clearMarkers() {
            setMapOnAll(null);
        }

        // setando o mapa dos pins (colocando eles no mapa)
        function showMarkers() {
            setMapOnAll(mapa);
        }

        $scope.limpe = function(){
            setMapOnAll(null);
            $scope.popover.hide();

        }

        $scope.mostre = function(){
            setMapOnAll(mapa);
            $scope.popover.hide();

        }


        // criação da rota ao clicar em um item da lista
        $scope.newLocation = function(lat,long){
            directionsDisplay.setMap(mapa);
            clearMarkers();
            calculateAndDisplayRoute(directionsService, directionsDisplay, lat, long); //passando a lat e long do local para criar a rota
            $ionicScrollDelegate.scrollTop(true); //scrolla para o topo
            var localClicado = new google.maps.LatLng(lat,long) // passando a lat e long do local para criar um lugar
            mapa.setCenter(localClicado);
            mapa.setZoom(15);
        }

        function calculateAndDisplayRoute(directionsService, directionsDisplay, lat, long) {
            directionsService.route({
                origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), //localização atual
                destination: new google.maps.LatLng(lat, long), //lat e long do destino
                travelMode: google.maps.TravelMode.DRIVING
            }, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
        //Wait until the map is loaded
        google.maps.event.addListenerOnce(map, 'idle', function(){
            //Marcadores
            //Local atual
            var marcadorLocal = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: localAtual
            });
            // Marcadores das vinícolas
            marcadores = new google.maps.Marker({
                animation: google.maps.Animation.DROP,
                position: locais,
                map: mapa
            });

            //Fim dos marcadores



            //Fim dos listeners

        });
        $scope.atual = SharedPositions.getPosition();
        console.log($scope.atual);

        // e se nada der certo...
    }, function(error){
        console.log("Could not get location");
    });

});
//
// .controller('FullscreenImagemCtrl', function($scope, $ionicHistory, $ionicLoading, $state, $location, $ionicModal, $ionicSlideBoxDelegate, $stateParams) {
//     $scope.imageSrc = {
//         imagem: '',
//         info: ''
//     }
//
//     $scope.showModal = function(templateUrl) {
//         $ionicModal.fromTemplateUrl(templateUrl, {
//             scope: $scope,
//             animation: 'slide-in-up'
//         }).then(function(modal) {
//             $scope.modal = modal;
//             $scope.modal.show();
//         });
//     }
//     // Close the modal
//     $scope.closeModal = function() {
//         $scope.modal.hide();
//         $scope.modal.remove()
//     };
//
//     //Cleanup the modal when we're done with it!
//     $scope.$on('$destroy', function() {
//       $scope.modal.remove();
//     });
//     // Execute action on hide modal
//     $scope.$on('modal.hide', function() {
//       // Execute action
//     });
//     // Execute action on remove modal
//     $scope.$on('modal.removed', function() {
//       // Execute action
//     });
//     $scope.$on('modal.shown', function() {
//       console.log('Modal is shown!');
//     });
//
//
//
//     $scope.showImage = function(praga) {
//         console.log(praga.imagem);
//         $scope.imageSrc = {imagem: praga.imagem[0], info: praga.nome};
//       $scope.openModal();
//     }
//
// })
