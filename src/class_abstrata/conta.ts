import { Cliente } from "../class_concreta/cliente";
import { Credito } from "../class_concreta/credito";
import { Debito } from "../class_concreta/debito";

export abstract class Conta {
  private _numeroConta: number;
  private _creditos: Credito[] = [];
  private _debitos: Debito[] = [];
  private _cliente: Cliente;

  constructor(numeroConta: number, cliente: Cliente) {
    this._numeroConta = numeroConta;
    this._cliente = cliente;
  }

  get numeroconta() {
    return this._numeroConta;
  }

  get debito() {
    return this._debitos;
  }

  get credito() {
    return this._creditos;
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

  associarCredito(credito: Credito): void {
    this._creditos.push(credito);
  }

  associarDebito(debito: Debito): void {
    this._debitos.push(debito);
  }

  depositar(value: number) {
    let credito = new Credito(value, new Date());
    this._creditos.push(credito);
    return this._creditos;
  }

  sacar(value: any) {
    if (this.calcularSaldo() >= value) {
      var debito = new Debito(value, new Date());
      this._debitos.push(debito);
      return this._debitos;
    } else {
      console.log("saldo insuficiente");
    }
  }
}