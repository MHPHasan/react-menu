import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarLi = styled.li`
    position: relative;
    @media only screen and (max-width: 991px) {
        width: 100%;
    }
`;

const NavbarLink = styled(Link)`
    display: flex;
    color: #111;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: blue;
    }
    @media only screen and (max-width: 991px) {
        padding: 14px 0;
    }
`;

const NavbarLabel = styled.span`
    /* margin-left: 16px; */
    margin-left: 0px;
`;

const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px 14px;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, .15);
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 180px;
    width: max-content;
    @media only screen and (max-width: 991px) {
        background-color: transparent;
        position: relative;
        box-shadow: none;
        padding: 0;
        margin-left: 20px;
        width: auto;
        max-width: 100%;
    }
`;

const DropdownList2 = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px 14px;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, .15);
    position: absolute;
    top: 0;
    left: 109%;
    min-width: 180px;
    width: max-content;
    @media only screen and (max-width: 991px) {
        background-color: transparent;
        position: relative;
        box-shadow: none;
        left: 0;
        margin-left: 10px;
    }
`;

const DropdownListItem = styled.li`
    position: relative;
    &:not(:last-child) {
        padding-bottom: 14px;
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #111;
`;


function SubMenu({ item }) {

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const [subSubnav, setSubSubnav] = useState(false);
    const showSubSubnav = () => setSubSubnav(!subSubnav);

    return (
        <>
            <NavbarLi>
                <NavbarLink to={item.path} onClick={ item.subNav && showSubnav }>
                    <div>
                        {/* {item.icon} */}
                        <NavbarLabel>{item.title}</NavbarLabel>
                    </div>
                    <div>
                        {
                            item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null
                        }
                    </div>
                </NavbarLink>
                    {
                        subnav && <DropdownList> 
                            {
                                item.subNav.map((item, index) => {
                                    return (
                                        <DropdownListItem key={index}>
                                            <DropdownLink to={item.path} onClick={ item.subNav && showSubSubnav }>
                                            <div>
                                                {/* {item.icon} */}
                                                <NavbarLabel>{item.title}</NavbarLabel>
                                            </div>
                                            <div>
                                                {
                                                    item.subNav && subSubnav ? item.iconOpened : item.subNav ? item.iconClosed : null
                                                }
                                            </div>
                                            </DropdownLink>
                                            {
                                                subSubnav && item.subNav && <DropdownList2>
                                                    {
                                                        item.subNav.map((item, index) => {
                                                            // return <SubSubMenu item={item} key={index} />
                                                            return (
                                                                <DropdownListItem key={index}>
                                                                    <DropdownLink to={item.path}>
                                                                            {/* {item.icon} */}
                                                                            <NavbarLabel>{item.title}</NavbarLabel>
                                                                    </DropdownLink>
                                                                </DropdownListItem>
                                                            )
                                                        })
                                                    }
                                                </DropdownList2>
                                            }
                                        </DropdownListItem>
                                    )
                                })
                            }
                        </DropdownList>
                    }
            </NavbarLi>
        </>
    )
}

export default SubMenu
