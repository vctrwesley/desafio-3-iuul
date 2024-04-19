import { Cliente } from "../class_concreta/cliente";
import { Credito } from "../class_concreta/credito";
import { Debito } from "../class_concreta/debito";

export abstract class Conta {
  private _numeroConta: number;
  private _creditos: Credito[] = [];
  private _debitos: Debito[] = [];
  private _cliente: Cliente;

  constructor(nConta: number, cliente: Cliente) {
    this._numeroConta = nConta;
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
}