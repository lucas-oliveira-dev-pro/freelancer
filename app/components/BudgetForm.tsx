"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  budgetSchema,
  type BudgetFormData,
} from "@/lib/validations";

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      params?: {
        send_to?: string;
        value?: number;
        currency?: string;
      }
    ) => void;
  }
}

export default function BudgetForm() {
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
  });

  function gtagReportConversion() {
  if (typeof window === "undefined") return;

  const gtag = window.gtag;

  if (!gtag) {
    console.warn("Google Ads não carregado.");
    return;
  }

  gtag("event", "conversion", {
    send_to: "AW-18440812369/irgmCOHxrfIcENHuodlE",
    value: 1.0,
    currency: "BRL",
  });
}

  async function onSubmit(data: BudgetFormData) {
    setApiError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Erro ao enviar orçamento."
        );
      }

      // ✅ Conversão registrada no Google Ads
      gtagReportConversion();
      setSuccess(true);
      reset();
    } catch (error) {
      setApiError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua solicitação."
      );
    }
  }

  return (
    <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <div className="neo-small mb-5 inline-block bg-[#A7E8BD] px-3 py-2 font-black">
          VAMOS CONVERSAR
        </div>

        <h2 className="text-5xl font-black leading-none tracking-tighter md:text-6xl">
          RECEBA UM
          <br />
          ORÇAMENTO
        </h2>

        <p className="mt-7 max-w-md text-lg font-bold leading-relaxed">
          Conte um pouco sobre sua ideia. Vou analisar o projeto e
          entrar em contato para conversarmos sobre a melhor solução.
        </p>

        {/* <div className="neo mt-10 rotate-[-2deg] bg-[#FFD84D] p-5 font-black">
          RESPOSTA DIRETA PELO WHATSAPP E E-MAIL.
        </div> */}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="neo bg-white p-6 md:p-10"
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-lg font-black"
            >
              Seu nome
            </label>

            <input
              id="name"
              {...register("name")}
              placeholder="Seu nome"
              className="w-full border-4 border-black bg-[#F7F3ED] px-4 py-4 font-bold outline-none focus:bg-[#E4A88F]"
            />

            {errors.name && (
              <p className="mt-2 font-bold text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-lg font-black"
            >
              Telefone (WhatsApp)
            </label>

            <input
              id="phone"
              {...register("phone")}
              placeholder="(00) 00000-0000"
              className="w-full border-4 border-black bg-[#F7F3ED] px-4 py-4 font-bold outline-none focus:bg-[#E4A88F]"
            />

            {errors.phone && (
              <p className="mt-2 font-bold text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-lg font-black"
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="voce@email.com"
              className="w-full border-4 border-black bg-[#F7F3ED] px-4 py-4 font-bold outline-none focus:bg-[#E4A88F]"
            />

            {errors.email && (
              <p className="mt-2 font-bold text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-lg font-black"
            >
              Descrição do projeto
            </label>

            <textarea
              id="description"
              {...register("description")}
              placeholder="Conte sobre o sistema, site ou aplicativo que você precisa..."
              rows={6}
              className="w-full resize-none border-4 border-black bg-[#F7F3ED] px-4 py-4 font-bold outline-none focus:bg-[#E4A88F]"
            />

            {errors.description && (
              <p className="mt-2 font-bold text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          {apiError && (
            <div className="border-4 border-black bg-red-300 p-4 font-black">
              {apiError}
            </div>
          )}

          {success && (
            <div className="border-4 border-black bg-[#A7E8BD] p-5 font-black">
              Orçamento solicitado, você receberá a proposta no
              email e whatsapp.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="neo-button w-full bg-black px-6 py-5 text-xl font-black text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? "ENVIANDO..."
              : "RECEBER ORÇAMENTO →"}
          </button>
        </div>
      </form>
    </div>
  );
}