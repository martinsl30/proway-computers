import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

obtemCarrinho() {
  //As informaçoes virão como STRING, então o parse eh necessario para a conversao do objeto
  this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
  return this.itens;
   
}

adicionarAoCarrinho(produto: IProdutoCarrinho) {
  //Obteremos as informaçoes do localStorage e precisamos salvar no momento da adicao ao carrinho
  this.itens.push(produto);
  /*Salvando a lista de produtos dentro do localStorage | passaremos os produtos o setItem recebe chave e valor,
   mas o valor é uma string entao o stringify vai converter de objeto para objeto */
  localStorage.setItem("carrinho", JSON.stringify(this.itens));
}

removerProdutoCarrinho(produtoId: number) {
  this.itens = this.itens.filter(item => item.id !== produtoId);
  localStorage.setItem("carrinho", JSON.stringify(this.itens));
}

limparCarrinho() {
  this.itens = [];
  localStorage.clear();
}

}
