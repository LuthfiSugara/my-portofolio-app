import { EmailSent } from "@/lib/templates/email/EmailSent";
import * as handlebars from "handlebars";

interface formEmail {
    subject: string,
    to: string;
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async(data: formEmail) => {
    const apiEndpoint = '/api/email';
    
    const result = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => {
        return res.json();
    })
    .catch((error) => {
        return error;
    });

    return result;
}

export function emailSentTemplate(logo: string, name: string, year: number) {
    const template = handlebars.compile(EmailSent);
    const htmlBody = template({
        logo: logo,
        name: name,
        year: year,
    });
    return htmlBody;
  }