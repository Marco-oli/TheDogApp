import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-horizontal: ${wp(6)}px;
  padding-vertical: ${hp(2)}px;
`;

export const ContainerTitle = styled.View``;

export const WelcomeText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.greyPrimary};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.black};
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: ${hp(3)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding-vertical: 4px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.black};
`;

export const ButtonSearch = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

export const IconSearch = styled.Image`
  width: 24px;
  height: 24px;
`;
