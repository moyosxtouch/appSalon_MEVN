import { createTransport } from "../config/nodemailer.js";
export async function sendEmailVerification() {
  const transporter = createTransport(
    "sandbox.smtp.mailtrap.io",
    2525,
    "179512e448cafe",
    "ad8cf56d20e39c"
  );
  //Enviar el email
  const info = await transporter.sendMail({
    from: "Moyos Barbery",
    to: "moyosxtouch@outlook.com",
    subject: "MoyosBarbery - Confirma tu cuenta",
    text: "MoyosBarbery - Confirma tu cuenta",
    html: "test email",
  });
  console.log("mensaje enviado", info.messageId);
}
