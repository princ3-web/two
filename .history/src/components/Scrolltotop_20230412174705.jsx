import React from 'react'

const Scrolltotop = () => {
    const { pathname } = useLocation();

    console.log(pat)
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

export default Scrolltotop;