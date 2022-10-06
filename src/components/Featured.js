import {ArrowUpward} from "@material-ui/icons"
import styled from "styled-components"
import {featuredData} from "../data"

const Featured = () => {
    return (
        <FeaturedStyle>
            {featuredData
                ?.map((item, index) => (
                    <FeaturedItems key={index}>
                        <FeaturedName>{item.name}</FeaturedName>
                        <FeaturedMoneyContainer>
                        <span className = "featured-amount">{item.amount}</span>
                        <span className="featured-rate">{item.rate}
                        <ArrowUpward className = "featured-rate-icon" />
                        </span>
                        </FeaturedMoneyContainer>
                        <FeaturedSub>Compared to previous</FeaturedSub>
                    </FeaturedItems>
                ))}
        </FeaturedStyle>
    )
}

export default Featured

const FeaturedStyle = styled.div`
display: flex;
justify-content: space-between;

`
const FeaturedItems = styled.div`
margin : 0 3px;
padding: 20px ;
border-radius: 10px;
cursor: pointer;
box-shadow: 0 0 15px -10px rgba( 0 ,0, 0, 0.75);
background-color: white;
`
const FeaturedName = styled.div`
font-size: 20px;
`
const FeaturedMoneyContainer = styled.div`
display: flex;
align-items: center;
margin: 10px 0;

.featured-amount{
font-size: 30px;
font-weight: 600;
}
.featured-rate{
display: flex;
align-items: center;
margin-left: 20px;
}
.featured-rate-icon{
    font-size: 14px;
    margin-left: 5px;
    color: #44444d;
}
`
const FeaturedSub = styled.span`
font-size: 15px;
color: grey;
`
