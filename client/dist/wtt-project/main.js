(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _produtos_listagem_produtos_listagem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtos-listagem/produtos-listagem.component */ "./src/app/produtos-listagem/produtos-listagem.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'produtos', component: _produtos_listagem_produtos_listagem_component__WEBPACK_IMPORTED_MODULE_4__["ProdutosListagemComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"mostrarMenu\">\n    <div class=\"nav-wrapper purple darken-3\">\n        <a routerLink=\"\" class=\"brand-logo left\">PineApple</a>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/produtos\">Produtos</a></li>       \n        </ul>\n    </div>\n</nav>\n\n<div class=\"container\">    \n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'wtt-project';
        this.mostrarMenu = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.mostrarMenuEmitter.subscribe(function (mostrar) { return _this.mostrarMenu = mostrar; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _produtos_listagem_produtos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./produtos-listagem/produtos.service */ "./src/app/produtos-listagem/produtos.service.ts");
/* harmony import */ var _produtos_listagem_produtos_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./produtos-listagem/produtos.module */ "./src/app/produtos-listagem/produtos.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_13__["PaginaNaoEncontradaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _produtos_listagem_produtos_module__WEBPACK_IMPORTED_MODULE_11__["ProdutosModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [_login_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _produtos_listagem_produtos_service__WEBPACK_IMPORTED_MODULE_10__["ProdutosService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.usuarioEstaAutenticado()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>BEM-VINDO</h5>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthService.prototype.fazerLogin = function (usuario) {
        if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
            this.usuarioAutenticado = true;
            this.mostrarMenuEmitter.emit(true);
            this.router.navigate(['/']);
        }
        else {
            this.usuarioAutenticado = false;
            this.mostrarMenuEmitter.emit(false);
            alert("Usuário ou senhas incorreto!");
        }
    };
    AuthService.prototype.usuarioEstaAutenticado = function () {
        return this.usuarioAutenticado;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"purple-text text-darken-2\">PineApple</h4>\n<h5 class=\"purple-text text-darken-3\">Login</h5>\n\n<div class=\"row\">  \n  <div class=\"input-field col s12\">\n    <input [(ngModel)]=\"usuario.nome\" placeholder=\"Digite o usuário\" id=\"usuario\" type=\"text\" class=\"validate\">\n    <label class=\"active\" for=\"usuario\">Usuário</label>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"input-field col s12\">\n    <input [(ngModel)]=\"usuario.senha\" id=\"senha\" type=\"password\" class=\"validate\">\n    <label for=\"senha\">Senha</label>\n  </div>\n</div>\n\n<div class=\"row\">\n  <button class=\"btn waves-effect waves-light center-align\" type=\"submit\" name=\"action\" (click)=\"fazerLogin()\">Submit\n    <i class=\"material-icons right\">send</i>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario */ "./src/app/login/usuario.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fazerLogin = function () {
        //console.log(this.usuario);
        this.authService.fazerLogin(this.usuario);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/usuario.ts":
/*!**********************************!*\
  !*** ./src/app/login/usuario.ts ***!
  \**********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagina-nao-encontrada works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1uYW8tZW5jb250cmFkYS9wYWdpbmEtbmFvLWVuY29udHJhZGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaginaNaoEncontradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaComponent", function() { return PaginaNaoEncontradaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginaNaoEncontradaComponent = /** @class */ (function () {
    function PaginaNaoEncontradaComponent() {
    }
    PaginaNaoEncontradaComponent.prototype.ngOnInit = function () {
    };
    PaginaNaoEncontradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagina-nao-encontrada',
            template: __webpack_require__(/*! ./pagina-nao-encontrada.component.html */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html"),
            styles: [__webpack_require__(/*! ./pagina-nao-encontrada.component.scss */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginaNaoEncontradaComponent);
    return PaginaNaoEncontradaComponent;
}());



/***/ }),

/***/ "./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Detalhe do Produto</h5>\n\n<p>Codigo: {{ produto.id }}</p>\n<p><b><h5>{{ produto.produto }}</h5></b></p>\n<p>Descrição: {{ produto.descricao }}</p>\n<p>Por apenas R$ {{ produto.preco }}</p>\n\n<a class=\"btn-floating btn-large waves-effect waves-light blue\" (click)=\"editarProduto()\"><i class=\"material-icons\">edit</i></a>\n\n"

/***/ }),

/***/ "./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zLWxpc3RhZ2VtL3Byb2R1dG9zLWRldGFsaGUvcHJvZHV0b3MtZGV0YWxoZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProdutosDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosDetalheComponent", function() { return ProdutosDetalheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../produtos.service */ "./src/app/produtos-listagem/produtos.service.ts");




var ProdutosDetalheComponent = /** @class */ (function () {
    function ProdutosDetalheComponent(route, router, produtosService) {
        this.route = route;
        this.router = router;
        this.produtosService = produtosService;
    }
    ProdutosDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.produtosService.getProduto(id).subscribe(function (dados) {
                dados.forEach(function (produto) {
                    if (produto.id == id) {
                        _this.produto = produto;
                    }
                });
            });
        });
    };
    ProdutosDetalheComponent.prototype.editarProduto = function () {
        this.router.navigate(['/produtos', this.produto.id, 'editar']);
    };
    ProdutosDetalheComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    ProdutosDetalheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produtos-detalhe',
            template: __webpack_require__(/*! ./produtos-detalhe.component.html */ "./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.html"),
            styles: [__webpack_require__(/*! ./produtos-detalhe.component.scss */ "./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _produtos_service__WEBPACK_IMPORTED_MODULE_3__["ProdutosService"]])
    ], ProdutosDetalheComponent);
    return ProdutosDetalheComponent;
}());



/***/ }),

/***/ "./src/app/produtos-listagem/produtos-form/produtos-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-form/produtos-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Criar/Editar Produto</h5>\n\n<div class=\"col s12\">  \n\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n  <div class=\"row\">\n    <div class=\"input-field\">\n      <input disabled [(ngModel)]=\"produto.id\" id=\"codigo\" name=\"codigo\" type=\"text\">\n      <label for=\"codigo\" class=\"active\">Codigo</label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col s8\">\n      <div class=\"input-field\">\n        <input [(ngModel)]=\"produto.nome\" id=\"produto\" name=\"produto\" type=\"text\" class=\"validate\">\n        <label for=\"produto\" class=\"active\">Produto</label>\n      </div>\n    </div>\n\n    <div class=\"col s4\">\n      <div class=\"input-field\">\n        <input [(ngModel)]=\"produto.preco\" id=\"preco\"  name=\"preco\" type=\"text\" class=\"validate\">\n        <label for=\"preco\" class=\"active\">Preço</label>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-field\">\n      <input [(ngModel)]=\"produto.descricao\" id=\"descricao\" name=\"descricao\" type=\"text\" class=\"validate\" ngModel>\n      <label for=\"descricao\" class=\"active\">Descrição</label>\n    </div>\n  </div>\n\n\n</form>\n\n</div>"

/***/ }),

/***/ "./src/app/produtos-listagem/produtos-form/produtos-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-form/produtos-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zLWxpc3RhZ2VtL3Byb2R1dG9zLWZvcm0vcHJvZHV0b3MtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/produtos-listagem/produtos-form/produtos-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-form/produtos-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProdutosFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosFormComponent", function() { return ProdutosFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../produtos.service */ "./src/app/produtos-listagem/produtos.service.ts");




var ProdutosFormComponent = /** @class */ (function () {
    function ProdutosFormComponent(route, produtosService) {
        this.route = route;
        this.produtosService = produtosService;
        this.produto = {};
    }
    ProdutosFormComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    ProdutosFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.produto = _this.produtosService.getProduto(id);
            if (_this.produto === null) {
                _this.produto = {};
            }
        });
    };
    ProdutosFormComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    ProdutosFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produtos-form',
            template: __webpack_require__(/*! ./produtos-form.component.html */ "./src/app/produtos-listagem/produtos-form/produtos-form.component.html"),
            styles: [__webpack_require__(/*! ./produtos-form.component.scss */ "./src/app/produtos-listagem/produtos-form/produtos-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _produtos_service__WEBPACK_IMPORTED_MODULE_3__["ProdutosService"]])
    ], ProdutosFormComponent);
    return ProdutosFormComponent;
}());



/***/ }),

/***/ "./src/app/produtos-listagem/produtos-listagem.component.html":
/*!********************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-listagem.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col s6\">\n    <h2>Produtos</h2>\n\n    <div class=\"collection\">\n      <a class=\"collection-item purple-text text-darken-3\" \n        *ngFor=\"let p of produtos\" \n        [routerLink]=\"[p.id]\">\n        {{p.nome}} \n      </a>\n    </div>\n  </div>\n\n  <div class=\"col s6\">\n    <div class=\"card purple lighten-4\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/produtos-listagem/produtos-listagem.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-listagem.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zLWxpc3RhZ2VtL3Byb2R1dG9zLWxpc3RhZ2VtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/produtos-listagem/produtos-listagem.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos-listagem.component.ts ***!
  \******************************************************************/
/*! exports provided: ProdutosListagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosListagemComponent", function() { return ProdutosListagemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produtos.service */ "./src/app/produtos-listagem/produtos.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProdutosListagemComponent = /** @class */ (function () {
    function ProdutosListagemComponent(produtosService, http) {
        this.produtosService = produtosService;
        this.url = 'https://projetowtt-api.herokuapp.com/api/v1';
    }
    ProdutosListagemComponent.prototype.ngOnInit = function () {
        this.list();
    };
    ProdutosListagemComponent.prototype.list = function () {
        var _this = this;
        this.produtosService.getProdutos().subscribe(function (dados) { return _this.produtos = dados; });
    };
    ProdutosListagemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produtos-listagem',
            template: __webpack_require__(/*! ./produtos-listagem.component.html */ "./src/app/produtos-listagem/produtos-listagem.component.html"),
            styles: [__webpack_require__(/*! ./produtos-listagem.component.scss */ "./src/app/produtos-listagem/produtos-listagem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProdutosListagemComponent);
    return ProdutosListagemComponent;
}());



/***/ }),

/***/ "./src/app/produtos-listagem/produtos.module.ts":
/*!******************************************************!*\
  !*** ./src/app/produtos-listagem/produtos.module.ts ***!
  \******************************************************/
/*! exports provided: ProdutosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosModule", function() { return ProdutosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _produtos_listagem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos-listagem.component */ "./src/app/produtos-listagem/produtos-listagem.component.ts");
/* harmony import */ var _produtos_form_produtos_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtos-form/produtos-form.component */ "./src/app/produtos-listagem/produtos-form/produtos-form.component.ts");
/* harmony import */ var _produtos_detalhe_produtos_detalhe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produtos-detalhe/produtos-detalhe.component */ "./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.ts");
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produtos.routing.module */ "./src/app/produtos-listagem/produtos.routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ProdutosModule = /** @class */ (function () {
    function ProdutosModule() {
    }
    ProdutosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProdutosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
            exports: [],
            declarations: [_produtos_listagem_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosListagemComponent"], _produtos_form_produtos_form_component__WEBPACK_IMPORTED_MODULE_4__["ProdutosFormComponent"], _produtos_detalhe_produtos_detalhe_component__WEBPACK_IMPORTED_MODULE_5__["ProdutosDetalheComponent"]],
            providers: [],
        })
    ], ProdutosModule);
    return ProdutosModule;
}());



/***/ }),

/***/ "./src/app/produtos-listagem/produtos.routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/produtos-listagem/produtos.routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProdutosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosRoutingModule", function() { return ProdutosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _produtos_listagem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos-listagem.component */ "./src/app/produtos-listagem/produtos-listagem.component.ts");
/* harmony import */ var _produtos_detalhe_produtos_detalhe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtos-detalhe/produtos-detalhe.component */ "./src/app/produtos-listagem/produtos-detalhe/produtos-detalhe.component.ts");
/* harmony import */ var _produtos_form_produtos_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produtos-form/produtos-form.component */ "./src/app/produtos-listagem/produtos-form/produtos-form.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");







var produtosRoutes = [
    { path: 'produtos', component: _produtos_listagem_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosListagemComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], children: [
            { path: 'novo', component: _produtos_form_produtos_form_component__WEBPACK_IMPORTED_MODULE_5__["ProdutosFormComponent"] },
            { path: ':id', component: _produtos_detalhe_produtos_detalhe_component__WEBPACK_IMPORTED_MODULE_4__["ProdutosDetalheComponent"] },
            { path: ':id/editar', component: _produtos_form_produtos_form_component__WEBPACK_IMPORTED_MODULE_5__["ProdutosFormComponent"] }
        ] }
];
var ProdutosRoutingModule = /** @class */ (function () {
    function ProdutosRoutingModule() {
    }
    ProdutosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(produtosRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProdutosRoutingModule);
    return ProdutosRoutingModule;
}());



/***/ }),

/***/ "./src/app/produtos-listagem/produtos.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/produtos-listagem/produtos.service.ts ***!
  \*******************************************************/
/*! exports provided: ProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosService", function() { return ProdutosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProdutosService = /** @class */ (function () {
    function ProdutosService(http) {
        this.http = http;
        this.url = 'https://projetowtt-api.herokuapp.com/api/v1';
    }
    ProdutosService.prototype.getProdutos = function () {
        return this.http.get(this.url + "/produto");
    };
    ProdutosService.prototype.getProduto = function (id) {
        return this.getProdutos();
        // for (let i=0; i<produtosArray.length; i++){
        //   let produto = produtosArray[i];
        //   console.log(produto);
        //   if (produto.id == id){
        //     return produto;
        //   }
        // }    
        // // return null;
    };
    ProdutosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProdutosService);
    return ProdutosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\casa\Documents\Bruno\wtt-project\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map