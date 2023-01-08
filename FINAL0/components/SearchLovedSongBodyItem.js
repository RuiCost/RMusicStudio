import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import AppContext from '../context/AppContext';
import {removeLovedSong, fetchTrackInfo} from '../context/Actions';
import EventEmitter from 'react-native-md5';
const SearchLovedSongBodyItem = props => {
  const {item} = props;
  const {dispatch} = useContext(AppContext);

  let hex_md5v = EventEmitter.hex_md5(
    'api_key0ac5e54fc32822e49b9fd312d3c17b3cartist' +
      item.artist.name +
      'methodtrack.unloveskhGankvOil5kHx5wyiTgxeNBZhXqL9BZBtrack' +
      item.name +
      '1024d92308fe7c62875f495771188c2d',
  );
  //console.log('>>>>hex_md5:', hex_md5v);
  const url =
    'https://ws.audioscrobbler.com/2.0/?api_key=0ac5e54fc32822e49b9fd312d3c17b3c&artist=' +
    item.artist.name +
    '&method=track.unlove&sk=hGankvOil5kHx5wyiTgxeNBZhXqL9BZB&track=' +
    item.name +
    '&api_sig=' +
    hex_md5v +
    '&format=json';
  const request = {
    method: 'POST',
    redirect: 'follow',
  };

  /*
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
*/
  const handle = () =>
    Alert.alert('', 'Remove?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress:()=> removeLovedSong(url, request, dispatch),
      },
    ]);
  return (
    <View style={styles.container}>
      <Pressable onLongPress={handle}>
        <Text style={styles.text} />
        <Text>
          {' '}
          {item.artist.name} : {item.name}{' '}
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

export default SearchLovedSongBodyItem;
