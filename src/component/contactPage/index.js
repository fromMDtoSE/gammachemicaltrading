import React, { useState } from "react";
import { NavBar } from "../navbar";
import './index.css';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents default form submission behavior

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form fields
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div style={{ display: 'grid', gap: '20px' }}>
            <div className="container">
                <img src="/vImage.png" alt="Visual Representation" />
                <p>CONTACT US</p>
            </div>
            <div style={{ height: '50px', backgroundColor: '#d3413f' }}></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ fontSize: '16pt', fontFamily: 'inherit', fontWeight: 600 }}>
                    "MEET THE WIZARDS BEHIND THE CURTAIN - OUR TEAM OF EXTRAORDINARY PROFESSIONALS."
                </p>
            </div>
            <div style={{ height: '50px', backgroundColor: '#d3413f' }}></div>
            <section className="contact-us" id="contact-section">
                <form id="contact" onSubmit={handleSubmit}>
                    <div className="section-heading">
                        <h4>Contact us</h4>
                    </div>
                    <div className="inputField" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingBottom: '14px' }}>
                        <input type="text" name="name" id="name" placeholder="Your name" autoComplete="on" required onChange={handleChange} value={formData.name} />
                        <span className="valid_info_name"></span>
                    </div>
                    <div className="inputField" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '14px' }}>
                        <input type="email" name="email" id="email" placeholder="Your email" required onChange={handleChange} value={formData.email} />
                        <span className="valid_info_email"></span>
                    </div>
                    <div className="inputField" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '14px' }}>
                        <textarea name="message" id="message" placeholder="Your message" onChange={handleChange} value={formData.message}></textarea>
                        <span className="valid_info_message"></span>
                    </div>
                    <div className="inputField btn" style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit" id="form-submit" className="main-gradient-button">Send a message</button>
                    </div>
                </form>
            </section>
        </div>
    );
};