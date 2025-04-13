import { Scanner } from "./scanner";

const scanner = new Scanner();

const nome = await scanner.nextLine("Qual seu nome? ");
const idade = await scanner.nextInt("Qual sua idade? ");
const altura = await scanner.nextFloat("Qual sua altura? (ex: 1.75) ");

console.log(`Olá, ${nome}. Você tem ${idade} anos e mede ${altura}m.`);

scanner.close();
