import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    LocalAtm,
    Assessment,
    Draft,
    Feedback,
    Forum,
    Work,
    Receipt,
    PieChart
} from "@material-ui/icons"
import styled, {css} from "styled-components"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <SidebarStyle>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle></SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <TheLineStyle/>
                            <Link to = "/" className = "link">Home</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                            <TheTimeline/>
                            <Link to = "/customers" className = "link"> Customers</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                            <TheTrendingUp/>
                            <Link to = "/calender" className = "link"> Calender</Link>
                        </SidebarListItem>
                    </SidebarList>

                </SidebarMenu>
                <SidebarMenu>
                    <SidebarList>
                        <SidebarListItem>
                        <ThePermIdentity/>
                            Users
                        </SidebarListItem>
                        <SidebarListItem>
                        <TheStorefront/>
                            Products
                        </SidebarListItem>
                        <SidebarListItem>
                        <TheAssessment/>
                           Report
                        </SidebarListItem>
                    </SidebarList>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarStyle>
    )
}

export default Sidebar

const SidebarStyle = styled.div`
height: 100vh;
background-color: rgb(54, 69, 79);
position: sticky;
width: 15%;
overflow: auto;
top: 0;
box-shadow: 0 0 15px -10px rgba( 0 ,0, 0, 0.75);
`
const SidebarWrapper = styled.div`
padding: 20px;
color: white;
`

const SidebarMenu = styled.div`
margin-top: 10px;
`

const SidebarTitle = styled.h1`
font-size: 13px;
color: white;
`
const SidebarList = styled.ul`
list-style: none;
padding: 5px;
`

const SidebarListItem = styled.li`
padding: 5px;
cursor: pointer;
border-radius:10px;
display: flex;
align-items: center;
&:hover{
    background-color: #1e1e20;
}
`

const sharedStyle = css`
margin-right: 5px;
font-size: 20px;
`

const TheLineStyle = styled(LineStyle)`
${sharedStyle}
`

const TheTimeline = styled(Timeline)`
${sharedStyle}
`

const TheTrendingUp = styled(TrendingUp)`
${sharedStyle}
`

const ThePermIdentity = styled(PermIdentity)`
${sharedStyle}
`

const TheStorefront = styled(Storefront)`
${sharedStyle}
`

const TheAssessment = styled(Assessment)`
${sharedStyle}
`