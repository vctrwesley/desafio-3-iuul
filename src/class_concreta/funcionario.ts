import { Cargo } from "./cargo";

export class Funcionario {
  private _salario: number;
  private _cargos: Cargo[] = [];

  constructor(cpf: String, nome: String, telefone: String, salario: number, cargo: Cargo) {
    this._salario = salario;
    this._cargos.push(cargo);

  }
  get salario() {
    return this._salario;
  }

  set salario(value: number) {
    this._salario = value;
  }

  adicionarCargo(cargo: Cargo) {
    return this._cargos.push(cargo);
  }

  autenticar() {
    if (this) {
      return true;
    } else {
      return false;
    }
  }
}