import {MensagemView, NegociacoesView} from '../views/index';
import {Negociacao, Negociacoes, NegociacaoParcial} from '../models/index';
import {domInject, throttle } from '../helpers/decorators/index';
import {NegociacaoService} from '../services/index';

export class NegociacaoController{

    @domInject('#data')
    private _inputData : JQuery;
    @domInject('#quantidade')
    private _inputQuantidade : JQuery;
    @domInject('#valor')
    private _inputValor : JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor(){
        //this._inputData =  $('#data');
        //this._inputQuantidade = $('#quantidade');
        //this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() : void{
        let data = new Date(this._inputData.val().replace(/-/g, '/'));
        if(!this._ehDiaUtil(data)){
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return 
        }
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    
    private _ehDiaUtil(data: Date) : boolean{
        return data.getDay() != DiaDaSemana.SABADO
               && data.getDay() !=DiaDaSemana.DOMINGO;
    }

    @throttle()
    importar() : void {

        const isOk = function(res : Response){
            if(res.ok)
                return res;
            else 
                throw new Error(res.statusText);
        }
        this._service.obterNegociacoes(isOk)
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            });
    }
}

enum DiaDaSemana{
    DOMINGO,
    SEGUNTA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
}