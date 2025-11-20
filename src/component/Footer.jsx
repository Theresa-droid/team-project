import React from 'react'
import "../Styles/Footer.css"
import icon1 from "../assets/"

function Footer() {
  return (
    <div>
         <div className="footer">
            <div className="footer_icons">
              <img src={facebookIcon} alt="Facebook" />
              <img src={twitterIcon} alt="Twitter" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={youtubeIcon} alt="YouTube" />
            </div>
         </div>
        
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li> 
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
    
  )
}

export default Footer
