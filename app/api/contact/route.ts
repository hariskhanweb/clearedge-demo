import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Email Configuration from environment variables
const EMAIL_CONFIG = {
  from: process.env.SENDGRID_FROM_EMAIL || "ClearEdge <noreply@leadstream.co.nz>",
  to: process.env.SENDGRID_TO_EMAIL || "support@clearedge.co.nz",
  cc: process.env.SENDGRID_CC_EMAIL || "marketing@pinpoint.digital",
};

// Initialize SendGrid (will be set properly in POST handler)
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    // Validate SendGrid API key is configured
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error("SENDGRID_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Trim all fields
    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    // Prepare email content
    const emailContent = {
      to: EMAIL_CONFIG.to,
      from: EMAIL_CONFIG.from,
      cc: EMAIL_CONFIG.cc,
      subject: `New Contact Form Submission - ${trimmedData.name}`,
      text: `
New contact form submission:

Name: ${trimmedData.name}
Email: ${trimmedData.email}
Phone: ${trimmedData.phone}

Message:
${trimmedData.message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${trimmedData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${trimmedData.email}">${trimmedData.email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${trimmedData.phone}">${trimmedData.phone}</a></p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #1a1a1a; margin-bottom: 10px;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${trimmedData.message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `.trim(),
    };

    // Send email via SendGrid
    await sgMail.send(emailContent);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("SendGrid error:", error);
    
    let errorMessage = "Failed to send email. Please try again later.";
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
