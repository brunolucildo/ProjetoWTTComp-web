import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProdutosService } from './produtos.service';
var ProdutosListagemComponent = /** @class */ (function () {
    function ProdutosListagemComponent(produtosService) {
        this.produtosService = produtosService;
    }
    ProdutosListagemComponent.prototype.ngOnInit = function () {
        this.produtos = this.produtosService.getProdutos();
    };
    ProdutosListagemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-produtos-listagem',
            templateUrl: './produtos-listagem.component.html',
            styleUrls: ['./produtos-listagem.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProdutosService])
    ], ProdutosListagemComponent);
    return ProdutosListagemComponent;
}());
export { ProdutosListagemComponent };
//# sourceMappingURL=produtos-listagem.component.js.map