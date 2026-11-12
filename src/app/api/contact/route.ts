import { NextResponse } from "next/server";
import { GROUP_EMAIL } from "@/data/site";

const RESEND_API_URL = "https://api.resend.com/emails";
const FALLBACK_FROM = "Pring Group Website <onboarding@resend.dev>";

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  inquiry_type?: unknown;
  message?: unknown;
  website?: unknown;
};

const getField = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  if (getField(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = getField(payload.name);
  const email = getField(payload.email);
  const phone = getField(payload.phone);
  const inquiryType = getField(payload.inquiry_type);
  const message = getField(payload.message);

  if (!name || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const to = process.env.RESEND_CONTACT_TO ?? GROUP_EMAIL;
  const from = process.env.RESEND_CONTACT_FROM ?? FALLBACK_FROM;

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New PGC Website Inquiry: ${inquiryType}`,
      text: [
        "New website inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Inquiry Type: ${inquiryType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();
    console.error("Resend contact form error:", resendError);

    return NextResponse.json(
      { error: "We couldn't send your inquiry right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
