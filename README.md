# Script para disparo de whatsapp usando o [Twilio](https://www.twilio.com/) Sandbox em nodejs

## Crie uma conta no Twilio:

- Acesse o [Twilio](https://www.twilio.com/) e crie uma conta.
- Configure ambiente sandbox no [Twilio](https://www.twilio.com/) e obtenha suas credenciais de API (Account SID e Auth Token), o número de WhatsApp que fará o envio das mensagens, e configure o numero que irá receber as mensagens* 

*passo necessário para que os testes funcione

## Instale as dependencias

``npm install twilio``

``npm install dotenv``

## Configurando o dotenv

- Crie um arquivo .env com o conteudo:

```
sid = 'SEU_ACCOUNT_SID''

token = 'SEU_AUTH_TOKEN'

numberTo = 'SEU_NUMERO_CONFIGURADO_NO_TWILIO'
```
