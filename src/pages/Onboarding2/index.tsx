import React from 'react';


import { PageBackground, PageImage, PageText, PageTitle, Progress } from './styles';
import OnboardingNavigationBar from '../../components/OnboardingNavigationBar';

export default function Onboarding2() {

    return (
        <PageBackground source={require('../../../assets/OnboardingBackground.png')}>
            <PageImage source={require('../../../assets/Onboarding2Image.png')} />
            <PageTitle>
                Sistema de garantia seguro
            </PageTitle>
            <PageText>
                Simples-serviço concluido ou seu dinheiro de volta. A segurança é um fator importante para nós, e nosso sistema de suporte está disponível para assistência
            </PageText>
            <OnboardingNavigationBar/>
            <Progress source={require('../../../assets/Progress2.png')} />            
        </PageBackground>
    );

};