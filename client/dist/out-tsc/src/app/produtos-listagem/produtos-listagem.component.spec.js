import { async, TestBed } from '@angular/core/testing';
import { ProdutosListagemComponent } from './produtos-listagem.component';
describe('ProdutosListagemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProdutosListagemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProdutosListagemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=produtos-listagem.component.spec.js.map