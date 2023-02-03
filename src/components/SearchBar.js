import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({searchInput, onSearchInputChange, onSearchSubmit}) => {
  return (
    <View style={styles.background}>
      <Icon name="ios-search-sharp" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search..."
        autoCapitalize="none"
        autoCorrect={false}
        value={searchInput}
        onChangeText={onSearchInputChange}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 7,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  inputStyle: {
    //borderColor:"black",
    //borderWidth:1,
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;
