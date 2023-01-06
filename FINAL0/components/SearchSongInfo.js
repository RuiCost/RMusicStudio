import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import AppContext from '../context/AppContext';
import {fetchTrackInfo, fetchTrackInfoStarted} from '../context/Actions';

const SearchSongInfo = props => {
  const {state, dispatch} = useContext(AppContext);
  const {trackinfo} = state;
  const {loading, error, list} = trackinfo;
  const {item} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>
          {item.artist} - {item.name}{' '}
        </Text>
        <Text> </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 10,
  },
  item: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
export default SearchSongInfo;
