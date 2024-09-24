'use server';

import nodemailer from 'nodemailer';

export default async function main(formData) {
  console.log(process.env.GMAIL_USER, process.env.GMAIL_PASS, formData)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER, // Replace with your Gmail email address
      pass: process.env.GMAIL_PASS, // Replace with your Gmail password or app-specific password
    },
  });

  const { firstname, lastname, phoneNumber, email, productDropDown, offeringsDropDown, message } = formData;

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${email} <${email}>`,
      to: "support@gammachemicaltrading.com", // Replace with the recipient email address
      subject: "New Inquiry from Contact Form",
      html: `
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Product Category:</strong> ${productDropDown.join(', ')}</p>
                <p><strong>Offerings of Interest:</strong> ${offeringsDropDown.join(', ')}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    });

    console.log("Message sent: %s", info.messageId);
    return info.messageId; // Optionally return the message ID or any other data
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    throw error; // Throw the error to handle it in the calling function or component
  }
}
