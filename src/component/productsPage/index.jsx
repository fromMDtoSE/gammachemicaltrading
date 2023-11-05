import React, { useState } from "react";
import { NavBar } from "../navbar";
import DropDownMenu from '../dropDownMenu';
import './index.css';

const mydata = {
    "ALCOHOLS":
        ["ETHANOL ALL GRADES", "BENZYL ALCOHOL", "ISO PROPYL ALCOHOL  (IPA)", "METHANOL", "METHYLENE CHLORIDE", "MONO ETHYLENE GLYCOL", "MONOPROPYLENE GLYCOL (MPG)", "N - BUTANOL", "TEXANOL"],
    "ESTERS":
        ["ETHYL ACETATE", "ISO BUTYL ACETATE", "ISO PROPYL ACETATE", "N BUTYL", "N PROPYL ACETATE"],
    "GLYCOL ETHERS / ESTERS":
        ["BUTYL GLYCOL", "ETHYL GLYCOL", "METHOXY PROPANOL", "METHOXY PROPYL ACETATE"],
    "HYDROCARBONS":
        ["SOLVENT NAPHTHA - 100", "TOLUENE", "WHITESPIRIT", "XYLENE"],
    "KETONES":
        ["ACETONE", "CYCLOHEXANONE"],
    "PIGMENTS":
        ["BLACK 4330 SYNOX", "BROWN 4610 SYNOX", "BROWN 663 DRAGON", "GREEN 4590", "POLYETHYLENE GLYCOL 400", "RED 4130", "RED 4222", "YELLOW BAYER", "YELLOW 4920 SYNOX"],
    "PRESERVATIVES": ["BIOCIDE"],
    "PLASTICIZERS":
        ["DBP , DIBUTYL PHTHALATE", "DOP, DIOCTYL PHTHALATE"],
    "TITANIUM":
        ["TITAN 121- CRYSTAL", "TITAN 128", "TITAN 902", "TITAN CHIKI", "TITAN CHINESE 298", "TITAN 134", "TITAN 706", "TITAN LEMON"],
    "THICKENERS":
        ["AEROSIL200", "BERMOCOLL EBS 481 FQ"],
    "INORGANIC BASES":
        ["AMMONIA", "CAUSTIC SODA FLAKES", "KOH, POTASSIUM HYDROXIDE", "SODIUM HYDROGEN CARBONATE (SODIUM BICARBONATE)"],
    "METALLIC COMPOUNDS":
        ["ALUMINIUM PASTE LEAFING", "ZINC DUST", "ZINC OXIDE LITHOPONE", "ZINC STEARATE"],
    "SPECIALITY CHEMICALS":
        ["ANTI FOAM", "ICOLLEEN ICEBERG", "KAOLIN", "TEXAPON"],
    "POLYMERIC COMPOUNDS":
        ["STYRENE ACRYLIC", "CARBOPOL", "POLYETHYLENE GLYCOL 400"],
    "OTHER CHEMICALS":
        ["ALUMINIUM SILICATE", "CALCIUM CARBONATE", "CARBOPOL", "CARBON BLACK 660", "CARBON BLACK UCM", "CITRIC ACID", "GLYCERIN", "DLP", "DMF", "LIGHT LIQUID PARAFFIN BP", "SODIUM HEXA MATA PHOSPHATE", "SOYALECITHINE", "STEARIC ACID", "TALC", "ZINC PHOSPHATE",]
}

export const OurProducts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("");
  const values = Object.entries(mydata).map(([key, value]) => [key, value]);
  return (
    <div style={{ display: 'grid', gap: '20px' }}>
      <div className="container">
        <img src="/vImage.png" alt="Product Image" />
        <p>OUR PRODUCTS</p>
      </div>

      <div style={{ height: '100px', backgroundColor: '#d3413f', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ textAlign: 'center', fontSize: '3rem', fontFamily: 'inherit', display: 'flex', justifyContent: 'center' }}>Product List</p>
      </div>
      
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',paddingLeft:'40px',paddingRight:'40px'}}>
        {values?.map((i) => <DropDownMenu title={i[0]} values={i[1]} isMenuOpen={isMenuOpen === i[0]} setIsMenuOpen={setIsMenuOpen} />)}
      </div>
      <div style={{height:'50px'}}></div>
    </div>
  );
}
