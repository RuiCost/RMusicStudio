import React, {Component, useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemSong from './ItemSong';
import AppContext from '../context/AppContext';

const SongList = () => {
  const {state, getBinID, dispatch} = useContext(AppContext);
  return (
    <FlatList
      data={getBinID}
      renderItem={({item}) => <ItemSong item={item} />}
    />
  );
};

export default SongList;
