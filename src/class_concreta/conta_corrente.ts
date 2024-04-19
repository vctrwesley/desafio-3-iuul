import { Conta } from "../class_abstrata/conta";
import { Cliente } from "./cliente";

export class ContaCorrente extends Conta {
  private _limite: number;
  private _limiteSaque: number = 0;

  constructor(numeroconta: number, limite: number, cliente: Cliente) {
    super(numeroconta, cliente);
    this._limite = limite;
    this._limiteSaque += this._limite;
  }
}