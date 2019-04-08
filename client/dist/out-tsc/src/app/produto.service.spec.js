import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto.service';
describe('ProdutoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProdutoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=produto.service.spec.js.map