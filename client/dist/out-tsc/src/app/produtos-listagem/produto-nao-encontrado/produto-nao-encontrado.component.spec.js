import { async, TestBed } from '@angular/core/testing';
import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado.component';
describe('ProdutoNaoEncontradoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProdutoNaoEncontradoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProdutoNaoEncontradoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=produto-nao-encontrado.component.spec.js.map