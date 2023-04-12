import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Scrolltotop = () => {
    const { pathname } = useLocation();

    console.log(pathname)
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

export default Scrolltotop;