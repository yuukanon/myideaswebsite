import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return(
    <>
      <div className = "footer">
        <div className='fb'><FontAwesomeIcon icon={["fab", "facebook"]} size="5x"/></div>
        <div className='ig'><FontAwesomeIcon icon={["fab", "instagram"]} size="5x"/></div>
      </div>
      <div className="myideas">All Rights Reserved MY ideas LLC. Austin, TX</div>
    </>
    
  )
}

export default Footer;