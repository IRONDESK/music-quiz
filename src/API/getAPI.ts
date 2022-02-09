import axios from 'axios';
import { Buffer } from 'buffer';
import qs from 'qs';

// 토큰인증npm
export const getAuth = async () => {
  const clientId = '601f7dcf518d4932bc63ae4bf6c189ed';
  const clientSecret = 'f514d50cfd084b1483b3228b90d38d62';
  const authId = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString(
    'base64'
  );
  try {
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({ grant_type: 'client_credentials' });

    const res = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${authId}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return res.data.access_token;
  } catch (err) {
    console.log(err);
  }
};

// 가수의 앨범 id 불러오기
export const getArtistAlbum = async (artistId: String) => {
  const access_token = await getAuth();

  const api_url = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album`;
  try {
    const res = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const rand = Math.ceil(Math.random() * res.data.items.length) - 1;
    console.log(rand);
    return res.data.items[rand].id;
  } catch (err) {
    console.log(err);
  }
};
