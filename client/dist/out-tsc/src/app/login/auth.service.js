import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.usuarioAutenticado = false;
    }
    AuthService.prototype.fazerLogin = function (usuario) {
        if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
            this.usuarioAutenticado = true;
            this.router.navigate(['../produtos-listagem']);
        }
        else {
            this.usuarioAutenticado = false;
            alert("Usuário ou senhas incorreto!");
        }
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map