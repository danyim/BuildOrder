(function () {
    angular
        .module('buildorder.services.base')
        .factory('baseSvc', baseSvc);

    baseSvc.$inject = ['$firebaseObject'];

    function baseSvc($firebaseObject) {
        var ref = new Firebase("https://buildorder.firebaseio.com");
        return {
            getSyncObject: getSyncObject
        };

        function getSyncObject() {
            return $firebaseObject(ref);
        }
    }
})();
