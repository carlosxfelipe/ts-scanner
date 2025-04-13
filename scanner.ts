import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

export class Scanner {
  private rl = createInterface({ input, output });

  async nextLine(prompt = ""): Promise<string> {
    const answer = await this.rl.question(prompt);
    return answer.trim();
  }

  async nextInt(prompt = ""): Promise<number> {
    while (true) {
      const answer = await this.rl.question(prompt);
      const num = Number(answer);
      if (Number.isInteger(num)) return num;
      console.log("Por favor, digite um número inteiro válido.");
    }
  }

  async nextDouble(prompt = ""): Promise<number> {
    while (true) {
      const answer = await this.rl.question(prompt);
      const sanitized = answer.replace(",", ".");
      const num = Number(sanitized);
      if (!isNaN(num)) return num;
      console.log("Por favor, digite um número válido.");
    }
  }

  close() {
    this.rl.close();
  }
}
