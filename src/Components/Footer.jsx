import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {

return(



  <footer>
    <div className='footer-link'>
    <ul>
      <li className="nav-item"><Link to='/'>Home</Link></li>
      <li className="nav-item"><Link to='/features'>Features</Link></li>
      <li className="nav-item"><Link to='/pricing'>Pricing</Link></li>
      <li className="nav-item"><Link to='/faqs'>FAQs</Link></li>
      <li className="nav-item"><Link to='/about'>About</Link></li>
    </ul>
    </div>
    <div className='copy-r'>
    <p> &copy; 2021 DOUBLE-T PRODUCTIONS</p>
    </div>
  </footer>

)



}

export default Footer