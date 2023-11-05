import React, { useState } from 'react';

const DropDownMenu = ({ title, values }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          height: '70px',
          backgroundColor: isMenuOpen ? '#EDEDED' : 'transparent',
          padding: '10px',
          borderBottom: '1px solid black',
          borderRadius: '5px',
          marginBottom: '10px',
          width: '320px',
          justifyContent:'space-between',
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div style={{ display: 'inline', fontSize: '18px', fontWeight: 'bold' }}>{title}</div>
        <div style={{ cursor: 'pointer', display: 'inline', marginLeft: 'auto' }}>
          {isMenuOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
        </div>
      </div>
      {isMenuOpen && (
        <div style={{ backgroundColor: '#FFF' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {values?.length > 0 &&
              values?.map((item, index) => (
                <li
                  key={`${title}-${index}`}
                  style={{
                    padding: '5px',
                    backgroundColor: '#FFF',
                    fontWeight:'bold',
                    transition: 'background-color 0.3s',
                  }}
                >
                 • {item}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
