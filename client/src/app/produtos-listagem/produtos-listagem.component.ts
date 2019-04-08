import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.scss']
})
export class ProdutosListagemComponent implements OnInit {

  url = 'https://projetowtt-api.herokuapp.com/api/v1'

  produtos: Array<any>;

  constructor(private produtosService: ProdutosService, http: HttpClient) {
    
   }

  ngOnInit() {
   this.list()
  }
  list(){ 
    this.produtosService.getProdutos().subscribe(dados => this.produtos = dados)
  }
  
}
