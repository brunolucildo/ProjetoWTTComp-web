import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';
import { ProdutoDetalheComponent } from './produtos-listagem/produto-detalhe/produto-detalhe.component';
import { ProdutoNaoEncontradoComponent } from './produtos-listagem/produto-nao-encontrado/produto-nao-encontrado.component';
import { HomeComponent } from './home/home.component';
var routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'produto/:id', component: ProdutoDetalheComponent },
    { path: 'produtos', component: ProdutosListagemComponent },
    { path: 'naoEncontrado', component: ProdutoNaoEncontradoComponent }
];
export var routing = RouterModule.forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map