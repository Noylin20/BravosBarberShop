import { createTransport } from "../config/nodemailer.js"

export async function sendEmailVerification({name, email, token}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    //Enviar el email
    const info = await transporter.sendMail({
        from: 'Barbería Bravos <cuenta@bravos.com>',// reemplazarlo por el correo real 
        to: email,
        subject: "Barbería Bravos - Confirma tu cuenta",
        text: "Barbería Bravos - Confirma tu cuenta",
        html: `<p>Hola: ${name}, confirma tu cuenta en Barbería Bravos</p>
        <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace</p>
        <a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar cuenta</a>
        <p>Si tu no creaste esta cuenta, solo ignora el mensaje</p>
        `
    })

   console.log('Mensaje enviado', info.messageId)
}