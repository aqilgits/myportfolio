import React from 'react'
import { InfoContainer, InfoWrapper, Column1, Column2, Title, Heading, Subtitle, Image, TitleContainer} from './InfoElements'

const Info = ({id, bgColor, img, imgStart, title, heading, subtitle}) => {
    return (
        <InfoContainer id={id} lightBg={bgColor}>
            <InfoWrapper imgStart={imgStart}>
                <Column1>
                    <Image src={img}/>
                </Column1>
                <Column2>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                    <Heading >{heading}</Heading>
                    <Subtitle >{subtitle}</Subtitle>
                </Column2>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
