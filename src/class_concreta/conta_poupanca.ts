import { Conta } from "../class_abstrata/conta";
import { Cliente } from "./cliente";

export class ContaPoupanca extends Conta {
  private _saldo: number = 0;

  constructor(numeroConta: number, cliente: Cliente) {
    super(numeroConta, cliente);
  }

  calcularSaldo(): number {
    let totalCreditos = this.credito.reduce((total, credito) => total + credito.valor, 0);
    let totalDebitos = this.debito.reduce((total, debito) => total + debito.valor, 0);
    return totalCreditos - totalDebitos;
  }
}