import React from "react"
import { NavBar } from "../navbar"
import './index.css';

export const HomePage =() =>{
    return(
        <div style={{display:'grid', gap:'20px'}}>
            <div className="container">
                <img src="/vImage.png" alt={"logo"}/>
                <p>GAMMA CHEMICAL & TRADING COMPANY</p>
            </div>
            <div style={{height:'50px',backgroundColor:'#d3413f'}}>

            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <p style={{fontSize:'32pt',fontFamily: 'inherit',fontWeight:600}}>ABOUT US</p>
            </div>
            <div style={{display:'grid',paddingLeft:'60px',paddingRight:'60px',gap:'10px'}}>
                <p style={{fontSize:'14pt',fontFamily: 'inherit',fontWeight:600}}>Gamma Chemical & Trading Company is a well-established chemical firm in Jordan, founded in 2007 by Mr. George Qaqish. Mr. Qaqish has extensive experience in the chemical industry, dating back to 1989. Over time, Gamma Chemical has built a strong reputation in the market, primarily due to its commitment to high-quality standards, safety measures, and compliance with industry regulations.</p>
                <p style={{fontSize:'14pt',fontFamily: 'inherit',fontWeight:600}}>The company's product portfolio is diverse, offering a wide range of raw materials that serve various sectors, including Paint, Plastic, Molasses, Detergents, Cosmetics, Pesticides, and Food. This diverse offering allows Gamma Chemical to meet the needs of different industries and customers.</p>
                <p style={{fontSize:'14pt',fontFamily: 'inherit',fontWeight:600}}> Due to its solid reputation and ability to deliver quality products, Gamma Chemical & Trading Company has likely garnered a loyal customer base not only in Jordan but also potentially in other markets. Their emphasis on maintaining quality and adhering to safety and industry standards contributes to their success in the competitive chemical industry.</p>
            </div>
            <div style={{height:'50px',backgroundColor:'#d3413f'}}>

            </div>
        </div>
    )
}