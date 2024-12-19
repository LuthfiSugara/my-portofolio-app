import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";


export async function POST(request: NextRequest){
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL,
        to: email,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Message from ${name} - ${email})`,
        html: message
    }

    const sendMailPromise = () => new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function(err) {
            if(!err){
                resolve('Email sent');
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