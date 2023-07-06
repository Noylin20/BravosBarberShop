import { createTransport } from "../config/nodemailer.js"


export async function sendEmailNewAppointment({date, time}){
    ///transporter → Prepara el envio de emails
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    //Enviar el email
    const info = await transporter.sendMail({
        from: 'Barbería Bravos <citas@bravos.com>',// reemplazarlo por el correo real 
        to: 'admin@correo.com',
        subject: "Barbería Bravos - Nueva cita",
        text: "Barbería Bravos - Nueva cita",
        html: `<p>Hola: Admin, tienes una nueva cita</p>
         <p>La cita será el dia: ${date} a las ${time}</p>
        `
    })

   console.log('Mensaje enviado', info.messageId)


}



export async function sendEmailUpdateAppointment({date, time}){
    ///transporter → Prepara el envio de emails
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    //Enviar el email
    const info = await transporter.sendMail({
        from: 'Barbería Bravos <citas@bravos.com>',// reemplazarlo por el correo real 
        to: 'admin@correo.com',
        subject: "Barbería Bravos - Cita actualizada",
        text: "Barbería Bravos - Cita actualizada",
        html: `<p>Hola: Admin, un usuario ha modificado una cita.</p>
         <p>La nueva cita será el dia: ${date} a las ${time}</p>
        `
    })

   console.log('Mensaje enviado', info.messageId)
}

export async function sendEmailCancelAppointment({date, time}){
    ///transporter → Prepara el envio de emails
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    //Enviar el email
    const info = await transporter.sendMail({
        from: 'Barbería Bravos <citas@bravos.com>',// reemplazarlo por el correo real 
        to: 'admin@correo.com',
        subject: "Barbería Bravos - Cita cancelada",
        text: "Barbería Bravos - Cita cancelada",
        html: `<p>Hola: Admin, un usuario ha cancelado una cita.</p>
         <p>La cita estaba programada para: ${date} a las ${time}</p>
        `
    })

   console.log('Mensaje enviado', info.messageId)
}