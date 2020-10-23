import React from "react";
import { Config } from '../../Config'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Card from './Card'
import LargeCard from './LargeCard'

const Container = styled.div`
margin-top : 10;
margin-bottom : 20;
color : Global.color.body;
font-family : Global.font.primary
`;

class Gallery extends React.Component {



    render() {

        const { cities } = this.props
        console.log('cities dans gallery', cities);

        return (

            <div>

                <Container className='row'>
                    <div className='col-md-12'>
                        <h1>Explorez le monde</h1>
                        <div>
                            {cities.map((elem) => {
                                return (
                                    <LargeCard name={elem.name} slug={elem.slug} source={elem.source}></LargeCard>
                                )
                            })}
                        </div>

                        <div>
                            {cities.map((elem) => {
                                return (
                                    <div>
                                        <Card name={elem.name} slug={elem.slug} source={elem.source}></Card>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Container>

            </div>


        );
    }
}
export default Gallery;
