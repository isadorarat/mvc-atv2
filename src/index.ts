import { BebeNatimorto } from "./model/BebeNatimorto";
import { BebeNormal } from "./model/BebeNormal";
import { BebePrematuro } from "./model/BebePrematuro";

const b1 = new BebeNormal(`Lidia`, 99, 99, `lara`);

b1.setVacinado(` Miguel`)
b1.setNome(`lara`);
b1.setPeso(55);
b1.setAltura(77);
console.log(`Nome: ${b1.getNome()},`);
console.log(`Peso: ${b1.getPeso()}`);
console.log(`Altura: ${b1.getAltura()}`);
console.log(`vacinado: ${b1.getVacinado()}`);

const b2 = new BebePrematuro(`lara`, 13, 55, 5);
b2.setNome(`Lucas`);
b2.setSemanasGestacao(99)
b2.setPeso(55);
b2.setAltura(165);
console.log(`Nome: ${b2.getNome()},`);
console.log(`Peso: ${b2.getPeso()}`);
console.log(`Altura: ${b2.getAltura()}`);
console.log(`semanaGestacao: ${b2.getSemanasGestacao()}`);

const b3 = new BebeNatimorto(`lisa`, 99, 77, `vicio`);
b3.setCausa(`doença`)
b3.setNome(`lis`);
b3.setPeso(70);
b3.setAltura(123);
console.log(`Nome: ${b3.getNome()},`);
console.log(`Peso: ${b3.getPeso()}`);
console.log(`Altura: ${b3.getAltura()}`);
console.log(`semanaGestacao: ${b3.getCausa()}`);

