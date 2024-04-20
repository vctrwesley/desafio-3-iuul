import { ContaCorrente } from "./src/class_concreta/conta_corrente";
import { Cliente } from "./src/class_concreta/cliente";

const cliente1 = new Cliente(true, "Maria", "662.456.899-06", "88 99744-6162")

const conta1 = new ContaCorrente(2, 0, cliente1);

const contaCorrente1 = new ContaCorrente(123, 1000, cliente1);

contaCorrente1.depositar(100);
contaCorrente1.depositar(100);
contaCorrente1.depositar(100);

contaCorrente1.sacar(50);

console.log(contaCorrente1.calcularSaldo());