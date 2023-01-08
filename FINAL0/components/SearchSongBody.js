import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {
  URL_API1,
  URL_API2,
  fetchSongsStarted,
  fetchSongs,
} from '../context/Actions';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import SearchSongBodyItem from './SearchSongBodyItem';

const SearchSongBody = props => {
  const {state, searchSongs, dispatch} = useContext(AppContext);
  const {songs} = state;
  const {query} = props;

  const {loading, error, data} = songs;
  useEffect(() => {
    dispatch(fetchSongsStarted());
    const url = URL_API1 + query + URL_API2;
    const request = {};
    fetchSongs(url, request, dispatch);
  }, [query]);

  if (loading === true) {
    return (
      <View style={styles.item}>
        <Text>Loading ....</Text>
      </View>
    );
  } else {
    if (error !== null) {
      return (
        <View style={styles.item}>
          <Text>Error ....</Text>
        </View>
      );
    } else {
      if (data.length > 0) {
        //console.log('datanome:' + JSON.stringify(data));
        return (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <SearchSongBodyItem item={item} data={data} />
            )}
          />
        );
      } else {
        return (
          <View style={styles.item}>
            <Text>No data ....</Text>
          </View>
        );
      }
    }
  }
};
const styles = StyleSheet.create({
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
});

export default SearchSongBody;
