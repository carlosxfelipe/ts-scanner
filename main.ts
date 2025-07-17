import { Scanner } from "./scanner";

const scanner = new Scanner("pt");

const nome = await scanner.nextLine("Qual seu nome? ");
const idade = await scanner.nextInt("Qual sua idade? ");
const altura = await scanner.nextDouble("Qual sua altura? ");

console.log(`Olá, ${nome}. Você tem ${idade} anos e mede ${altura}m.`);

scanner.close();
