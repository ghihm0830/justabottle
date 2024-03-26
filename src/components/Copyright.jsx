import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Copyright() {
    const currentYear = new Date().getFullYear();


  return (
    <p className='copyright'>
      Copyright <CopyrightIcon className='copy-icon'/> {currentYear}
    </p>
  )
}
