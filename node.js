const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // For sending emails (or use Facebook API for messenger)

app.use(bodyParser.json());

app.post('/sendLetter', async (req, res) => {
    const { recipient, message } = req.body;

    // Facebook Messenger or email integration can go here
    // Example using Nodemailer (you can replace this with Facebook API)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    let info = await transporter.sendMail({
        from: '"Christmas Letter" <your-email@gmail.com>',
        to: recipient, 
        subject: 'Merry Christmas!',
        text: message
    });

    res.send('Letter sent successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
