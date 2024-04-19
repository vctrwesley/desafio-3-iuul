import { Cliente } from "./src/class_concreta/cliente";
import { ContaCorrente } from "./src/class_concreta/conta_corrente";
import { Endereco } from "./src/class_concreta/endereco";

var endereco1 = new Endereco("60090-120", "Rua André Dias", "600", "Casa 22", "Alto Santo", "CE");
var endereco2 = new Endereco("56430-001", "Av. 20 de maio", "842", "Apartamento", "Guarulhos", "SP");
var endereco3 = new Endereco("32001-400", "Rua Nossa Senhora de Fátima", "41", "Apartamento", "Russas", "CE");

var conta1 = new ContaCorrente("0001", 150.00);

var cliente1 = new Cliente(true, endereco1, conta1, "Roberto", "083.465.003-15", "88 99899-6465");

cliente1.adicionarEnderecos(endereco2);
cliente1.adicionarEnderecos(endereco3);

console.log(cliente1.enderecos);