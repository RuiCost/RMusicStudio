import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Component, useContext, useEffect} from 'react';
import SongList from './SongList';
import AppContext from '../context/AppContext';
import {AsyncStorage} from 'react-native';

const SavedSongsWithPosition = () => {
  const {state, getBinID, dispatch} = useContext(AppContext);
  const {songs} = state;
  const {data} = songs;

  return (
    <View>
      <SongList listOfItems={getBinID} />
    </View>
  );
};

export default SavedSongsWithPosition;
