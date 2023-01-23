import React from 'react';


import { PageBackground, PageImage, PageText, PageTitle, Progress } from './styles';
import OnboardingNavigationBar from '../../components/OnboardingNavigationBar';

export default function Onboarding4() {

    return (
        <PageBackground source={require('../../../assets/OnboardingBackground.png')}>
            <PageImage source={require('../../../assets/Onboarding4Image.png')} />
            <PageTitle>
                Destaque para iniciantes
            </PageTitle>
            <PageText>
                Está perdido no mercado de trabalho e não sabe por onde começar? Nosso algorítimo de recomendação garante que seu produto receberá a visibilidade que merece.
            </PageText>
            <OnboardingNavigationBar/>
            <Progress source={require('../../../assets/Progress4.png')} />            
        </PageBackground>
    );

};