import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import RestaurentCard from './RestaurentCard';

const RestaurentList = ({results, title, navigation}) => {
  if (!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={result => result.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Restaurent', {id: item.id});
              }}>
              <RestaurentCard details={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 8,
  },
});

export default RestaurentList;
