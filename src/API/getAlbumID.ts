import axios from 'axios';
import { Buffer } from 'buffer';
import qs from 'qs';

// 토큰인증npm
export const getAuth = async () => {
  const clientId: string = '601f7dcf518d4932bc63ae4bf6c189ed';
  const clientSecret: string = 'f514d50cfd084b1483b3228b90d38d62';
  const authId: string = Buffer.from(
    `${clientId}:${clientSecret}`,
    'utf-8'
  ).toString('base64');
  try {
    const token_url: string = 'https://accounts.spotify.com/api/token';
    const data: string = qs.stringify({ grant_type: 'client_credentials' });

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
export const getArtistAlbum = async (artistId: string) => {
  const access_token: string = await getAuth();
  const api_url: string = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=KR`;

  try {
    const res = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    let targetArray: any = [];
    while (targetArray.length < 3) {
      targetArray.push(res.data.items[getRandom(res.data.items.length)].id);
      let set: any = new Set(targetArray);
      targetArray = [...set];
    }
    return await targetArray;
  } catch (err) {
    console.log(err);
  }
};

// 랜덤 값 반환 함수
const getRandom = (n: number) => {
  return Math.floor(Math.random() * n);
};
