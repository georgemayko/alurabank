class View<T> {

    protected _elemento : Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    update(modelo : T) : void{
        this._elemento.innerHTML = this.template(modelo);
    }

    template(modelo: T) : string{
        throw new Error('Metodo template da classe view deve ser implementado!');
    }


}