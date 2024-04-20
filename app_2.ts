import { Cliente } from "./src/class_concreta/cliente";
import { ContaCorrente } from "./src/class_concreta/conta_corrente";
import { Endereco } from "./src/class_concreta/endereco";

const endereco1 = new Endereco("60090-120", "Rua André Dias", "22", "Casa", "Alto Santo", "CE");
const endereco2 = new Endereco("56430-001", "Av. 20 de maio", "842", "Apartamento", "Guarulhos", "SP");
const endereco3 = new Endereco("32001-400", "Rua Nossa Senhora de Fátima", "41", "Apartamento", "Russas", "CE");



cliente1.adicionarEnderecos(endereco2);
cliente1.adicionarEnderecos(endereco3);

console.log(cliente1.enderecos);
