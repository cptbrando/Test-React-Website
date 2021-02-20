import React, { useEffect, useState } from "react";
import SpotifyApi from "spotify-web-api-js";
import SpotifyAuth from "./SpotifyAuth";
const Spotify = new SpotifyApi();

const SpotifyPlayer = ({ spotifyToken, setSpotifyToken }) => {
  const [term, setTerm] = useState("");
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    if (spotifyToken) {
      Spotify.setAccessToken(spotifyToken);
    }

    return () => Spotify.setAccessToken("");
  }, [spotifyToken]);

  const searchSong = async (searchTerm) => {
    const songResponse = await Spotify.searchTracks(searchTerm);
    console.log(songResponse);

    setSongs(songResponse.tracks.items);
    setSelectedSong(songResponse.tracks.items[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    searchSong(term);
  };

  const renderedSongs = () => {};
  return (
    <div>
      {spotifyToken && (
        <form className="ui form" onSubmit={onSubmit}>
          <div className="ui input action focus">
            <input
              type="text"
              placeholder="Search..."
              required
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      )}

      <SpotifyAuth token={spotifyToken} setToken={setSpotifyToken} />

      {selectedSong && (
        <iframe
          title={selectedSong.id}
          src={`https://open.spotify.com/embed/track/${selectedSong.id}`}
          width="500"
          height="500"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyPlayer;
