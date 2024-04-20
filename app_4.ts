import { ContaCorrente } from "./src/class_concreta/conta_corrente";
import { ContaPoupanca } from "./src/class_concreta/conta_poupanca";
import { Cliente } from "./src/class_concreta/cliente";

const cliente1 = new Cliente(true, "Marcos", "076.360.653-32", "88 99264-5473");

const contaCorrente1 = new ContaCorrente(123, 1000, cliente1);

contaCorrente1.depositar(1000);

const contaPoupanca1 = new ContaPoupanca(123, cliente1);

contaPoupanca1.depositar(1000);

contaCorrente1.trasferenciaParaPoupanca(500, contaPoupanca1);

console.log(contaCorrente1.calcularSaldo());

console.log(contaPoupanca1.calcularSaldo());
