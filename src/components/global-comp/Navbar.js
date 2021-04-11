import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import logo from '../../img/logo.png'
import { Container, Row, Col } from 'react-bootstrap';
import { SidebarData } from './NavbarData'
import SubMenu from './SubMenu'
import DSubMenu from './DSubMenu'


const Header = styled.div`
    display: block;
`;

const HeaderMain = styled.div`
    background: #f5f5f5;
    min-height: 80px;
    display: flex;
    align-items: center;
`;

const NavWrap = styled.div`
    @media only screen and (max-width: 991px) {
        max-height: 0px;
        /* overflow-y: auto; */
        background: white;
        padding: 0 20px;
        position: absolute;
        width: 100%;
        box-shadow: 0 0 60px #f5f5f5;
        top: 0;
        left: 0;
        transition: all 350ms ease;
        /* transform-origin: top left;
        transform: scaleY(0) translateY(-100%); */
        max-height: ${({ navbar }) => (navbar ? '400px' : '0')};
        overflow-y: ${({ navbar }) => (navbar ? 'auto' : 'hidden')};
    }
`;

const Nav = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width: 991px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
`;

const NavIcon = styled(Link)`
    font-size: 30px;
`;

function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const showNavbar = () => setNavbar(!navbar);

    return (
        <Header>
            <HeaderMain>
                <Container>
                    <Row className="align-items-lg-center flex-column flex-lg-row">
                        <Col lg={3}>
                            <div className="d-flex align-items-center justify-content-between">
                                <NavLogo to="/home">
                                    <img src={logo} className="logo" alt="Logo"/>
                                </NavLogo>

                                <NavIcon to='#' className="d-lg-none" onClick={showNavbar}>
                                    {
                                        navbar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />
                                    }
                                </NavIcon>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <NavWrap navbar={navbar}>
                                <Nav className="d-lg-none">
                                    {
                                        SidebarData.map((item, index) => {
                                            return <SubMenu item={item} key={index} />
                                        })
                                    }
                                </Nav>
                                <Nav className="d-none d-lg-flex desktop-menu">
                                    {
                                        SidebarData.map((item, index) => {
                                            return <DSubMenu item={item} key={index} />
                                        })
                                    }
                                </Nav>
                            </NavWrap>
                        </Col>
                    </Row>
                </Container>
            </HeaderMain>
        </Header>
    )
}

export default Navbar
