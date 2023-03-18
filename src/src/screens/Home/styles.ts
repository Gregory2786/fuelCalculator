
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import{MaterialIcons} from '@expo/vector-icons';

export const Container = styled.View`
      flex: 1;
      background-color: ${({theme}) =>theme.colors.background};
      `;

export const Header = styled.View` 
  width: 100%;
  height: ${RFPercentage(38)}px;
  background-color: ${({theme}) =>theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.headerText};
  font-size: ${RFValue(40)}px;
`;

export const HeaderTextWrapper = styled.View`
  margin-left: ${RFValue(5)}px;
`;

export const Greeting = styled.Text`
  color: ${({theme}) => theme.colors.headerText};;
  font-family: ${({theme}) => theme.fonts.pMedium};
  font-size: ${RFValue(15)}px ;
  line-height: ${RFValue(20)}px;
  `;

export const CarPlate = styled.Text`
  color: ${({theme}) => theme.colors.headerText};;
  font-family: ${({theme}) => theme.fonts.pMedium};
  font-size: ${RFValue(15)}px ;
  line-height: ${RFValue(20)}px;
  
  `;

export const LogoutButton = styled.View``;

export const LogoutIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.headerText};
  font-size: 9%;
`;
