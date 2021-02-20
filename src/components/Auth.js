import React, { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    console.log(`updated: ${window.opener}`);
    // get the URL parameters which will include the auth token
    const url = window.location.hash.substring(1);
    const urlParams = new URLSearchParams(url);
    const accessToken = urlParams.get("access_token");
    const params = { accessToken };
    if (window.opener) {
      // send them to the opening window
      window.opener.postMessage(params, "http://localhost:3000");
      // close the popup
      window.close();
    }
  }, []);

  return <div />;
};

export default Auth;
