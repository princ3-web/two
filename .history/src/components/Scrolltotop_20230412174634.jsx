import React from 'react'

const Scrolltotop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

export default Scrolltotop;