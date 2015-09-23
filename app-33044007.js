"use strict";function LayoutController(){}function HomeController(){}function BuildOrderConfig(l,a){a.otherwise("/"),l.state("main",{"abstract":!0,url:"/",templateUrl:"app/common/views/content.html"}).state("main.home",{url:"",templateUrl:"app/home/home.html",data:{pageTitle:"Build Order"}})}function BuildOrderRun(l,a,i){l.$state=a,l.$stateParams=i}angular.module("buildorder",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"]),angular.module("buildorder").controller("LayoutCtrl",LayoutController),LayoutController.$inject=["$scope"],function(){angular.module("buildorder.home",["buildorder.config"])}(),angular.module("buildorder.home").controller("HomeCtrl",HomeController),HomeController.$inject=["$scope"],angular.module("acronym.config",[]).constant("configs",{test:"http://test"}),angular.module("buildorder").config(BuildOrderConfig).run(BuildOrderRun),BuildOrderConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider","$httpProvider"],BuildOrderRun.$inject=["$rootScope","$state","$stateParams"],angular.module("acronym").run(["$templateCache",function(l){l.put("app/home/home.html",'<section class="container px2 py3"><h1>Build Order</h1><p>This is an Angular app that will display a build order in a very nice and responsive layout.</p><p>It will use the following technologies:</p><ul><li>Gulp</li><li>Angular</li><li>LESS</li><li>Basscss (New!) - lightweight styling; alternative to Bootstrap</li><li>GoJS - for decision trees</li><li>Firebase - backend/database</li></ul><h3>To do features</h3><ul><li>Tune up styling to be less basic</li><li>Research Markdown parsing libraries</li><li>Incorporate GoJS</li></ul><h3>Done</h3><ul><li>Site setup</li><li>Basecss</li><li>Gulp configuration</li></ul></section><section class="container px2 py3"><div class="clearfix mxn2"><div class="sm-col sm-col-4 px2"><h2 class="h1 mb0">Bacon</h2><p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p></div><div class="sm-col sm-col-4 px2"><h2 class="h1 mb0">Bratwurst</h2><p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p></div><div class="sm-col sm-col-4 px2"><h2 class="h1 mb0">Andouille</h2><p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p></div></div></section>'),l.put("app/home/not-found.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-offset-2 col-lg-8"><div class="panel panel-warning"><div class="panel-heading">Page Not Found</div><div class="panel-body"><h2 class="text-center">This page is still under development</h2></div></div></div></div></div>'),l.put("app/common/views/content.html",'<div id="wrapper"><div ng-include="\'app/common/views/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/common/views/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/common/views/footer.html\'"></div></div></div>'),l.put("app/common/views/footer.html",'<footer class="black bg-white"><div class="px2 py3 container"><div class="clearfix mxn2"><div class="col col-6 md-col-3"><ul class="list-reset"><li><h3 class="h4 m0"><a href="#" class="btn block">Home</a></h3></li><li><a href="#" class="h5 btn block">Edit</a></li><li><a href="#" class="h5 btn block">View</a></li><li><a href="#" class="h5 btn block">Flow</a></li></ul></div><div class="col col-6 md-col-3"><ul class="list-reset"><li><h3 class="h4 m0"><a href="#" class="btn block">Categories</a></h3></li><li><a href="#" class="h5 btn block">Bacon</a></li><li><a href="#" class="h5 btn block">Bratwurst</a></li><li><a href="#" class="h5 btn block">Andouille</a></li><li><a href="#" class="h5 btn block">Pork Loin</a></li></ul></div><div class="col col-6 md-col-3"><ul class="list-reset"><li><h3 class="h4 m0"><a href="#" class="btn block">Categories</a></h3></li><li><a href="#" class="h5 btn block">Bacon</a></li><li><a href="#" class="h5 btn block">Bratwurst</a></li><li><a href="#" class="h5 btn block">Andouille</a></li><li><a href="#" class="h5 btn block">Pork Loin</a></li></ul></div><div class="col col-6 md-col-3"><ul class="list-reset"><li><h3 class="h4 m0"><a href="#" class="btn block">About</a></h3></li><li><a href="#" class="h5 btn block">Bacon</a></li><li><a href="#" class="h5 btn block">Bratwurst</a></li><li><a href="#" class="h5 btn block">Andouille</a></li><li><a href="#" class="h5 btn block">Pork Loin</a></li></ul></div></div><p class="h6 mb0 right align">&copy; 2015 &mdash; <a href="http://nubs.org">@danyim</a></p></div></footer>'),l.put("app/common/views/navigation.html",""),l.put("app/common/views/topnavbar.html",'<header class="white bg-gray bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1433785124354-92116416b870?q=80&fm=jpg&s=38f06298f26c11c59024eabf3b0be3bb)"><nav class="clearfix white"><div class="sm-col"><a href="/" class="btn py2">Home</a> <a href="/" class="btn py2">Edit</a> <a href="/" class="btn py2">View</a> <a href="/" class="btn py2">Flow</a></div><div class="sm-col-right"><a href="/" class="btn py2">About</a></div></nav><div class="center px2 py4"><h1 class="h1 h0-responsive caps mt4 mb0 regular">BUILD ORDER</h1><p class="h3">Artiseanal ground chuck creations</p><a href="#" class="h3 btn btn-primary">Pancake</a></div></header>')}]);