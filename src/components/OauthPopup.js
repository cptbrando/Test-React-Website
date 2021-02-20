import React, { useEffect, useState } from "react";

const OauthPopup = ({ authUrl, setToken }) => {
  const [loading, setLoading] = useState(false);
  let windowObjectReference = null;
  let previousUrl = null;
  const BASE_URL = window.location.origin;
  let intervalId = null;

  useEffect(() => {
    // get the URL parameters which will include the auth token
    const params = window.location.search;
    if (window.opener) {
      console.log(`Params: ${params}`);
      // send them to the opening window
      window.opener.postMessage(params);
      // close the popup
      window.close();
    }
  });

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  const openSignInWindow = (url, name) => {
    // remove any existing event listeners
    window.removeEventListener("message", receiveMessage);
    setLoading(true);
    // window features
    const strWindowFeatures =
      "toolbar=no, menubar=no, width=600, height=800, top=100, left=100";

    if (windowObjectReference === null || windowObjectReference.closed) {
      /* if the pointer to the window object in memory does not exist
           or if such pointer exists but the window was closed */
      windowObjectReference = window.open(url, name, strWindowFeatures);
    } else if (previousUrl !== url) {
      /* if the resource to load is different,
           then we load it in the already opened secondary window and then
           we bring such window back on top/in front of its parent window. */
      windowObjectReference = window.open(url, name, strWindowFeatures);

      windowObjectReference.focus();
    } else {
      /* else the window reference must exist and the window
           is not closed; therefore, we can bring it back on top of any other
           window with the focus() method. There would be no need to re-create
           the window or to reload the referenced resource. */
      windowObjectReference.focus();
    }

    if (windowObjectReference) {
      const isPopupClosed = () => {
        if (windowObjectReference && windowObjectReference.closed) {
          clearInterval(intervalId);
          setLoading(false);
        }
      };

      intervalId = setInterval(isPopupClosed, 500);
    }
    // add the listener for receiving a message from the popup
    window.addEventListener("message", receiveMessage, false);
    // assign the previous URL
    previousUrl = url;
  };

  const receiveMessage = (event) => {
    windowObjectReference = null;
    console.log(event);
    setLoading(false);
    clearInterval(intervalId);
    // Do we trust the sender of this message? (might be
    // different from what we originally opened, for example).
    if (event.origin !== BASE_URL) {
      return;
    }
    const { data } = event;
    const accessToken = data.accessToken;
    if (accessToken) {
      setToken(accessToken);
    }
  };

  // some text to show the user
  return (
    <>
      <button
        className={`ui button ${loading && "loading"}`}
        onClick={() => openSignInWindow(authUrl, "Log In To Spotify")}
      >
        Login to Spotify
      </button>
    </>
  );
};

export default OauthPopup;
