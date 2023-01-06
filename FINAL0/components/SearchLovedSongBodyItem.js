import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppContext from '../context/AppContext';
import {fetchTrackInfo} from '../context/Actions';
const SearchLovedSongBodyItem = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text} />
        <Text>
          {' '}
          {item.artist.name} : {item.name}{' '}
        </Text>
        <Text> </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flux: 1,
    padding: 5,
    alignItems: 'center',
  },
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  logo: {
    width: 250,
    height: 250,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'monospace',
    color: 'black',
    fontStyle: 'bold',
  },
});

export default SearchLovedSongBodyItem;
