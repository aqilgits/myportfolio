import React from 'react'
import { HomeContainer, HomeWrapper, Title, Description, HomeItem } from './HomeElements'

const Home = () => {
    return (
        <HomeContainer id='home'>
            <HomeWrapper>
                <HomeItem>
                    <Title>
                        MUHAMMAD LUKMAN AQIL BIN MOHAMED LAILE
                    </Title>
                </HomeItem>
                <HomeItem>
                    <Description>
                        SOFTWARE ENGINEERING STUDENT
                    </Description>
                </HomeItem>
                {/* <Button /> */}
            </HomeWrapper>
            
        </HomeContainer>
    )
}

export default Home
