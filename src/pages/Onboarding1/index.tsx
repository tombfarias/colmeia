import React from 'react';


import { PageBackground, PageImage, PageText, PageTitle, Progress } from './styles';
import OnboardingNavigationBar from '../../components/OnboardingNavigationBar';

export default function Onboarding1() {

    return (
        <PageBackground source={require('../../../assets/OnboardingBackground.png')}>
            <PageImage source={require('../../../assets/Onboarding1Image.png')} />
            <PageTitle>
                Bem-vindo ao Colmeia!
            </PageTitle>
            <PageText>
                Aqui, é possível vender e comprar serviços autônomos de maneira fácil e automática. Você pode personalizar seu pedido e encontrar a melhor solução para seu negócio.
            </PageText>
            <OnboardingNavigationBar/>
            <Progress source={require('../../../assets/Progress1.png')} />            
        </PageBackground>
    );

};