import { EmailSent } from "@/lib/templates/email/EmailSent";
import * as handlebars from "handlebars";

interface formEmail {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async(data: formEmail) => {
    const apiEndpoint = '/api/email';
    
    await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((response) => {
        alert(response.message);
    })
    .catch((err) => {
        alert(err);
    });
}

export function emailSentTemplate(name: string, url?: string) {
    const template = handlebars.compile(EmailSent);
    const htmlBody = template({
      name: name,
    //   url: url,
    });
    return htmlBody;
  }