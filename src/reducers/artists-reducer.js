const initialState = {
  currentArtist: null,
  status: "loading",
  error: null,
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_PROFILE": {
      console.log(action);
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_ARTIST_PROFILE": {
      console.log(action);
      return {
        ...state,
        status: "idle",
        currentArtist: action.profile,
        profile: action.profile,
      };
    }

    case "ARTIST_PROFILE_ERROR": {
      return {
        ...state,
        status: "error",
        error: action.err,
      };
    }

    default: {
      return state;
    }
  }
}

/*
The 'type' for current artist will look like this:
{
  id: 'abc123',
  profile: profile response,
  topTracks: top tracks response,
  relatedArtists: related artists response
}
*/
