import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';

// Components
import DogsCard from '../../components/DogsCard';
import api from '../../services/api';

// Styles and Images
import * as S from './styles';
import {searchIcon} from '../../assets/images';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [dogs, setDogs] = useState([]);
  const [searchDogList, setSearchDogList] = useState([]);

  useEffect(() => {
    api.get('/breeds').then(r => {
      setDogs(r.data.slice(0, 15));
    });
  }, []);

  const searchDogs = useCallback(() => {
    setLoading(true);
    api.get('/breeds/search', {params: {q: `${search}`}}).then(res => {
      setSearchDogList(res.data);
      setLoading(false);
    });
  }, [search]);

  const renderDogs = ({item}) => <DogsCard dogName={item.name} />;

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.WelcomeText>Bem vindo ao App Dog</S.WelcomeText>
        <S.Title>Selecione a raça desejada</S.Title>
      </S.ContainerTitle>

      <S.ContainerInput>
        <S.TextInput
          placeholder="Buscar..."
          value={search}
          onChangeText={e => setSearch(e)}
        />

        <S.ButtonSearch onPress={searchDogs}>
          <S.IconSearch source={searchIcon} />
        </S.ButtonSearch>
      </S.ContainerInput>

      {searchDogList.length > 0 ? (
        <FlatList
          data={searchDogList}
          keyExtractor={item => item.id}
          renderItem={renderDogs}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={dogs}
          keyExtractor={item => item.id}
          renderItem={renderDogs}
          showsVerticalScrollIndicator={false}
        />
      )}
    </S.Container>
  );
};

export default Home;
