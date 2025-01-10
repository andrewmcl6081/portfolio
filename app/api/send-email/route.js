import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { name, email, message } = await req.json();

    // Ensure required fields are provided
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }

    // Create a transport object using your email provider
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        You have a new message:
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully." }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}