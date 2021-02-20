import React, { useEffect } from "react";
import OauthPopup from "./OauthPopup";

const SpotifyAuth = ({ token, setToken }) => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = "d8a15ce17bf44ff49cb695978dd0248b";
  const redirectUri = "http://localhost:3000/auth/spotify";
  const scopes = ["user-read-currently-playing", "user-read-playback-state"];

  const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;

  const urlParams = new URLSearchParams(window.location.hash.substring(1));

  //   if (urlParams) {
  const accessToken = urlParams.get("access_token");
  window.location.hash = "";
  //   }

  //   };

  useEffect(() => {
    // Set token
    let _token = accessToken;
    if (_token) {
      // Set token
      setToken(_token);
    }
  }, [accessToken, setToken]);

  return (
    <div className="App">
      <header className="App-header">
        {!token && <OauthPopup authUrl={authUrl} setToken={setToken} />}
      </header>
    </div>
  );
};

export default SpotifyAuth;
