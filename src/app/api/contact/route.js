// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const POST = async (req) => {
    const { name, email, subject, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = resend.emails.send({
        from: 'noreply <noreply@williamjackson.dev>',
        to: process.env.CONTACT_EMAIL,
        subject: 'Form Submission: ' + subject,
        html: `${name} (${email}) has sent you a message:<br><br>${message}`
    });

    console.log(data, error);

    return NextResponse.json({ success: true });
};