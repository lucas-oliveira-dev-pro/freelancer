import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { budgetSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = budgetSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos.",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const { name, phone, email, description } = result.data;

    const { error } = await supabase
      .from("orcamentos")
      .insert({
        name,
        phone,
        email,
        description,
      });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Não foi possível solicitar o orçamento.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Orçamento solicitado, você receberá a proposta no email e whatsapp",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro interno do servidor.",
      },
      {
        status: 500,
      }
    );
  }
}