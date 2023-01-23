import styled from 'styled-components/native';

export const PageBackground = styled.ImageBackground`
    padding: 0px 30px;
    justify-content: space-around;
    align-items: left;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0; 
`;

export const PageImage = styled.Image`
    align-self: center;

    width: 306.13px;
    height: 216px;
    margin-top: 115px;
`;

export const PageTitle = styled.Text`
    color: black;
    font-size: 27px;
    font-weight: 700;
    margin-top: 43px;

`;

export const PageText = styled.Text`
    font-size: 20px;
    margin: 32px 0;
`;

export const Progress = styled.Image`
    align-self: center;
    width: 117px;
    height: 32px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 43px;

    background: #FFAB09;
    border-radius: 16px;

    width: 136px;
    height: 51px;



`;

export const ButtonContainer = styled.View`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;


`;

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 20px;
`;