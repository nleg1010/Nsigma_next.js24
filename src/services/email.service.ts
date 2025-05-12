import nodemailer from "nodemailer";

const {
  NEXT_EMAIL_DOMAIN: EMAIL_DOMAIN,
  NEXT_EMAIL_PASSWORD: EMAIL_PASSWORD,
  NEXT_EMAIL_USERNAME: EMAIL_USERNAME,
  NEXT_EMAIL_TO: EMAIL_TO,
} = process.env;

const sendMail = async (subject: string = "Contact Me", body?: string) => {
  const transporter = nodemailer.createTransport({
    host: EMAIL_DOMAIN,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  //   const emailHtml = await render(<Email url="https://example.com" />);

  const options = {
    from: EMAIL_USERNAME,
    to: EMAIL_TO,
    subject,
    body,
    // html: emailHtml,
  };

  await transporter.sendMail(options);
};

export { sendMail };
