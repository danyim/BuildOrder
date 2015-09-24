(function () {
    angular
        .module('buildorder.services.base')
        .factory('baseSvc', baseSvc);

    baseSvc.$inject = ['$firebaseObject', '$firebaseArray'];

    function baseSvc($firebaseObject, $firebaseArray) {
        var builds = new Firebase("https://buildorder.firebaseio.com/builds");

        return {
            getBuild: getBuild,
            getBuilds: getBuilds
        };

        function getBuild() {
            return $firebaseObject(builds);
        }

        function getBuilds() {
            return $firebaseArray(builds);
        }
    }
})();
