import React from 'react'
import {NotificationsNone, Language, Settings} from "@material-ui/icons"
import styled from "styled-components";

const Navbar = () => {
    const randomNum = () => Math.floor(Math.random() * 99) + 1
    return (
        <NavbarStyle>
            <NavbarWrapper>
                <NavbarLeft>
                    <Logo>CAR ADMIN</Logo>
                </NavbarLeft>
                <NavbarRight>
                    <NavbarIcon>
                        <NotificationsNone/>
                        <IconBadge>
                            5
                        </IconBadge>
                    </NavbarIcon>
                    <NavbarIcon>
                        <Settings/>
                    </NavbarIcon>
                    <Avatar src={`https://randomuser.me/api/portraits/women/${randomNum()}.jpg`}/>
                </NavbarRight>
            </NavbarWrapper>
        </NavbarStyle>
    )
}

export default Navbar

const NavbarStyle = styled.div `
width: 100%;
height: 50px;
background-color: black;
position: sticky;
z-index: 999;
color: white;
`

const NavbarWrapper = styled.div `
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding : 0 20px;
`

const Logo = styled.span `
cursor: pointer;
color: #fff;
font-weight: bold;
font-size: 30px;
`

const NavbarLeft = styled.div `
`

const NavbarRight = styled.div `
display: flex;
align-items: center;
`

const NavbarIcon = styled.div `
margin-right: 10px;
position: relative;
cursor: pointer;
color: white,
`

const IconBadge = styled.div `
width: 15px;
height: 15px;
position: absolute;
top: -5px;
right: 0;
color: white;
display: flex;
border-radius: 50%;
font-size: 10px;
justify-content: center;
align-items: center;
`

const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`