import styled from 'styled-components'
import {latestTransactions} from '../data'
import {Visibility} from "@material-ui/icons"
import {faker} from '@faker-js/faker';
const SmallWidget = () => {
    const randomName = faker.name.fullName();
    const randomEmail = faker.internet.email();
    const programs = ["Basic", "Premium", "VIP"]
    const randIndex = Math.floor(Math.random() * programs.length);
    return (
        <SmallWidgetStyle>
            <h3 className="widget-title">Latest Transactions</h3>
            <ul className="widget-list-container">
                {latestTransactions
                    ?.map((transaction) => (
                        <li key={transaction.id} className="widget-list">
                            <span className="widget-date">{transaction.location}</span>
                            <span className="widget-name">{randomName}</span>
                            <span className="widget-name">{randomEmail}</span>
                            <span className="widget-product">{programs[randIndex]}</span>
                            <span className="widget-product">{transaction.price}</span>
                            <button>
                                <Visibility/>
                            </button>
                        </li>
                    ))}
            </ul>
        </SmallWidgetStyle>
    )
}

export default SmallWidget

const SmallWidgetStyle = styled.div `
flex: 1;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
margin-right: 20px;
box-shadow: 0 0 15px -10px rgba( 0 ,0, 0, 0.75);
background-color: white;
.widget-title{
    font-size: 22px;
    font-weight: 600;
}

.widget-list-container{
    margin: 0;
    padding: 0;
    list-style: none;
}
.widget-list
{display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0;}
`