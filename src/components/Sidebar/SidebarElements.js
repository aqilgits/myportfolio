import styled from 'styled-components';
import {Link as linkScroll} from 'react-scroll'

export const SideBar = styled.div`
    background: #34a0a4;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    transition: 0.3s ease-in-out;

    @media screen and (min-width: 768px){
        top: -100%;
        transition: 0.3s ease-in-out;
    }
`;
export const SidebarContainer = styled.section`
    /* border: solid 1px red; */
    height: 100%;
`;
export const CloseBtn = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    cursor: pointer;
    color: white;
    position: relative;
`;
export const SidebarMenu = styled.div`
    width: 100%;
    height: 80%;
    align-items: center;
    display: flex;
    justify-content: center;
    
`;
export const SidebarWrapper = styled.div`
    display: table-row;
`;
export const SidebarItem = styled.div`
    margin: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const SidebarLink = styled(linkScroll)`
    font-size: 24px;
    font-weight: 1000;
    cursor: pointer;
    color: white;
    &:hover{
        color: #99d98c;
    }
`;