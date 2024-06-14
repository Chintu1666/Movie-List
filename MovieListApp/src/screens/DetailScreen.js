import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreen = ({route}) => {
  const {movie} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.releaseYear}>
        Release Year: {movie.release_date.split('-')[0]}
      </Text>
      <Text style={styles.description}>{movie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  releaseYear: {
    fontSize: 20,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});

export default DetailScreen;
