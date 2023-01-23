import React from "react";
import { OnboardingNavigationBarContainer, Jump, RightArrow } from "./styles";



export default function NotificationBar(){
    return(
        <OnboardingNavigationBarContainer>
            <Jump>
                Pular
            </Jump>
            <RightArrow source={require('../../../assets/RightArrow.png')} />
        </OnboardingNavigationBarContainer>
    )
}
