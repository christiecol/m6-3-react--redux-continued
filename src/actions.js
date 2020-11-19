export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistProfile = () => {
  return {
    type: "REQUEST_ARTIST_PROFILE",
  };
};

export const artistProfileError = (err) => {
  return {
    type: "ARTIST_PROFILE_ERROR",
    err,
  };
};

export const receiveArtistProfile = (profile) => {
  console.log(profile);
  return {
    type: "RECEIVE_ARTIST_PROFILE",
    profile,
  };
};
