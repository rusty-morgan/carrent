'use strict';


app.controller('mainPageCtrl', ['$rootScope', '$scope', mainPageCtrl]);

function mainPageCtrl($scope){

 
    var cars = {
        1:{
            id : 1,
            name : 'Fiat Panda',
            classText: 'Klasa A',
            classId: 1,
            categoryText: 'Osobowe',
            categoryId: 1,
            cena: 75,
            imgPrev: '/img/cars/home-preview/pop.png'
        },

        2:{
            id : 2,
            name : 'Fiat 500',
            classText: 'Klasa A',
            classId: 1,
            categoryText: 'Osobowe',
            categoryId: 1,
            cena: 75,
            imgPrev: '/img/cars/home-preview/500c_45d.png'
        },
        3:{
            id : 3,
            name : 'Fiat Punto',
            classText: 'Klasa B',
            classId: 2,
            categoryText: 'Osobowe',
            categoryId: 1,
            cena: 85,
            imgPrev: '/img/cars/home-preview/lounge.png'
        },
    }
    $scope.cars = cars;

}