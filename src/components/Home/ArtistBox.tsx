import React from 'react';
import { PALLETS, WIDTH } from '../../constants';
import styled from 'styled-components';

type ItemProps = {
    SpotifyID: string;
    Name: string;
    ImageLink: string;
  };

function ArtistBox({ SpotifyID, Name, ImageLink }:ItemProps) {
    return (
    <LabelWrap data-spotifyid={SpotifyID}>
        <InputRadio type="radio" name="artist" hidden/>
        <ItemWrap data-spotifyid={SpotifyID}>
            <Img src={ImageLink} />
            <ArtistName>{Name}</ArtistName>
        </ItemWrap>
    </LabelWrap>
    );
}

const LabelWrap = styled.label``;
const ItemWrap = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 17px;
    background: #181818;
    border: 2px solid transparent;
    border-radius: 10px;
    &:hover {
        background: #282828;
    }
`;
const InputRadio = styled.input`
    &:checked + ${ItemWrap} {
        box-sizing: border-box;
        border: 2px solid #777777;
    }
`;
const Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    object-fit: cover;
`;
const ArtistName = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    word-break: keep-all;
    color: ${PALLETS.WHITE};
    @media screen and (max-width: ${WIDTH.MID}) {
        font-size: 22px;
    }
`;

export default ArtistBox;
