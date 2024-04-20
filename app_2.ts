import { Conta } from "./src/class_abstrata/conta";
import { Cliente } from "./src/class_concreta/cliente";
import { ContaCorrente } from "./src/class_concreta/conta_corrente";
import { Endereco } from "./src/class_concreta/endereco";

// Cria instâncias da classe Endereco
const endereco1 = new Endereco(
  "60090-120",
  "Rua André Dias",
  "22",
  "Casa",
  "Alto Santo",
  "CE"
);
const endereco2 = new Endereco(
  "56430-001",
  "Av. 20 de maio",
  "842",
  "Apartamento",
  "Guarulhos",
  "SP"
);
const endereco3 = new Endereco(
  "32001-400",
  "Rua Nossa Senhora de Fátima",
  "41",
  "Apartamento",
  "Russas",
  "CE"
);

const cliente1 = new Cliente(true, "João", "123.456.789-10", "88 99888-7766");

cliente1.adicionarEnderecos(endereco1);
cliente1.adicionarEnderecos(endereco3);

console.log(cliente1.enderecos);