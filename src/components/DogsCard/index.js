import React from 'react';

import * as S from './styles';

const DogsCard = ({dogName, onPress}) => {
  return (
    <S.Container>
      <S.ContainerButton onPress={onPress}>
        <S.TextName>{dogName}</S.TextName>
      </S.ContainerButton>
    </S.Container>
  );
};

export default DogsCard;
