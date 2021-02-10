import React, {useEffect, useState} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import api from 'axios';
import {
  Container,
  Title,
  HeaderPage,
  MovieImageContainer,
  MovieImage,
  MovieInfoTitle,
  MovieInfos,
  MovieText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsPage = ({navigation, route}) => {
  const params = route.params;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovieId = async () => {
      const response = await api.get(
        `http://www.omdbapi.com/?apikey=925eba28&i=${params.searchID}`,
      );
      setMovie(response.data);
    };
    getMovieId();
  }, []);

  console.log(movie);
  return (
    <Container>
      <ScrollView>
        <HeaderPage>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" color="#F9D368" size={26} />
          </TouchableOpacity>
        </HeaderPage>

        <MovieImageContainer>
          <MovieImage source={{uri: `${movie.Poster}`}} />
        </MovieImageContainer>

        <MovieInfoTitle>
          <Title>
            {movie.Title} - ({movie.Runtime})
          </Title>
          <Text style={{color: '#F9D368', fontSize: 14, marginVertical: 7}}>
            Ano: {movie.Year}
          </Text>
        </MovieInfoTitle>
        <MovieInfos>
          <MovieText>Gênero: {movie.Genre} </MovieText>
          <MovieText>Descrição: {movie.Plot}</MovieText>
          <MovieText>Lançado em: {movie.Released}</MovieText>
          <MovieText>Atores: {movie.Actors}</MovieText>
          <MovieText>Diretor: {movie.Director}</MovieText>
          <MovieText>Escritor por: {movie.Writer}</MovieText>
          <MovieText>Metascore: {movie.Metascore}</MovieText>
          <MovieText>imdbRating: {movie.imdbRating}</MovieText>
        </MovieInfos>
      </ScrollView>
    </Container>
  );
};

export default DetailsPage;
