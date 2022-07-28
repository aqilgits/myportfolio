import styled from 'styled-components';
import {Link as linkScroll} from 'react-scroll';


export const Nav = styled.div`
    height: 80px;
    width: 100%;
    transition: 0.5s;
    opacity: 1;
    background-color: ${({scrollNav}) => (scrollNav ? 'black' : 'transparent')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    font-size: 1rem;
    color: white;
    z-index: 1;
`;
export const NavbarContainer = styled.div`
    width: 100%;
    height: 40px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const NavbarLogo = styled(linkScroll)`
    margin-left: 24px;
`;
export const NavMenu = styled.div`
    height: 80px;
    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const NavLink = styled.p`
    margin: 0 10px;
    cursor: pointer;
` ;
export const BurgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: end;
        cursor: pointer;
    }
`;
export const NavItem = styled(linkScroll)`
    height: 79px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-radius: 3px;
    cursor: pointer;

    :hover{
        transform:scale(1.2) ;
    }
    &.active{
        border-bottom: solid 5px #34a0a4 ;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;