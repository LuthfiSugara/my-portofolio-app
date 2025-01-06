import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";


export async function POST(request: NextRequest){
    const { subject, to, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL,
        to: to,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: subject,
        html: message
    }

    const sendMailPromise = () => new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function(err) {
            if(!err){
                resolve('Email sent successfully');
            }else{
                reject(err.message);
            }
        });
    });

    try{
        await sendMailPromise();

        return NextResponse.json({
            status:'success',
            message: 'Email sent successfully'
        });
    }catch(err){
        return NextResponse.json({
            status: 'error',
            error: err
        }, {status: 500});
    }

}