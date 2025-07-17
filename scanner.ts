import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

type Language = "en" | "pt" | "es";

const messages = {
  en: {
    invalidInt: "Please enter a valid integer.",
    invalidFloat: "Please enter a valid number.",
  },
  pt: {
    invalidInt: "Por favor, digite um número inteiro válido.",
    invalidFloat: "Por favor, digite um número válido.",
  },
  es: {
    invalidInt: "Por favor, ingresa un número entero válido.",
    invalidFloat: "Por favor, ingresa un número válido.",
  },
};

export class Scanner {
  private rl = createInterface({ input, output });
  private lang: Language;

  constructor(language: Language = "en") {
    this.lang = language;
  }

  private msg(key: keyof (typeof messages)["en"]): string {
    return messages[this.lang][key];
  }

  async nextLine(prompt = ""): Promise<string> {
    const answer = await this.rl.question(prompt);
    return answer.trim();
  }

  async nextInt(prompt = ""): Promise<number> {
    while (true) {
      const answer = await this.rl.question(prompt);
      const num = Number(answer);
      if (Number.isInteger(num)) return num;
      console.log(this.msg("invalidInt"));
    }
  }

  async nextDouble(prompt = ""): Promise<number> {
    while (true) {
      const answer = await this.rl.question(prompt);
      const sanitized = answer.replace(",", ".");
      const num = Number(sanitized);
      if (!isNaN(num)) return num;
      console.log(this.msg("invalidFloat"));
    }
  }

  close() {
    this.rl.close();
  }
}
