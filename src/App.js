import { HomePage } from './component/homePage';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import { NavBar } from './component/navbar';
import { ContactPage } from './component/contactPage';
import { OurProducts } from './component/productsPage';

function App() {
  return (
    <div style={{display:'grid',gap:'100px'}}>
    <Router>
      <div>
        <NavBar />
      </div>
        <Routes>
          <Route path="/ourProduct" element={<OurProducts />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
    </div>
  );

}

export default App;

/*const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter with your email configuration
  const transporter = nodemailer.createTransport({
    service: 'YourEmailService', // e.g., 'Gmail', 'Outlook', etc.
    auth: {
      user: 'your@email.com',
      pass: 'your-password',
    },
  });

  // Email data
  const mailOptions = {
    from: 'your@email.com',
    to: 'your-work-email@company.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email not sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); */
