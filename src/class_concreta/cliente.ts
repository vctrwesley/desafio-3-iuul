import { Pessoa } from "../class_abstrata/pessoa";
import { Endereco } from "../class_concreta/endereco";
import { Conta } from "../class_abstrata/conta";
import { IUsurario } from "../class_concreta/iusuario";

export class Cliente {
    private _vip: Boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta[] = [];

    constructor(vip: Boolean, enderecos: Endereco, contas: Conta, nome: String, cpf: String, telefone: String) {
        this._vip = vip;
        this._enderecos.push(enderecos);
        this._contas.push(contas);
    }

    get vip(): Boolean {
        return this._vip;
    }

    set vip(value: Boolean) {
        this._vip = value;
    }
}