import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { HomeComponent } from './home/home.component';
import { ProdutoDetalheComponent } from './produtos-listagem/produto-detalhe/produto-detalhe.component';
import { ProdutosService } from './produtos-listagem/produtos.service';
import { ProdutoNaoEncontradoComponent } from './produtos-listagem/produto-nao-encontrado/produto-nao-encontrado.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ProdutosListagemComponent,
                LoginComponent,
                HomeComponent,
                ProdutoDetalheComponent,
                ProdutoNaoEncontradoComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule,
                routing
            ],
            providers: [AuthService, ProdutosService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map