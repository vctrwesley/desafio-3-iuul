import { Pessoa } from "../class_abstrata/pessoa";
import { Endereco } from "../class_concreta/endereco";
import { Conta } from "../class_abstrata/conta";
import { IUsurario } from "../class_concreta/iusuario";

export class Cliente extends Pessoa implements IUsurario {
  private _vip: Boolean;
  private _enderecos: Endereco[] = [];
  private _contas: Conta[] = [];

  constructor(
    vip: Boolean,
    nome: String,
    cpf: String,
    telefone: String
  ) {
    super(nome, cpf, telefone);
    this._vip = vip;
  }

  get vip(): Boolean {
    return this._vip;
  }

  set vip(value: Boolean) {
    this._vip = value;
  }

  get enderecos() {
    return this._enderecos;
  }

  set enderecos(value: Endereco[]) {
    this._enderecos = value;
  }

  listarEderecos() {
    return this._enderecos;
  }

  adicionarEnderecos(endereco: Endereco) {
    this._enderecos.push(endereco);
  }
  
  autenticar() {
    if (this) {
      return true;
    } else {
      return false;
    }
  }

  get contas() {
    return this._contas;
  }

  adicionarContas(conta: Conta) {
    this._contas.push(conta);
  }
}
