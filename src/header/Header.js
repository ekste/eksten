import React from 'react';
import theme from '../theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NE from '../assets/NE.svg';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.large};
    height ${theme.heights.header};
    z-index: ${theme.layers.top};
    position: relative;
`;

const NavList = styled.ul`
${theme.spacing.resetAll};
    display: flex;
    gap: ${theme.spacing.mid};
    list-style: none;
`;

const NavItem = styled.li`
    ${theme.spacing.resetAll};
`;

const StyledLink = styled(Link)`
    font-family: ${theme.fonts.heading};
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: ${theme.fontSize.tiny};
    line-height: 1;
    color: #FFFFFF;

    &:hover {
        color: ${theme.colors.headerText};
    }

    @media (min-width: 800px) {
        font-size: ${theme.fontSize.small};
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/"><img src={NE} alt="NE Logo" /></Link>
            <nav>
                <NavList>
                    <NavItem>
                        <StyledLink to="/about">About</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/coaching">Coaching</StyledLink>
                    </NavItem>
                </NavList>
            </nav>
        </StyledHeader>
    );
};

export default Header;
