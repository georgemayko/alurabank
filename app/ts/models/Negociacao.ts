class Negociacao {

    constructor( private _data : Date,
                 private _valor : number, 
                 private _quantidade : number){}

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
