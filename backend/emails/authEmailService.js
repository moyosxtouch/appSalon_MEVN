import { createTransport } from "../config/nodemailer.js";
export async function sendEmailVerification({ name, email, token }) {
  const transporter = createTransport(
    "sandbox.smtp.mailtrap.io",
    2525,
    "179512e448cafe",
    "ad8cf56d20e39c"
  );
  //Enviar el email
  const info = await transporter.sendMail({
    from: "Moyos Barbery",
    to: email,
    subject: "MoyosBarbery - Confirma tu cuenta",
    text: "MoyosBarbery - Confirma tu cuenta",
    html: `<p>Hola: ${name}, confirma tu cuenta en Moyos Barbery </p>
    <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace</p>
    <a href="http://localhost:4000/api/auth/verify/${token}">Confirmar cuenta </a>
    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `,
  });
  console.log("mensaje enviado", info.messageId);
}
