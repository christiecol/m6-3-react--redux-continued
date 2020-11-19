import React, { useEffect } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchArtistProfile } from "../helpers/api-helpers";
import { useDispatch } from "react-redux";
import {
  receiveArtistProfile,
  requestArtistProfile,
  artistProfileError,
} from "../actions";
import { NumberShorten } from "../helpers/api-data-helpers";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const accessToken = useSelector((state) => state.auth.token);
  const artist = useSelector((state) => state.artists.currentArtist);
  const state = useSelector((state) => state);
  const status = useSelector((state) => state.artists.status);

  useEffect(() => {
    const setupProfile = async () => {
      dispatch(requestArtistProfile());
      try {
        const artistInfo = await fetchArtistProfile(accessToken, id);
        console.log(artistInfo);
        dispatch(receiveArtistProfile(artistInfo));
      } catch (err) {
        dispatch(artistProfileError(err));
      }
    };

    if (!accessToken) {
      return;
    }
    setupProfile();
  }, [accessToken]);
  // numberShorten(artistInfo.profile.followers.total);
  console.log("state", state);
  return (
    <Wrapper>
      {status === "idle" ? (
        <>
          <Name>
            <NameH1>{artist.name}</NameH1>
          </Name>
          <Image>
            <Avatar
              alt="Alexandra Streliski image"
              src={artist.images[1].url}
            />
          </Image>
          <Followers>
            <FollowNum>
              <span style={{ color: "hotPink" }}>
                <strong>{NumberShorten(artist.followers.total)}</strong>
              </span>{" "}
              <FollowerSpan>followers</FollowerSpan>
            </FollowNum>
          </Followers>
          <TagsGenre>
            <Tags>Tags</Tags>
            <GenreButton>{artist.genres[0]}</GenreButton>
          </TagsGenre>
        </>
      ) : (
        <div>loading</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  @media screen and (max-width: 600px) {
    background-color: black;
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  text-shadow: 0px -1px 2px rgba(0, 0, 0, 1);
`;

const NameH1 = styled.h1`
  font-size: 5rem;
  position: absolute;
  z-index: 2;
  margin-top: 20rem;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
    margin-top: 21rem;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 5rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Followers = styled.div`
  color: white;
  margin-top: 2rem;
`;

const FollowNum = styled.p`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const FollowerSpan = styled.span`
  margin-left: 1rem;
`;

const TagsGenre = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tags = styled.p`
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
`;

const GenreButton = styled.button`
  all: unset;
  font-size: 1.5rem;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  background-color: #242424;
  margin-top: 0;

  &:hover {
    background-color: #363636;
  }
`;

export default ArtistRoute;
