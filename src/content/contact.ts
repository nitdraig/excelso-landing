import type { Locale } from "@/lib/seo";

export const contactCopy = {
  en: {
    title: "Contact Us",
    lead:
      "We'd love to hear from you. Reach out for collaborations, inquiries, or more information.",
    formTitle: "Get in Touch",
    formLead: "Fill out the form and our team will get back to you as soon as possible.",
    fullname: "Full Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    sending: "Sending message...",
    success: "Message sent successfully.",
    error: "Something went wrong.",
    errors: {
      fullname: "Full name is required",
      email: "Please enter a valid email",
      message: "Message is required",
    },
  },
  es: {
    title: "Contactanos",
    lead:
      "Nos encantaría saber de vos. Escribinos por colaboraciones, consultas o más información.",
    formTitle: "Escribinos",
    formLead: "Completá el formulario y nuestro equipo te responderá lo antes posible.",
    fullname: "Nombre completo",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando mensaje...",
    success: "Mensaje enviado correctamente.",
    error: "Algo salió mal.",
    errors: {
      fullname: "El nombre es obligatorio",
      email: "Ingresá un email válido",
      message: "El mensaje es obligatorio",
    },
  },
} as const;

export type ContactCopy = (typeof contactCopy)[Locale];
