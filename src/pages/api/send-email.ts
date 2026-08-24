export const prerender = false;

import { z } from "zod";

const contactSchema = z.object({
  fullname: z.string().trim().min(1),
  email: z.string().trim().email(),
  message: z.string().trim().min(1),
  service: z.string().trim().optional(),
});

function getMailprexToken(): string | undefined {
  // Prefer process.env so Vercel runtime secrets work (not only build-time Vite inlining).
  const fromProcess = typeof process !== "undefined" ? process.env.MAILPREX_FORM_TOKEN : undefined;
  const token = fromProcess || import.meta.env.MAILPREX_FORM_TOKEN;
  return typeof token === "string" && token.length > 0 ? token : undefined;
}

export async function POST({ request }: { request: Request }) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid form data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const formToken = getMailprexToken();
  if (!formToken) {
    console.error("[send-email] MAILPREX_FORM_TOKEN is missing");
    return new Response(
      JSON.stringify({ error: "Mailprex form token not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const { fullname, email, message, service } = parsed.data;

  try {
    const res = await fetch("https://api.mailprex.top/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        webName: "Excelso Landing Page",
        emailDestiny: "agustin2051@gmail.com",
        formToken,
        fullname,
        email,
        service: service ?? "",
        message,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("[send-email] Mailprex error", res.status, data);
      return new Response(
        JSON.stringify({
          error:
            typeof data === "object" && data && "message" in data
              ? String((data as { message: unknown }).message)
              : "Failed to send email",
        }),
        {
          status: res.status >= 400 && res.status < 600 ? res.status : 502,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({ message: data.message ?? "Message sent successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("[send-email] Unexpected error", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
}
