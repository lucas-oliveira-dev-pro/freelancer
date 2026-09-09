import { z } from "zod";

export const budgetSchema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome."),

  phone: z
    .string()
    .min(10, "Informe um WhatsApp válido."),

  email: z
    .string()
    .email("Informe um e-mail válido."),

  description: z
    .string()
    .min(20, "Descreva um pouco melhor o seu projeto.")
    .max(3000, "A descrição é muito longa."),
});

export type BudgetFormData = z.infer<typeof budgetSchema>;