import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import instance from '../api/link';

const RestaurentScreen = ({navigation}) => {
  const [restaurentDetails, setRestaurentDetails] = useState();

  const id = navigation.getParam('id');

  const getRstaurentDetails = async () => {
    const response = await instance.get(`/${id}`);
    setRestaurentDetails(response.data);
  };

  useEffect(() => {
    getRstaurentDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>Restaurent Details</Text>
      <FlatList
        data={restaurentDetails}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return (
            <View>
              <Image style={styles.image} source={{uri: item.photos}} />
              <Text>Restaurent Name: {item.name}</Text>
              <Text>Contact: {item.phone}</Text>
              <Text>
                Address:{' '}
                {`${item.address1},${item.city},${item.state},${item.country}`}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
export default RestaurentScreen;
