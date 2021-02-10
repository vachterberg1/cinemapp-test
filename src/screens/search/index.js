import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from 'axios';

import {
  Container,
  SearchContainer,
  ResultsContainer,
  SearchInput,
  SearchButton,
  ButtonLabel,
  ItemView,
  Poster,
  DescriptionBox,
  Title,
} from './styles';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searching, setSearching] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const navigation = useNavigation();

  useEffect(() => {
    async function getMovieData() {
      try {
        const response = await api.get(
          `http://www.omdbapi.com/?apikey=925eba28&s=${searchText}&page=${page}`,
        );
        const searchResult = response.data.Response ? response.data.Search : [];

        setMovies([...movies, ...searchResult]);

        setSearching(false);
        setPage(page + 1);
        console.log(searchResult);
      } catch (error) {
        setSearching(false);
        console.log('erro');
      }
    }

    if (searching) {
      getMovieData();
    }
  }, [searching, page]);

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          onChangeText={(value) => {
            setSearchText(value);
          }}
        />
        <SearchButton
          onPress={() => {
            setMovies([]);
            setSearching(true);
            setPage(1);
          }}>
          <ButtonLabel>Buscar</ButtonLabel>
        </SearchButton>
      </SearchContainer>
      <ResultsContainer>
        <FlatList
          style={{marginTop: 10}}
          data={movies}
          onEndReached={() => {
            setSearching(true);
          }}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => (
            <ItemView
              onPress={() =>
                navigation.navigate('Details', {
                  searchID: item.imdbID,
                })
              }>
              <Poster source={{uri: item.Poster}} />
              <DescriptionBox>
                <Title>{item.Title}</Title>
                <Text>Ano: {item.Year}</Text>
              </DescriptionBox>
            </ItemView>
          )}
          keyExtractor={(item) => item.imdbID}
        />
      </ResultsContainer>
    </Container>
  );
};

export default Search;
