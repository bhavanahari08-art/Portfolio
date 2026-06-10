import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields (name, email, message) are missing." },
        { status: 400 }
      );
    }

    // 1. Log the message locally on the server (messages.json)
    const logDir = path.join(process.cwd(), "src/data");
    const logFilePath = path.join(logDir, "messages.json");

    let messages = [];
    if (fs.existsSync(logFilePath)) {
      try {
        const fileContent = fs.readFileSync(logFilePath, "utf8");
        messages = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading messages.json:", err);
      }
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || "No Subject",
      message,
      timestamp: new Date().toISOString(),
    };

    messages.push(newMessage);

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    fs.writeFileSync(logFilePath, JSON.stringify(messages, null, 2), "utf8");

    // 2. Send Email using Nodemailer
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER; // e.g. "bhavanahari08@gmail.com"
    const smtpPass = process.env.SMTP_PASS; // App Password

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "bhavanahari08@gmail.com",
        replyTo: email,
        subject: `[Portfolio Contact] ${subject || "New Message"}`,
        text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "None"}\nMessage:\n${message}`,
        html: `
          <h3>New Message from Portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "None"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({
        success: true,
        message: "Message sent and logged successfully!",
      });
    } else {
      console.log("SMTP credentials missing. Creating ethereal.email test account...");
      try {
        const testAccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });

        const mailOptions = {
          from: `"${name}" <${email}>`,
          to: "bhavanahari08@gmail.com",
          replyTo: email,
          subject: `[Portfolio Contact - TEST] ${subject || "New Message"}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
          html: `<h3>New Message</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        };

        const info = await transporter.sendMail(mailOptions);
        const previewUrl = nodemailer.getTestMessageUrl(info);
        console.log("Ethereal test email sent. Preview URL: %s", previewUrl);

        return NextResponse.json({
          success: true,
          message: "Saved! Test email sent successfully.",
          previewUrl: previewUrl || undefined,
        });
      } catch (err: any) {
        console.error("Failed to send ethereal test email:", err);
        return NextResponse.json({
          success: true,
          message: "Message saved to server database log (SMTP config missing).",
        });
      }
    }
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error: " + error.message },
      { status: 500 }
    );
  }
}
