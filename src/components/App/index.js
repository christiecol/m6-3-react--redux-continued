export { default } from "./App";
//   useEffect(() => {
//     const setupProfile = async () => {
//       const requestInfo = async () => {
//         const artistInfoRequest = await requestArtistProfile();
//         const artistInfo = await request(artistInfoRequest);
//         return artistInfo;
//       };
//       const receiveInfo = async () => {
//         const fetchProfile = await fetchArtistProfile(accessToken, id);
//         const result = await request(fetchProfile);
//         return dispatch(receiveArtistProfile(result));
//       };
//       try {
//         const awaitInfo = await requestInfo();
//         const result = await receiveInfo(awaitInfo);
//         return result;
//       } catch (err) {
//         console.log(err);
//       }
//     };
