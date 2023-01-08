import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {View, Text, Alert, StyleSheet, Pressable, FlatList} from 'react-native';
import {
  URL_API3,
  fetchSongsLovedStarted,
  fetchSongsLoved,
} from '../context/Actions';
//import {FlatList, View, Text, StyleSheet} from 'react-native';
import SearchLovedSongBodyItem from './SearchLovedSongBodyItem';

const SearchLovedSongBody = props => {
  const {state, searchSongs, dispatch} = useContext(AppContext);
  const {songsloved} = state;
  const {loading, error, data} = songsloved;
  useEffect(() => {
    dispatch(fetchSongsLovedStarted());
    const url = URL_API3;
    const request = {};
    fetchSongsLoved(url, request, dispatch);
  }, []);

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
      //eliminar até data e por de novokl
      if (data.lovedtracks.track.length > 0) {
        return (
          <FlatList
            data={data.lovedtracks.track}
            renderItem={({item}) => <SearchLovedSongBodyItem item={item} />}
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

export default SearchLovedSongBody;
