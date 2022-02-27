<div align="center">
  <h1>🎵최애 아티스트 테스트🎶</h1>
</div>

![8](https://user-images.githubusercontent.com/87234410/154940264-8de8f832-46c7-4702-b6ad-51a2e963d4d9.jpg)

- Page : https://music-quizz.vercel.app/
- 현재 **진행 중인 프로젝트**입니다.

## 개요

- 선택한 아티스트의 앨범과 노래에 관한 퀴즈 서비스
- 스포티파이 API를 활용하여 자동으로 퀴즈를 생성

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

### 코드의 역할 (코드의 파일 위치)

```
코드
```

- 코드 설명 or 문제 해결 과정

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
