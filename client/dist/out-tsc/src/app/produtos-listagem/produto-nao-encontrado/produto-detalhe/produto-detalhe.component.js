import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos-listagem/produtos.service';
var ProdutoDetalheComponent = /** @class */ (function () {
    function ProdutoDetalheComponent(route, router, produtosService) {
        this.route = route;
        this.router = router;
        this.produtosService = produtosService;
    }
    ProdutoDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.produto = _this.produtosService.getProduto(_this.id);
            if (_this.produto == null) {
                _this.router.navigate(['/naoEncontrado']);
            }
        });
    };
    ProdutoDetalheComponent.prototype.ngOnDrestroy = function () {
        this.inscricao.unsubscribe();
    };
    var _a;
    ProdutoDetalheComponent = tslib_1.__decorate([
        Component({
            selector: 'app-produto-detalhe',
            templateUrl: './produto-detalhe.component.html',
            styleUrls: ['./produto-detalhe.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router, typeof (_a = typeof ProdutosService !== "undefined" && ProdutosService) === "function" ? _a : Object])
    ], ProdutoDetalheComponent);
    return ProdutoDetalheComponent;
}());
export { ProdutoDetalheComponent };
//# sourceMappingURL=produto-detalhe.component.js.map