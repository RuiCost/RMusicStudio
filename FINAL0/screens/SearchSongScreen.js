import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import SearchSongBody from '../components/SearchSongBody';
import SearchSongHeader from '../components/SearchSongHeader';

const SearchSongScreen = () => {
  const [query, setQuery] = useState(' ');
  const a = 0;
  console.log(query);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onSubmitEditing={text => setQuery(text.nativeEvent.text)}
        />
      </SafeAreaView>
      <SearchSongBody query={query} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});

export default SearchSongScreen;
