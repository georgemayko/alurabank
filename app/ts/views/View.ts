export abstract class View<T> {

    private _elemento : JQuery;

    constructor(seletor: string, private _escapar?: boolean){
        this._elemento = $(seletor);
    }

    update(modelo : T) : void{
        let template  = this.template(modelo);
        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract template(modelo: T) : string;

}