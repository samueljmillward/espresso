import React, { useState } from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo href='/' component={RouterLink}>
                Es<span>presso</span>
            </Logo>

            <Icon onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Icon>

            <Menu isOpen={isOpen}>
                <MenuLink href='/beans'>My Beans</MenuLink>
                <MenuLink href='/brews'>Pull A Shot</MenuLink>
                <MenuLink>
                    <LoginButton />
                    <LogoutButton />
                </MenuLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: burlywood;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover {
        color: #c46404;
    }
`;

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #642b09;
`;

const Logo = styled.a`
    padding: 1rem 0;
    color: #af7c35;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span {
        font-weight: 800;
        font-size: 1.7rem;
        color: #af7c35;
    }
`;

const Icon = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: burlywood;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;
