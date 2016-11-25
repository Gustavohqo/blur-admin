(function () {
  'use strict';

  angular.module('BlurAdmin.pages.regras', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
     $stateProvider
        .state('regras', {
          url: '/regras',
          templateUrl: 'app/pages/regras/regras.html',
          title: 'Regras',
          controller: 'RegrasPageCtrl',
          sidebarMeta: {
            icon: 'ion-ios-list',
            order: 0,
          },
        });
  }

})();