// @ts-nocheck
/**
 USAGE:
 1. Run weinre in your terminal
 2. Run ngrok in another terminal -> ngrok http 3000 (your tunelled site)
 3. Run ngrok in another terminal -> ngrok http 8080 (weinre tunelled debugger)
 4. Add the useWeinre("<weinre tunelled debugger>.ngrok.io") in your Component.
 5. Access localhost:8080
 6. Access your site.
*/

import { useEffect } from 'react'
import { HttpHelpers } from '@qover/services';

export default (function(win) {
  function setUpWeinre(url) {
    const e = win.document.createElement('script');
    e.setAttribute(
      'src',
      `${url}/target/target-script-min.js#anonymous`
    );
    e.setAttribute('id', 'weinre');
    document.getElementsByTagName('body')[0].appendChild(e);
    console.log("WEINRE LOADED: ", url);
    return e;
  }

  return function(url = "http://localhost:8080") {
    useEffect(() => {
      const tag = setUpWeinre(url);
      console.log('WEINRE LOADED: ', url);
      return () => {
        win?.document.body.removeChild(tag);
        console.log('WEINRE REMOVED: ', url);
      };
    }, [])
  }
})(HttpHelpers.customWindow);
