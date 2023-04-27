import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <h4>Login with </h4>
      <Button variant="outline-primary" className='mb-2'><FaGoogle/>Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub>Login with Github</Button>

      <div className='mb-3'>
        <h4>Find us on </h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook className='text-primary-emphasis'></FaFacebook> FaceBook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className='text-info'/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;