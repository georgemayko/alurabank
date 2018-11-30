class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
    template(modelo) {
        throw new Error('Metodo template da classe view deve ser implementado!');
    }
}
