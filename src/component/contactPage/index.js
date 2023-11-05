import React from "react"
import { NavBar } from "../navbar"
import './index.css'
export const ContactPage =() =>{
    return(
        <div style={{display:'grid', gap:'20px'}}>
            <div className="container">
                <img src="/vImage.png"/>
                <p>CONTACT US</p>
            </div>
            <div style={{height:'50px',backgroundColor:'#d3413f'}}>

            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <p style={{fontSize:'16pt',fontFamily: 'inherit',fontWeight:600}}>"MEET THE WIZARDS BEHIND THE CURTAIN - OUR TEAM OF EXTRAORDINARY PROFESSIONALS." </p>
            </div>

            <div style={{height:'50px',backgroundColor:'#d3413f'}}>

            </div>
            <div>
            <section className="contact-us" id="contact-section">
    <form id="contact" action="" method="post" >
     
      <div className="section-heading">
        <h4>Contact us</h4>
      </div>

      <div className="inputField" style={{display:'flex',justifyContent:'center',flexDirection:'row',paddingBottom:'14px'}}>
        <input type="name" name="name" id="name" placeholder="Your name" autoComplete="on" required />
        <span className="valid_info_name"></span>
      </div>

      <div className="inputField" style={{display:'flex',justifyContent:'center',paddingBottom:'14px'}}>
        <input type="Email" name="email" id="email" placeholder="Your email" required />
        <span className="valid_info_email"></span>
      </div>

      <div className="inputField" style={{display:'flex',justifyContent:'center',paddingBottom:'14px'}}>
        <textarea name="message" id="message" placeholder="Your message"></textarea>
        <span className="valid_info_message"></span>
      </div>

      <div className="inputField btn" style={{display:'flex',justifyContent:'center'}}>
        <button type="submit" id="form-submit" className="main-gradient-button" >Send a message</button>
      </div>

    </form>
  </section>
            </div>
        </div>
    )
}