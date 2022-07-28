import styled from 'styled-components';
import bg from '../../Images/Homewallpaper.jpg'


export const HomeContainer = styled.div`
    height: 100vh ;
    top: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${bg});
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.3s ease-in;
    width: 100%;
`;
export const HomeWrapper = styled.div`
    height: 400px;
    max-width: 1000px;
    display: grid;
    grid-gap: 10px;
`;
export const HomeItem = styled.div`
    display: flex;
    padding: 10px 0;

    @media screen and (max-width: 768px){
        padding-left: 10px;
    }
`;
export const Title = styled.h1`
    font-size: 4rem;
    text-align: left;
    text-shadow: 2px 2px 5px black;;

    @media screen and (max-width: 768px){
        font-size: 3rem;
    }
`;
export const Description = styled.p`
    font-size: 1rem;
    text-align: left;
`;