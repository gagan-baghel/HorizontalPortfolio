import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function escapeHtml(value = "") {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        const mailTo = process.env.MAIL_TO || process.env.Mail_to;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_HOST || !process.env.MAIL_PORT || !mailTo) {
            console.error("Missing required mail environment variables.");
            return NextResponse.json(
                { error: "Email service is not configured correctly." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: Number(process.env.MAIL_PORT) === 465,
            requireTLS: Number(process.env.MAIL_PORT) === 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.MAIL_USER}>`,
            to: mailTo,
            replyTo: email,
            subject: `New Portfolio Inquiry from ${name}`,
            html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050505; color: #f0f0f0; padding: 40px 20px; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border: 1px solid #222222; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);">
            <div style="padding: 40px; text-align: center; border-bottom: 1px solid #222222; background: linear-gradient(145deg, #1a1a1a, #0a0a0a);">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">New Inquiry</h1>
              <p style="margin: 10px 0 0 0; color: #888888; font-size: 14px;">You have a new message from your portfolio.</p>
            </div>
            <div style="padding: 40px;">
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Name</p>
                <div style="background-color: #1a1a1a; padding: 16px 20px; border-radius: 8px; border: 1px solid #2a2a2a; font-size: 16px; color: #ffffff;">
                  ${escapeHtml(name)}
                </div>
              </div>
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Email</p>
                <div style="background-color: #1a1a1a; padding: 16px 20px; border-radius: 8px; border: 1px solid #2a2a2a; font-size: 16px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(email)}</a>
                </div>
              </div>
              <div style="margin-bottom: 10px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Message</p>
                <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid #2a2a2a; font-size: 16px; color: #e5e5e5; white-space: pre-wrap; min-height: 100px;">${escapeHtml(message)}</div>
              </div>
            </div>
            <div style="padding: 24px 40px; background-color: #0a0a0a; border-top: 1px solid #222222; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #555555;">Sent securely from Gagan Baghel Portfolio</p>
            </div>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Your information is registered." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send the message. Please try again later." },
            { status: 500 }
        );
    }
}
