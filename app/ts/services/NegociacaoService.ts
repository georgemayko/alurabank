import {NegociacaoParcial, Negociacao} from "../models/index";

export class NegociacaoService{

    obterNegociacoes(handler : Function) : Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
                .then(res => handler(res))
                .then(res => res.json())
                .then((dados : NegociacaoParcial []) =>
                    dados.map(dado => new Negociacao( new Date, dado.montante, dado.vezes))
                )
                /**
                 * Essa linha gera problema nas versões mais recentes do typescript
                 * porque ao cair no catch está sendo tratado o erro e não haveria retorno
                 */
                .catch(err => console.error(err.message));        
    }
}