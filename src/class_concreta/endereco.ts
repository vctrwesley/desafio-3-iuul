import { Cliente } from "./cliente";

export class Endereco {
    private _cep: String;
    private _logradouro: String;
    private _numero: String;
    private _complemento?: String;
    private _cidade: String;
    private _uf: String;

    constructor(cep: String, logradouro: String, numero: String, complemento: String, cidade: String, uf: String) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }

    get cep(): String{
        return this._cep;
    }

    set cep(cep: String){
        this._cep = cep;
    }

    get logradouro(): String{
        return this._logradouro;
    }

    set logradouro(logradouro: String) {
        this._logradouro = logradouro;
    }

    get numero(): String{
        return this._numero;
    }

    set numero(numero: String) {
        this._numero = numero;
    }

    get complemento(): String | undefined {
        return this._complemento;
    }

    set complemento(complemento: String | undefined) {
        this._complemento = complemento;
    }

    get cidade(): String {
        return this._cidade;
    }

    set cidade(cidade: String) {
        this._cidade = cidade;
    }

    get uf(): String {
        return this._uf;
    }

    set uf(uf: String) {
        this._uf = uf;
    }
}