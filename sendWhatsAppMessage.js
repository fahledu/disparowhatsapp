require ('dotenv').config()
const {sid, token, numberTo} = process.env

// Importa o módulo Twilio
const twilio = require('twilio');

// Suas credenciais da conta Twilio
const accountSid = sid;
const authToken = token;

// Cria um cliente Twilio
const client = new twilio(accountSid, authToken);

// Envia uma mensagem pelo WhatsApp
client.messages.create({
    from: 'whatsapp:+14155238886', // Número de WhatsApp fornecido pelo Twilio
    to: `whatsapp:${numberTo}`, // Número de WhatsApp do destinatário
    body: 'Olá! Esta é uma mensagem enviada pelo WhatsApp usando Node.js e Twilio.'
})
.then(message => console.log(`Mensagem enviada com sucesso! SID: ${message.sid}`))
.catch(error => console.error('Erro ao enviar mensagem:', error));
