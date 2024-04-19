export class Credito {
    private _valor: number;
    private _data: Date;

    constructor(valor: number, data: Date) {
        this._valor = valor;
        this._data = data;
    }

    get valor() {
        return this._valor;
    }

    get data() {
        return this._data;
    }

    set data(data: Date) {
        this._data = data;
    }
}