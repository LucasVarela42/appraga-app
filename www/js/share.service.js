(function () {
'use strict';

angular.module('appraga.services')
    .factory('SharedPositions', function () {
        var position = {};
        return {
            getPosition: function () {
              console.log("getObject: ", this.position);
                return this.position;
            },
            setPosition: function(position) {
                this.position = position;
                console.log("setObject: ",position);
            }
        };
        // console.log(object);
    });
}());
