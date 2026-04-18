import nodemailer from "nodemailer";

export const sendMail = async (form) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const fullName = `${form.firstName} ${form.lastName}`;

  return transporter.sendMail({
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📩 New Contact from ${fullName} - URE Legal`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #3A3A3A;">
        
        <h2 style="color:#C15F3C; margin-bottom:10px;">
          New Contact Form Submission
        </h2>

        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding:8px; font-weight:bold;">Full Name:</td>
            <td style="padding:8px;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Email:</td>
            <td style="padding:8px;">${form.email}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Phone:</td>
            <td style="padding:8px;">${form.phone || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Job Title:</td>
            <td style="padding:8px;">${form.jobTitle || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Company:</td>
            <td style="padding:8px;">${form.company || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Practice Area:</td>
            <td style="padding:8px;">${form.practiceArea || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Message:</td>
            <td style="padding:8px;">${form.message || "—"}</td>
          </tr>
        </table>

        <p style="margin-top:20px; font-size:12px; color:#888;">
          Submitted on: ${new Date().toLocaleString()}
        </p>

      </div>
    `,
  });
};