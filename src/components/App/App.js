import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../actions";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import ArtistRoute from "../../artistRoute/ArtistRoute";

const DEFAULT_ARTIST_ID = "0HyM2wwUfOsZYD4Dj5IOOZ";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessToken());
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/artists/:id">
            <ArtistRoute />
          </Route>
          <Route exact path="/artists/">
            <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
