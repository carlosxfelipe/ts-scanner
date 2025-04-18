# ts-scanner

Projeto simples que simula um `Scanner` estilo Java para ler entradas do terminal em TypeScript, usando Bun.

```ts
import { Scanner } from "./scanner";

const scanner = new Scanner();

const nome = await scanner.nextLine("Qual seu nome? ");
const idade = await scanner.nextInt("Qual sua idade? ");
const altura = await scanner.nextDouble("Qual sua altura? ");

console.log(`Olá, ${nome}. Você tem ${idade} anos e mede ${altura}m.`);

scanner.close();
```

## 📦 Requisitos

- [Bun](https://bun.sh/) instalado

## ▶️ Como rodar

1. Clone ou copie os arquivos `main.ts` e `scanner.ts`.
2. No terminal, execute:

```bash
bun run main.ts
```
