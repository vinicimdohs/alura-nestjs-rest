import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[]= [
        new Produto('Liv01',"Livro do vinicim",29.90),
        new Produto('Liv02',"Livro do cabraum",30.90),
        new Produto('Liv03',"Livro caruainicim",50.90)
    ]

    obterTodos(): Produto[]{
        return this.produtos;
    }

    obterUm(id:number) : Produto{
        return this.produtos[0];
    }

    criar(produto: Produto){
        this.produtos.push(produto);
    }

    alterar(produto: Produto) : Produto {
        return produto;
    }

    apagar(id:number){
        this.produtos.pop()
    }
}