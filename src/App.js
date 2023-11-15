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
