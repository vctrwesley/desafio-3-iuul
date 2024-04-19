export class Cargo {
  private _cargo: String;

  constructor(cargo: String) {
    this._cargo = cargo;
  }

  public get cargo(): String {
    return this._cargo;
  }

  public set cargo(value: String) {
    this._cargo = value;
  }
}
