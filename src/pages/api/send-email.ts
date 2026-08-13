export const prerender = false;

import { z } from "zod";

const contactSchema = z.object({
  fullname: z.string().trim().min(1),
  email: z.string().trim().email(),
  message: z.string().trim().min(1),
  service: z.string().trim().optional(),
});

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

  const formToken = import.meta.env.MAILPREX_FORM_TOKEN;
  if (!formToken) {
    return new Response(
      JSON.stringify({ error: "Mailprex form token not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const { fullname, email, message, service } = parsed.data;

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
    return new Response(JSON.stringify({ error: data }), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({ message: data.message ?? "Message sent successfully." }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
