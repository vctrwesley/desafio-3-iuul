import { ContaCorrente } from "./src/class_concreta/conta_corrente";
import { Cliente } from "./src/class_concreta/cliente";

const cliente1 = new Cliente(true, "Osvaldo", "884.994.943-12", "85 0484-8405");
const cliente2 = new Cliente(true, "Pamela", "456-566-564-02", "88 4654-5628");

const contaCorrente1 = new ContaCorrente(1234, 100, cliente1);

contaCorrente1.depositar(300);

const contaCorrente2 = new ContaCorrente(232, 0, cliente2);

contaCorrente2.depositar(100);

contaCorrente1.trasferenciaParaCorrente(1000, contaCorrente2);

console.log(contaCorrente1.calcularSaldo());
console.log(contaCorrente2.calcularSaldo());
