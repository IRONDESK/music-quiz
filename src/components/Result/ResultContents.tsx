import React, { useEffect, useState } from 'react';
import { PALLETS, WIDTH } from '../../constants';
import styled from 'styled-components';

function ResultContents() {
    const [title, setTitle] = useState<string | null>(null);
    const [detail, setDetail] = useState<string | null>(null);
    const myPoint:any = localStorage.getItem('correct-amount');
    const artistId:any = localStorage.getItem('artist-id');
    const artistName:any = localStorage.getItem('artist-name');

    useEffect(():any => {
        setTitle(TitleMsg);
        setDetail(DetailMsg);
    }, []);

    function TitleMsg ():any {
        if ( myPoint == 10 ) {
            return (<>반박불가 찐리얼 팬</>);
        } else if ( myPoint >= 8 ) {
            return (<>이 정도면 과몰입 팬</>);
        } else if ( myPoint >= 6 ) {
            return (<>아슬아슬 과몰입의 경계</>);
        } else if ( myPoint >= 4 ) {
            return (<>팬인 것 같지만</>);
        } else if ( myPoint >= 1 ) {
            return (<>평범한 시민</>);
        } else if ( myPoint == 0 ) {
            return (<>팬 아닌 척 하는 팬?</>);
        }
    };
    function DetailMsg ():any {
        if ( myPoint == 10 ) {
            return (<>10문제를 모두 맞힌 당신,<br />
            '현생'을 살고 계신 게 맞나 싶을 정도의 찐리얼 팬입니다!<br />
            이미 {artistName} 앨범 쯤은 모두 소장하고 계실 듯 하네요.<br /><br />
            그래도 계속 알아가야 합니다!<br />
            아직 {artistName}에 과몰입한 사람이 너무 많거든요.<br />
            {artistName}에 대해 더 알고 싶다면 아래 버튼을 눌러주세요.
            </>);
        } else if ( myPoint >= 8 ) {
            return (<>슬슬 '현생'이 어려워지는 단계입니다.<br />
            어쩌면 {artistName}의 꿈을 한 번은 꿨을 지도 모릅니다.<br />
            주변 사람은 당신이 {artistName}의 엄청난 팬이란 걸 다 알고 있을 듯 합니다.<br /><br />
            하지만, 아직은 부족합니다!<br />
            아직 {artistName}에 과몰입한 사람이 너무 많거든요.<br />
            {artistName}에 대해 더 알고 싶다면 아래 버튼을 눌러주세요.
            </>);
        } else if ( myPoint >= 6 ) {
            return (<>{artistName}에 과몰입 초기 단계입니다.<br />
                {artistName}에 대해 이야기할 때, 타이틀곡보다 수록곡 이야기에 더 흥미를 갖는 당신.<br />
                어쩌면 {artistName}의 콘서트는 한 번 이상은 가봤을 수 있겠네요.<br /><br />
                하지만, 아직은 부족합니다!<br />
                아직 {artistName}에 진심인 사람이 너무 많거든요.<br />
                {artistName}에 대해 더 알고 싶다면 아래 버튼을 눌러주세요.</>);
        } else if ( myPoint >= 4 ) {
            return (<>{artistName}의 팬인 것 같긴 하지만 아직은 부족합니다.<br />
                당신보다 더 많은 사람들이 {artistName}의 노래와 앨범에 관심을 갖고 있어요.<br />
                {artistName}에 대해 더 알고 싶다면 아래 버튼을 눌러주세요.</>);
        } else if ( myPoint >= 1 ) {
            return (<>{artistName}에 대해 관심이 거의 없는 평범한 시민입니다.<br />
            팬은 아니지만 마지막까지 온 당신, {artistName}에 애정은 있으신 듯 합니다.<br />
            {artistName}의 노래에 관심이 생겼다면 아래 버튼을 눌러주세요.</>);
        } else if ( myPoint == 0 ) {
            return (<>{artistName}에 관심 없는 척 하는 사실은 팬이 아닐까요.<br />
                모든 문제를 다 틀린 당신, 어쩌면 {artistName}의 천생연분이 아닐까 싶습니다.<br />
                이렇게 된 김에 {artistName}에 흥미가 생기지 않으신가요?<br /><br />
                이건 운명입니다!<br />
                {artistName}에 대해 더 알고 싶다면 아래 버튼을 눌러주세요.</>);
        }
    };
    
    return (
    <Wrap>
        <TitleWrap>{title}</TitleWrap>
        <DetailWrap>{detail}</DetailWrap>
        <LinkToArtist href={'https://open.spotify.com/artist/' + artistId}>아티스트 정보</LinkToArtist>
    </Wrap>
    );
}

const Wrap = styled.div`
    display: block;
    @media screen and (max-width: ${WIDTH.TAB}) {
        padding: 0 13px;
    }
`;

const TitleWrap = styled.h3`
    display: block;
    margin: 10px 0;
    font-weight: 700;
    font-size: 56px;
    color: ${PALLETS.WHITE};
    line-height: 55px;
    word-break: keep-all;
    text-align: center;
    font-family: 'KNPSB';
    @media screen and (max-width: ${WIDTH.TAB}) {
        font-size: 43px;
    }
`;
const DetailWrap = styled.p`
    display: block;
    margin: 25px 0;
    font-weight: 300;
    font-size: 22px;
    color: ${PALLETS.WHITE};
    text-align: center;
    word-break: keep-all;
    line-height: 34px;
    @media screen and (max-width: ${WIDTH.TAB}) {
        font-size: 19px;
    }
`;
const LinkToArtist = styled.a`
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    width: 160px;
    height: 47px;
    justify-content: center;
    align-items: center;
    color: ${PALLETS.GREEN};
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 1.76px;
    text-decoration: none;
    border-radius: 200px;
    border: 3px solid ${PALLETS.GREEN};
    transition: background-color .3s;
    &:hover {
        background-color: ${PALLETS.GREEN};
        color: ${PALLETS.BLACK};
    }
`;

export default ResultContents;