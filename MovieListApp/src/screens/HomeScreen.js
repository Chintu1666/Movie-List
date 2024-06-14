import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const fetchMovies = async ({pageParam = 1}) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=663d1a123dadceecb74e278f357e07a9&page=${pageParam}`,
  );
  return response.data;
};

const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const {data, isLoading, refetch, fetchNextPage} = useQuery(
    ['movies', page],
    () => fetchMovies(page),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => lastPage.page + 1,
    },
  );

  const filteredMovies = data?.results.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {movie: item})}>
            <View style={styles.movieItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.releaseYear}>
                {item.release_date.split('-')[0]}
              </Text>
              <Text style={styles.description}>{item.overview}</Text>
            </View>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  movieItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  releaseYear: {
    fontSize: 16,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
