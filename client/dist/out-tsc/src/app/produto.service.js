import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProdutoService = /** @class */ (function () {
    function ProdutoService(http) {
        this.http = http;
        this.produtosURL = 'http://localhost:3000/api/v1/';
    }
    ProdutoService.prototype.listar = function () {
        return this.http.get("" + this.produtosURL);
    };
    ProdutoService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProdutoService);
    return ProdutoService;
}());
export { ProdutoService };
//# sourceMappingURL=produto.service.js.map