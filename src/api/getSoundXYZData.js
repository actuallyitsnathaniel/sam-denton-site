import { sound_xyz_url, sound_xyz_key } from "./util";

const query = `
query AllArtistReleases {
    artist(id: "0b8e6590-75c5-48c7-a5ae-3067cddb9aeb") {
      id
      user {
        id
      }
      numReleases(filter: {
        releaseAuthor: ALL,
        creditSplit: ALL,
        releaseAlbumRevealStatus: ALL
      })
      releases(pagination: {
        first: 20
      }, filter: {
        releaseAuthor: ALL,
        creditSplit: ALL,
        releaseAlbumRevealStatus: ALL
      }) {
        edges {
          node {
            title
            id
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const getSoundXYZSongs = await fetch(sound_xyz_url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Sound-Client-Key": sound_xyz_key,
  },
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((data) => {
    let releases = data.data.artist.releases.edges;
    return releases;
  })
  .catch((error) => console.error("Error:", error));
