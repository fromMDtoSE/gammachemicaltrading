const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);
    const mailTransporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailDetails = {
      from: process.env.GMAIL_USERNAME,
      to: 'haya.qaqish@gammachemicaltrading.com',
      subject: 'New Contact Us Form Submission',
      text: `You have received a new message from ${name} (${email}): ${message}`,
    };

    await mailTransporter.sendMail(mailDetails);
    return { statusCode: 200, body: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};