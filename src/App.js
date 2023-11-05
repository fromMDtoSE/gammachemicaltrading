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

/*import Axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await Axios.post('/your-api-endpoint', {
      name,
      email,
      message,
    });

    // Handle the response (success or error) here
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your-sendgrid-api-key');

app.post('/your-api-endpoint', async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'haya.qaqish@gammachecmicaltrading.com',
    from: 'your-email@example.com', // Use a verified sender email from SendGrid
    subject: 'Contact Us Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});*/
