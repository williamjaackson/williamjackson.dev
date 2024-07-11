// app/api/contact/route.js
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    const { name, email, subject, message } = await req.json();

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: 'noreply <noreply@williamjackson.dev>',
            to: process.env.CONTACT_EMAIL,
            subject: 'Form Submission: ' + subject,
            html: `${name} (${email}) has sent you a message:<br><br>${message}`
        }),
    });

    if (res.ok) {
        const data = await res.json();
        return Response.json(data);
    }

    return NextResponse.json({ success: true });
};