import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  /*Serviço que terá acesso a lista de produtos: Diz que tem a prop produtos que é um vetor[] e que começara com os produtos */
  produtos: IProduto[] = produtos;

  constructor() { }

  /*Terá dois metodos: 1- getall que retornará a lista de produtos. E o getone que recebera o id do produto com metodo FIND,
  atraves de uma condição */
  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId)
  }
}
