'use strict';

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider, $mdDateLocaleProvider) {


    $stateProvider
        .state('root', {
            views: {
                '': {
                    abstract: true,
                    templateUrl: 'views/site/master.html',
                },
                'header@root': {
                    templateUrl: 'views/site/header.html'
                },
                'footer@root': {
                    templateUrl: 'views/site/footer.html'
                }
            }
        })
        .state('root.mainPage', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'views/site/mainPage.html',
                    controller: 'mainPageCtrl'
                }
            },
            
            resolve: {
                meta: ['$rootScope', '$stateParams', function ($rootScope, $stateParams) {
                    var title = "text",
                        description = "description";
                    
                    $rootScope.meta = {
                        title: title, 
                        description: description
                    };
                }]
            }
        })
        .state('root.fleet', {
            url: '/flota',
            views: {
                'content': {
                    templateUrl: 'views/site/fleet.html',
                }
            },
            resolve: {
                meta: ['$rootScope', '$stateParams', function ($rootScope, $stateParams) {
                    var title = "text",
                        description = "text";
                    
                    $rootScope.meta = {
                        title: title, 
                        description: description
                    };
                }]
            }
        })
        .state('root.fleetDetails', {
            url: '/fiat-panda',
            views: {
                'content': {
                    templateUrl: 'views/site/fleetDetails.html'
                }
            },
            
        })
        .state('root.rentCar', {
            url: '/wypozyczenie',
            views: {
                'content': {
                    templateUrl: 'views/site/rentCar.html',
                    controller: 'rentCarCtrl'
                }
            },
            resolve: {
                meta: ['$rootScope', '$stateParams', function ($rootScope, $stateParams) {
                    var title = "text",
                        description = "text";
                    
                    $rootScope.meta = {
                        title: title, 
                        description: description
                    };
                }]
            }
        })
        .state('otherwise',{
            url: '/'
        });

    
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });


    $mdThemingProvider.theme('green')
        .primaryPalette('green');

    /*$mdDateLocaleProvider.months = [
        'styczeń',
        'luty',
        'marzec',
        'kwiecień',
        'maj',
        'czerwiec',
        'lipiec',
        'sierpień',
        'wrzesień',
        'październik',
        'listopad',
        'grudzień'
    ];
    $mdDateLocaleProvider.shortMonths = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
    $mdDateLocaleProvider.days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
    $mdDateLocaleProvider.shortDays = ['P', 'W', 'Ś', 'C', 'P', 'S', 'N'];
*/
    $mdDateLocaleProvider.firstDayOfWeek = 1;

    $mdDateLocaleProvider.formatDate = function(date) {

        if (date === undefined) {
            return;
        } else {
            var day = date.getDate();
            if (day < 10) day = '0' + day;
            var monthIndex = date.getMonth();
            if (monthIndex < 10) monthIndex = '0' + (monthIndex+1);
            var year = date.getFullYear(); 

            return day + '.' + monthIndex + '.' + year;
        }
    };
});