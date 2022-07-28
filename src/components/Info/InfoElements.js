import styled from "styled-components";

export const InfoContainer = styled.div`
    height: 660px;
    position: relative;
    background: ${({lightBg}) => (lightBg ? '#d9ed92' : '#184e77')};
    color: ${({lightBg}) => (lightBg ?  '#184e77' : '#d9ed92')};
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.9);

    @media screen and (max-width: 1000px){
        height: 900px;
    }
`;
export const InfoWrapper = styled.div`
    height: 100%;
    width: 80%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1 col2 col2'` : `'col2 col2 col1 col1'`)};

    @media screen and (max-width: 1000px){
        width: 100%;
        display: grid;
        grid-template-areas: 'col2 col2' 'col1 col1';
        align-items: center;
    }
`;
export const Column1 = styled.div`
    height: 80%;
    width: 500px;
    grid-area: col1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media screen and (max-width: 1000px){
        max-width: 468px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
    }
`;
export const Column2 = styled.div`
    height: 50%;
    width: 500px;
    grid-area: col2;
    display: grid;
    justify-content: start;

    @media screen and (max-width: 1000px){
        max-width: 468px;
        height: 50%;
    }
`;
export const TitleContainer = styled.div`
    display: grid;
    align-items: end;
`;
export const Title = styled.p`
    font-size: 1rem;
`;
export const Heading = styled.h1`
    font-size: 3rem;
`;
export const Subtitle = styled.p`
    font-size: 1rem;
`;
export const Image = styled.img`
    height: 13rem;
`;