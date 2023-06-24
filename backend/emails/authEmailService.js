import { createTransport } from "../config/nodemailer.js"

export async function sendEmailVerification({name, email, token}){
    const transporter = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525,
        "5c92146e368f58",
        "b38fe5c89ea5e8"
    )

    //Enviar el email
    const info = await transporter.sendMail({
        from: 'Barbería Bravos',
        to: email,
        subject: "Barbería Bravos - Confirma tu cuenta",
        text: "Barbería Bravos - Confirma tu cuenta",
        html: `<p>Hola: ${name}, confirma tu cuenta en Barbería Bravos</p>
        <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace</p>
        <a href="http://localhost:4000/api/auth/verify/${token}">Confirmar cuenta</a>
        <p>Si tu no creaste esta cuenta, solo ignora el mensaje</p>
        `
    })

   console.log('Mensaje enviado', info.messageId)
}