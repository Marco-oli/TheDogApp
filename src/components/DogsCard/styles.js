import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 25px;
`;

export const ContainerButton = styled.TouchableOpacity``;

export const TextName = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.dark};
`;
