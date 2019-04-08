import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.usuario = new Usuario();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fazerLogin = function () {
        //console.log(this.usuario);
        this.authService.fazerLogin(this.usuario);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map