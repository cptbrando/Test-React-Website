import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import DropDown from "./DropDown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";
import Parallax from "./Parallax";
import SpotifyPlayer from "./SpotifyPlayer";
import Auth from "./Auth";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const items = [
  {
    title: "What is React?",
    content:
      "React is a front-end javascript framework/library created by Facebook for building user interfaces.",
  },
  {
    title: "Why use React?",
    content:
      "React is a favorite JS library among engineers because it allows the creation of reusable UI components, and updating data and views without having to refresh the entire page.",
  },
  {
    title: "How do you use React?",
    content: (
      <>
        <div>
          The main part of a React application is called components. These
          components can share information through the passing of arguments
          called "props", or through shared state objects which allow React to
          automatically update components with the new state data without having
          to parse out the entire page/dom.
        </div>
        <br />
        <div>
          Tutorials can be found on the main &nbsp;
          <a
            href="https://reactjs.org/tutorial/tutorial.html"
            target="_blank"
            rel="noreferrer"
          >
            React website
          </a>
        </div>
      </>
    ),
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [spotifyToken, setSpotifyToken] = useState("");
  return (
    <>
      <Header />
      <div className="ui container">
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/dropdown">
          <DropDown
            options={options}
            selected={selected}
            label="Select a Color"
            onSelectedChange={setSelected}
          />
          <h2 style={{ color: selected.value }}>
            This Text is {selected.label}
          </h2>
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
        <Route path="/spotify">
          <SpotifyPlayer
            spotifyToken={spotifyToken}
            setSpotifyToken={setSpotifyToken}
          />
        </Route>
        <Route path="/auth/spotify">
          <Auth />
        </Route>
      </div>
      <Route path="/parallax">
        <Parallax />
      </Route>
    </>
  );
};

export default App;
