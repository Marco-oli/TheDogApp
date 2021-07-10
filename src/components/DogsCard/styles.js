import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-bottom: 25px;
`;

export const ContainerButton = styled.TouchableOpacity``;

export const TextName = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.dark};
`;
