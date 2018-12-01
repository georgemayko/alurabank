System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_data, _valor, _quantidade) {
                    this._data = _data;
                    this._valor = _valor;
                    this._quantidade = _quantidade;
                }
                get data() {
                    return this._data;
                }
                get valor() {
                    return this._valor;
                }
                get quantidade() {
                    return this._quantidade;
                }
                get volume() {
                    return this._quantidade * this._valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
