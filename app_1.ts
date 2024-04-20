import { Funcionario } from "./src/class_concreta/funcionario";
import { Cargo } from "./src/class_concreta/cargo";

const gerente = new Cargo("Gerente");
const atendente = new Cargo("Atendente");

const Funcionario1 = new Funcionario("João", "12345678901", "88 99964-5678", 100.00, gerente);
const Funcionario2 = new Funcionario("Victor", "00100200344", "88 99997-6723", 150.00, atendente);

console.log(Funcionario1.nome, "Funcionário " + Funcionario1.nome + " existe? " + Funcionario1.autenticar());
console.log(Funcionario2.nome, "Funcionário " + Funcionario2.nome + " existe? " + Funcionario2.autenticar());