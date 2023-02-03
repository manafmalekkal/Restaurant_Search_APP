import React from 'react';
import {View} from 'react-native';
// import {Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurentList from '../components/RestaurentList';
import {useState, useEffect} from 'react';
// import instance from '../api/link';
import axios from 'axios';

const HomeScreen = () => {
  const [apiData, setApiData] = useState([]);
  // const [err, setErr] = useState('');
  const [input, setInput] = useState();

  const fetchSearchApi = async searchterm => {
    try {
      const responses = await axios.get(
        'https://api.yelp.com/v3/businesses/search',
        {
          headers: {
            Authorization:
              'Bearer 1puzPclG5hSeb-5Bw58yA_d2YrLosNtTaM3u835mS5QSb0M6S23BJGb-PNAzd6o7IkbzkowwM-lWiuxBf7fthCoY3V4arq2arByDaiVSWNP9ZyN5hN9MSDw62fPYY3Yx',
          },
          params: {
            limit: 50,
            location: 'New York City',
            term: searchterm,
          },
        },
      );
      setApiData(responses.data.businesses);
      console.log(responses.data);
    } catch (errors) {
      // setErr('something went wrong');
      console.log(errors);
    }
  };
  useEffect(() => {
    fetchSearchApi('food');
  }, []);

  const filterApiDataByPrice = price => {
    return apiData?.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        searchInput={input}
        onSearchInputChange={inp => setInput(inp)}
        onSearchSubmit={() => {
          fetchSearchApi(input);
        }}
      />
      {/* {err ? <Text>{err}</Text> : null} */}
      <RestaurentList
        results={filterApiDataByPrice('$')}
        title="Cost-Effective"
      />
      <RestaurentList
        results={filterApiDataByPrice('$$')}
        title="Bit Pricier"
      />
      <RestaurentList
        results={filterApiDataByPrice('$$$')}
        title="Big Spender"
      />
    </View>
  );
};
export default HomeScreen;
