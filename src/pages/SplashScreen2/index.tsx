import React from 'react';

import Logo from '../../components/Logo';
import LogoTexto from '../../components/LogoTexto';



import { Background, Container, ImageContainer} from './styles';

export default function SplashScreen2() {

    return (
        <Background >
            <Container>
                <Logo />
                <ImageContainer>
                    <LogoTexto />
                </ImageContainer>
            </Container>
        </Background>
    );

};