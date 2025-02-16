import React from 'react';

const Footer = () => {
  return (
    <div className='p-4 text-center text-sm text-gray-600 bg-gray-100'>
      Dibuat dengan ☕ oleh 
      <a className='font-bold hover:underline ' href="http://syafiqibrahim.my.id" target="_blank" rel="noopener noreferrer"> Syafiq</a>
      , menggunakan API dari 
      <a href="https://api.myquran.com" target="_blank" rel="noopener noreferrer"> MyQuran.com</a> dan bersumber dari Kemenag RI .
    </div>
  );
};

export default Footer;