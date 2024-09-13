import React from 'react';
import '../Style-sheet/yellowdragon-logo.css';

function YellowDragonLogo() {

  return (
    <div className='yellowdragon-logo-container'>
        <img 
          className='yellowdragon-logo'
          src={require('../images/yellowdragon-logo.png')}
          alt='YellowDragon logo to aplication tasks project' />
    </div>
  );
 
};


export default YellowDragonLogo;