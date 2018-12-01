export class Negociacao {

    constructor( readonly data : Date,
                 readonly valor : number, 
                 readonly quantidade : number){}

    get volume(){
        return this.quantidade * this.valor;
    }
}
