import React, { useEffect, useState } from 'react';
import { PALLETS, WIDTH } from '../../constants';
import styled from 'styled-components';

function ResultContents() {
    const [title, setTitle] = useState<string | null>(null);
    const [detail, setDetail] = useState<string | null>(null);
    const myPoint:any = localStorage.getItem('correct-amount');

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
            return (<>팬아저(팬아닙니다저)</>);
        }
    };
    function DetailMsg ():any {
        if ( myPoint == 10 ) {
            return (<>반박불가 찐리얼 팬 설명 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque ex quam, iure repudiandae quibusdam voluptas minima dicta? Placeat, impedit nemo nesciunt eligendi tempore porro! Odio voluptas temporibus harum dignissimos.</>);
        } else if ( myPoint >= 8 ) {
            return (<>이 정도면 과몰입 팬 설명 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ullam vel hic ipsam commodi autem enim asperiores earum error omnis, consequuntur, architecto provident quos iste. Minima voluptatem tempore dolor error.</>);
        } else if ( myPoint >= 6 ) {
            return (<>아슬아슬 과몰입의 경계 설명 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quia reiciendis in, delectus expedita quidem reprehenderit repellat, natus debitis quo sint ipsum dolore sequi praesentium amet omnis illum? Doloribus, ipsam.</>);
        } else if ( myPoint >= 4 ) {
            return (<>팬인 것 같지만 설명 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quia reiciendis in, delectus expedita quidem reprehenderit repellat, natus debitis quo sint ipsum dolore sequi praesentium amet omnis illum? Doloribus, ipsam.</>);
        } else if ( myPoint >= 1 ) {
            return (<>평범한 시민 설명 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quia reiciendis in, delectus expedita quidem reprehenderit repellat, natus debitis quo sint ipsum dolore sequi praesentium amet omnis illum? Doloribus, ipsam.</>);
        } else if ( myPoint == 0 ) {
            return (<>팬아저(팬아닙니다저) 설명 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quia reiciendis in, delectus expedita quidem reprehenderit repellat, natus debitis quo sint ipsum dolore sequi praesentium amet omnis illum? Doloribus, ipsam.</>);
        }
    };
    
    return (
    <Wrap>
        <TitleWrap>{title}</TitleWrap>
        <DetailWrap>{detail}</DetailWrap>
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
    font-weight: 700;
    font-size: 45px;
    color: ${PALLETS.WHITE};
    line-height: 55px;
    word-break: keep-all;
    text-align: center;
`;
const DetailWrap = styled.p`
    display: block;
    margin: 25px 0;
    font-weight: 300;
    font-size: 22px;
    color: ${PALLETS.WHITE};
    text-align: center;
`;

export default ResultContents;