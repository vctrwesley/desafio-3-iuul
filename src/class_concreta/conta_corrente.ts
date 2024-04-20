import { Conta } from "../class_abstrata/conta";
import { Cliente } from "./cliente";
import { ContaPoupanca } from "./conta_poupanca";

export class ContaCorrente extends Conta {
  private _limite: number;
  private _limiteSaque: number = 0;

  constructor(numeroconta: number, limite: number, cliente: Cliente) {
    super(numeroconta, cliente);
    this._limite = limite;
    this._limiteSaque += this._limite;
  }

  get limite() {
    return this._limite;
  }

  set limite(value: any) {
    this._limite += value;
  }

  calcularSaldo(): number {
    let totalCreditos = this.credito.reduce(
      (total, credito) => total + credito.valor,
      0
    );
    let totalDebitos = this.debito.reduce(
      (total, debito) => total + debito.valor,
      0
    );
    return totalCreditos - totalDebitos;
  }

  trasferenciaParaPoupanca(valor: number, conta_poupanca: ContaPoupanca) {
    if (this.calcularSaldo() >= valor) {
      this.sacar(valor);
      conta_poupanca.depositar(valor);
    } else {
      console.log("saldo insuficiente");
    }
  }

  trasferenciaParaCorrente(valor: number, conta_corrente: ContaCorrente) {
    if (this.calcularSaldo() >= valor) {
      this.sacar(valor);
      conta_corrente.depositar(valor);
    } else {
      console.log("saldo insuficiente");
    }
  }
}
