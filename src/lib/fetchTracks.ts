import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQCFSi_M_CFAsnHb-2EnRj9_Hr407_E9F7C_DEyYOBzZLHPjv17rrZGfHNNd95xSP0FtrI4cBVy3yLAM5MLGHfzhOCyOilTCZaMuwhK1BxIbR4f04kAmfWXNvl5f5jk0qx3xRkBIFQ-fZddfrVCQ5DX0VvXA-c-oPv5ctqaATsUiCzaUb9FQhDuSfiFwMZCS3SUG8JIt8wI8LRBP-_LgLWE';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
