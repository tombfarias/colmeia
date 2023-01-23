import * as React from 'react';

import OnboardingNavigationBar from '../../components/OnboardingNavigationBar';
import { PageBackground, PageImage, PageText, PageTitle, Progress, Button, ButtonContainer, ButtonText } from './styles';

export default function Onboarding5() {

    return (
        <PageBackground source={require('../../../assets/Onboardingbackground.png')}>
            <PageImage source={require('../../../assets/Onboarding5Image.png')} />
            <PageTitle>
                Tá esperando o quê?
            </PageTitle>
            <PageText>
                Explore agora mesmo os serviços disponíveis na plataforma, ou crie seu anúncio gratuitamente!
            </PageText>
            
            <ButtonContainer>
                <Button>
                    <ButtonText>
                        Login
                    </ButtonText>
                </Button>
            </ButtonContainer>

            <Progress source={require('../../../assets/Progress4.png')} />
        </PageBackground>
    );

};
