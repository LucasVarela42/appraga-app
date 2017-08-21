(function () {
  'use strict';
  var app = angular.module('appraga.filters', [])

  app.filter('linebreak', function() {
    return function(text) {
      return text.replace(/\n/g, '<br>');
    }
  })
  app.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
      return $sce.trustAsHtml(text);
    }
  }]);

  app.factory('FullscreenImages', function($ionicModal, $rootScope, $ionicSlideBoxDelegate) {

    var init = function(tpl, $scope) {
      var promise;
      $scope = $scope || $rootScope.$new();

      promise = $ionicModal.fromTemplateUrl(tpl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        return modal;
      });

      $scope.openModal = function() {
         $scope.modal.show();
         $ionicSlideBoxDelegate.update();
       };
       $scope.closeModal = function() {
         $scope.modal.hide();
       };
       $scope.$on('$destroy', function() {
         $scope.modal.remove();
       });
       // Execute action on hide modal
      $scope.$on('modal.hide', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
      $scope.$on('modal.shown', function() {
        console.log('Modal is shown!');
      });

       // Call this functions if you need to manually control the slides
      $scope.next = function() {
        $ionicSlideBoxDelegate.next();
      };

      $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
      };

      // Called each time the slide changes
      $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };

      return promise;
    }

    return {
      init: init
    };

  });

}());
