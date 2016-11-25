(function () {
  'use strict';

  angular.module('BlurAdmin.pages.violacoes', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
     $stateProvider
        .state('violacoes', {
          url: '/violacoes',
          templateUrl: 'app/pages/violacoes/violacoes.html',
          title: 'Violações',
          sidebarMeta: {
            icon: 'ion-ios-flame',
            order: 50,
          },
        });
  }

})();