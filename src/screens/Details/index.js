import React from 'react';

import * as S from './styles';
import {backArrowIcon} from '../../assets/images';

const Details = ({navigation, route}) => {
  const {detailDog} = route.params || false;

  return (
    <S.Container>
      {!detailDog.image ? (
        <S.ContainerButtonBack>
          <S.ButtonBack onPress={() => navigation.goBack()}>
            <S.ButtonBackImage source={backArrowIcon} tintColor="#fff" />
          </S.ButtonBack>
        </S.ContainerButtonBack>
      ) : (
        <S.ContainerImage>
          <S.ImageDog source={{uri: detailDog.image.url}}>
            <S.ButtonBack onPress={() => navigation.goBack()}>
              <S.ButtonBackImage source={backArrowIcon} tintColor="#fff" />
            </S.ButtonBack>
          </S.ImageDog>
        </S.ContainerImage>
      )}

      <S.ContainerInfo>
        <S.ContainerNameDog>
          <S.Title>{detailDog.name}</S.Title>
        </S.ContainerNameDog>

        <S.ContainerDescriptions>
          {detailDog.origin ||
            (detailDog.country_code && (
              <S.DescriptionText>
                Origem:{' '}
                <S.Text>{detailDog.origin || detailDog.country_code}</S.Text>
              </S.DescriptionText>
            ))}

          <S.DescriptionText>
            Altura: <S.Text>{detailDog.height.imperial}</S.Text>
          </S.DescriptionText>

          <S.DescriptionText>
            Peso: <S.Text>{detailDog.weight.imperial}</S.Text>
          </S.DescriptionText>

          <S.DescriptionText>
            Tempo de vida: <S.Text>{detailDog.life_span}</S.Text>
          </S.DescriptionText>

          <S.DescriptionText>
            Temperamento: <S.Text>{detailDog.temperament}</S.Text>
          </S.DescriptionText>
        </S.ContainerDescriptions>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default Details;
