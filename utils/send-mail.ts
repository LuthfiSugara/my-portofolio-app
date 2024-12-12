
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