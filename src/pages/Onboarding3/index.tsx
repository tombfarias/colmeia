import React from 'react';


import { PageBackground, PageImage, PageText, PageTitle, Progress } from './styles';
import OnboardingNavigationBar from '../../components/OnboardingNavigationBar';

export default function Onboarding3() {

    return (
        <PageBackground source={require('../../../assets/OnboardingBackground.png')}>
            <PageImage source={require('../../../assets/Onboarding3Image.png')} />
            <PageTitle>
                Taxas mais baixas para vendedores
            </PageTitle>
            <PageText>
                Valorizamos o trabalho de cada um, e por isso escolhemos as menores tarifas para vendedores. Você pode ofertar qualquer coisa!            
            </PageText>
            <OnboardingNavigationBar/>
            <Progress source={require('../../../assets/Progress3.png')} />            
        </PageBackground>
    );

};