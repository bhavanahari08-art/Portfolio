import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // 1. Try Web3Forms if ACCESS_KEY is set (prevents SMTP port blocks on Render/Vercel)
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      console.log("Sending email via Web3Forms API...");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: name,
          email: email,
          subject: subject || "Portfolio Contact Form Submission",
          message: message,
          from_name: `${name} (Portfolio)`,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        console.log("Email sent successfully via Web3Forms");
        return NextResponse.json({
          success: true,
          message: "Email sent successfully",
        });
      } else {
        throw new Error(data.message || "Web3Forms failed to send email");
      }
    }

    // 2. Fallback to SMTP
    console.log("About to send email via SMTP...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log("Verifying SMTP...");
    await transporter.verify();
    console.log("SMTP verified");

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: subject || "Portfolio Contact Form",
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully via SMTP");

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}