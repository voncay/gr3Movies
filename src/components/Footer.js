import * as React from 'react';
import Button from '@mui/material/Button';
import '../App.css'

const Footer = () => {
  return (
    <div className='gitHub'>
      <Button variant="contained" href="https://github.com/voncay">
        voncay
      </Button>
      <Button variant="contained" href="https://github.com/draosi">
        draosi
      </Button>
    </div>
  );
};

export default Footer;
