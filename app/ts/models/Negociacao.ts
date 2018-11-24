class Negociacao {

    private _data;
    private _valor;
    private _quantidade;

    constructor(data, valor, quantidade){
        this._data = data;
        this._valor = valor;
        this._quantidade = quantidade;
    }

    get data(){
        return this._data;
    }
    
    get valor(){
        return this._valor
    }

    get quantidade(){
        return this._quantidade
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}
