<div align="center">
  <h1>🎵최애 아티스트 테스트🎶</h1>
</div>

![8](https://user-images.githubusercontent.com/87234410/154940264-8de8f832-46c7-4702-b6ad-51a2e963d4d9.jpg)

- Page : https://music-quizz.vercel.app/

## 개요

- 선택한 아티스트의 앨범과 노래에 관한 퀴즈 서비스
- Spotify API를 활용하여 자동으로 퀴즈를 생성

## 목표와 기능

### 목표

- 유저가 선택한 아티스트에 대한 관심도를 알 수 있도록 점수화
- 음악 API를 기반으로 문제가 자동으로 생성화 되도록 기능화
- 테스트를 즐기고 인증하는 MZ 세대 트렌드에 부합하는 콘텐츠화

### 기능

- 선택한 아티스트의 앨범과 노래에 관한 퀴즈를 제공
- 제공되는 퀴즈는 API를 활용하여 총 4개로 구성됨
  - 앨범에 수록된 곡 선택
  - 수록곡이 포함된 앨범 선택
  - 앨범의 발매 연월 선택
  - 곡의 일부분을 듣고 곡 제목 선택
- 결과를 SNS에 공유할 수 있도록 제공

## 개발 환경

### 기술 스택

- 프론트엔드 : React / TypeScript / Styled-component
- 백엔드 : Spotify API 활용 (https://developer.spotify.com)

### 참여 인원

- 오래규(@OhRaeKyu), 손수철(@IRONDESK)

### 개발 일정

- 2022년 02월 06일 - 프로젝트 기획
- 2022년 02월 07일 ~ 02월 09일 - UI 구현
- 2022년 02월 09일 ~ 02월 11일 - 기능 구현
- 2022년 02월 12일 ~ 03월 03일 - 리팩토링

## 주요 코드

### Spotify API 호출 (src/API/getAlbumID.ts)

```ts
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
```

- API에서 아티스트의 앨범을 불러와 그 중 3개를 랜덤으로 `targetArray`에 담았음.
- 문제를 생성할 때, 앨범이 중복돼서 불러와지는 문제가 있었음.

```ts
// 기존 코드
return [
  res.data.items[getRandom(res.data.items.length)].id,
  res.data.items[getRandom(res.data.items.length)].id,
  res.data.items[getRandom(res.data.items.length)].id,
];
```

- `targetArray`를 `Set`을 사용해 중복되는 앨범이 담기는 것을 방지함.

<br/>

### API Data 렌더링 (src/components/Quiz/QuizItem.tsx 46-64)

```tsx
if (data && data.length === 3) {
  return (
    <ItemWrap>
      <Correct>{correct ? 'Correct ' + correct : null}</Correct>
      <Progress max={quizLength} value={question} />
      <Question question={question} data={data} randList={randList} />
      <Answer
        question={question}
        setQuestion={setQuestion}
        correct={correct}
        setCorrect={setCorrect}
        data={data}
        randList={randList}
      />
    </ItemWrap>
  );
} else {
  return null;
}
```

- API Data를 렌더링 하는 과정에서 초기 값(null)에 의해 undefined type error가 발생하였다.
- if-else 구문을 통해 data에 값이 제대로 저장 되었을 때 조건부 렌더링 될 수 있도록 해결함.

<br/>

## File Tree

```
📂music-quiz
├─ .gitignore
├─ package-lock.json
├─ package.json
├─📂 public
│  ├─ favicon.ico
│  ├─📂 icon
│  │  ├─ instagram.png
│  │  ├─ kakao-talk.png
│  │  └─ SpotifyLogo.png
│  └─ index.html
├─ README.md
├─📂 src
│  ├─📂 API
│  │  └─ getAlbumID.ts
│  ├─ App.css
│  ├─ App.tsx
│  ├─📂 components
│  │  ├─📂 Home
│  │  │  ├─ ArtistBox.tsx
│  │  │  └─ HeaderTitle.tsx
│  │  ├─📂 Layout
│  │  │  ├─ Advertisement.tsx
│  │  │  └─ Footer.tsx
│  │  ├─📂 Quiz
│  │  │  ├─ Answer.tsx
│  │  │  ├─ Question.tsx
│  │  │  └─ QuizItem.tsx
│  │  └─📂 Result
│  │     ├─ ResultContents.tsx
│  │     └─ ShareContents.tsx
│  ├─ constants.ts
│  ├─ index.css
│  ├─ index.tsx
│  └─📂 pages
│     ├─ Home.tsx
│     ├─ Quiz.tsx
│     └─ Result.tsx
└─ tsconfig.json
```
