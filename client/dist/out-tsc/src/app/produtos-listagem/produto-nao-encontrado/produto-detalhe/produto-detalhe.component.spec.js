import { async, TestBed } from '@angular/core/testing';
import { ProdutoDetalheComponent } from './produto-detalhe.component';
describe('ProdutoDetalheComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProdutoDetalheComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProdutoDetalheComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=produto-detalhe.component.spec.js.map