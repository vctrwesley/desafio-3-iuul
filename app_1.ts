import { Funcionario } from "./src/class_concreta/funcionario";
import { Cargo } from "./src/class_concreta/cargo";

var gerente = new Cargo("Gerente");
var atendente = new Cargo("Atendente");

var Funcionario1 = new Funcionario(100.00, gerente, "João", "12345678901", "88 99964-5678");
var Funcionario2 = new Funcionario(150.00, atendente, "Victor", "00100200344", "88 99997-6723");

console.log(Funcionario1, "Funcionário" + Funcionario1.cargo + "existe?" + Funcionario1.autenticar());
console.log(Funcionario2, "Funcionário" + Funcionario2.cargo + "existe?" + Funcionario2.autenticar());