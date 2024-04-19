import { Conta } from "../class_abstrata/conta";
import { Cliente } from "./cliente";

export class ContaPoupanca extends Conta {
  private _saldo: number = 0;

  constructor(nConta: number, cliente: Cliente) {
    super(nConta, cliente);
  }
}