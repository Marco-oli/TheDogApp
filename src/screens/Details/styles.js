import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerImage = styled.View`
  flex: 0.8;
  elevation: 4px;
`;

export const ImageDog = styled.ImageBackground`
  flex: 1;
  padding-horizontal: ${wp(6)}px;
  padding-top: ${hp(2)}px;
  align-items: flex-start;
`;

export const ContainerButtonBack = styled(ImageDog)``;

export const ButtonBack = styled.TouchableOpacity`
  background-color: #00000030;
  border-radius: 20px;
  padding: 5px;
`;

export const ButtonBackImage = styled.Image`
  width: 26px;
  height: 26px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  margin-top: ${hp(2)}px;
  padding-horizontal: ${wp(6)}px;
`;

export const ContainerNameDog = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.black};
  align-items: center;
`;

export const ContainerDescriptions = styled.View`
  flex: 0.5;
  margin-top: ${hp(1.5)}px;
  justify-content: space-evenly;
`;

export const DescriptionText = styled(Title)`
  font-size: 18px;
`;

export const Text = styled(Title)`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.black};
`;
