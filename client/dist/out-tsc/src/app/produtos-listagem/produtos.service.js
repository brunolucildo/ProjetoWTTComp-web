import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ProdutosService = /** @class */ (function () {
    function ProdutosService() {
    }
    ProdutosService.prototype.getProdutos = function () {
        return [
            { id: 1, produto: "Produto 1", descricao: "Descrição do Produto 1", preco: "1.50" },
            { id: 2, produto: "Produto 2", descricao: "Descrição do Produto 2", preco: "2.50" },
            { id: 3, produto: "Produto 3", descricao: "Descrição do Produto 3", preco: "3.50" }
        ];
    };
    ProdutosService.prototype.getProduto = function (id) {
        var produtos = this.getProdutos();
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            if (produto.id == id) {
                return produto;
            }
        }
        return null;
    };
    ProdutosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProdutosService);
    return ProdutosService;
}());
export { ProdutosService };
//# sourceMappingURL=produtos.service.js.map