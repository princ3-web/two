import React from 'react';
import 

const Scrolltotop = () => {
    const { pathname } = useLocation();

    console.log(pathname)
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

export default Scrolltotop;