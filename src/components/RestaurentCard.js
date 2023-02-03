import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RestaurentCard = ({details}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: details.image_url}} style={styles.image} />
      <Text style={styles.name}>{details.name}</Text>
      <Text>
        {details.rating} star, {details.review_count} reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  container: {
    marginLeft: 15,
    marginBottom: 12,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default RestaurentCard;
