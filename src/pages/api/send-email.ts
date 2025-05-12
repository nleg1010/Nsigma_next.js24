import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const {
  NEXT_EMAIL_DOMAIN: EMAIL_DOMAIN,
  NEXT_EMAIL_USERNAME: EMAIL_USERNAME,
  NEXT_EMAIL_PASSWORD: EMAIL_PASSWORD,
  NEXT_EMAIL_TO: EMAIL_TO,
} = process.env;

const sendMail = async (subject: string = "Contact Me", body?: any) => {
  console.log(EMAIL_DOMAIN);
  console.log(EMAIL_USERNAME);
  console.log(EMAIL_PASSWORD);
  const transporter = nodemailer.createTransport({
    host: EMAIL_DOMAIN,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USERNAME?.trim(),
      pass: EMAIL_PASSWORD?.trim(),
    },
  });

  const options = {
    from: EMAIL_USERNAME,
    to: EMAIL_TO,
    subject,
    html: `
          <p><strong>Name: </strong> ${body.name}</p>
          <p><strong>Email: </strong> ${body.email}</p>
          <p><strong>Phone number: </strong> ${body.number}</p>
          <p><strong>Company: </strong> ${body.company}</p>
          <p><strong>Idea: </strong> ${body.idea}</p> `,
  };

  await transporter.sendMail(options);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { subject, body } = req.body;

  try {
    await sendMail(subject, body);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Email send error:", err);
    res
      .status(500)
      .json({ message: "Failed to send email", error: err.message });
  }
}
