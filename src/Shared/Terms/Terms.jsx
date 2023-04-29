import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>Terms and condittions apply</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem quis dolore corrupti blanditiis error aperiam cupiditate, sit perspiciatis ratione totam dolorum quam incidunt animi quidem qui quasi voluptates soluta. Quaerat voluptate commodi culpa repudiandae vel voluptatem corporis saepe.</p>
      <p>Go Back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;