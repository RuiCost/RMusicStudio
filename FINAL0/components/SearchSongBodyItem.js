import React, {useContext} from 'react';
import {View, Text, Alert, StyleSheet, Pressable} from 'react-native';
import AppContext from '../context/AppContext';
import {addLovedSong, fetchTrackInfo} from '../context/Actions';
import EventEmitter from 'react-native-md5';
import {makeHTTPRequest} from '../service/Service';

const SearchSongBodyItem = props => {
  const {item} = props;
  const {dispatch} = useContext(AppContext);
  let hex_md5v = EventEmitter.hex_md5(
    'api_key0ac5e54fc32822e49b9fd312d3c17b3cartist' +
      item.artist +
      'methodtrack.loveskhGankvOil5kHx5wyiTgxeNBZhXqL9BZBtrack' +
      item.name +
      '1024d92308fe7c62875f495771188c2d',
  );
  //console.log('>>>>hex_md5:', hex_md5v);
  const url =
    'https://ws.audioscrobbler.com/2.0/?api_key=0ac5e54fc32822e49b9fd312d3c17b3c&artist=' +
    item.artist +
    '&method=track.love&sk=hGankvOil5kHx5wyiTgxeNBZhXqL9BZB&track=' +
    item.name +
    '&api_sig=' +
    hex_md5v +
    '&format=json';
  const request = {
    method: 'POST',
    redirect: 'follow',
  };

  const handleClick = () =>
    Alert.alert('', 'Give A Like?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: ()=>addLovedSong(url, request, dispatch),
      },
    ]);

  return (
    <View style={styles.container}>
      <Pressable onLongPress={handleClick}>
        <Text style={styles.text} />
        <Text>
          {' '}
          {item.artist} : {item.name}{' '}
        </Text>
        <Text> </Text>
      </Pressable>
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

export default SearchSongBodyItem;
