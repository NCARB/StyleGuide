"use strict";function config(t,e,s,o){s.html5Mode(!0).hashPrefix("!"),o.defaults.useXDomain=!0,delete o.defaults.headers.common["X-Requested-With"],e.when("/css","/css/layout").when("/bootstrap","/bootstrap/css").otherwise("/"),t.state("introduction",{url:"/",templateUrl:"views/introduction.html"}).state("css",{url:"/css",abstract:!0,template:"<ui-view/>"}).state("css.layout",{url:"/layout",templateUrl:"views/layout.html"}).state("css.color",{url:"/color",templateUrl:"views/color.html"}).state("css.typography",{url:"/typography",templateUrl:"views/typography.html"}).state("css.iconography",{url:"/iconography",templateUrl:"views/iconography.html"}).state("css.formElements",{url:"/formElements",templateUrl:"views/form_elements.html"}).state("css.navigation",{url:"/navigation",templateUrl:"views/navigation.html"}).state("css.tables",{url:"/tables",templateUrl:"views/tables.html"}).state("css.badges",{url:"/badges",templateUrl:"views/labels-badges.html"}).state("content",{url:"/content",templateUrl:"views/content.html"}).state("bootstrap",{url:"/bootstrap",abstract:!0,template:"<ui-view/>"}).state("bootstrap.css",{url:"/css",templateUrl:"views/bootstrap-css.html"}).state("bootstrap.components",{url:"/components",templateUrl:"views/bootstrap-components.html",controller:"BootstrapJsCtrl"}).state("bootstrap.javascript",{url:"/javascript",templateUrl:"views/bootstrap-javascript.html",controller:"BootstrapJsCtrl"})}function run(t,a,e,l){t.$on("$stateChangeSuccess",function(t,e,s,o,r){o.abstract||a.push(o,r),l("#ncarbNavmenu").hasClass("in")&&l("[data-toggle=offcanvas]").trigger("click.bs.offcanvas.data-api")}),a.push(e.current,e.params)}angular.module("jQuery",[]).factory("jQuery",["$window",function(t){return t.jQuery}]),angular.module("designSystem.controllers",["jQuery"]).controller("BootstrapJsCtrl",["jQuery",function(t){t('[data-toggle="tooltip"]').tooltip(),t('[data-toggle="popover"]').popover(),t('[data-toggle="dropdown"]').dropdown()}]),angular.module("designSystem.directives",[]),angular.module("designSystem",["ui.router","designSystem.controllers","designSystem.directives","hljs"]).config(config).run(run),config.$inject=["$stateProvider","$urlRouterProvider","$locationProvider","$httpProvider"],run.$inject=["$rootScope","$history","$state","jQuery"],function(t,e){e.module("designSystem").service("$history",["$state",function(s){var o=[];e.extend(this,{push:function(t,e){o.push({state:t,params:e})},all:function(){return o},go:function(t){var e=this.previous(t||-1);return s.go(e.state,e.params)},previous:function(t){return o[o.length-Math.abs(t||1)]},back:function(){return this.go(-1)}})}])}(window,window.angular);