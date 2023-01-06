import React, {useContext} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import AppContext from '../context/AppContext';

const SearchSongHeader = () => {
  const {state, song_labels, dispatch} = useContext(AppContext);

  function submitStuff(input) {
    song_labels.search = input;
    return undefined;
  }

  function requestStuff() {
    song_labels.count = song_labels.count + 1;
    return undefined;
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={text => submitStuff(text)}
      />
      <Button title="Search" onPress={() => requestStuff()}  />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});

export default SearchSongHeader;
